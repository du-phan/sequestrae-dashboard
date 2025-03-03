"use client";

import { usePathname } from "next/navigation";
import TopNavBar from "./TopNavBar";
import LeftSidebar from "./LeftSidebar";
import subtopicsMap from "./subtopicData";
import { ReactNode } from "react";

// Props interface for the ProjectLayout component
interface ProjectLayoutProps {
  projectId: string;
  children: ReactNode; // Content to display in the main area
}

// This layout component provides consistent structure across project-related pages
export default function ProjectLayout({
  projectId,
  children,
}: ProjectLayoutProps) {
  // Get the current URL path to determine active navigation
  const pathname = usePathname() ?? "";

  // Extract the current topic from the URL path
  // Format is expected to be /project/{projectId}/{topic}
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentTopic = pathSegments.length > 2 ? pathSegments[2] : "overview";

  // Get sidebar navigation subtopics directly from the subtopicsMap
  // This ensures we're getting the format expected by the LeftSidebar component
  const sidebarSubtopics = subtopicsMap[currentTopic] || [];

  // Standard navbar height in pixels (matches h-16 class)
  const navbarHeight = 64;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <TopNavBar projectId={projectId} />

      {/* Main content area with sidebar and page content */}
      <div className="flex pt-16">
        {/* Left Sidebar - using the properly formatted subtopics */}
        <LeftSidebar
          subtopics={sidebarSubtopics}
          navbarHeight={navbarHeight}
          currentTopic={currentTopic}
        />

        {/* Main content area */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
