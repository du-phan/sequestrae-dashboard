import React from "react";
import { textPresets } from "../theme";
import {
  CalendarIcon,
  MapPinIcon,
  UserGroupIcon,
  DocumentTextIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";
import CollapsibleSummary from "./CollapsibleSummary";

// Interface for project background data
export interface ProjectBackgroundData {
  /**
   * Project name/title
   */
  name: string;

  /**
   * Detailed description of the project
   */
  description: string;

  /**
   * Geographic location of the project
   */
  location?: string;

  /**
   * When the project was started (formatted string)
   */
  startDate?: string;

  /**
   * Organizations or entities responsible for the project
   */
  stakeholders?: string[];

  /**
   * Type of feedstock used in the project
   */
  feedstockType?: string;
}

interface ProjectBackgroundSectionProps {
  /**
   * Project background data to display
   */
  data: ProjectBackgroundData;

  /**
   * Optional CSS class name for additional styling
   */
  className?: string;
}

/**
 * Displays background information about a project in a structured, scannable format
 * with visual elements to enhance readability
 */
export default function ProjectBackgroundSection({
  data,
  className = "",
}: ProjectBackgroundSectionProps) {
  // Helper to render a detail item with an icon
  const DetailItem = ({
    icon,
    label,
    value,
    className = "",
    collapsible = false,
  }: {
    icon: React.ReactNode;
    label: string;
    value: string | string[] | undefined;
    className?: string;
    collapsible?: boolean;
  }) => {
    if (!value || (Array.isArray(value) && value.length === 0)) return null;

    return (
      <div className={`flex items-start group ${className}`}>
        <div className="flex-shrink-0 w-5 h-5 mt-0.5 mr-3 text-lavender-500 mb-1">
          {icon}
        </div>
        <div className={`flex-grow ${collapsible ? "relative" : ""}`}>
          <p className={`${textPresets.label} text-gray-500 mb-1`}>{label}</p>
          {Array.isArray(value) ? (
            <ul className="space-y-1">
              {value.map((item, index) => (
                <li
                  key={index}
                  className={`${textPresets.paragraph} text-gray-800`}
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : collapsible ? (
            <div className="pb-2">
              <CollapsibleSummary summary={value} />
            </div>
          ) : (
            <p className={`${textPresets.paragraph} text-gray-800`}>{value}</p>
          )}
        </div>
      </div>
    );
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-sm ${className}`}
      data-section-id="background"
    >
      {/* Section header with standard styling */}
      <div className="p-8 pb-0">
        <div className="flex mb-6">
          <div className="flex-shrink-0 w-1 bg-lavender-500 rounded-full self-stretch mr-4"></div>
          <h2
            className={`${textPresets.h3} text-gray-900 mb-0 text-2xl sm:text-3xl font-bold tracking-tight`}
          >
            Project Background
          </h2>
        </div>
      </div>

      {/* Content with improved spacing */}
      <div className="px-8 pb-8 pt-6">
        <div className="ml-5">
          {/* Key project information in a responsive grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
            <DetailItem
              icon={<CalendarIcon />}
              label="Project Start"
              value={data.startDate}
              className="col-span-1"
            />

            <DetailItem
              icon={<MapPinIcon />}
              label="Location"
              value={data.location}
              className="col-span-1"
            />

            <DetailItem
              icon={<BeakerIcon />}
              label="Feedstock Type"
              value={data.feedstockType}
              className="col-span-1"
            />

            <DetailItem
              icon={<UserGroupIcon />}
              label="Key Stakeholders"
              value={data.stakeholders}
              className="col-span-1"
            />
          </div>

          {/* Project description section with collapsible functionality */}
          <div className="border-t border-gray-100 pt-6">
            <DetailItem
              icon={<DocumentTextIcon />}
              label="Description"
              value={data.description}
              className="col-span-2"
              collapsible={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
