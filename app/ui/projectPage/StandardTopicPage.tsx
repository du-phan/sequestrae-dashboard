import { Suspense } from "react";
import ProjectLayout from "./ProjectLayout";
import MainContentArea from "./MainContentArea";
import { getProjectAggregated } from "@/lib/project/api";
import { mapProjectToTopicData } from "@/lib/project/mappers";
import { ErrorBoundary } from "react-error-boundary";
import ErrorDisplay from "@/app/ui/common/ErrorDisplay";
import LoadingState from "@/app/ui/common/LoadingState";
import { TopicData } from "../../../types/project";

interface StandardTopicPageProps {
  projectId: string;
  topicId: string;
}

async function TopicContent({ projectId, topicId }: StandardTopicPageProps) {
  // Fetch project data from API
  const projectData = await getProjectAggregated(projectId);

  if (!projectData) {
    throw new Error("Project data not found");
  }

  // Map the project data to the format expected by UI components
  const topicData = mapProjectToTopicData(projectData, topicId);
  console.log("topicData", topicData);
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
export default function StandardTopicPage({
  projectId,
  topicId,
}: StandardTopicPageProps) {
  return (
    <ProjectLayout projectId={projectId}>
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
