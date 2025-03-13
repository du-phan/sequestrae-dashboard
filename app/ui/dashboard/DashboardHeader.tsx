import React from "react";
import { textPresets } from "@/app/ui/theme";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

export default function DashboardHeader() {
  return (
    <div className="bg-white shadow-sm rounded-xl mb-6 overflow-hidden border border-gray-100">
      {/* Subtle gradient accent */}
      <div className="h-1 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-90"></div>

      {/* Main header section with improved spacing */}
      <div className="p-6 md:p-8">
        <div className="flex flex-col lg:flex-row lg:items-start gap-6 md:gap-8">
          {/* Left column with more concise text */}
          <div className="flex-1">
            <h1
              className={`${textPresets.h2} text-gray-900 mb-3 leading-tight`}
            >
              Biochar Carbon Removal Intelligence
            </h1>
            <p
              className={`${textPresets.paragraph} text-gray-600 max-w-2xl leading-relaxed mb-4`}
            >
              Explore biochar projects from leading registries—Puro.earth,
              Verra, and Riverse—analyzed through our standardized evaluation
              framework to help you make informed carbon removal decisions.
            </p>

            <a
              href="#projects"
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors group"
            >
              Browse all projects
              <ArrowRightIcon className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Right column with improved feature list */}
          <div className="lg:max-w-sm lg:pl-6 lg:border-l lg:border-gray-100">
            <h3 className={`text-gray-800 font-medium mb-4 text-base`}>
              With Sequestrae, you can:
            </h3>
            <ul className="space-y-3.5">
              {[
                "Compare projects using consistent quality metrics",
                "Accelerate due diligence with standardized analysis",
                "Select projects aligned with your ESG goals",
              ].map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-5 h-5 text-blue-600 bg-blue-50 rounded-full flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3 h-3"
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
                  <span className="text-sm text-gray-700 leading-tight">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
