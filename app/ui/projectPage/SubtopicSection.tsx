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
}

/**
 * SubtopicSection component - Displays a subtopic with its summary and risk factors
 * Redesigned with subtle separator and improved spacing
 */
export default function SubtopicSection({
  id,
  title,
  summary,
  riskFactors,
  className = "",
}: SubtopicSectionProps) {
  return (
    <div id={id} data-subtopic-id={id} className={`w-full ${className}`}>
      {/* Subtle separator line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6"></div>

      {/* Heading with proper spacing */}
      <h3 className={`${textPresets.h4} text-gray-800 mb-4`}>{title}</h3>
      <p className={`${textPresets.paragraphSmall} mb-6`}>{summary}</p>

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
