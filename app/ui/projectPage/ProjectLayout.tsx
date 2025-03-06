"use client";

import React from "react";
import TopNavBar from "./TopNavBar";
import LeftSidebar from "./LeftSidebar";
import { SubTopic } from "../../../types/ui"; // Import the SubTopic type

interface ProjectLayoutProps {
  children: React.ReactNode;
  projectId?: string;
  projectName: string; // Changed to required prop (removed ? mark)
  subtopics: SubTopic[]; // Use the SubTopic type instead of any[]
  currentTopic: string;
  currentPath?: string; // Make currentPath optional
}

export default function ProjectLayout({
  children,
  projectId,
  projectName, // Removed default value since it's now required
  subtopics,
  currentTopic,
  currentPath = "",
}: ProjectLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <TopNavBar projectId={projectId} projectName={projectName} />

      <div className="flex flex-1">
        <div className="w-64 flex-shrink-0">
          <LeftSidebar
            subtopics={subtopics}
            currentTopic={currentTopic}
            currentPath={currentPath}
          />
        </div>

        <main className="flex-1 bg-gray-50 p-6">{children}</main>
      </div>
    </div>
  );
}
