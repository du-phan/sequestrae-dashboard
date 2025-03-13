import { Metadata } from "next";
import DashboardHeader from "@/app/ui/dashboard/DashboardHeader";
import ProjectsTable from "@/app/ui/dashboard/ProjectsTable";
import Pagination from "@/app/ui/dashboard/Pagination";
import StatCards from "@/app/ui/dashboard/StatCards";
import AnalysisFramework from "@/app/ui/dashboard/AnalysisFramework";
import { getProjects, getProjectsStats } from "@/lib/project/api";

export const metadata: Metadata = {
  title: "Biochar CDR Intelligence Platform | Sequestrae",
  description: "Analyze biochar projects with AI-powered insights.",
};

type DashboardPageProps = {
  params: Promise<Record<string, never>>;
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
  const { uniqueRegistries, uniqueCountries } = await getProjectsStats();

  // Calculate pagination display numbers
  const startItem = projects.length === 0 ? 0 : (currentPage - 1) * 10 + 1;
  const endItem = Math.min(currentPage * 10, startItem + projects.length - 1);

  return (
    <div className="max-w-7xl mx-auto">
      <DashboardHeader />

      <div className="mb-6">
        <StatCards
          projectsCount={totalProjects}
          countriesCount={uniqueCountries}
          registriesCount={uniqueRegistries}
        />
      </div>

      {/* Analysis framework component */}
      <AnalysisFramework />

      {/* Projects table with integrated search */}
      <div id="search-results" className="mb-6">
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
