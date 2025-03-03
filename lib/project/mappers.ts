import {
  Project,
  RiskFactorPoint,
  ComponentRiskFactor,
  TopicData as ProjectTopicData,
  SummaryItem,
  SubtopicData as ProjectSubtopicData,
} from "../../types/project";
import { RiskFactor } from "@/app/ui/projectPage/RiskFactorCard";

// Remove duplicate interface declarations since we're importing them from project.ts

/**
 * Maps project data to the format required by the topic UI components
 * @param project The complete project data from the API
 * @param topicId The topic to map (e.g., "delivery", "integrity")
 * @returns Formatted topic data ready for UI components
 */
export function mapProjectToTopicData(
  project: Project,
  topicId: string
): ProjectTopicData {
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
        summaryData: {},
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
export function mapProjectToDeliveryData(project: Project): ProjectTopicData {
  // Default structure for when data is missing
  const defaultData: ProjectTopicData = {
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

    // Sort points by priority if available (would need to adjust if point has priority field)
    const sortByPriority = (items: SummaryItem[]) => {
      return [...items];
    };

    console.log("deliverySubtopics", deliverySubtopics);
    // Map delivery subtopics to the UI format
    const subtopics: ProjectSubtopicData[] = deliverySubtopics.map(
      (subtopic) => {
        // Map risk factors for this subtopic
        const riskFactors = subtopic.riskFactors.map((rf) => {
          // Determine the type of the risk factor
          const riskFactorType = determineRiskFactorType(rf.points);

          // Map points to component-friendly format
          const points = rf.points.map((point) => ({
            id: point.risk_factor_point_id,
            text: point.explanation,
            type: point.point_type,
          }));

          return {
            id: rf.risk_factor_id,
            name: rf.risk_factor_name,
            type: riskFactorType,
            points: points,
          };
        });

        return {
          id: subtopic.subtopic_summary.subtopic_summary_id,
          title: subtopic.subtopic_summary.sub_topic,
          summary: subtopic.subtopic_summary.overall_summary,
          riskFactors,
        };
      }
    );

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
export function mapProjectToIntegrityData(project: Project): ProjectTopicData {
  // Implement similar to mapProjectToDeliveryData but for integrity data
  return {
    topicTitle: "Carbon Accounting & Integrity",
    topicDescription:
      "Information about carbon accounting and integrity is not yet available.",
    topicSummary: "", // Fixed property name from summaryData to topicSummaryContent
    subtopics: [],
    summaryTitle: "Carbon Accounting & Integrity Summary",
    projectId: project.project_id,
  };
}

/**
 * Helper function to map string arrays to summary item objects
 */
function mapStringArrayToSummaryItems(items: string[]): SummaryItem[] {
  return items.map((text, index) => ({
    id: `item-${index}`,
    text,
  }));
}

/**
 * Helper function to map API risk factor format to UI component format
 */
function mapRiskFactors(apiRiskFactors: any[]): RiskFactor[] {
  return apiRiskFactors.map((factor, index) => ({
    id: factor.id || `risk-${index}`,
    title: factor.title || "Untitled Risk Factor",
    main_idea: factor.main_idea || "No main idea provided",
    explanation: factor.explanation || "No detailed explanation available",
    strengths: mapStringArrayToSummaryItems(factor.strengths || []),
    considerations: mapStringArrayToSummaryItems(factor.considerations || []),
    recommended_actions: mapStringArrayToSummaryItems(
      factor.recommended_actions || []
    ),
  }));
}

/**
 * Determines the primary type of a risk factor based on its points
 * @param points Array of risk factor points
 * @returns The dominant point type or 'mixed'
 */
function determineRiskFactorType(points: RiskFactorPoint[]): string {
  // Count occurrences of each point type
  const typeCounts = points.reduce((acc, point) => {
    acc[point.point_type] = (acc[point.point_type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Find the most common type
  let maxType = "mixed";
  let maxCount = 0;

  for (const [type, count] of Object.entries(typeCounts)) {
    if (count > maxCount) {
      maxCount = count;
      maxType = type;
    }
  }

  // Convert plural point_type to singular for UI representation
  if (maxType === "strengths") return "strength";
  if (maxType === "considerations") return "consideration";
  if (maxType === "recommended_actions") return "recommended_action";

  return maxType;
}
