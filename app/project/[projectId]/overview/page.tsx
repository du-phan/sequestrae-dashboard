import React from "react";
import { Metadata } from "next";
import ProjectLayout from "@/app/ui/projectPage/ProjectLayout";
import ProjectBackgroundSection from "@/app/ui/projectPage/ProjectBackgroundSection";
import ProjectInsightsSection, {
  ProjectInsightsData,
} from "@/app/ui/projectPage/ProjectInsightsSection";
import TopicNavigationGuideSection from "@/app/ui/projectPage/TopicNavigationGuideSection";
import SimplePageSidebar from "@/app/ui/projectPage/SimplePageSidebar";
import { getProjectAggregated } from "@/lib/project/api";
import { mapProjectToBackgroundData } from "@/lib/project/mappers";

export const metadata: Metadata = {
  title: "Project Overview | Project Dashboard",
  description: "Overview and key information about the project",
};

// Mock data for project insights
// This will be replaced with actual data from Supabase later
const getMockProjectInsights = (): ProjectInsightsData => {
  return {
    strengths: [
      {
        id: "s1",
        text: "Project follows internationally recognized carbon accounting standards, ensuring credible measurement methods.",
        topic: "Carbon Accounting & Integrity",
      },
      {
        id: "s2",
        text: "Strong community engagement program with equitable benefit sharing mechanisms in place.",
        topic: "Social Impact",
      },
      {
        id: "s3",
        text: "Project site has favorable ecological conditions for successful reforestation.",
        topic: "Environmental Factor",
      },
    ],
    considerations: [
      {
        id: "c1",
        text: "Climate change projections indicate potential drought stress in the region by 2030.",
        topic: "Delivery Risk",
      },
      {
        id: "c2",
        text: "Recent changes in forestry regulations may require additional compliance measures.",
        topic: "Policy Landscape",
      },
    ],
    recommendedActions: [
      {
        id: "a1",
        text: "Implement drought-resistant planting strategies to mitigate climate change risks.",
        topic: "Delivery Risk",
      },
      {
        id: "a2",
        text: "Establish ongoing monitoring system for carbon stock verification with third-party validation.",
        topic: "Carbon Accounting & Integrity",
      },
      {
        id: "a3",
        text: "Develop relationships with local government to stay informed about policy changes.",
        topic: "Policy Landscape",
      },
    ],
  };
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

export default async function OverviewPage({
  params,
}: {
  params: { projectId: string };
}) {
  const { projectId } = params;

  // Fetch project data - this is reused from the existing code
  const projectData = await getProjectAggregated(projectId);

  if (!projectData) {
    throw new Error("Project data not found");
  }

  // Get project name from the project data
  const projectName = projectData.project_name;

  // Map project data to background format, with fallback to default if needed
  const projectBackground = mapProjectToBackgroundData(projectData);
  const projectInsights = getMockProjectInsights();

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
