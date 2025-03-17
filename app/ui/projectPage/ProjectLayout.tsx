"use client";

import React from "react";
import TopNavBar from "./TopNavBar";
import LeftSidebar from "./LeftSidebar";
import { SubTopic } from "../../../types/ui"; // Import the SubTopic type

interface ProjectLayoutProps {
  children: React.ReactNode;
  projectId?: string;
  projectName: string;
  projectUrl?: string; // Registry URL where carbon credits can be purchased
  subtopics: SubTopic[];
  // Removed currentTopic as it's not used

  /**
   * Optional custom sidebar content - used when the standard subtopics sidebar isn't appropriate
   */
  customSidebar?: React.ReactNode;
}

/**
 * ProjectLayout component - Provides the main application layout structure
 * Updated with consistent spacing following 8pt grid system
 */
export default function ProjectLayout({
  children,
  projectId,
  projectName,
  projectUrl, // Added projectUrl
  subtopics,
  customSidebar,
}: ProjectLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <TopNavBar
        projectId={projectId}
        projectName={projectName}
        projectUrl={projectUrl} // Pass projectUrl to TopNavBar
      />

      <div className="flex flex-1">
        {/* Fixed sidebar width for consistency */}
        <div className="w-64 flex-shrink-0">
          {customSidebar ? (
            // Render custom sidebar if provided
            customSidebar
          ) : (
            // Otherwise render the standard subtopics sidebar with project info
            <LeftSidebar subtopics={subtopics} projectName={projectName} />
          )}
        </div>

        {/* Main content with consistent padding on all screen sizes */}
        <main className="flex-1 bg-gray-50 p-4 md:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
