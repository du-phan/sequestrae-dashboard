/**
 * Type definitions for UI components
 * These types represent the data structure as used by React components
 */

// Basic item structure for UI components
export interface SummaryItem {
  id: string | number;
  text: string;
  type?: string;
}

// Risk Factor Point format used in the frontend
export interface RiskFactorPoint {
  id: number;
  text: string;
  type: "strengths" | "considerations" | "recommended_actions";
}

// Component-friendly risk factor structure
export interface ComponentRiskFactor {
  id: number;
  name: string;
  type: string;
  points: RiskFactorPoint[]; // Using the frontend format
}

// Subtopic data structure for UI components
export interface SubtopicData {
  id: string | number;
  title: string;
  summary: string;
  riskFactors: ComponentRiskFactor[];
}

// Topic data structure for the MainContentArea component
export interface TopicData {
  topicTitle: string;
  topicDescription: string;
  subtopics: SubtopicData[];
  topicSummary: string;
  summaryTitle?: string;
  projectId?: string | number;
}

// Sidebar navigation subtopic interface
export interface SubTopic {
  id: string;
  name: string;
  href: string;
  riskFactors?: RiskFactor[]; // Renamed from factors to riskFactors for consistency
}

// Renamed from Factor to RiskFactor for consistency
export interface RiskFactor {
  id: string;
  name: string;
  href: string;
}

// Project interface for dashboard listing
export interface Project {
  project_id: string;
  project_name: string;
  registry: string;
  country: string | null;
  project_start_period?: string | null;
  feedstock_type: string[];
  project_description?: string | null;
  key_stakeholders?: string[];
}
