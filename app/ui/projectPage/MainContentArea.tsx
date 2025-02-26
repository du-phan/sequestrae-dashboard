import React from "react";
import TopicIntro from "./TopicIntro";
import TopicSummaryCard from "./TopicSummaryCard";
import SubtopicSection from "./SubtopicSection";
import { RiskFactor } from "./RiskFactorCard";

// Interface for summary items used in TopicSummaryCard
interface SummaryItem {
  id: string;
  text: string;
}

// Interface for subtopic data structure
interface SubtopicData {
  id: string;
  title: string;
  summary: string;
  riskFactors: RiskFactor[];
}

// Props interface for the MainContentArea component
interface MainContentAreaProps {
  /**
   * Main topic title displayed in the TopicIntro
   */
  topicTitle: string;

  /**
   * Topic description displayed in the TopicIntro
   */
  topicDescription: string;

  /**
   * Summary data for the TopicSummaryCard
   */
  summaryData: {
    strengths?: SummaryItem[];
    considerations?: SummaryItem[];
    recommendedActions?: SummaryItem[];
  };

  /**
   * Array of subtopics with their associated risk factors
   */
  subtopics: SubtopicData[];

  /**
   * Optional custom title for the summary card
   */
  summaryTitle?: string;

  /**
   * Optional project ID for display
   */
  projectId?: string;

  /**
   * Optional className for additional styling
   */
  className?: string;
}

/**
 * MainContentArea component - Provides a consistent layout structure for topic pages
 * Arranges TopicIntro, TopicSummaryCard, and SubtopicSections in a standardized layout
 */
export default function MainContentArea({
  topicTitle,
  topicDescription,
  summaryData,
  subtopics,
  summaryTitle,
  projectId,
  className = "",
}: MainContentAreaProps) {
  return (
    <div className={`max-w-7xl mx-auto ${className}`}>
      {/* Topic introduction section */}
      <TopicIntro title={topicTitle} description={topicDescription} />

      {/* Summary card section with margin spacing */}
      <div className="my-8">
        <TopicSummaryCard
          title={summaryTitle || `${topicTitle} Summary`}
          strengths={summaryData.strengths}
          considerations={summaryData.considerations}
          recommendedActions={summaryData.recommendedActions}
        />
      </div>

      {/* Project identifier display if provided */}
      {projectId && (
        <p className="mt-4 text-gray-600">Project ID: {projectId}</p>
      )}

      {/* Subtopics section with vertical spacing between sections */}
      <div className="mt-8 space-y-12">
        {subtopics.map((subtopic) => (
          <SubtopicSection
            key={subtopic.id}
            id={subtopic.id}
            title={subtopic.title}
            summary={subtopic.summary}
            riskFactors={subtopic.riskFactors}
          />
        ))}

        {/* Display a message if no subtopics are provided */}
        {subtopics.length === 0 && (
          <div className="py-8 text-center">
            <p className="text-gray-500">
              No subtopic data available for this topic.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
