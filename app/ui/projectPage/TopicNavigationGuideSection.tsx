import React from "react";
import { textPresets } from "../theme";
import {
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
 * Navigation component for project analysis topics
 */
export default function TopicNavigationGuideSection({
  projectId,
  className = "",
}: TopicNavigationGuideSectionProps) {
  // Topics with their descriptions and hrefs
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
      name: "Environmental Impact",
      description: "Ecological impacts and sustainability measures",
      href: `/project/${projectId}/environment`,
      icon: <GlobeAmericasIcon className="h-5 w-5" />,
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
        className="flex items-start p-5 rounded-lg border border-gray-200 hover:border-lavender-200 bg-white hover:bg-lavender-50 transition-all duration-200 shadow-sm hover:shadow group relative"
      >
        {/* Icon with enhanced styling */}
        <div className="flex-shrink-0 mr-4 text-lavender-600 bg-lavender-50 p-2 rounded-lg group-hover:bg-lavender-100 transition-colors">
          {icon}
        </div>

        {/* Content container with improved spacing */}
        <div className="flex-grow pr-6">
          <h4
            className={`${textPresets.label} text-gray-900 font-medium mb-1.5 group-hover:text-lavender-700 transition-colors`}
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
          <ArrowSmallRightIcon className="h-5 w-5 text-gray-400 group-hover:text-lavender-600 group-hover:translate-x-0.5 transition-all duration-200" />
        </div>
      </Link>
    );
  };

  return (
    <div className={`bg-white rounded-lg shadow-sm ${className}`}>
      {/* Section header with standard styling */}
      <div className="p-6 pb-4">
        <div className="flex mb-4">
          <div className="flex-shrink-0 w-1 bg-lavender-600 rounded-full self-stretch"></div>
          <h2 className={`${textPresets.h3} text-gray-800 ml-4 py-0 mb-0`}>
            Navigate This Project&#39;s Analysis
          </h2>
        </div>
      </div>

      {/* Content area */}
      <div className="px-6 pb-6">
        <div className="ml-5">
          <p className={`${textPresets.paragraph} text-gray-600 mb-5`}>
            Explore this project through five key analysis topics. Click any
            topic below to go to the detailed insights:
          </p>

          {/* Topics grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        </div>
      </div>
    </div>
  );
}
