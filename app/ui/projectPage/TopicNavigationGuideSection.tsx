import React from "react";
import { textPresets } from "../theme";
import {
  BookOpenIcon,
  ArrowSmallRightIcon,
  ClipboardDocumentCheckIcon,
  ShieldExclamationIcon,
  GlobeAmericasIcon,
  DocumentTextIcon,
  UserGroupIcon,
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
        className="flex items-start p-5 rounded-lg border border-gray-200 hover:border-blue-200 bg-white hover:bg-blue-50 transition-all duration-200 shadow-sm hover:shadow group relative"
      >
        {/* Icon with enhanced styling */}
        <div className="flex-shrink-0 mr-4 text-blue-600 bg-blue-50 p-2 rounded-lg group-hover:bg-blue-100 transition-colors">
          {icon}
        </div>

        {/* Content container with improved spacing */}
        <div className="flex-grow pr-6">
          <h4
            className={`${textPresets.label} text-gray-900 font-medium mb-1.5 group-hover:text-blue-700 transition-colors`}
          >
            {name}
          </h4>
          <p
            className={`${textPresets.caption} text-gray-600 group-hover:text-gray-700 transition-colors`}
          >
            {description}
          </p>
        </div>

        {/* Always visible arrow that enhances on hover */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center">
          <ArrowSmallRightIcon className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all duration-200" />
        </div>
      </Link>
    );
  };

  // Enhanced component for the analysis structure explanation with improved visual design
  const AnalysisStructureCard = () => {
    return (
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">
        {/* Streamlined header with improved vertical alignment */}
        <div className="p-4 border-b border-gray-100 bg-gray-50">
          <div className="flex items-center">
            <div className="flex-shrink-0 mr-2.5 text-blue-600 bg-blue-50 p-1 rounded-md">
              <BookOpenIcon className="h-4 w-4" />
            </div>
            <h4 className={`${textPresets.h4} text-gray-800 m-0`}>
              Methodology
            </h4>
          </div>
        </div>

        {/* Card body with consistent padding */}
        <div className="p-5">
          <p className={`${textPresets.paragraph} text-gray-600 mb-5`}>
            Each topic is analyzed using a consistent framework to help you
            understand the project comprehensively:
          </p>

          {/* Visual process flow with connected cards - improved spacing */}
          <div className="relative space-y-6 pb-1">
            {/* Connector line for visual flow (hidden on mobile) */}
            <div className="absolute left-4 top-10 bottom-12 w-0.5 bg-blue-100 hidden md:block"></div>

            {/* Step 1: Subtopics - with enhanced styling */}
            <div className="flex flex-col md:flex-row md:items-center gap-3 relative">
              <div className="flex-shrink-0 bg-blue-50 rounded-full w-8 h-8 flex items-center justify-center shadow-sm border border-blue-200 text-blue-700 z-10">
                <span className="inline-flex items-center justify-center text-sm font-semibold leading-none">
                  1
                </span>
              </div>
              <div className="flex-1 bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow hover:border-blue-200 transition-all duration-300">
                <h5
                  className={`${textPresets.label} text-gray-900 font-medium mb-1.5`}
                >
                  Subtopics
                </h5>
                <p
                  className={`${textPresets.paragraph} text-gray-600 max-w-prose mb-0`}
                >
                  Major areas of analysis are divided into specific subtopics
                  that examine key aspects of the project.
                </p>
              </div>
            </div>

            {/* Step 2: Factors - with enhanced styling */}
            <div className="flex flex-col md:flex-row md:items-center gap-3 relative">
              <div className="flex-shrink-0 bg-blue-50 rounded-full w-8 h-8 flex items-center justify-center shadow-sm border border-blue-200 text-blue-700 z-10">
                <span className="inline-flex items-center justify-center text-sm font-semibold leading-none">
                  2
                </span>
              </div>
              <div className="flex-1 bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow hover:border-blue-200 transition-all duration-300">
                <h5
                  className={`${textPresets.label} text-gray-900 font-medium mb-1.5`}
                >
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

            {/* Step 3: Assessment Framework - with enhanced styling */}
            <div className="flex flex-col md:flex-row md:items-center gap-3 relative">
              <div className="flex-shrink-0 bg-blue-50 rounded-full w-8 h-8 flex items-center justify-center shadow-sm border border-blue-200 text-blue-700 z-10">
                <span className="inline-flex items-center justify-center text-sm font-semibold leading-none">
                  3
                </span>
              </div>
              <div className="flex-1 bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow hover:border-blue-200 transition-all duration-300">
                <h5
                  className={`${textPresets.label} text-gray-900 font-medium mb-2`}
                >
                  Assessment Framework
                </h5>
                <p
                  className={`${textPresets.paragraph} text-gray-600 max-w-prose mb-4`}
                >
                  For each factor, the insights are organized into three
                  categories to provide a comprehensive evaluation:
                </p>

                {/* Clean visual cards without icons */}
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                  {/* Strengths card - no icon */}
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm transition-all duration-200 hover:shadow hover:border-green-200">
                    <div className="py-2.5 border-b border-gray-100 bg-green-50">
                      <p
                        className={`${textPresets.label} text-green-700 font-medium text-center`}
                      >
                        Strengths
                      </p>
                    </div>
                    <div className="p-3">
                      <p
                        className={`${textPresets.caption} text-gray-600 text-center`}
                      >
                        Positive aspects that support project success
                      </p>
                    </div>
                  </div>

                  {/* Considerations card - no icon */}
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm transition-all duration-200 hover:shadow hover:border-amber-200">
                    <div className="py-2.5 border-b border-gray-100 bg-amber-50">
                      <p
                        className={`${textPresets.label} text-amber-700 font-medium text-center`}
                      >
                        Considerations
                      </p>
                    </div>
                    <div className="p-3">
                      <p
                        className={`${textPresets.caption} text-gray-600 text-center`}
                      >
                        Areas that require attention or may present challenges
                      </p>
                    </div>
                  </div>

                  {/* Recommended Actions card - no icon */}
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm transition-all duration-200 hover:shadow hover:border-blue-200">
                    <div className="py-2.5 border-b border-gray-100 bg-blue-50">
                      <p
                        className={`${textPresets.label} text-blue-700 font-medium text-center`}
                      >
                        Recommended Actions
                      </p>
                    </div>
                    <div className="p-3">
                      <p
                        className={`${textPresets.caption} text-gray-600 text-center`}
                      >
                        Suggestions to address considerations or enhance
                        outcomes
                      </p>
                    </div>
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
        <div className="ml-5">
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
    </div>
  );
}
