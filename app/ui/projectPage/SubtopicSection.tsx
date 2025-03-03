import React from "react";
import RiskFactorCard from "./RiskFactorCard";
import { ComponentRiskFactor } from "../../../types/project";

interface SubtopicSectionProps {
  /**
   * The ID of the subtopic (used for scroll-to functionality)
   */
  id: string;

  /**
   * The title of the subtopic to be displayed as H3
   */
  title: string;

  /**
   * A brief summary or description of the subtopic
   */
  summary: string;

  /**
   * Array of risk factor objects to be displayed in cards
   */
  riskFactors: ComponentRiskFactor[];

  /**
   * Optional CSS class name for additional styling
   */
  className?: string;
}

/**
 * SubtopicSection component - Displays a subtopic with its title, summary and related risk factors
 * Simplified padding structure for better container alignment
 */
export default function SubtopicSection({
  id,
  title,
  summary,
  riskFactors,
  className = "",
}: SubtopicSectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 ${className}`}>
      {/* Subtopic header with consistent spacing */}
      <div className="mb-6 pb-3 border-b border-gray-100">
        <div className="relative pl-4">
          <div className="absolute left-0 top-1.5 w-1 h-4 bg-gray-400 rounded-full"></div>
          <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
            {title}
          </h3>
        </div>
        <p className="text-base leading-relaxed text-gray-700 mt-3 max-w-prose ml-4">
          {summary}
        </p>
      </div>

      {/* Risk factor cards with consistent spacing */}
      <div className="space-y-5 ml-4">
        {riskFactors.length > 0 ? (
          <>
            <p className="text-xs uppercase tracking-wide text-gray-500 font-medium mb-1">
              Risk Factors
            </p>
            <div className="space-y-4">
              {riskFactors.map((riskFactor) => (
                <RiskFactorCard
                  key={riskFactor.id}
                  riskFactor={riskFactor}
                  className="bg-white hover:shadow transition-shadow duration-200"
                />
              ))}
            </div>
          </>
        ) : (
          <p className="text-sm italic py-3 bg-gray-50 rounded-md px-4 text-gray-500">
            No risk factors available for this subtopic.
          </p>
        )}
      </div>
    </section>
  );
}
