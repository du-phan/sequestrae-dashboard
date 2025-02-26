"use client";

import { useState } from "react";

// Tab options for the expanded card view
type TabType = "strengths" | "considerations" | "actions";

// Interface for individual bullet points
interface BulletPoint {
  id: string;
  text: string;
}

// Export the RiskFactor interface so it can be imported by other components
export interface RiskFactor {
  id: string;
  title: string;
  main_idea: string;
  explanation: string;
  strengths: BulletPoint[];
  considerations: BulletPoint[];
  recommended_actions: BulletPoint[];
}

interface RiskFactorCardProps {
  riskFactor: RiskFactor;
  className?: string;
}

/**
 * RiskFactorCard component - Displays information about a specific risk factor
 * Has collapsed and expanded states with tabbed interface in expanded view
 */
export default function RiskFactorCard({
  riskFactor,
  className = "",
}: RiskFactorCardProps) {
  // State for expanded/collapsed view
  const [isExpanded, setIsExpanded] = useState(false);

  // State for active tab in expanded view
  const [activeTab, setActiveTab] = useState<TabType>("strengths");

  // Render bullet points for the selected tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "strengths":
        return renderBulletPoints(riskFactor.strengths, "text-green-500");
      case "considerations":
        return renderBulletPoints(riskFactor.considerations, "text-amber-500");
      case "actions":
        return renderBulletPoints(
          riskFactor.recommended_actions,
          "text-blue-500"
        );
    }
  };

  // Helper function to render bullet points
  const renderBulletPoints = (points: BulletPoint[], iconColor: string) => {
    if (points.length === 0) {
      return <p className="text-gray-500 italic text-sm">No data available.</p>;
    }

    return (
      <ul className="space-y-3">
        {points.map((point) => (
          <li key={point.id} className="flex items-start">
            <div className={`flex-shrink-0 h-5 w-5 ${iconColor}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="ml-2 text-gray-600">{point.text}</span>
          </li>
        ))}
      </ul>
    );
  };

  // Tab button component for the expanded view
  function TabButton({
    tab,
    label,
    activeTab,
    onClick,
  }: {
    tab: TabType;
    label: string;
    activeTab: TabType;
    onClick: (tab: TabType) => void;
  }) {
    return (
      <button
        className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
          activeTab === tab
            ? "bg-blue-50 text-blue-700"
            : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
        }`}
        onClick={() => onClick(tab)}
      >
        {label}
      </button>
    );
  }

  return (
    <div className={`border border-gray-100 rounded-lg shadow-sm ${className}`}>
      {/* Card header with title */}
      <div className="px-4 py-3 flex items-center justify-between border-b border-gray-100">
        <h4 className="font-medium text-gray-800">{riskFactor.title}</h4>
      </div>

      {/* Card body with 16px internal padding */}
      <div className="p-4">
        {/* Collapsed view shows just the main idea */}
        {!isExpanded ? (
          <div>
            <p className="text-gray-600">{riskFactor.main_idea}</p>
            <div className="mt-4">
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
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Expanded view with detailed explanation */}
            <div className="mb-4">
              <p className="text-gray-600 mb-4">{riskFactor.explanation}</p>

              {/* Tab navigation */}
              <div className="flex space-x-2 mb-6 border-b border-gray-100 pb-2">
                <TabButton
                  tab="strengths"
                  label="Strengths"
                  activeTab={activeTab}
                  onClick={setActiveTab}
                />
                <TabButton
                  tab="considerations"
                  label="Considerations"
                  activeTab={activeTab}
                  onClick={setActiveTab}
                />
                <TabButton
                  tab="actions"
                  label="Recommended Actions"
                  activeTab={activeTab}
                  onClick={setActiveTab}
                />
              </div>

              {/* Tab content area */}
              <div className="mt-4">{renderTabContent()}</div>
            </div>

            {/* Collapse button */}
            <div className="mt-6">
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
          </div>
        )}
      </div>
    </div>
  );
}
