import React from "react";

// Interface for the summary item arrays
interface SummaryItem {
  id: string;
  text: string;
}

// Props interface for the TopicSummaryCard component
interface TopicSummaryCardProps {
  /**
   * Array of strength items to display in the summary
   */
  strengths?: SummaryItem[];

  /**
   * Array of consideration items to display in the summary
   */
  considerations?: SummaryItem[];

  /**
   * Array of recommended action items to display in the summary
   */
  recommendedActions?: SummaryItem[];

  /**
   * Optional custom title for the card
   * @default "Summary"
   */
  title?: string;

  /**
   * Optional CSS class name for additional styling
   */
  className?: string;
}

/**
 * TopicSummaryCard component - Displays a summary card with bullet points covering strengths,
 * considerations, and recommended actions for a topic
 */
const TopicSummaryCard: React.FC<TopicSummaryCardProps> = ({
  strengths = [],
  considerations = [],
  recommendedActions = [],
  title = "Summary",
  className = "",
}) => {
  // Helper function to render a bullet point list
  const renderBulletList = (
    items: SummaryItem[],
    title: string,
    iconColor: string
  ) => {
    if (items.length === 0) return null;

    return (
      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-700 mb-2">{title}</h3>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id} className="flex items-start">
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
              <span className="ml-2 text-gray-600 text-sm">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div
      className={`bg-white rounded-lg shadow border border-gray-100 p-4 ${className}`}
    >
      <h2 className="text-lg font-medium text-gray-800 mb-4">{title}</h2>

      {/* Strengths section with green icons */}
      {renderBulletList(strengths, "Strengths", "text-green-500")}

      {/* Considerations section with amber/yellow icons */}
      {renderBulletList(considerations, "Considerations", "text-amber-500")}

      {/* Recommended Actions section with blue icons */}
      {renderBulletList(
        recommendedActions,
        "Recommended Actions",
        "text-blue-500"
      )}

      {/* Display a message if no data is provided */}
      {strengths.length === 0 &&
        considerations.length === 0 &&
        recommendedActions.length === 0 && (
          <p className="text-gray-500 text-sm">
            No summary information available.
          </p>
        )}
    </div>
  );
};

export default TopicSummaryCard;
