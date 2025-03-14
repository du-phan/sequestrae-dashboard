import React from "react";
import { ComponentRiskFactor } from "../../../types/ui";
import RiskFactorCard from "./RiskFactorCard";
import { textPresets } from "../theme";

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
 * Improved with clearer visual hierarchy and better labeling
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
      <div className="mb-6 pb-2 border-b border-gray-100">
        <div className="flex items-center mb-1">
          <span className="text-xs font-medium uppercase tracking-wider text-blue-600 mr-2">
            Subtopic
          </span>
        </div>
        <h3 className={`${textPresets.h4} text-gray-800 font-medium`}>
          {title}
        </h3>
      </div>

      {/* Enhanced summary section */}
      <div className="mb-8 ml-1">
        <p className={`${textPresets.paragraph} text-gray-600`}>{summary}</p>
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
              // Pass a label to explicitly identify this as a factor
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
