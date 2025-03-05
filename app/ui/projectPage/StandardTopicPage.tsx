import { Suspense } from "react";
import ProjectLayout from "./ProjectLayout";
import MainContentArea from "./MainContentArea";
import { getProjectAggregated } from "@/lib/project/api";
import { mapProjectToTopicData } from "@/lib/project/mappers";
import { ErrorBoundary } from "react-error-boundary";
import ErrorDisplay from "@/app/ui/common/ErrorDisplay";
import LoadingState from "@/app/ui/common/LoadingState";
import { TopicData, SubTopic } from "../../../types/ui";

interface StandardTopicPageProps {
  projectId: string;
  topicId: string;
}

// Convert subtopics to sidebar-friendly format
function mapSubtopicsToSidebar(topicData: TopicData): SubTopic[] {
  return topicData.subtopics.map((subtopic) => ({
    id: String(subtopic.id),
    name: subtopic.title,
    href: `#${subtopic.id}`, // Create anchor links
  }));
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

  // Map subtopics to sidebar format
  const sidebarSubtopics = mapSubtopicsToSidebar(topicData);

  return (
    <ProjectLayout
      projectId={projectId}
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
