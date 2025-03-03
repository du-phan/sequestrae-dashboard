import React from "react";

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
 * Redesigned with absolute positioning for perfect indicator alignment
 */
export default function TopicIntro({
  title,
  description,
  className = "",
}: TopicIntroProps) {
  return (
    <div className={`${className}`}>
      <div className="relative">
        <div className="absolute left-0 top-1.5 h-8 w-1 bg-blue-600 rounded-full"></div>
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3 pl-6">
          {title}
        </h1>
      </div>
      <div className="pl-6 border-l border-gray-200 mt-2 ml-0.5">
        <p className="text-sm md:text-base leading-relaxed text-gray-600 max-w-prose">
          {description}
        </p>
      </div>
    </div>
  );
}
