import React from "react";

// Simplified props interface for the TopicSummaryCard component
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
 * Simplified styling to fit better with container padding system
 */
export default function TopicSummaryCard({
  summaryText,
  className = "",
}: TopicSummaryCardProps) {
  return (
    <div className={`rounded-lg p-6 ${className}`}>
      <p className="text-sm md:text-base leading-relaxed text-gray-700 w-full max-w-prose">
        {summaryText || "No summary information available."}
      </p>
    </div>
  );
}
