"use client";

import React from "react";
import { SubTopic } from "../../../types/ui";

interface LeftSidebarProps {
  subtopics: SubTopic[];
  currentTopic: string;
  currentPath: string;
}

export default function LeftSidebar({
  subtopics,
  currentTopic,
  currentPath,
}: LeftSidebarProps) {
  // Check if link is active
  const isActive = (href: string) => {
    if (href.startsWith("#")) {
      return true;
    }
    return currentPath === href;
  };

  return (
    <aside className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto bg-white border-r border-gray-200">
      <div className="p-6">
        <h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-4">
          {currentTopic === "overview"
            ? "Project Overview"
            : `${
                currentTopic.charAt(0).toUpperCase() + currentTopic.slice(1)
              } Analysis`}
        </h3>

        {subtopics.length > 0 ? (
          <ul className="space-y-2">
            {subtopics.map((subtopic) => (
              <li key={subtopic.id}>
                <a
                  href={subtopic.href}
                  className={`block px-3 py-2 text-sm rounded-md ${
                    isActive(subtopic.href)
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                  }`}
                >
                  {subtopic.name}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500 italic">No sections available</p>
        )}
      </div>
    </aside>
  );
}
