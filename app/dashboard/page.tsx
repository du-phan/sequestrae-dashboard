import { Metadata } from "next";
import DashboardHeader from "@/app/ui/dashboard/DashboardHeader";
import ProjectsTable from "@/app/ui/dashboard/ProjectsTable";
import ProjectFilters from "@/app/ui/dashboard/ProjectFilters";
import Pagination from "@/app/ui/dashboard/Pagination";
import StatCards from "@/app/ui/dashboard/StatCards";
import AnalysisFramework from "@/app/ui/dashboard/AnalysisFramework";
import { getProjects, getProjectsStats } from "@/lib/project/api";

export const metadata: Metadata = {
  title: "Biochar CDR Intelligence Platform | Sequestrae",
  description: "Analyze biochar projects with AI-powered insights.",
};

type DashboardPageProps = {
  params: Promise<Record<string, never>>; // Indicates an empty object (no dynamic segments); // a Promise that resolves to an empty object
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function DashboardPage({
  searchParams,
}: DashboardPageProps) {
  // Await the Promise to get the actual search params object
  const resolvedSearchParams = await searchParams;

  // Get current page from search params or default to 1
  const currentPage = Number(
    typeof resolvedSearchParams?.page === "string"
      ? resolvedSearchParams.page
      : "1"
  );
  const query =
    typeof resolvedSearchParams?.query === "string"
      ? resolvedSearchParams.query
      : "";

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
      {/* The enhanced header now stands on its own with proper spacing */}
      <DashboardHeader />

      {/* stat cards shifted down slightly for better visual flow after the new header */}
      <div className="mb-8">
        <StatCards
          projectsCount={totalProjects}
          countriesCount={uniqueCountries}
          registriesCount={uniqueRegistries}
        />
      </div>

      {/* New analysis framework component with horizontal layout */}
      <AnalysisFramework />

      <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
        <ProjectFilters />
      </div>

      <div
        id="search-results"
        className="bg-white shadow-sm rounded-lg p-6 mb-6"
      >
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
