import React from "react";
import TopicIntro from "./TopicIntro";
import TopicSummaryCard from "./TopicSummaryCard";
import SubtopicSection from "./SubtopicSection";
import { SubtopicData, TopicData } from "../../../types/ui";
import { textPresets } from "../theme";

// Updated Props interface for the MainContentArea component
interface MainContentAreaProps extends TopicData {
  /**
   * Optional className for additional styling
   */
  className?: string;
}

/**
 * MainContentArea component - Provides a consistent layout structure for topic pages
 * Simplified with basic flexbox centering for perfect alignment
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
      {/* Topic introduction section */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <TopicIntro title={topicTitle} description={topicDescription} />
      </div>

      {/* Summary card section with fixed vertical alignment */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        {/* Heading with fixed vertical alignment - updated to h3 for consistency */}
        <div className="flex mb-8">
          {/* Blue vertical line fixed at exact height */}
          <div className="flex-shrink-0 w-1 bg-blue-600 rounded-full self-stretch"></div>

          {/* Heading with proper padding and no bottom margin - updated to h3 */}
          <h2 className={`${textPresets.h3} text-gray-800 ml-4 py-0 mb-0`}>
            {summaryTitle || `What You Need To Know`}
          </h2>
        </div>

        {/* Card with proper spacing - consistent ml-5 */}
        <div className="ml-5 mt-4">
          <TopicSummaryCard
            summaryText={topicSummary}
            className="border-blue-100 bg-blue-50"
          />
        </div>
      </div>

      {/* Detailed analysis section with simplified visual hierarchy */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        {/* Simplified heading with just size difference */}
        <div className="flex mb-8">
          {/* Blue vertical line fixed at exact height */}
          <div className="flex-shrink-0 w-1 bg-blue-600 rounded-full self-stretch"></div>

          {/* Upgraded heading size for better hierarchy */}
          <h2 className={`${textPresets.h3} text-gray-800 ml-4 py-0 mb-0`}>
            Detailed Analysis
          </h2>
        </div>

        {/* Content with proper spacing - Adding consistent ml-5 to match other sections */}
        <div className="ml-5">
          {subtopics.map((subtopic, index) => (
            <SubtopicSection
              key={subtopic.id}
              id={String(subtopic.id)}
              title={subtopic.title}
              summary={subtopic.summary}
              riskFactors={subtopic.riskFactors}
              className="rounded-lg"
              isFirst={index === 0}
            />
          ))}

          {/* Display a message if no subtopics are provided */}
          {subtopics.length === 0 && (
            <div className="py-8 text-center rounded-lg w-full">
              <p className={`${textPresets.paragraphSmall}`}>
                No subtopic data available for this topic.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
