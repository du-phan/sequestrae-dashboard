import {
  RiskFactorPointDB,
  RiskFactor,
  Subtopic,
  Project,
} from "../../types/api";

import {
  RiskFactorPoint,
  ComponentRiskFactor,
  SubtopicData,
  TopicData,
} from "../../types/ui";

/**
 * Converts API risk factor points to UI-friendly format
 * @param point The risk factor point from the API
 * @returns UI-friendly risk factor point
 */
export function mapRiskFactorPointToUI(
  point: RiskFactorPointDB
): RiskFactorPoint {
  return {
    id: parseInt(point.risk_factor_point_id) || Math.random(), // Convert to number or use random ID as fallback
    text: point.explanation || point.main_idea || "No details provided", // Use explanation or fall back to main idea
    type: point.point_type, // Preserve the point type for UI display
  };
}

/**
 * Transforms API risk factors to UI component format
 * @param riskFactor The risk factor from the API
 * @returns UI-friendly risk factor
 */
export function mapRiskFactorToUI(riskFactor: RiskFactor): ComponentRiskFactor {
  // Map all points to UI format
  const points = riskFactor.points.map(mapRiskFactorPointToUI);

  // Determine the overall risk factor type
  const type = determineRiskFactorType(riskFactor.points);

  return {
    id: parseInt(riskFactor.risk_factor_id) || Math.random(), // Convert to number or use random ID
    name: riskFactor.risk_factor_name || "Unnamed Risk Factor",
    type,
    points,
  };
}

/**
 * Creates UI-ready subtopic data from API subtopic
 * @param subtopic The subtopic from the API
 * @returns UI-ready subtopic data
 */
export function mapSubtopicToUI(subtopic: Subtopic): SubtopicData {
  return {
    id:
      subtopic.subtopic_summary.subtopic_summary_id || Math.random().toString(),
    title: subtopic.subtopic_summary.sub_topic || "Unnamed Subtopic",
    summary:
      subtopic.subtopic_summary.overall_summary || "No summary available",
    riskFactors: subtopic.riskFactors.map(mapRiskFactorToUI),
  };
}

/**
 * Maps complete topic data from the API to UI-friendly format
 * @param project The project from the API
 * @param topicName The name of the topic to extract
 * @returns UI-ready topic data
 */
export function mapTopicToUI(project: Project, topicName: string): TopicData {
  // Find topic summary for the requested topic
  const topicSummary = project.topic_summaries.find(
    (summary) => summary.topic.toLowerCase() === topicName.toLowerCase()
  );

  // Find subtopics for the requested topic
  const subtopics = project.subtopics.filter(
    (subtopic) =>
      subtopic.subtopic_summary.topic.toLowerCase() === topicName.toLowerCase()
  );

  // Create default data in case of missing information
  const defaultTopicData: TopicData = {
    topicTitle: topicName || "Topic Information",
    topicDescription: "No description available for this topic.",
    topicSummary: "",
    subtopics: [],
    summaryTitle: "What you need to know",
    projectId: project.project_id,
  };

  // Return the mapped topic data or defaults if missing
  return {
    topicTitle: topicSummary?.topic || defaultTopicData.topicTitle,
    topicDescription:
      topicSummary?.topic_introduction || defaultTopicData.topicDescription,
    topicSummary: topicSummary?.topic_summary || defaultTopicData.topicSummary,
    subtopics: subtopics.map(mapSubtopicToUI),
    summaryTitle: "What you need to know",
    projectId: project.project_id,
  };
}

/**
 * Determines the primary type of a risk factor based on its points
 * @param points Array of risk factor points
 * @returns The dominant point type converted to singular form
 */
export function determineRiskFactorType(points: RiskFactorPointDB[]): string {
  // Handle empty points array
  if (!points || points.length === 0) {
    return "mixed";
  }

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

// NOTE: The following functions appear to be duplicates with slightly different interfaces.
// They should be reviewed and potentially consolidated with the functions above
// or properly differentiated if they serve distinct purposes.

/**
 * Function to map API subtopics to UI subtopics
 * @deprecated Consider using mapSubtopicToUI instead
 */
export function mapApiSubtopicsToComponentSubtopics(
  apiSubtopics: Subtopic[]
): SubtopicData[] {
  return apiSubtopics.map((subtopic) => ({
    id: subtopic.subtopic_summary.subtopic_summary_id,
    title: subtopic.subtopic_summary.sub_topic,
    summary: subtopic.subtopic_summary.overall_summary || "",
    riskFactors: subtopic.riskFactors.map(mapRiskFactorToUI),
  }));
}
