import React from "react";
import { Metadata } from "next";
import ProjectLayout from "@/app/ui/projectPage/ProjectLayout";
import ProjectBackgroundSection, {
  ProjectBackgroundData,
} from "@/app/ui/projectPage/ProjectBackgroundSection";
import ProjectInsightsSection, {
  ProjectInsightsData,
} from "@/app/ui/projectPage/ProjectInsightsSection";
import TopicNavigationGuideSection from "@/app/ui/projectPage/TopicNavigationGuideSection";
import { getProjectAggregated } from "@/lib/project/api";

export const metadata: Metadata = {
  title: "Project Overview | Project Dashboard",
  description: "Overview and key information about the project",
};

// Mock data for project background
// This will be replaced with actual data from Supabase later
const getMockProjectBackground = (
  projectName: string
): ProjectBackgroundData => {
  return {
    name: projectName,
    description:
      "This carbon sequestration project aims to restore degraded forestland through reforestation and improved forest management practices. The project follows methodology standards to ensure accurate measurement of carbon sequestration benefits.",
    location: "Sumatra, Indonesia",
    startDate: "January 2022",
    stakeholders: [
      "EcoRestore International",
      "Sumatra Conservation Trust",
      "Local Community Cooperative",
    ],
  };
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

  // Get mock data - would be replaced with real data later
  const projectBackground = getMockProjectBackground(projectName);
  const projectInsights = getMockProjectInsights();

  return (
    <ProjectLayout
      projectId={projectId}
      projectName={projectName}
      subtopics={[]} // Overview page doesn't have subtopics in sidebar
      currentTopic="overview"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        <ProjectBackgroundSection data={projectBackground} />
        <ProjectInsightsSection data={projectInsights} />
        <TopicNavigationGuideSection projectId={projectId} />
      </div>
    </ProjectLayout>
  );
}
