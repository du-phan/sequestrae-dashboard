import { Suspense } from "react";
import ProjectLayout from "./ProjectLayout";
import MainContentArea from "./MainContentArea";
import { getProjectAggregated } from "@/lib/project/api";
import { mapProjectToTopicData } from "@/lib/project/mappers";
import { ErrorBoundary } from "react-error-boundary";
import ErrorDisplay from "@/app/ui/common/ErrorDisplay";
import LoadingState from "@/app/ui/common/LoadingState";
import { TopicData, SubTopic, RiskFactor } from "../../../types/ui"; // Updated import

interface StandardTopicPageProps {
  projectId: string;
  topicId: string;
}

// Convert subtopics and risk factors to sidebar-friendly format
function mapSubtopicsToSidebar(topicData: TopicData): SubTopic[] {
  return topicData.subtopics.map((subtopic) => {
    // Create sidebar risk factors from component risk factors
    const sidebarRiskFactors: RiskFactor[] = subtopic.riskFactors.map(
      (factor) => ({
        id: String(factor.id),
        name: factor.name,
        href: `#${factor.id}`, // Create anchor links for risk factors
      })
    );

    return {
      id: String(subtopic.id),
      name: subtopic.title,
      href: `#${subtopic.id}`, // Create anchor links for subtopics
      riskFactors:
        sidebarRiskFactors.length > 0 ? sidebarRiskFactors : undefined,
    };
  });
}

async function TopicContent({ projectId, topicId }: StandardTopicPageProps) {
  // Fetch project data from API
  const projectData = await getProjectAggregated(projectId);

  if (!projectData) {
    throw new Error("Project data not found");
  }

  // Map the project data to the format expected by UI components
  const topicData = mapProjectToTopicData(projectData, topicId);
  return (
    <MainContentArea
      topicTitle={topicData.topicTitle}
      topicDescription={topicData.topicDescription}
      subtopics={topicData.subtopics}
      topicSummary={topicData.topicSummary || "No summary available."}
      summaryTitle={topicData.summaryTitle}
      projectId={projectId}
    />
  );
}

/**
 * StandardTopicPage provides a consistent pattern for creating topic pages
 * by integrating ProjectLayout and MainContentArea with topic-specific data
 * Updated with improved error handling patterns
 */
export default async function StandardTopicPage({
  projectId,
  topicId,
}: StandardTopicPageProps) {
  // Pre-fetch data for both main content and sidebar
  const projectData = await getProjectAggregated(projectId);

  if (!projectData) {
    throw new Error("Project data not found");
  }

  // Map project data to topic format
  const topicData = mapProjectToTopicData(projectData, topicId);

  // Map subtopics and factors to sidebar format
  const sidebarSubtopics = mapSubtopicsToSidebar(topicData);

  // Use project_name from the Project interface instead of name
  const projectName = projectData.project_name;

  // Get the project URL from the project data for buying carbon credits
  const projectUrl = projectData.project_url;

  return (
    <ProjectLayout
      projectId={projectId}
      projectName={projectName}
      projectUrl={projectUrl ?? undefined} // Convert null to undefined
      subtopics={sidebarSubtopics}
      currentTopic={topicId}
    >
      <ErrorBoundary
        fallback={<ErrorDisplay message={`Failed to load ${topicId} data`} />}
      >
        <Suspense
          fallback={<LoadingState message={`Loading ${topicId} data...`} />}
        >
          <TopicContent projectId={projectId} topicId={topicId} />
        </Suspense>
      </ErrorBoundary>
    </ProjectLayout>
  );
}
