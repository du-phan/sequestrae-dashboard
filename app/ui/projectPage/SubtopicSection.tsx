import React from "react";
import { ComponentRiskFactor } from "../../../types/ui";
import RiskFactorCard from "./RiskFactorCard";
import { textPresets } from "../theme";
import CollapsibleSummary from "./CollapsibleSummary";

interface SubtopicSectionProps {
  /**
   * Unique identifier for the subtopic
   */
  id: string;

  /**
   * Title of the subtopic section
   */
  title: string;

  /**
   * Summary text for the subtopic
   */
  summary: string;

  /**
   * Array of risk factors associated with this subtopic
   */
  riskFactors: ComponentRiskFactor[];

  /**
   * Optional className for additional styling
   */
  className?: string;

  /**
   * Whether this is the first subtopic (to control divider display)
   */
  isFirst?: boolean;
}

/**
 * SubtopicSection component - Displays a subtopic with its summary and risk factors
 * Improved with clearer visual hierarchy and better labeling while maintaining SSR
 * Updated to use the lavender color palette for brand consistency
 */
export default function SubtopicSection({
  id,
  title,
  summary,
  riskFactors,
  className = "",
  isFirst = false,
}: SubtopicSectionProps) {
  return (
    <div id={id} data-subtopic-id={id} className={`w-full ${className}`}>
      {/* Enhanced divider with improved spacing */}
      {!isFirst && (
        <div className="mt-12 mb-12">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        </div>
      )}

      {/* Subtopic heading with improved visual distinction */}
      <div className="mb-6 pb-2 border-b border-gray-200">
        <div className="flex items-center mb-1">
          <span className="text-xs font-medium uppercase tracking-wider text-lavender-600 mr-2">
            Subtopic
          </span>
        </div>
        <h3 className={`${textPresets.h4} text-gray-800 font-medium`}>
          {title}
        </h3>
      </div>

      {/* Enhanced summary section with visual improvements */}
      <div className="mb-8">
        <div className="bg-gray-50 border border-gray-100 rounded-lg p-5 relative">
          <div className="flex items-start">
            <svg
              className="w-5 h-5 text-lavender-600 mt-0.5 mr-2 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="flex-1">
              <h4
                className={`${textPresets.label} text-gray-700 font-medium mb-3`}
              >
                Summary
              </h4>

              {/* Client component handles the collapsible functionality */}
              <CollapsibleSummary summary={summary} />
            </div>
          </div>
        </div>
      </div>

      {/* Risk factors section with explicit header */}
      <div className="mb-4 ml-1">
        <h4 className={`${textPresets.label} text-gray-600 font-medium mb-6`}>
          {riskFactors.length > 0 ? (
            <>Key Factors ({riskFactors.length})</>
          ) : (
            "Key Factors"
          )}
        </h4>

        <div className="space-y-8">
          {riskFactors.map((riskFactor) => (
            <RiskFactorCard
              key={riskFactor.id}
              id={String(riskFactor.id)}
              name={riskFactor.name}
              type={riskFactor.type}
              points={riskFactor.points}
              factorLabel="Factor"
            />
          ))}

          {riskFactors.length === 0 && (
            <p className={`${textPresets.paragraphSmall} italic text-gray-500`}>
              No risk factors available for this subtopic.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
