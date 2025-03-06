"use client";

import React from "react";
import TopNavBar from "./TopNavBar";
import LeftSidebar from "./LeftSidebar";
import { SubTopic } from "../../../types/ui"; // Import the SubTopic type

interface ProjectLayoutProps {
  children: React.ReactNode;
  projectId?: string;
  projectName: string;
  subtopics: SubTopic[];
  currentTopic: string;
  currentPath?: string;
}

/**
 * ProjectLayout component - Provides the main application layout structure
 * Updated with consistent spacing following 8pt grid system
 */
export default function ProjectLayout({
  children,
  projectId,
  projectName,
  subtopics,
  currentTopic,
  currentPath = "",
}: ProjectLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <TopNavBar projectId={projectId} projectName={projectName} />

      <div className="flex flex-1">
        {/* Fixed sidebar width for consistency */}
        <div className="w-64 flex-shrink-0">
          <LeftSidebar
            subtopics={subtopics}
            currentTopic={currentTopic}
            currentPath={currentPath}
          />
        </div>

        {/* Main content with consistent padding on all screen sizes */}
        <main className="flex-1 bg-gray-50 p-4 md:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
