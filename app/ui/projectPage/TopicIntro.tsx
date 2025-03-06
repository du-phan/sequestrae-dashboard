import React from "react";
import { textPresets } from "../theme";

interface TopicIntroProps {
  /**
   * Main topic title
   */
  title: string;

  /**
   * Topic description or introduction text
   */
  description: string;

  /**
   * Optional CSS class name for additional styling
   */
  className?: string;
}

/**
 * TopicIntro component - Displays the title and description for a topic page
 * Fixed vertical alignment issues with blue indicator line
 */
export default function TopicIntro({
  title,
  description,
  className = "",
}: TopicIntroProps) {
  return (
    <div className={`mb-8 ${className}`}>
      {/* Heading with fixed vertical alignment */}
      <div className="flex">
        {/* Blue vertical line fixed at exact height */}
        <div className="flex-shrink-0 w-1 bg-blue-600 rounded-full self-stretch"></div>

        {/* Heading with proper padding and no bottom margin */}
        <h1 className={`${textPresets.h3} text-gray-900 ml-4 py-0 mb-0`}>
          {title}
        </h1>
      </div>

      {/* Description with consistent left margin */}
      <div className="ml-5 max-w-prose mt-4">
        <p className={`${textPresets.paragraph}`}>{description}</p>
      </div>
    </div>
  );
}
