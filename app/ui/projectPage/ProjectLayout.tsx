"use client";

import { usePathname } from "next/navigation";
import TopNavBar from "./TopNavBar";
import LeftSidebar from "./LeftSidebar";
import { ReactNode } from "react";
import { SubTopic } from "../../../types/ui";

// Updated Props interface for the ProjectLayout component
interface ProjectLayoutProps {
  projectId: string;
  children: ReactNode; // Content to display in the main area
  subtopics?: SubTopic[]; // Array of subtopics to display in the sidebar
  currentTopic?: string; // Current active topic
}

// This layout component provides consistent structure across project-related pages
export default function ProjectLayout({
  projectId,
  children,
  subtopics = [], // Default to empty array if not provided
  currentTopic = "overview", // Default to overview if not specified
}: ProjectLayoutProps) {
  // Get the current URL path to use for navigation highlighting
  const pathname = usePathname() ?? "";

  // Standard navbar height in pixels (matches h-16 class)
  const navbarHeight = 64;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <TopNavBar projectId={projectId} />

      {/* Main content area with sidebar and page content */}
      <div className="flex pt-16">
        {/* Left Sidebar - using subtopics passed as props */}
        <LeftSidebar
          subtopics={subtopics}
          navbarHeight={navbarHeight}
          currentTopic={currentTopic}
          currentPath={pathname}
        />

        {/* Main content area */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
