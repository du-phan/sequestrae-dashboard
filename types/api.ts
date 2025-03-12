/**
 * Type definitions for API and database structures
 * These types represent the data structure as received from the backend
 */

// Risk Factor Point representing a single bullet point from the database
export interface RiskFactorPointDB {
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
  points: RiskFactorPointDB[];
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

// Project Main Insight representing key strengths, considerations, and recommended actions
export interface ProjectMainInsight {
  project_main_insight_id: number;
  insight_type:
    | "main_strengths"
    | "main_considerations"
    | "main_recommended_actions";
  topic: string;
  main_idea: string;
  created_at: string;
}

// The complete Project structure matching the project_aggregated table
export interface Project {
  project_id: string;
  project_name: string;
  registry: string;
  country: string | null;
  project_start_period?: string | null;
  feedstock_type: string[];
  project_description?: string | null;
  key_stakeholders?: string[];
  created_at: string;
  updated_at?: string;

  // JSON arrays directly matching the table structure
  detailed_answers: DetailedAnswer[];
  topic_summaries: TopicSummary[];
  subtopics: Subtopic[];
  main_insights: ProjectMainInsight[];

  // Other project metadata fields
  location?: string;
  status?: string;
  description?: string;
  start_date?: string;
  end_date?: string;
}
