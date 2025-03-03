/**
 * Type definitions for the project_aggregated table structure
 * These types represent the denormalized hierarchical data structure
 * stored in the project_aggregated materialized view
 */

// Risk Factor Point representing a single bullet point
export interface RiskFactorPoint extends SummaryItem {
  risk_factor_point_id: string;
  risk_factor_id: string;
  point_type: "strengths" | "considerations" | "recommended_actions";
  main_idea: string;
  explanation: string;
}

// SubtopicSummary containing metadata about the subtopic
export interface SubtopicSummary {
  subtopic_summary_id: string;
  project_id: string;
  topic: string;
  sub_topic: string;
  overall_summary: string;
  created_at: string;
}

// Risk Factor associated with a subtopic
export interface RiskFactor {
  risk_factor_id: string;
  risk_factor_name: string;
  original_risk_factors?: string[] | null;
  points: RiskFactorPoint[];
}

// Subtopic containing subtopic summary and risk factors
export interface Subtopic {
  subtopic_summary: SubtopicSummary;
  riskFactors: RiskFactor[];
}

// Topic Summary structure
export interface TopicSummary {
  topic_summary_id: string;
  topic: string;
  topic_introduction: string;
  topic_summary: string;
}

// Detailed Answer for Q&A
export interface DetailedAnswer {
  id: string;
  question: string;
  answer: string;
  topic: string;
  subtopic: string;
}

// The complete Project structure matching the project_aggregated table
export interface Project {
  project_id: string;
  project_name: string;
  created_at: string;
  updated_at?: string;

  // JSON arrays directly matching the table structure
  detailed_answers: DetailedAnswer[];
  topic_summaries: TopicSummary[];
  subtopics: Subtopic[];

  // Other project metadata fields
  location?: string;
  status?: string;
  description?: string;
  start_date?: string;
  end_date?: string;
}

// Component-friendly interfaces that map to UI components

export interface SummaryItem {
  id: string | number;
  text: string;
  type?: string;
}

export interface RiskFactorPoint {
  id: number;
  text: string;
  type: string;
}

export interface ComponentRiskFactor {
  id: number;
  name: string;
  type: string;
  points: RiskFactorPoint[];
}

export interface SubtopicData {
  id: string | number;
  title: string;
  summary: string;
  riskFactors: ComponentRiskFactor[];
}

// This interface is designed to match what MainContentArea expects
export interface TopicData {
  topicTitle: string;
  topicDescription: string;
  subtopics: SubtopicData[];
  topicSummary: string;
  summaryTitle?: string;
  projectId?: string | number;
}
