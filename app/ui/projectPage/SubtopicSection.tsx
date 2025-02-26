import React from "react";
import RiskFactorCard, { RiskFactor } from "./RiskFactorCard";

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
  riskFactors: RiskFactor[];

  /**
   * Optional CSS class name for additional styling
   */
  className?: string;
}

/**
 * SubtopicSection component - Displays a subtopic with its title, summary and related risk factors
 * Used in topic pages to organize content into logical sections
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
      {/* Subtopic header with 40px margin from previous content (mt-10) */}
      <div className="mt-10 mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600">{summary}</p>
      </div>

      {/* Risk factor cards with 16px gap between them */}
      <div className="space-y-4">
        {riskFactors.length > 0 ? (
          riskFactors.map((riskFactor) => (
            <RiskFactorCard key={riskFactor.id} riskFactor={riskFactor} />
          ))
        ) : (
          <p className="text-gray-500 italic">
            No risk factors available for this subtopic.
          </p>
        )}
      </div>
    </section>
  );
}
