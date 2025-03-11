import React from "react";
import { textPresets } from "../theme";
import {
  CalendarIcon,
  MapPinIcon,
  UserGroupIcon,
  DocumentTextIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";

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
  }: {
    icon: React.ReactNode;
    label: string;
    value: string | string[] | undefined;
    className?: string;
  }) => {
    if (!value || (Array.isArray(value) && value.length === 0)) return null;

    return (
      <div className={`flex items-start ${className}`}>
        <div className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-gray-500">
          {icon}
        </div>
        <div>
          <p className={`${textPresets.label} text-gray-600 mb-1`}>{label}</p>
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
          ) : (
            <p className={`${textPresets.paragraph} text-gray-800`}>{value}</p>
          )}
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
            Project Background
          </h2>
        </div>
      </div>

      {/* Content with responsive layout */}
      <div className="px-8 pb-8">
        <div className="ml-5">
          {/* Image rendering block removed */}

          {/* Key project information in a responsive grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
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

          {/* Project description section */}
          <div className="mt-8">
            <DetailItem
              icon={<DocumentTextIcon />}
              label="Description"
              value={data.description}
              className="col-span-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
