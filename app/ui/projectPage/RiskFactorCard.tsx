"use client";

import React, { useState } from "react";
import { RiskFactorPoint } from "../../../types/ui";

// Tab options for the expanded card view
type TabType = "strengths" | "considerations" | "actions";

interface RiskFactorCardProps {
  /**
   * Unique identifier for the risk factor
   */
  id: string; // Add id prop

  /**
   * Name/title of the risk factor
   */
  name: string;

  /**
   * Type of the risk factor (e.g., "strength", "consideration", "recommended_action")
   */
  type: string;

  /**
   * Array of points associated with this risk factor
   */
  points: RiskFactorPoint[];

  /**
   * Optional className for additional styling
   */
  className?: string;
}

/**
 * RiskFactorCard component - Displays a risk factor with its points
 * Features collapsed view with point type counts and expanded view with tabs
 */
export default function RiskFactorCard({
  id, // Include id in props
  name,
  type,
  points,
  className = "",
}: RiskFactorCardProps) {
  // State for expanded/collapsed view
  const [isExpanded, setIsExpanded] = useState(false);

  // State for active tab in expanded view
  const [activeTab, setActiveTab] = useState<TabType>("strengths");

  // Helper function to get the appropriate badge styling based on point type
  const getColorByPointType = (pointType: string) => {
    switch (pointType) {
      case "strengths":
        return {
          bgColor: "bg-green-50",
          textColor: "text-green-700", // Kept for tab styling
          borderColor: "border-green-100",
          iconColor: "text-green-500",
          icon: (
            <svg
              className="w-4 h-4 flex-shrink-0"
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
        };
      case "considerations":
        return {
          bgColor: "bg-amber-50",
          textColor: "text-amber-700",
          borderColor: "border-amber-100",
          iconColor: "text-amber-500",
          icon: (
            <svg
              className="w-4 h-4"
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
        };
      case "recommended_actions":
        return {
          bgColor: "bg-blue-50",
          textColor: "text-blue-700",
          borderColor: "border-blue-100",
          iconColor: "text-blue-500",
          icon: (
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ),
        };
      default:
        return {
          bgColor: "bg-gray-50",
          textColor: "text-gray-700",
          borderColor: "border-gray-100",
          iconColor: "text-gray-500",
          icon: (
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
          ),
        };
    }
  };

  // Count points by type
  const strengthsCount = points.filter((p) => p.type === "strengths").length;
  const considerationsCount = points.filter(
    (p) => p.type === "considerations"
  ).length;
  const actionsCount = points.filter(
    (p) => p.type === "recommended_actions"
  ).length;

  // Render bullet points for the selected tab with appropriate icons
  const renderTabContent = () => {
    let filteredPoints: RiskFactorPoint[] = [];
    let pointType: string;

    switch (activeTab) {
      case "strengths":
        filteredPoints = points.filter((p) => p.type === "strengths");
        pointType = "strengths";
        break;
      case "considerations":
        filteredPoints = points.filter((p) => p.type === "considerations");
        pointType = "considerations";
        break;
      case "actions":
        filteredPoints = points.filter((p) => p.type === "recommended_actions");
        pointType = "recommended_actions";
        break;
      default:
        pointType = "default";
    }

    if (filteredPoints.length === 0) {
      return (
        <p className="text-sm italic text-gray-500">
          No items in this category.
        </p>
      );
    }

    const style = getColorByPointType(pointType);

    return (
      <ul className="space-y-4">
        {filteredPoints.map((point) => (
          <li key={point.id} className="flex items-start">
            {/* Fixed alignment by using top alignment and consistent sizing */}
            <span
              className={`flex-shrink-0 w-5 h-5 mr-2 ${style.iconColor} mt-0.5`}
            >
              {style.icon}
            </span>
            <span className="text-sm text-gray-600 flex-1">{point.text}</span>
          </li>
        ))}
      </ul>
    );
  };

  // Tab button component for the expanded view - removed icons from tabs
  function TabButton({
    tab,
    label,
    activeTab,
    onClick,
    pointType,
  }: {
    tab: TabType;
    label: string;
    activeTab: TabType;
    onClick: (tab: TabType) => void;
    pointType: string;
  }) {
    const style = getColorByPointType(pointType);

    return (
      <button
        className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
          activeTab === tab
            ? `${style.bgColor} ${style.textColor}` // Active state styling with matching colors
            : "text-gray-600 hover:text-blue-600 hover:bg-gray-50" // Inactive state styling
        }`}
        onClick={() => onClick(tab)}
      >
        {/* Removed the icon from tab title */}
        {label}
      </button>
    );
  }

  // Get badge styling for different point types
  const strengthsStyle = getColorByPointType("strengths");
  const considerationsStyle = getColorByPointType("considerations");
  const actionsStyle = getColorByPointType("recommended_actions");

  return (
    <div
      id={id} // Ensure id is properly set for IntersectionObserver
      data-risk-factor-id={id} // Add data attribute for easier selection
      className={`border rounded-lg p-5 bg-white border-gray-200 shadow-sm ${className} scroll-mt-24`}
    >
      {/* Header with risk factor name */}
      <h3 className="text-gray-800 font-medium mb-4">{name}</h3>

      {/* Collapsed view shows count badges */}
      {!isExpanded ? (
        <div>
          {/* Point type counts - updated to use black text for badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {strengthsCount > 0 && (
              <span
                className={`px-2 py-1 text-xs ${strengthsStyle.bgColor} text-gray-800 border ${strengthsStyle.borderColor} rounded-full flex items-center`}
              >
                {/* Using consistent black text for both number and label */}
                {strengthsCount}{" "}
                {strengthsCount === 1 ? "Strength" : "Strengths"}
              </span>
            )}
            {considerationsCount > 0 && (
              <span
                className={`px-2 py-1 text-xs ${considerationsStyle.bgColor} text-gray-800 border ${considerationsStyle.borderColor} rounded-full flex items-center`}
              >
                {/* Using consistent black text for both number and label */}
                {considerationsCount}{" "}
                {considerationsCount === 1 ? "Consideration" : "Considerations"}
              </span>
            )}
            {actionsCount > 0 && (
              <span
                className={`px-2 py-1 text-xs ${actionsStyle.bgColor} text-gray-800 border ${actionsStyle.borderColor} rounded-full flex items-center`}
              >
                {/* Using consistent black text for both number and label */}
                {actionsCount} {actionsCount === 1 ? "Action" : "Actions"}
              </span>
            )}
          </div>

          {/* Expand button */}
          <button
            className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center"
            onClick={() => setIsExpanded(true)}
          >
            View Details
            <svg
              className="ml-1 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      ) : (
        <div>
          {/* Tab navigation - removed icons from tabs */}
          <div className="flex space-x-2 mb-6 border-b border-gray-100 pb-2">
            <TabButton
              tab="strengths"
              label="Strengths"
              activeTab={activeTab}
              onClick={setActiveTab}
              pointType="strengths"
            />
            <TabButton
              tab="considerations"
              label="Considerations"
              activeTab={activeTab}
              onClick={setActiveTab}
              pointType="considerations"
            />
            <TabButton
              tab="actions"
              label="Recommended Actions"
              activeTab={activeTab}
              onClick={setActiveTab}
              pointType="recommended_actions"
            />
          </div>

          {/* Tab content area */}
          <div className="mb-6">{renderTabContent()}</div>

          {/* Collapse button */}
          <button
            className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center"
            onClick={() => setIsExpanded(false)}
          >
            Collapse
            <svg
              className="ml-1 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
