import React from "react";
import { textPresets } from "@/app/ui/theme";
import Image from "next/image";

export default function DashboardHeader() {
  return (
    <div className="bg-white shadow-sm rounded-xl mb-8 overflow-hidden border border-gray-100">
      {/* Add a subtle gradient accent at the top */}
      <div className="h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>

      {/* Main header section with improved spacing */}
      <div className="p-8">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          {/* Left column with refined typography */}
          <div className="flex-1">
            <h1
              className={`${textPresets.h2} text-gray-900 mb-4 leading-tight`}
            >
              Welcome to Sequestrae
            </h1>
            <p
              className={`${textPresets.paragraph} text-gray-700 max-w-prose leading-relaxed`}
            >
              We gather biochar carbon removal projects from the leading
              registries—Puro.earth, Verra, and Riverse—into one streamlined
              platform. Every project is carefully analyzed using our
              transparent, standardized evaluation framework, making it easier
              for you to quickly compare and understand biochar project quality.
            </p>
          </div>

          {/* Right column with key highlights and improved styling */}
          <div className="lg:max-w-md lg:pl-8 lg:border-l lg:border-gray-100 lg:pt-2">
            <h3
              className={`${textPresets.h5} text-gray-800 mb-4 font-semibold text-base`}
            >
              With Sequestrae, your team can:
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex gap-3 items-start">
                <div className="flex-shrink-0 w-5 h-5 text-blue-600 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="leading-tight">
                  Accelerate your due diligence and simplify project analysis.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <div className="flex-shrink-0 w-5 h-5 text-blue-600 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="leading-tight">
                  Select high-quality projects aligned with your ESG goals.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <div className="flex-shrink-0 w-5 h-5 text-blue-600 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="leading-tight">
                  Take actionable next steps with concrete recommendations.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
