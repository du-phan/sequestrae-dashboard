import React from "react";
import { textPresets } from "@/app/ui/theme";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import ButtonLink from "@/app/ui/common/ButtonLink";

export default function DashboardHeader() {
  return (
    <div className="bg-white rounded-lg shadow-md mb-8 overflow-hidden">
      <div className="p-6 md:p-8">
        {/* Header and content using grid layout for precise positioning */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Main content area - spans 8 columns */}
          <div className="lg:col-span-8">
            {/* Title section */}
            <div className="mb-6">
              <h1
                className={`text-3xl md:text-4xl font-bold text-gray-900 mb-2`}
              >
                Welcome to Sequestrae
              </h1>
              <div className="h-1 w-12 bg-[#A38DB7] rounded-full mb-4"></div>
            </div>

            {/* Main paragraph */}
            <p className={`${textPresets.paragraph} max-w-2xl mb-6`}>
              We simplify biochar project evaluation by turning complex public
              documents into clear, comparable insights. Using data from top
              registries (Puro.earth, Verra, Riverse) and a transparent,
              standardized framework, our analysis helps you quickly assess
              project quality, spot risks, and make informed decisions with
              confidence.
            </p>

            {/* Enhanced button with properly colored icon */}
            <ButtonLink
              href="#projects"
              variant="primary"
              size="md"
              icon={<ArrowRightIcon className="w-4 h-4" aria-hidden="true" />}
              ariaLabel="Browse all biochar projects"
            >
              Browse all projects
            </ButtonLink>
          </div>

          {/* Feature box positioned to align with the title - spans 4 columns */}
          <div className="mt-8 lg:mt-0 lg:col-span-4">
            <div className="bg-gray-50 rounded-lg p-6 h-auto">
              <h3 className="text-gray-800 font-semibold mb-4 text-base">
                With Sequestrae, you can:
              </h3>
              <ul className="space-y-4">
                {[
                  "Speed up due diligence with structured, transparent project insights",
                  "Identify credible biochar projects that align with your ESG strategy",
                  "Get actionable recommendations to address project risks and challenges",
                ].map((item, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-5 h-5 text-[#A38DB7] flex items-center justify-center mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
