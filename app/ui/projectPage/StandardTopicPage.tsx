import ProjectLayout from "./ProjectLayout";
import MainContentArea from "./MainContentArea";
import { getTopicData } from "./subtopicData";

interface StandardTopicPageProps {
  projectId: string;
  topicId: string;
}

/**
 * StandardTopicPage provides a consistent pattern for creating topic pages
 * by integrating ProjectLayout and MainContentArea with topic-specific data
 */
export default function StandardTopicPage({
  projectId,
  topicId,
}: StandardTopicPageProps) {
  // Get topic data
  const topicData = getTopicData(topicId);

  return (
    <ProjectLayout projectId={projectId}>
      <MainContentArea
        topicTitle={topicData.title}
        topicDescription={topicData.description}
        summaryData={topicData.summaryData}
        subtopics={topicData.subtopics}
        summaryTitle={topicData.summaryTitle}
        projectId={projectId}
      />
    </ProjectLayout>
  );
}
