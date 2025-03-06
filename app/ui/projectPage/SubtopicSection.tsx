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
 * Redesigned with elegant divider and improved spacing
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
      {/* Elegant divider with improved spacing */}
      {!isFirst && (
        <div className="mt-10 mb-10">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        </div>
      )}

      {/* Subtopic heading and summary */}
      <h3 className={`${textPresets.h4} text-gray-700 mb-3 font-medium`}>
        {title}
      </h3>
      <p className={`${textPresets.paragraphSmall} mb-6 text-gray-600`}>
        {summary}
      </p>

      <div className="space-y-6">
        {riskFactors.map((riskFactor) => (
          <RiskFactorCard
            key={riskFactor.id}
            id={String(riskFactor.id)}
            name={riskFactor.name}
            type={riskFactor.type}
            points={riskFactor.points}
          />
        ))}

        {riskFactors.length === 0 && (
          <p className={`${textPresets.paragraphSmall} italic text-gray-500`}>
            No risk factors available for this subtopic.
          </p>
        )}
      </div>
    </div>
  );
}
