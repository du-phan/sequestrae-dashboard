"use client";

import React, { useState } from "react";
import { textPresets } from "../theme";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

// Interfaces for project insights data
export interface InsightItem {
  /**
   * Unique identifier for the insight
   */
  id: string;

  /**
   * Text content of the insight
   */
  text: string;

  /**
   * Topic this insight is related to (e.g., "carbon", "delivery", "environment")
   */
  topic?: string;

  /**
   * Optional severity level for better visual cues
   */
  severity?: "low" | "medium" | "high";
}

export interface ProjectInsightsData {
  /**
   * Key strengths identified in the project
   */
  strengths: InsightItem[];

  /**
   * Key considerations or potential issues identified in the project
   */
  considerations: InsightItem[];

  /**
   * Key recommended actions for the project
   */
  recommendedActions: InsightItem[];
}

interface ProjectInsightsSectionProps {
  /**
   * Project insights data to display
   */
  data: ProjectInsightsData;

  /**
   * Optional CSS class name for additional styling
   */
  className?: string;
}

// Type for the category card's expand/collapse state
type CategoryKey = "strengths" | "considerations" | "recommendedActions";

/**
 * Displays aggregated insights from all analyses performed on the project
 * Organized into expandable/collapsible cards for strengths, considerations, and actions
 * Design aligned with other section components for visual consistency
 */
export default function ProjectInsightsSection({
  data,
  className = "",
}: ProjectInsightsSectionProps) {
  // State to track which categories are expanded
  const [expandedCategories, setExpandedCategories] = useState<
    Record<CategoryKey, boolean>
  >({
    strengths: true, // Start with strengths expanded
    considerations: false,
    recommendedActions: false,
  });

  // Toggle expanded state for a category
  const toggleCategory = (category: CategoryKey) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // Helper function to get appropriate styling for each category
  const getCategoryStyles = (category: CategoryKey) => {
    switch (category) {
      case "strengths":
        return {
          icon: (
            <svg
              className="w-full h-full"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          ),
          iconColor: "text-greenCustom-500",
          bgColor: "bg-greenCustom-50",
          borderColor: "border-greenCustom-100",
          textColor: "text-greenCustom-700",
          title: "Key Strengths",
          badge: "bg-greenCustom-100 text-greenCustom-800",
          hoverBorder: "hover:border-greenCustom-200",
          hoverShadow: "group-hover:shadow-greenCustom-100/50",
        };
      case "considerations":
        return {
          icon: (
            <svg
              className="w-full h-full"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          ),
          iconColor: "text-roseCustom-500",
          bgColor: "bg-roseCustom-50",
          borderColor: "border-roseCustom-100",
          textColor: "text-roseCustom-700",
          title: "Key Considerations",
          badge: "bg-roseCustom-100 text-roseCustom-800",
          hoverBorder: "hover:border-roseCustom-200",
          hoverShadow: "group-hover:shadow-roseCustom-100/50",
        };
      case "recommendedActions":
        return {
          icon: (
            <svg
              className="w-full h-full"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ),
          iconColor: "text-blueCustom-500",
          bgColor: "bg-blueCustom-50",
          borderColor: "border-blueCustom-100",
          textColor: "text-blueCustom-700",
          title: "Recommended Actions",
          badge: "bg-blueCustom-100 text-blueCustom-800",
          hoverBorder: "hover:border-blueCustom-200",
          hoverShadow: "group-hover:shadow-blueCustom-100/50",
        };
      default:
        return {
          icon: (
            <svg
              className="w-full h-full"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          ),
          iconColor: "text-gray-500",
          bgColor: "bg-gray-50",
          borderColor: "border-gray-100",
          textColor: "text-gray-700",
          title: "Category",
          badge: "bg-gray-100 text-gray-800",
          hoverBorder: "hover:border-gray-200",
          hoverShadow: "group-hover:shadow-gray-100/50",
        };
    }
  };

  // Format topic tag for better display
  const formatTopicTag = (topic: string) => {
    // Capitalize first letter of each word
    return topic
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Render a category card with its insights
  const renderCategoryCard = (category: CategoryKey) => {
    const items = data[category];
    const styles = getCategoryStyles(category);
    const isExpanded = expandedCategories[category];

    return (
      <div
        className={`border rounded-lg bg-white border-gray-200 shadow-sm transition-all duration-300 ${
          isExpanded ? "shadow-md" : "hover:shadow-md"
        }`}
      >
        {/* Card header with enhanced styling */}
        <div className="flex justify-between items-center p-5 border-b border-gray-100">
          <div className="flex items-center">
            {/* Category icon */}
            <div className={`mr-3 ${styles.iconColor}`}>
              <div className="w-5 h-5">{styles.icon}</div>
            </div>

            {/* Title with enhanced typography */}
            <span
              className={`${textPresets.h5} text-gray-800 flex items-center`}
            >
              {styles.title}
            </span>
          </div>

          {/* Toggle button with neutral color */}
          <button
            onClick={() => toggleCategory(category)}
            className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors"
            aria-label={isExpanded ? "Collapse section" : "Expand section"}
          >
            {isExpanded ? (
              <ChevronUpIcon className="h-5 w-5" />
            ) : (
              <ChevronDownIcon className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Card body with consistent padding */}
        <div className="px-5 py-4">
          {/* Collapsed view with preview of items */}
          {!isExpanded && items.length > 0 && (
            <button
              onClick={() => toggleCategory(category)}
              className="w-full text-left rounded-md hover:bg-gray-50 py-2 px-3 -mx-1 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-lavender-100"
              aria-label={`Expand ${styles.title}`}
            >
              <div className="flex items-center">
                {/* Enhanced insight count with badge styling for better visibility */}
                <span
                  className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${styles.bgColor} ${styles.textColor} border ${styles.borderColor}`}
                >
                  {items.length === 1
                    ? "1 insight"
                    : `${items.length} insights`}
                </span>

                <span className="mx-2 text-gray-400">•</span>

                <span className="text-sm text-gray-600 truncate flex-grow">
                  {items[0].text.length > 60
                    ? `${items[0].text.substring(0, 60)}...`
                    : items[0].text}
                </span>

                {items.length > 1 && (
                  <span className="text-xs text-blueCustom-500 ml-2 whitespace-nowrap">
                    +{items.length - 1} more
                  </span>
                )}
              </div>
            </button>
          )}

          {/* Empty state */}
          {!isExpanded && items.length === 0 && (
            <p className="italic text-gray-500 text-sm py-1 px-2">
              No {category} identified.
            </p>
          )}

          {/* Expanded view with insights aligned vertically with the heading */}
          {isExpanded && (
            <div className="space-y-4">
              {items.length === 0 ? (
                <div className="flex items-center justify-center py-6 px-4 bg-gray-50 rounded-lg border border-dashed border-gray-200">
                  <p className="text-gray-500 text-sm">
                    No {category} identified for this project.
                  </p>
                </div>
              ) : (
                <ul className="space-y-4 pt-1">
                  {items.map((item) => (
                    <li key={item.id} className="flex group">
                      <div
                        className={`flex-shrink-0 mt-1 mr-3 ${styles.iconColor}`}
                      >
                        <div className="w-4 h-4">{styles.icon}</div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`${textPresets.paragraph} text-gray-800`}>
                          {item.text}
                        </p>

                        {item.topic && (
                          <div className="mt-1.5 flex items-center">
                            <span className="text-xs text-gray-500 mr-2">
                              From:
                            </span>
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles.badge} transition-colors`}
                            >
                              {formatTopicTag(item.topic)}
                            </span>
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>

        {/* Card footer for expanded view */}
        {isExpanded && items.length > 0 && (
          <div className="px-5 py-3 bg-gray-50 rounded-b-lg border-t border-gray-100 flex justify-end items-center">
            <button
              onClick={() => toggleCategory(category)}
              className="text-sm text-gray-500 hover:text-gray-700 hover:underline flex items-center"
            >
              Collapse
              <ChevronUpIcon className="h-4 w-4 ml-1" />
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-sm ${className}`}
      data-section-id="insights"
    >
      {/* Section header with standard styling to match other components */}
      <div className="p-8 pb-0">
        <div className="flex mb-8">
          <div className="flex-shrink-0 w-1 bg-lavender-600 rounded-full self-stretch"></div>
          <h2 className={`${textPresets.h3} text-gray-800 ml-4 py-0 mb-0`}>
            Project Insights
          </h2>
        </div>
      </div>

      {/* Content with insights categorized into cards */}
      <div className="px-8 pb-8">
        <div className="ml-5 space-y-6">
          <p className={`${textPresets.paragraph} text-gray-600 mb-6`}>
            This section highlights some important findings from our
            comprehensive project analysis.
          </p>

          {/* Category cards */}
          <div className="space-y-5">
            {renderCategoryCard("strengths")}
            {renderCategoryCard("considerations")}
            {renderCategoryCard("recommendedActions")}
          </div>
        </div>
      </div>
    </div>
  );
}
