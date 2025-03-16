import React from "react";
import Link from "next/link";
import { textPresets } from "@/app/ui/theme";
import { Project } from "@/types/ui";
import { Tooltip } from "@/app/ui/common/Tooltip";
import {
  ArrowTopRightOnSquareIcon,
  EyeIcon,
  DocumentIcon,
} from "@heroicons/react/20/solid";
import ProjectFilters from "./ProjectFilters";

interface ProjectsTableProps {
  projects: Project[];
}

export default function ProjectsTable({ projects }: ProjectsTableProps) {
  return (
    <div
      className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mt-6"
      id="projects"
    >
      <div className="flex flex-col">
        <div className="pb-4">
          <h2
            className={`${textPresets.h4} text-gray-800 mb-6 flex items-center gap-2`}
          >
            <DocumentIcon
              className="w-5 h-5 text-lavender-400"
              aria-hidden="true"
            />
            Projects
          </h2>

          {/* Integrated search filters */}
          <ProjectFilters />
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-16 px-4 bg-white rounded-lg mt-3">
            <DocumentIcon
              className="mx-auto h-12 w-12 text-gray-300"
              aria-hidden="true"
            />
            <p className="mt-4 text-gray-700 font-medium text-lg">
              No project found
            </p>
            <p className="mt-2 text-sm text-gray-500 max-w-sm mx-auto">
              Try adjusting your search criteria to find what you are looking
              for.
            </p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-lg border border-gray-200 mt-3">
            <table
              className="min-w-full divide-y divide-gray-200 table-fixed"
              role="table"
              aria-label="Projects list"
              style={{ maxWidth: "1200px" }}
            >
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-5 pr-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-200 w-[30%]"
                  >
                    Project
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 border-b border-gray-200 w-[20%]"
                  >
                    Registry
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 border-b border-gray-200 w-[15%]"
                  >
                    Country
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 border-b border-gray-200 w-[25%]"
                  >
                    Feedstock Type
                  </th>
                  <th
                    scope="col"
                    className="relative py-3.5 pl-3 pr-5 border-b border-gray-200 w-[10%]"
                  >
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {projects.map((project, idx) => (
                  <tr
                    key={project.project_id}
                    className={`${
                      idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-lavender-50 transition-colors duration-200`}
                  >
                    <td className="py-4 pl-5 pr-3 text-sm">
                      <div>
                        <Link
                          href={`/project/${project.project_id}`}
                          className="font-medium text-gray-900 hover:text-lavender-600 transition-colors duration-150 hover:underline truncate max-w-xs block"
                        >
                          <Tooltip
                            content={formatProjectName(project.project_name)}
                            maxWidth="250px"
                          >
                            <span>
                              {formatProjectName(project.project_name)}
                            </span>
                          </Tooltip>
                        </Link>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-600">
                      <RegistryDisplay
                        registry={project.registry}
                        projectUrl={project.project_url}
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-600">
                      {project.country}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-600">
                      <FeedstockTypeDisplay
                        feedstockTypes={project.feedstock_type}
                      />
                    </td>
                    <td className="py-4 pl-3 pr-5 text-sm text-right">
                      <Link
                        href={`/project/${project.project_id}`}
                        className="inline-flex items-center justify-center gap-1 text-lavender-800 font-medium transition-colors duration-150 px-3 py-1.5 bg-lavender-100 rounded-md hover:bg-lavender-200 shadow-sm"
                      >
                        <EyeIcon
                          className="h-4 w-4 text-lavender-700"
                          aria-hidden="true"
                        />
                        <span>View</span>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

// Utility function to format project names by replacing underscores with spaces
function formatProjectName(name: string): string {
  if (!name) return "";
  return name.replace(/_/g, " ");
}

// Utility function to capitalize the first letter of a string
function capitalizeFirstLetter(string: string): string {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// New component for displaying registry with optional link
interface RegistryDisplayProps {
  registry: string;
  projectUrl?: string | null;
}

function RegistryDisplay({ registry, projectUrl }: RegistryDisplayProps) {
  const formattedRegistry = capitalizeFirstLetter(registry);

  // If there's no URL, just display the registry name
  if (!projectUrl) {
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-gray-100 text-gray-800">
        {formattedRegistry}
      </span>
    );
  }

  // With URL, make it clickable with helpful tooltip and icon
  return (
    <Tooltip
      content={`View project on ${formattedRegistry}'s website`}
      position="bottom"
    >
      <a
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-1.5 text-gray-700 hover:text-lavender-600 transition-colors duration-150 px-2.5 py-0.5 rounded-md bg-gray-100 hover:bg-lavender-50"
        aria-label={`Visit project page on ${formattedRegistry} registry (opens in new tab)`}
      >
        {formattedRegistry}
        <ArrowTopRightOnSquareIcon
          className="h-3.5 w-3.5 text-gray-400 group-hover:text-lavender-500 transition-colors duration-150"
          aria-hidden="true"
        />
      </a>
    </Tooltip>
  );
}

interface FeedstockTypeDisplayProps {
  feedstockTypes: string[];
}

// Component for displaying feedstock types in a more elegant way
function FeedstockTypeDisplay({
  feedstockTypes = [],
}: FeedstockTypeDisplayProps) {
  // Handle empty or null feedstock types
  if (!feedstockTypes || feedstockTypes.length === 0) {
    return <span className="text-gray-400 italic">Not specified</span>;
  }

  // Capitalize all feedstock types and calculate their display lengths
  const processedTypes = feedstockTypes.map((type) => {
    const capitalizedType = capitalizeFirstLetter(type);
    return {
      text: capitalizedType,
      length: capitalizedType.length,
    };
  });

  // Sort by length for display priority (shorter first)
  const sortedTypes = [...processedTypes].sort((a, b) => a.length - b.length);

  // Constants for display optimization
  const MAX_DISPLAY_LENGTH = 20; // Maximum character length before truncation (only used for 3+ items)
  const MAX_ITEMS_TO_SHOW = 2; // Maximum number of items to show in the table

  // Show all types if there are only 1 or 2 (without truncation)
  if (feedstockTypes.length <= MAX_ITEMS_TO_SHOW) {
    return (
      <div className="flex flex-wrap gap-1.5">
        {sortedTypes.map((type, index) => (
          <span
            key={index}
            className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-sm text-gray-800"
          >
            {type.text}
          </span>
        ))}
      </div>
    );
  }

  // For 3+ items, show the first 2 shortest types with "+X more" indicator
  // Apply truncation only in this case to save space when there are many items
  const displayTypes = sortedTypes.slice(0, MAX_ITEMS_TO_SHOW);

  return (
    <Tooltip
      content={
        <div className="p-3">
          <p className="font-medium mb-1.5 text-white text-xs">
            All feedstock types:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {processedTypes.map((type, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-md bg-gray-200 px-2.5 py-0.5 text-sm text-gray-800"
              >
                {type.text}
              </span>
            ))}
          </div>
        </div>
      }
      maxWidth="350px"
    >
      <div className="flex flex-wrap gap-1.5 cursor-help">
        {displayTypes.map((type, index) => (
          <span
            key={index}
            className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-sm text-gray-800"
          >
            {type.text.length > MAX_DISPLAY_LENGTH
              ? `${type.text.substring(0, MAX_DISPLAY_LENGTH)}...`
              : type.text}
          </span>
        ))}
        <span className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-sm text-gray-500">
          +{feedstockTypes.length - MAX_ITEMS_TO_SHOW}
        </span>
      </div>
    </Tooltip>
  );
}
