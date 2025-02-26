"use client";

import React from "react";
import Link from "next/link";

// Interface for subtopic items
interface SubTopic {
  id: string; // Unique identifier for the subtopic
  name: string; // Display name for the navigation item
  href: string; // URL or anchor link for navigation
}

// Props interface for the SideBar component
interface LeftSidebarProps {
  subtopics: SubTopic[]; // Array of subtopics to be displayed in the sidebar
  currentTopic?: string; // Optional ID of the currently active topic (not currently used)
  navbarHeight: number; // Height of the top navbar for sticky positioning
}

export default function LeftSidebar({
  subtopics,
  navbarHeight,
  currentTopic = "overview",
}: LeftSidebarProps) {
  return (
    <aside
      className="w-64 bg-white border-r border-gray-200 overflow-y-auto"
      style={{ height: `calc(100vh - ${navbarHeight}px)` }}
    >
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          {currentTopic.charAt(0).toUpperCase() + currentTopic.slice(1)}
        </h2>

        <nav className="mt-4">
          <ul className="space-y-2">
            {subtopics.map((subtopic) => (
              <li key={subtopic.id}>
                <Link
                  href={subtopic.href}
                  className="block px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  {subtopic.name}
                </Link>
              </li>
            ))}

            {subtopics.length === 0 && (
              <li className="px-3 py-2 text-sm text-gray-500">
                No subtopics available
              </li>
            )}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
