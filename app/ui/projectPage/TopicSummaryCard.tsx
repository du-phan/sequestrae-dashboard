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
 * Updated to use the lavender color palette for brand consistency
 */
export default function TopicSummaryCard({
  summaryText,
  className = "",
}: TopicSummaryCardProps) {
  return (
    <div
      className={`rounded-lg p-0 bg-white border border-lavender-200 shadow-md relative overflow-hidden ${className}`}
      role="region"
      aria-label="Topic summary"
    >
      {/* Top accent bar for visual hierarchy */}
      <div className="h-1.5 w-full bg-lavender-500"></div>

      {/* Main content with proper padding */}
      <div className="p-6">
        {summaryText ? (
          <div className="flex">
            {/* Enhanced icon with better positioning - adjusted for better alignment */}
            <div className="mr-4 flex-shrink-0">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-lavender-600"
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

            {/* Summary text with enhanced typography - removed bottom margin from heading */}
            <div>
              <h3 className={`${textPresets.h5} text-lavender-800 mb-1`}>
                Key Summary
              </h3>
              <p
                className={`${textPresets.body} text-gray-700 leading-relaxed max-w-prose mb-0`}
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
    </div>
  );
}
