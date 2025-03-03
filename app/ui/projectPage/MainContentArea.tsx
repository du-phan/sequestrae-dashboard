import React from "react";
import TopicIntro from "./TopicIntro";
import TopicSummaryCard from "./TopicSummaryCard";
import SubtopicSection from "./SubtopicSection";
import { SubtopicData } from "../../../types/project";

// Updated Props interface for the MainContentArea component
interface MainContentAreaProps {
  /**
   * Title of the topic
   */
  topicTitle: string;

  /**
   * Description text for the topic
   */
  topicDescription: string;

  /**
   * Data for subtopics sections
   */
  subtopics: SubtopicData[];

  /**
   * Summary text content
   */
  topicSummary: string;

  /**
   * Optional custom title for the summary card
   */
  summaryTitle?: string;

  /**
   * Project ID
   */
  projectId?: string | number;

  /**
   * Optional className for additional styling
   */
  className?: string;
}

/**
 * MainContentArea component - Provides a consistent layout structure for topic pages
 * Fixed padding inconsistencies across all containers
 */
export default function MainContentArea({
  topicTitle,
  topicDescription,
  subtopics,
  topicSummary,
  summaryTitle,
  projectId,
  className = "",
}: MainContentAreaProps) {
  return (
    <div className={`max-w-4xl mx-auto ${className}`}>
      {/* Topic introduction section - standardized padding */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8 border-b border-gray-200">
        <div className="relative pl-6">
          <div className="absolute left-0 top-1.5 h-6 w-1 bg-blue-600 rounded-full"></div>
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
            {topicTitle}
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-600 max-w-prose mt-2">
            {topicDescription}
          </p>
        </div>
      </div>

      {/* Summary card section - aligned padding */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <div className="relative pl-6">
          <div className="absolute left-0 top-1.5 h-6 w-1 bg-blue-600 rounded-full"></div>
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
            {summaryTitle || `What You Need To Know`}
          </h2>
          <TopicSummaryCard
            summaryText={topicSummary}
            className="border-blue-100 bg-blue-50"
          />
        </div>
      </div>

      {/* Subtopics section - aligned padding */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <div className="relative pl-6">
          <div className="absolute left-0 top-1.5 h-6 w-1 bg-blue-500 rounded-full"></div>
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-6">
            Detailed Analysis
          </h2>

          <div className="space-y-16">
            {subtopics.map((subtopic) => (
              <SubtopicSection
                key={subtopic.id}
                id={String(subtopic.id)}
                title={subtopic.title}
                summary={subtopic.summary}
                riskFactors={subtopic.riskFactors}
                className="rounded-lg p-0 border-t-4 border-gray-200"
              />
            ))}

            {/* Display a message if no subtopics are provided */}
            {subtopics.length === 0 && (
              <div className="py-10 text-center rounded-lg w-full">
                <p className="text-sm text-gray-500">
                  No subtopic data available for this topic.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
