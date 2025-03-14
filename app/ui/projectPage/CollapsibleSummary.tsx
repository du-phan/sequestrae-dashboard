"use client";

import React, { useState, useRef, useEffect } from "react";
import { textPresets } from "../theme";

interface CollapsibleSummaryProps {
  /**
   * The summary text to display
   */
  summary: string;

  /**
   * Optional CSS class name
   */
  className?: string;
}

/**
 * Client component that handles the collapsible summary functionality
 */
export default function CollapsibleSummary({
  summary,
  className = "",
}: CollapsibleSummaryProps) {
  // State for handling long summaries
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLongSummary, setIsLongSummary] = useState(false);
  const summaryRef = useRef<HTMLParagraphElement>(null);

  // Character threshold for considering a summary "long"
  const LONG_SUMMARY_THRESHOLD = 500;

  // Check if summary is long on mount and window resize
  useEffect(() => {
    const checkSummaryLength = () => {
      if (summary.length > LONG_SUMMARY_THRESHOLD) {
        setIsLongSummary(true);
        if (!isExpanded) {
          setIsExpanded(false); // Ensure collapsed state initially
        }
      } else {
        setIsLongSummary(false);
        setIsExpanded(true); // Always expanded for short summaries
      }
    };

    checkSummaryLength();

    // Also check on window resize as text wrapping can change
    window.addEventListener("resize", checkSummaryLength);
    return () => window.removeEventListener("resize", checkSummaryLength);
  }, [summary, isExpanded]);

  return (
    <div className={className}>
      <div
        className={`relative ${
          isLongSummary && !isExpanded ? "max-h-32 overflow-hidden" : ""
        }`}
      >
        <p
          ref={summaryRef}
          className={`${textPresets.paragraph} text-gray-600 whitespace-pre-line`}
        >
          {summary}
        </p>

        {/* Gradient fade effect for collapsed long summaries */}
        {isLongSummary && !isExpanded && (
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
        )}
      </div>

      {/* Show/hide button for long summaries */}
      {isLongSummary && (
        <div
          className={`flex justify-center ${
            !isExpanded ? "absolute bottom-3 left-0 w-full" : "mt-3"
          }`}
        >
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`${textPresets.caption} text-blue-600 hover:text-blue-700 flex items-center transition-colors px-3 py-1 bg-white border border-blue-100 rounded-full shadow-sm hover:shadow`}
          >
            {isExpanded ? (
              <>
                Show less
                <svg
                  className="w-3.5 h-3.5 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </>
            ) : (
              <>
                Read more
                <svg
                  className="w-3.5 h-3.5 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
