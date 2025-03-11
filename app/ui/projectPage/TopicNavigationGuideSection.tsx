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
  CheckCircleIcon,
  ExclamationCircleIcon,
  ArrowRightCircleIcon,
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

  // Component for the analysis structure explanation - improved spacing
  const AnalysisStructureCard = () => {
    return (
      <div className="rounded-lg border border-gray-100 p-5 mt-4">
        <h4
          className={`${textPresets.h4} text-gray-800 mb-3 flex items-center`}
        >
          <BookOpenIcon className="h-5 w-5 mr-2 text-gray-600" />
          How Our Analysis Is Organized
        </h4>

        <p className={`${textPresets.paragraph} text-gray-700 mb-2`}>
          Each topic is analyzed using a consistent framework to help you
          understand the project comprehensively:
        </p>

        {/* Reduced spacing between numbered points */}
        <div className="pl-2 space-y-2">
          <div className="flex">
            <div className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0 mt-0.5">
              <span className="block">1</span>
            </div>
            <p className={`${textPresets.paragraph} text-gray-700 my-0`}>
              <strong>Subtopics</strong>: Major areas of analysis are divided
              into specific subtopics that examine key aspects of the project.
            </p>
          </div>

          <div className="flex">
            <div className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0 mt-0.5">
              <span className="block">2</span>
            </div>
            <p className={`${textPresets.paragraph} text-gray-700 my-0`}>
              <strong>Factors</strong>: Within each subtopic, we identify
              specific factors that could impact project success.
            </p>
          </div>

          <div className="flex">
            <div className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0 mt-0.5">
              <span className="block">3</span>
            </div>
            <div>
              <p className={`${textPresets.paragraph} text-gray-700 mb-2`}>
                <strong>Assessment Framework</strong>: Each factor is assessed
                using three categories:
              </p>
              <ul className="space-y-2 ml-1">
                <li className="flex items-start">
                  <div className="text-green-500 mr-2 flex-shrink-0 mt-1">
                    <CheckCircleIcon className="h-4 w-4" />
                  </div>
                  <p
                    className={`${textPresets.paragraphSmall} text-gray-700 my-0`}
                  >
                    <strong>Strengths</strong>: Positive aspects that support
                    project success
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="text-amber-500 mr-2 flex-shrink-0 mt-1">
                    <ExclamationCircleIcon className="h-4 w-4" />
                  </div>
                  <p
                    className={`${textPresets.paragraphSmall} text-gray-700 my-0`}
                  >
                    <strong>Considerations</strong>: Areas that require
                    attention or may present challenges
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-500 mr-2 flex-shrink-0 mt-1">
                    <ArrowRightCircleIcon className="h-4 w-4" />
                  </div>
                  <p
                    className={`${textPresets.paragraphSmall} text-gray-700 my-0`}
                  >
                    <strong>Recommended Actions</strong>: Suggestions to address
                    considerations or enhance project outcomes
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`bg-white rounded-lg shadow-sm ${className}`}>
      {/* Section header with standard styling */}
      <div className="p-8 pb-0">
        <div className="flex mb-8">
          <div className="flex-shrink-0 w-1 bg-blue-600 rounded-full self-stretch"></div>
          <h2 className={`${textPresets.h3} text-gray-800 ml-4 py-0 mb-0`}>
            How to Navigate This Analysis
          </h2>
        </div>
      </div>

      {/* Content area */}
      <div className="px-8 pb-8">
        <div className="ml-5">
          <p className={`${textPresets.paragraph} text-gray-600 mb-5`}>
            Our analysis is organized into five key topics, each examining
            different aspects of the project. Click on any topic to explore
            detailed findings and recommendations.
          </p>

          {/* Topics grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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

          {/* Analysis structure explanation */}
          <AnalysisStructureCard />
        </div>
      </div>
    </div>
  );
}
