import { Project } from "../../types/api";
import { TopicData as UITopicData } from "../../types/ui";
import { mapSubtopicToUI } from "../mappers/typeMappers";

/**
 * Maps project data to the format required by the topic UI components
 * @param project The complete project data from the API
 * @param topicId The topic to map (e.g., "delivery", "integrity")
 * @returns Formatted topic data ready for UI components
 */
export function mapProjectToTopicData(
  project: Project,
  topicId: string
): UITopicData {
  // Select the appropriate mapping function based on the topic
  switch (topicId) {
    case "delivery":
      return mapProjectToDeliveryData(project);
    case "integrity":
      // Add other mappers as they're implemented
      return mapProjectToIntegrityData(project);
    default:
      // Default empty structure for unsupported topics
      return {
        topicTitle: "Topic Information",
        topicDescription:
          "Detailed information for this topic is not available.",
        topicSummary: "",
        subtopics: [],
        summaryTitle: "Topic Summary",
        projectId: project.project_id,
      };
  }
}

/**
 * Maps project data to the delivery risk topic format based on the new Project interface
 * @param project The complete project data from the database
 * @returns Formatted delivery risk data ready for UI components
 */
export function mapProjectToDeliveryData(project: Project): UITopicData {
  // Default structure for when data is missing
  const defaultData: UITopicData = {
    topicTitle: "Delivery Risk",
    topicDescription:
      "This section evaluates supply chain and equipment factors that could affect project implementation and carbon credit delivery.",
    topicSummary: "",
    subtopics: [],
    summaryTitle: "What you need to know",
    projectId: project.project_id,
  };

  try {
    // Find the topic summary for delivery
    const topicSummary = project.topic_summaries.find(
      (summary) => summary.topic.toLowerCase() === "delivery risk"
    );

    if (!topicSummary) {
      return defaultData;
    }

    // Get delivery-related subtopics
    const deliverySubtopics = project.subtopics.filter(
      (subtopic) =>
        subtopic.subtopic_summary.topic.toLowerCase() === "delivery risk"
    );

    if (deliverySubtopics.length === 0) {
      return defaultData;
    }

    // Use the dedicated mapper function to transform subtopics
    const subtopics = deliverySubtopics.map(mapSubtopicToUI);

    return {
      topicTitle: topicSummary.topic || defaultData.topicTitle,
      topicDescription:
        topicSummary.topic_introduction || defaultData.topicDescription,
      topicSummary: topicSummary.topic_summary,
      subtopics,
      summaryTitle: "What you need to know",
      projectId: project.project_id,
    };
  } catch (error) {
    console.error("Error mapping project to delivery data:", error);
    return defaultData;
  }
}

/**
 * Maps project data to the integrity topic format
 * This is a placeholder for future implementation
 */
export function mapProjectToIntegrityData(project: Project): UITopicData {
  // Implement similar to mapProjectToDeliveryData but for integrity data
  return {
    topicTitle: "Carbon Accounting & Integrity",
    topicDescription:
      "Information about carbon accounting and integrity is not yet available.",
    topicSummary: "",
    subtopics: [],
    summaryTitle: "Carbon Accounting & Integrity Summary",
    projectId: project.project_id,
  };
}

/**
 * Helper function to map string arrays to summary item objects
 */
function mapStringArrayToSummaryItems(
  items: string[]
): { id: string; text: string }[] {
  return items.map((text, index) => ({
    id: `item-${index}`,
    text,
  }));
}
