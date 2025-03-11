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
      return mapProjectToIntegrityData(project);
    case "environment":
      return mapProjectToEnvironmentData(project);
    case "policy":
      return mapProjectToPolicyData(project);
    case "social":
      return mapProjectToSocialData(project);
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
 * Generic function to map project data to a topic format
 * @param project The complete project data from the database
 * @param topicSummaryIdentifier The lowercase identifier for finding the topic summary
 * @param subtopicIdentifier The lowercase identifier for filtering subtopics
 * @param defaultData Default values to use if data is missing
 * @returns Formatted topic data ready for UI components
 */
function mapProjectToGenericTopicData(
  project: Project,
  topicSummaryIdentifier: string,
  subtopicIdentifier: string,
  defaultData: UITopicData
): UITopicData {
  try {
    // Find the topic summary for the specified topic
    const topicSummary = project.topic_summaries.find(
      (summary) =>
        summary.topic.toLowerCase() === topicSummaryIdentifier.toLowerCase()
    );

    if (!topicSummary) {
      return defaultData;
    }

    // Get topic-related subtopics
    const topicSubtopics = project.subtopics.filter(
      (subtopic) =>
        subtopic.subtopic_summary.topic.toLowerCase() ===
        subtopicIdentifier.toLowerCase()
    );

    if (topicSubtopics.length === 0) {
      return defaultData;
    }

    // Use the dedicated mapper function to transform subtopics
    const subtopics = topicSubtopics.map(mapSubtopicToUI);

    return {
      topicTitle: topicSummary.topic || defaultData.topicTitle,
      topicDescription:
        topicSummary.topic_introduction || defaultData.topicDescription,
      topicSummary: topicSummary.topic_summary,
      subtopics,
      summaryTitle: defaultData.summaryTitle,
      projectId: project.project_id,
    };
  } catch (error) {
    console.error(`Error mapping project topic data:`, error);
    return defaultData;
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

  return mapProjectToGenericTopicData(
    project,
    "delivery risk",
    "delivery risk",
    defaultData
  );
}

/**
 * Maps project data to the integrity topic format
 * @param project The complete project data from the database
 * @returns Formatted integrity data ready for UI components
 */
export function mapProjectToIntegrityData(project: Project): UITopicData {
  // Default structure for when data is missing
  const defaultData: UITopicData = {
    topicTitle: "Carbon Accounting & Integrity",
    topicDescription:
      "This section evaluates the climate science, carbon accounting methodologies, and integrity factors related to this carbon project.",
    topicSummary: "",
    subtopics: [],
    summaryTitle: "What you need to know",
    projectId: project.project_id,
  };

  return mapProjectToGenericTopicData(
    project,
    "carbon accounting & integrity",
    "climate science",
    defaultData
  );
}

/**
 * Maps project data to the environment topic format
 * @param project The complete project data from the database
 * @returns Formatted environment data ready for UI components
 */
export function mapProjectToEnvironmentData(project: Project): UITopicData {
  // Default structure for when data is missing
  const defaultData: UITopicData = {
    topicTitle: "Environmental Factors",
    topicDescription:
      "This section evaluates the environmental impacts and considerations related to this carbon project.",
    topicSummary: "",
    subtopics: [],
    summaryTitle: "What you need to know",
    projectId: project.project_id,
  };

  return mapProjectToGenericTopicData(
    project,
    "environmental factors",
    "environmental factors",
    defaultData
  );
}

/**
 * Maps project data to the policy topic format
 * @param project The complete project data from the database
 * @returns Formatted policy data ready for UI components
 */
export function mapProjectToPolicyData(project: Project): UITopicData {
  // Default structure for when data is missing
  const defaultData: UITopicData = {
    topicTitle: "Policy & Regulatory Landscape",
    topicDescription:
      "This section covers the policy landscape, regulatory considerations, and governance factors that may impact this carbon project.",
    topicSummary: "",
    subtopics: [],
    summaryTitle: "What you need to know",
    projectId: project.project_id,
  };

  return mapProjectToGenericTopicData(project, "policy", "policy", defaultData);
}

/**
 * Maps project data to the social impact topic format
 * @param project The complete project data from the database
 * @returns Formatted social impact data ready for UI components
 */
export function mapProjectToSocialData(project: Project): UITopicData {
  // Default structure for when data is missing
  const defaultData: UITopicData = {
    topicTitle: "Social Impact",
    topicDescription:
      "This section examines the social implications, community engagement, and human factors related to this carbon project.",
    topicSummary: "",
    subtopics: [],
    summaryTitle: "What you need to know",
    projectId: project.project_id,
  };

  return mapProjectToGenericTopicData(
    project,
    "social impact",
    "social impact",
    defaultData
  );
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

/**
 * Helper function to capitalize the first letter of a string
 */
function capitalizeFirstLetter(string: string): string {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Maps project data to the format required for the project background section
 * @param project The complete project data from the API
 * @returns Formatted project background data ready for UI components
 */
export function mapProjectToBackgroundData(project: Project) {
  return {
    name: project.project_name || "Untitled Project",
    description: project.project_description || "No description available.",
    location: project.location || project.country || "Location not specified",
    startDate:
      project.start_date ||
      project.project_start_period ||
      "Date not specified",
    feedstockType: Array.isArray(project.feedstock_type)
      ? project.feedstock_type.map(capitalizeFirstLetter).join(", ")
      : capitalizeFirstLetter(project.feedstock_type || "Not specified"),
    stakeholders: Array.isArray(project.key_stakeholders)
      ? project.key_stakeholders
      : project.key_stakeholders
      ? [project.key_stakeholders]
      : ["No stakeholders specified"],
  };
}
