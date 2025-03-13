import React from "react";
import { textPresets } from "../theme";
import {
  BookOpenIcon,
  ArrowSmallRightIcon,
  ClipboardDocumentCheckIcon,
  ShieldExclamationIcon,
  GlobeAmericasIcon, // Replacement for TreeIcon
  DocumentTextIcon,
  UserGroupIcon,
  // Removed StarIcon import
} from "@heroicons/react/24/outline";
import Link from "next/link";

interface TopicNavigationGuideSectionProps {
  /**
   * Project ID for navigation links
   */
  projectId: string;

  /**
   * Optional CSS class name for additional styling
   */
  className?: string;
}

/**
 * Explains the structure of the analysis and guides users through the site
 */
export default function TopicNavigationGuideSection({
  projectId,
  className = "",
}: TopicNavigationGuideSectionProps) {
  // Topics with their descriptions and hrefs - updated with unique icons
  const topics = [
    {
      name: "Carbon Accounting & Integrity",
      description:
        "Carbon credit generation, validation, and verification procedures",
      href: `/project/${projectId}/integrity`,
      icon: <ClipboardDocumentCheckIcon className="h-5 w-5" />,
    },
    {
      name: "Delivery Risk",
      description: "Factors affecting carbon sequestration delivery",
      href: `/project/${projectId}/delivery`,
      icon: <ShieldExclamationIcon className="h-5 w-5" />,
    },
    {
      name: "Environmental Factor",
      description: "Ecological impacts and sustainability measures",
      href: `/project/${projectId}/environment`,
      icon: <GlobeAmericasIcon className="h-5 w-5" />, // Changed to GlobeAmericasIcon
    },
    {
      name: "Policy Landscape",
      description: "Regulatory frameworks and compliance requirements",
      href: `/project/${projectId}/policy`,
      icon: <DocumentTextIcon className="h-5 w-5" />,
    },
    {
      name: "Social Impact",
      description: "Community relationships and benefit distribution",
      href: `/project/${projectId}/social`,
      icon: <UserGroupIcon className="h-5 w-5" />,
    },
  ];

  // Component that renders a card for each topic
  const TopicCard = ({
    name,
    description,
    href,
    icon,
  }: {
    name: string;
    description: string;
    href: string;
    icon: React.ReactNode;
  }) => {
    return (
      <Link
        href={href}
        className="flex items-start p-4 rounded-lg border border-gray-100 hover:border-blue-100 hover:bg-blue-50 transition-colors group"
      >
        <div className="mr-4 text-gray-500 group-hover:text-blue-600">
          {icon}
        </div>
        <div>
          <h4
            className={`${textPresets.label} text-gray-800 mb-1 group-hover:text-blue-600`}
          >
            {name}
          </h4>
          <p className={`${textPresets.caption} text-gray-600`}>
            {description}
          </p>
        </div>
        <ArrowSmallRightIcon className="h-5 w-5 ml-auto text-gray-400 group-hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
      </Link>
    );
  };

  // Enhanced component for the analysis structure explanation with improved visual design
  const AnalysisStructureCard = () => {
    return (
      <div className="rounded-lg border border-gray-100 p-5 bg-gray-50 relative overflow-hidden">
        {/* Remove the diagonal stripes pattern since we're using background color instead */}

        <h4
          className={`${textPresets.h4} text-gray-800 mb-4 flex items-center`}
        >
          <BookOpenIcon className="h-5 w-5 mr-2 text-blue-600" />
          Methodology
        </h4>

        {/* Light divider to separate from main content */}
        <div className="w-16 h-0.5 bg-blue-100 mb-5"></div>

        <p className={`${textPresets.paragraph} text-gray-600 mb-5`}>
          Each topic is analyzed using a consistent framework to help you
          understand the project comprehensively:
        </p>

        {/* Visual process flow with connected cards - improved spacing */}
        <div className="relative space-y-4 pb-1">
          {/* Connector line for visual flow (hidden on mobile) */}
          <div className="absolute left-4 top-8 bottom-10 w-0.5 bg-gray-200 hidden md:block"></div>

          {/* Step 1: Subtopics - with fixed padding */}
          <div className="flex flex-col md:flex-row md:items-center gap-3 relative">
            <div className="flex-shrink-0 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-sm border border-gray-200 text-gray-700 z-10">
              <span className="inline-flex items-center justify-center text-sm font-semibold leading-none">
                1
              </span>
            </div>
            <div className="flex-1 bg-white px-4 py-4 rounded-lg border border-gray-100 shadow-sm hover:border-blue-100 transition-all duration-300">
              <h5 className={`${textPresets.label} text-gray-800 mb-1.5`}>
                Subtopics
              </h5>
              <p
                className={`${textPresets.paragraph} text-gray-600 max-w-prose mb-0`}
              >
                Major areas of analysis are divided into specific subtopics that
                examine key aspects of the project.
              </p>
            </div>
          </div>

          {/* Step 2: Factors - with fixed padding */}
          <div className="flex flex-col md:flex-row md:items-center gap-3 relative">
            <div className="flex-shrink-0 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-sm border border-gray-200 text-gray-700 z-10">
              <span className="inline-flex items-center justify-center text-sm font-semibold leading-none">
                2
              </span>
            </div>
            <div className="flex-1 bg-white px-4 py-4 rounded-lg border border-gray-100 shadow-sm hover:border-blue-100 transition-all duration-300">
              <h5 className={`${textPresets.label} text-gray-800 mb-1.5`}>
                Factors
              </h5>
              <p
                className={`${textPresets.paragraph} text-gray-600 max-w-prose mb-0`}
              >
                Within each subtopic, we identify specific factors that could
                impact project success.
              </p>
            </div>
          </div>

          {/* Step 3: Assessment Framework - refined number styling */}
          <div className="flex flex-col md:flex-row md:items-center gap-3 relative">
            <div className="flex-shrink-0 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-sm border border-gray-200 text-gray-700 z-10">
              <span className="inline-flex items-center justify-center text-sm font-semibold leading-none">
                3
              </span>
            </div>
            <div className="flex-1 bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
              <h5 className={`${textPresets.label} text-gray-800 mb-2`}>
                Assessment Framework
              </h5>
              <p
                className={`${textPresets.paragraph} text-gray-600 max-w-prose mb-4`}
              >
                For each factor, the insights are organized into three
                categories to provide a comprehensive evaluation:
              </p>

              {/* Improved visual cards - matching RiskFactorCard styling */}
              <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
                {/* Strengths card - with consistent styling */}
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm transition-all duration-200 hover:border-green-200 hover:shadow">
                  <div className="p-3 border-b border-gray-100 bg-green-50">
                    <p
                      className={`${textPresets.label} text-green-700 font-medium`}
                    >
                      Strengths
                    </p>
                  </div>
                  <div className="p-3">
                    <p className={`${textPresets.paragraph} text-gray-600`}>
                      Positive aspects that support project success
                    </p>
                  </div>
                </div>

                {/* Considerations card - with consistent styling */}
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm transition-all duration-200 hover:border-amber-200 hover:shadow">
                  <div className="p-3 border-b border-gray-100 bg-amber-50">
                    <p
                      className={`${textPresets.label} text-amber-700 font-medium`}
                    >
                      Considerations
                    </p>
                  </div>
                  <div className="p-3">
                    <p className={`${textPresets.paragraph} text-gray-600`}>
                      Areas that require attention or may present challenges
                    </p>
                  </div>
                </div>

                {/* Recommended Actions card - with consistent styling */}
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm transition-all duration-200 hover:border-blue-200 hover:shadow">
                  <div className="p-3 border-b border-gray-100 bg-blue-50">
                    <p
                      className={`${textPresets.label} text-blue-700 font-medium`}
                    >
                      Recommended Actions
                    </p>
                  </div>
                  <div className="p-3">
                    <p className={`${textPresets.paragraph} text-gray-600`}>
                      Suggestions to address considerations or enhance outcomes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`bg-white rounded-lg shadow-sm ${className}`}>
      {/* Section header with standard styling */}
      <div className="p-6 pb-4">
        <div className="flex mb-4">
          <div className="flex-shrink-0 w-1 bg-blue-600 rounded-full self-stretch"></div>
          <h2 className={`${textPresets.h3} text-gray-800 ml-4 py-0 mb-0`}>
            How to Navigate This Analysis
          </h2>
        </div>
      </div>

      {/* Content area - reduced unnecessary margins */}
      <div className="px-6 pb-6">
        <p className={`${textPresets.paragraph} text-gray-600 mb-5`}>
          Our analysis is organized into five key topics, each examining
          different aspects of the project. Click on any topic to explore
          detailed findings and recommendations.
        </p>

        {/* Topics grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {topics.map((topic) => (
            <TopicCard
              key={topic.name}
              name={topic.name}
              description={topic.description}
              href={topic.href}
              icon={topic.icon}
            />
          ))}
        </div>

        {/* Simple divider without star icon */}
        <div className="h-px bg-gray-100 mb-6"></div>

        {/* Analysis structure explanation - with background color styling */}
        <AnalysisStructureCard />
      </div>
    </div>
  );
}
