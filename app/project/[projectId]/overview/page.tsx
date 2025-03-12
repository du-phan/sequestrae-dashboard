import { Metadata } from "next";
import ProjectLayout from "@/app/ui/projectPage/ProjectLayout";
import ProjectBackgroundSection from "@/app/ui/projectPage/ProjectBackgroundSection";
import ProjectInsightsSection from "@/app/ui/projectPage/ProjectInsightsSection";
import TopicNavigationGuideSection from "@/app/ui/projectPage/TopicNavigationGuideSection";
import SimplePageSidebar from "@/app/ui/projectPage/SimplePageSidebar";
import { getProjectAggregated } from "@/lib/project/api";
import {
  mapProjectToBackgroundData,
  mapProjectToInsightsData,
} from "@/lib/project/mappers";

export const metadata: Metadata = {
  title: "Project Overview | Project Dashboard",
  description: "Overview and key information about the project",
};

// Define section info for easier navigation and IDs
const overviewSections = [
  {
    id: "background",
    name: "Project Background",
    anchor: "background",
  },
  {
    id: "insights",
    name: "Project Insights",
    anchor: "insights",
  },
  {
    id: "navigation",
    name: "How to Navigate",
    anchor: "navigation",
  },
];

interface OverviewPageParams {
  params: Promise<{
    projectId: string;
  }>;
}

// Using a properly typed interface for Next.js page props
export default async function ProjectOverviewPage({
  params,
}: OverviewPageParams) {
  const { projectId } = await params;

  // Fetch project data - this is reused from the existing code
  const projectData = await getProjectAggregated(projectId);

  if (!projectData) {
    throw new Error("Project data not found");
  }

  // Get project name from the project data
  const projectName = projectData.project_name;

  // Map project data to background format, with fallback to default if needed
  const projectBackground = mapProjectToBackgroundData(projectData);

  // Map project insights from main_insights instead of using mock data
  const projectInsights = mapProjectToInsightsData(projectData);

  return (
    <ProjectLayout
      projectId={projectId}
      projectName={projectName}
      customSidebar={
        <SimplePageSidebar
          sections={overviewSections}
          title="Project Overview"
        />
      }
      currentTopic="overview"
      subtopics={[]} // No subtopics for the overview page
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Add IDs to each section for linking from the sidebar */}
        <div id="background">
          <ProjectBackgroundSection data={projectBackground} />
        </div>

        <div id="insights">
          <ProjectInsightsSection data={projectInsights} />
        </div>

        <div id="navigation">
          <TopicNavigationGuideSection projectId={projectId} />
        </div>
      </div>
    </ProjectLayout>
  );
}
