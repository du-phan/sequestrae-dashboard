import React from "react";
import { ComponentRiskFactor } from "../../../types/ui";
import RiskFactorCard from "./RiskFactorCard";

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
 */
export default function SubtopicSection({
  id,
  title,
  summary,
  riskFactors,
  className = "",
}: SubtopicSectionProps) {
  return (
    <div id={id} className={`w-full ${className}`}>
      <h3 className="text-lg font-medium text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 text-sm leading-relaxed">{summary}</p>

      <div className="space-y-5">
        {riskFactors.map((riskFactor) => (
          <RiskFactorCard
            key={riskFactor.id}
            name={riskFactor.name}
            type={riskFactor.type}
            points={riskFactor.points}
          />
        ))}

        {riskFactors.length === 0 && (
          <p className="text-sm text-gray-500 italic">
            No risk factors available for this subtopic.
          </p>
        )}
      </div>
    </div>
  );
}
