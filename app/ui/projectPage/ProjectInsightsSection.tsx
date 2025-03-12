"use client";

import React, { useState } from "react";
import { textPresets } from "../theme";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ArrowRightCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";

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
 * Design inspired by RiskFactorCard for visual consistency
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
          icon: <CheckCircleIcon />,
          iconColor: "text-green-500",
          bgColor: "bg-green-50",
          borderColor: "border-green-100",
          textColor: "text-green-700",
          title: "Key Strengths",
          badge: "bg-green-100 text-green-800",
        };
      case "considerations":
        return {
          icon: <ExclamationCircleIcon />,
          iconColor: "text-amber-500",
          bgColor: "bg-amber-50",
          borderColor: "border-amber-100",
          textColor: "text-amber-700",
          title: "Key Considerations",
          badge: "bg-amber-100 text-amber-800",
        };
      case "recommendedActions":
        return {
          icon: <ArrowRightCircleIcon />,
          iconColor: "text-blue-500",
          bgColor: "bg-blue-50",
          borderColor: "border-blue-100",
          textColor: "text-blue-700",
          title: "Recommended Actions",
          badge: "bg-blue-100 text-blue-800",
        };
      default:
        return {
          icon: <CheckCircleIcon />,
          iconColor: "text-gray-500",
          bgColor: "bg-gray-50",
          borderColor: "border-gray-100",
          textColor: "text-gray-700",
          title: "Category",
          badge: "bg-gray-100 text-gray-800",
        };
    }
  };

  // Render a category card with its insights
  const renderCategoryCard = (category: CategoryKey) => {
    const items = data[category];
    const styles = getCategoryStyles(category);
    const isExpanded = expandedCategories[category];

    return (
      <div className="border rounded-lg bg-white border-gray-200 shadow-sm hover:shadow-md transition-shadow">
        {/* Card header with enhanced styling */}
        <div className="flex justify-between items-center p-5 border-b border-gray-100">
          <div className="flex items-center">
            {/* Category icon for better visual recognition */}
            <div className={`${styles.iconColor} mr-3`}>
              <div className="w-6 h-6 flex items-center justify-center">
                {styles.icon}
              </div>
            </div>

            {/* Title with enhanced typography - no badge */}
            <span className="text-base font-medium text-gray-800 flex items-center">
              {styles.title}
            </span>

            {/* Badge removed as it's redundant with the "X insights" text in collapsed view */}
          </div>

          {/* Toggle button with improved hover effect */}
          <button
            onClick={() => toggleCategory(category)}
            className="flex items-center justify-center h-7 w-7 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label={isExpanded ? "Collapse section" : "Expand section"}
          >
            {isExpanded ? (
              <ChevronUpIcon className="h-4 w-4" />
            ) : (
              <ChevronDownIcon className="h-4 w-4" />
            )}
          </button>
        </div>

        {/* Card body with consistent padding */}
        <div className="px-5 py-4">
          {/* Collapsed view with improved presentation */}
          {!isExpanded && items.length > 0 && (
            <button
              onClick={() => toggleCategory(category)}
              className="w-full text-left rounded-md hover:bg-gray-50 py-1 px-2 -mx-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-100"
              aria-label={`Expand ${styles.title}`}
            >
              <p className="text-sm text-gray-600 line-clamp-1">
                <span className={`${styles.textColor} font-medium mr-1.5`}>
                  {items.length === 1
                    ? "1 insight"
                    : `${items.length} insights`}
                  :
                </span>
                {items[0].text}
                {items.length > 1 ? " and more..." : ""}
              </p>
            </button>
          )}

          {/* Expanded view with enhanced styling */}
          {isExpanded && (
            <div className="space-y-4">
              {items.length === 0 ? (
                <p className="italic text-gray-500 text-sm py-1">
                  No items available.
                </p>
              ) : (
                <ul className="space-y-4 pt-1">
                  {items.map((item) => (
                    <li key={item.id} className="flex group">
                      <div className="flex-shrink-0 mt-0.5 mr-3 transition-transform group-hover:scale-110">
                        <div className={`w-5 h-5 ${styles.iconColor}`}>
                          {styles.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`${textPresets.paragraph} text-gray-800`}>
                          {item.text}
                        </p>
                        {item.topic && (
                          <p
                            className={`${textPresets.caption} text-gray-500 mt-1 group-hover:text-blue-500 transition-colors`}
                          >
                            From: {item.topic}
                          </p>
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
        {isExpanded && (
          <div
            className={`px-5 py-3 bg-gray-50 rounded-b-lg border-t border-gray-100 flex justify-end`}
          >
            <button
              onClick={() => toggleCategory(category)}
              className={`text-sm text-gray-500 hover:text-gray-700 flex items-center`}
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
    <div className={`bg-white rounded-lg shadow-sm ${className}`}>
      {/* Section header with standard styling */}
      <div className="p-8 pb-0">
        <div className="flex mb-8">
          <div className="flex-shrink-0 w-1 bg-blue-600 rounded-full self-stretch"></div>
          <h2 className={`${textPresets.h3} text-gray-800 ml-4 py-0 mb-0`}>
            Project Insights
          </h2>
        </div>
      </div>

      {/* Content with insights categorized into cards */}
      <div className="px-8 pb-8">
        <div className="ml-5 space-y-4">
          <p className={`${textPresets.paragraph} text-gray-600 mb-6`}>
            This section highlights the most important findings from our
            comprehensive project analysis.
          </p>

          {/* Category cards */}
          {renderCategoryCard("strengths")}
          {renderCategoryCard("considerations")}
          {renderCategoryCard("recommendedActions")}
        </div>
      </div>
    </div>
  );
}
