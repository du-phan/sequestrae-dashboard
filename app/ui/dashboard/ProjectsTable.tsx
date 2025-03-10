import React from "react";
import Link from "next/link";
import { textPresets } from "@/app/ui/theme";
import { Project } from "@/types/ui"; // Make sure this type exists or create it

interface ProjectsTableProps {
  projects: Project[];
}

export default function ProjectsTable({ projects }: ProjectsTableProps) {
  return (
    <div>
      <h2 className={`${textPresets.h4} text-gray-800 mb-4`}>Your Projects</h2>

      {projects.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500 mb-4">No projects found</p>
          <p className="text-sm text-gray-400">
            Try adjusting your search or filters
          </p>
        </div>
      ) : (
        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
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
                  className="hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm">
                    <Link
                      href={`/project/${project.project_id}`}
                      className="font-medium text-blue-600 hover:text-blue-800"
                    >
                      {project.project_name}
                    </Link>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {project.registry}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {project.country}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {project.feedstock_type}
                  </td>
                  <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm">
                    <Link
                      href={`/project/${project.project_id}`}
                      className="text-blue-600 hover:text-blue-900"
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

// Helper functions
function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function getStatusStyles(status: string) {
  switch (status?.toLowerCase()) {
    case "active":
      return "bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20";
    case "pending":
      return "bg-yellow-50 text-yellow-700 ring-1 ring-inset ring-yellow-600/20";
    case "completed":
      return "bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-600/20";
    default:
      return "bg-gray-50 text-gray-700 ring-1 ring-inset ring-gray-500/10";
  }
}
