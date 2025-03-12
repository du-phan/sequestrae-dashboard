import React from "react";
import { textPresets } from "@/app/ui/theme";

// Icons for the five dimensions
import {
  CalculatorIcon,
  ExclamationTriangleIcon,
  GlobeAmericasIcon,
  ScaleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export default function DashboardHeader() {
  return (
    <div className="bg-white shadow-sm rounded-lg mb-8 overflow-hidden">
      {/* Main header section */}
      <div className="p-8">
        <div className="flex flex-col lg:flex-row lg:items-start gap-6">
          {/* Left column with title and intro */}
          <div className="flex-1">
            <h1
              className={`${textPresets.h2} text-gray-900 mb-3 leading-tight`}
            >
              Welcome to Sequestrae
            </h1>
            <p className={`${textPresets.paragraph} text-gray-700`}>
              We gather biochar carbon removal projects from the leading
              registries—Puro.earth, Verra, and Riverse—into one streamlined
              platform. Every project is carefully analyzed using our
              transparent, standardized evaluation framework, making it easier
              for you to quickly compare and understand biochar project quality.
            </p>
          </div>

          {/* Right column with key highlights */}
          <div className="lg:max-w-md lg:pl-6 lg:border-l lg:border-gray-100 lg:pt-2">
            <h3
              className={`${textPresets.h5} text-gray-800 mb-3 font-semibold text-base`}
            >
              With Sequestrae, your team can:
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2">
                <div className="flex-shrink-0 w-5 h-5 text-blue-600">✓</div>
                <span>
                  Accelerate your due diligence and simplify project analysis.
                </span>
              </li>
              <li className="flex gap-2">
                <div className="flex-shrink-0 w-5 h-5 text-blue-600">✓</div>
                <span>
                  Select high-quality projects aligned with your ESG goals.
                </span>
              </li>
              <li className="flex gap-2">
                <div className="flex-shrink-0 w-5 h-5 text-blue-600">✓</div>
                <span>
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
