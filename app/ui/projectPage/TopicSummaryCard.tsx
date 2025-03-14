import React from "react";
import { textPresets } from "../theme";

// Simple props interface for the TopicSummaryCard component
interface TopicSummaryCardProps {
  /**
   * Summary text to display in the card
   */
  summaryText: string;

  /**
   * Optional CSS class name for additional styling
   */
  className?: string;
}

/**
 * TopicSummaryCard component - Displays a summary card with text content
 * Enhanced with subtle background color for better visual distinction
 */
export default function TopicSummaryCard({
  summaryText,
  className = "",
}: TopicSummaryCardProps) {
  return (
    <div
      className={`rounded-lg p-6 bg-blue-50 border border-blue-100 shadow-sm ${className}`}
      role="region"
      aria-label="Topic summary"
    >
      {summaryText ? (
        <div className="flex">
          {/* Enhanced icon with better positioning */}
          <div className="mr-4 flex-shrink-0">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="text-blue-400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M9.5 3L11 9L16 11L11 13L9.5 21L8 13L3 11L8 9L9.5 3Z"
                fill="currentColor"
                opacity="0.7"
              />
              <path
                d="M19 7L19.9318 10.0682L23 11L19.9318 11.9318L19 15L18.0682 11.9318L15 11L18.0682 10.0682L19 7Z"
                fill="currentColor"
              />
            </svg>
          </div>

          {/* Summary text with slightly enhanced typography */}
          <div>
            <p
              className={`${textPresets.body} text-gray-800 leading-relaxed max-w-prose`}
            >
              {summaryText}
            </p>
          </div>
        </div>
      ) : (
        <p className={`${textPresets.body} text-gray-500 italic`}>
          No summary information available.
        </p>
      )}
    </div>
  );
}
