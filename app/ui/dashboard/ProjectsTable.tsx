import React from "react";
import Link from "next/link";
import { textPresets } from "@/app/ui/theme";
import { Project } from "@/types/ui";
import { Tooltip } from "@/app/ui/common/Tooltip";

interface ProjectsTableProps {
  projects: Project[];
}

export default function ProjectsTable({ projects }: ProjectsTableProps) {
  return (
    <div>
      <h2
        className={`${textPresets.h4} text-gray-800 mb-5 flex items-center gap-2`}
      >
        <svg
          className="w-5 h-5 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
        All Projects
      </h2>

      {projects.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-100">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
          <p className="mt-4 text-gray-600 font-medium">No projects found</p>
          <p className="mt-2 text-sm text-gray-500">
            Try adjusting your search or filters
          </p>
        </div>
      ) : (
        <div className="overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5 rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900"
                >
                  Project
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Registry
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Country
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Feedstock Type
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {projects.map((project) => (
                <tr
                  key={project.project_id}
                  className="hover:bg-blue-50 transition-colors duration-150"
                >
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm">
                    <Link
                      href={`/project/${project.project_id}`}
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors duration-150"
                    >
                      {formatProjectName(project.project_name)}
                    </Link>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {capitalizeFirstLetter(project.registry)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {project.country}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500">
                    <FeedstockTypeDisplay
                      feedstockTypes={project.feedstock_type}
                    />
                  </td>
                  <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm">
                    <Link
                      href={`/project/${project.project_id}`}
                      className="text-blue-600 hover:text-blue-900 font-medium transition-colors duration-150 px-3 py-1 bg-blue-50 rounded-md hover:bg-blue-100"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
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
            className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
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
        <div className="max-w-xs p-2">
          <p className="font-medium mb-1.5">All feedstock types:</p>
          <div className="flex flex-wrap gap-1.5">
            {processedTypes.map((type, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-500/10"
              >
                {type.text}
              </span>
            ))}
          </div>
        </div>
      }
    >
      <div className="flex flex-wrap gap-1.5 cursor-help">
        {displayTypes.map((type, index) => (
          <span
            key={index}
            className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
          >
            {type.text.length > MAX_DISPLAY_LENGTH
              ? `${type.text.substring(0, MAX_DISPLAY_LENGTH)}...`
              : type.text}
          </span>
        ))}
        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
          +{feedstockTypes.length - MAX_ITEMS_TO_SHOW} more
        </span>
      </div>
    </Tooltip>
  );
}
