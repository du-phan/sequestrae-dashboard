import React from "react";
import { Metadata } from "next";
import DashboardHeader from "@/app/ui/dashboard/DashboardHeader";
import ProjectsTable from "@/app/ui/dashboard/ProjectsTable";
import ProjectFilters from "@/app/ui/dashboard/ProjectFilters";
import Pagination from "@/app/ui/dashboard/Pagination";
import StatCards from "@/app/ui/dashboard/StatCards";
import { getProjects, getProjectsStats } from "@/lib/project/api";

export const metadata: Metadata = {
  title: "Projects Dashboard | Sequestrae",
  description: "Browse and manage carbon projects in your portfolio",
};

type SearchParams = {
  page?: string;
  query?: string;
};

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  // Get current page from search params or default to 1
  const currentPage = Number(
    typeof searchParams?.page === "string" ? searchParams.page : "1"
  );
  const query =
    typeof searchParams?.query === "string" ? searchParams.query : "";

  // Fetch projects for the current page
  const { projects, totalPages, totalProjects } = await getProjects({
    query,
    page: currentPage,
  });

  // Fetch global statistics across all projects
  // This ensures we get accurate counts of registries and countries
  const { uniqueRegistries, uniqueCountries } = await getProjectsStats();

  // Calculate pagination display numbers
  const startItem = projects.length === 0 ? 0 : (currentPage - 1) * 10 + 1;
  const endItem = Math.min(currentPage * 10, startItem + projects.length - 1);

  return (
    <div className="max-w-7xl mx-auto">
      <DashboardHeader />

      {/* Use global stats for the StatCards */}
      <StatCards
        projectsCount={totalProjects}
        countriesCount={uniqueCountries}
        registriesCount={uniqueRegistries}
      />

      <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
        <ProjectFilters />
      </div>
      <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
        <ProjectsTable projects={projects} />
      </div>
      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-600">
          {projects.length === 0
            ? "No projects found"
            : `Showing projects ${startItem}-${endItem} of ${totalProjects}`}
        </p>
        <Pagination totalPages={totalPages} currentPage={currentPage} />
      </div>
    </div>
  );
}
