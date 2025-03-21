import React from "react";
import { textPresets } from "../theme";
import { BookOpenIcon } from "@heroicons/react/24/outline";

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
 * Enhanced TopicIntro component - Displays the title and description for a topic page
 * with improved visual hierarchy to clearly indicate this is a definition/overview section
 */
export default function TopicIntro({
  title,
  description,
  className = "",
}: TopicIntroProps) {
  return (
    <div className={`${className}`}>
      {/* Enhanced header section with visual elements */}
      <div className="relative">
        {/* Subtle decorative background element */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 overflow-hidden">
          <div className="absolute -right-12 -top-16 w-64 h-64 bg-lavender-500 rounded-full mix-blend-multiply filter blur-3xl animate-slow-pulse"></div>
        </div>

        <div className="relative">
          {/* Title with enhanced styling */}
          <div className="flex mb-6">
            <div className="flex-shrink-0 w-1 bg-lavender-500 rounded-full self-stretch mr-4"></div>
            <h1
              className={`${textPresets.h3} text-gray-900 mb-0 text-2xl sm:text-3xl font-bold tracking-tight`}
            >
              {title}
            </h1>
          </div>
        </div>
      </div>

      {/* Description with improved visual presentation */}
      <div className="ml-5 relative">
        <div className="bg-lavender-50/50 border border-gray-100 rounded-lg p-6 mb-2 shadow-sm">
          <div className="flex">
            {/* Book icon */}
            <div className="flex-shrink-0 mr-4 text-lavender-500">
              <BookOpenIcon
                className="h-5 w-5"
                style={{ height: "1.375rem", width: "1.375rem" }}
              />
            </div>

            {/* Description text with enhanced styling */}
            <div className="flex-grow">
              {/* Small label - removed bottom margin */}
              <div className="text-xs font-semibold uppercase tracking-wide text-lavender-700">
                Topic Introduction
              </div>

              <p
                className={`${textPresets.paragraph} text-gray-700 leading-relaxed mb-0 mt-1`}
              >
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* Visual connection element to next section */}
        <div className="flex justify-center py-3">
          <div className="h-6 w-px bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
}
