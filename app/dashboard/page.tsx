import React from "react";
import { Metadata } from "next";
import DashboardHeader from "@/app/ui/dashboard/DashboardHeader";
import ProjectsTable from "@/app/ui/dashboard/ProjectsTable";
import ProjectFilters from "@/app/ui/dashboard/ProjectFilters";
import Pagination from "@/app/ui/dashboard/Pagination";
import { getProjects } from "@/lib/project/api";

export const metadata: Metadata = {
  title: "Projects Dashboard | Sequestrae",
  description: "Browse and manage carbon projects in your portfolio",
};

export default async function DashboardPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    status?: string;
  };
}) {
  // Get current page from search params or default to 1
  const currentPage = Number(searchParams?.page) || 1;
  const query = searchParams?.query || "";
  const status = searchParams?.status || "all";

  // Fetch projects - now destructuring totalProjects as well
  const { projects, totalPages, totalProjects } = await getProjects({
    query,
    page: currentPage,
    status,
  });

  // Calculate pagination display numbers
  const startItem = projects.length === 0 ? 0 : (currentPage - 1) * 10 + 1;
  const endItem = Math.min(currentPage * 10, startItem + projects.length - 1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top navigation would go here in a full implementation */}

      <main className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Dashboard Header */}
          <DashboardHeader />

          {/* Search and filters */}
          <div className="bg-white shadow-sm rounded-lg p-6 mb-8">
            <ProjectFilters />
          </div>

          {/* Projects Table */}
          <div className="bg-white shadow-sm rounded-lg p-6 mb-8">
            <ProjectsTable projects={projects} />
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-between items-center">
            <p className="text-sm text-gray-600">
              {projects.length === 0
                ? "No projects found"
                : `Showing projects ${startItem}-${endItem} of ${totalProjects}`}
            </p>
            <Pagination totalPages={totalPages} currentPage={currentPage} />
          </div>
        </div>
      </main>
    </div>
  );
}
