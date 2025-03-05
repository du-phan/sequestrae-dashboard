"use client";

import React from "react";
import Link from "next/link";
import { SubTopic } from "../../../types/ui";

// Props interface for the SideBar component
interface LeftSidebarProps {
  subtopics: SubTopic[]; // Array of subtopics to be displayed in the sidebar
  currentTopic?: string; // ID of the currently active topic for title display
  navbarHeight: number; // Height of the top navbar for sticky positioning
  currentPath?: string; // Current path for highlighting active item
}

export default function LeftSidebar({
  subtopics,
  navbarHeight,
  currentTopic = "overview",
  currentPath = "",
}: LeftSidebarProps) {
  // Format the topic name for display (capitalize first letter)
  const formattedTopicName =
    currentTopic.charAt(0).toUpperCase() + currentTopic.slice(1);

  return (
    <aside
      className="w-64 bg-white border-r border-gray-200 overflow-y-auto"
      style={{ height: `calc(100vh - ${navbarHeight}px)` }}
    >
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          {formattedTopicName}
        </h2>

        <nav className="mt-4">
          <ul className="space-y-2">
            {subtopics.map((subtopic) => {
              // Check if this item is active
              const isActive =
                currentPath === subtopic.href ||
                (subtopic.href.startsWith("#") &&
                  currentPath.endsWith(subtopic.href));

              return (
                <li key={subtopic.id}>
                  <Link
                    href={subtopic.href}
                    className={`block px-3 py-2 text-sm rounded-md ${
                      isActive
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    {subtopic.name}
                  </Link>
                </li>
              );
            })}

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
