"use client";

import React, { useState, useEffect } from "react";
import { textPresets } from "../theme";

interface SimplePageSidebarProps {
  /**
   * Section items to display in the sidebar
   */
  sections: {
    id: string;
    name: string;
    anchor: string;
  }[];

  /**
   * Optional title for the sidebar
   */
  title?: string;

  /**
   * Optional CSS class name for additional styling
   */
  className?: string;
}

/**
 * A simplified sidebar component for basic page navigation
 * Maintains styling consistency with the main LeftSidebar component
 */
export default function SimplePageSidebar({
  sections,
  title = "On this page",
  className = "",
}: SimplePageSidebarProps) {
  const [activeSection, setActiveSection] = useState<string>(
    sections[0]?.id || ""
  );

  // Track the active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Find all section elements by their IDs
      const sectionElements = sections
        .map((section) => document.getElementById(section.id))
        .filter(Boolean);

      if (sectionElements.length === 0) return;

      // Find the one that's currently most visible in the viewport
      const viewportHeight = window.innerHeight;
      let closestSection = null;
      let closestDistance = Infinity;

      sectionElements.forEach((element) => {
        if (!element) return;
        const rect = element.getBoundingClientRect();
        // Calculate distance from the element to 1/4 of the viewport height
        // (gives preference to elements near the top but still in view)
        const targetPosition = viewportHeight * 0.25;
        const distance = Math.abs(rect.top - targetPosition);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = element.id;
        }
      });

      if (closestSection && closestSection !== activeSection) {
        setActiveSection(closestSection);
      }
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    setTimeout(handleScroll, 100); // Small delay to ensure elements are rendered

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]); // Remove activeSection from dependencies to prevent conflicts

  // Handle click on a sidebar link
  const handleClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();

    // Immediately set active section for responsive feedback
    setActiveSection(sectionId);

    const element = document.getElementById(sectionId);
    if (element) {
      // Smooth scroll to the element
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      // Fallback to default hash navigation
      window.location.hash = sectionId;
    }
  };

  return (
    <aside className="sticky top-16 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 flex flex-col">
      <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        {/* Title with same styling as main sidebar */}
        <h3
          className={`uppercase tracking-wider text-gray-500 font-semibold mb-4 ${textPresets.caption}`}
        >
          {title}
        </h3>

        {/* Simple section navigation list */}
        <ul className="space-y-2">
          {sections.map((section) => {
            const isActive = activeSection === section.id;

            return (
              <li key={section.id}>
                <a
                  href={`#${section.anchor}`}
                  onClick={(e) => handleClick(e, section.id)}
                  className={`block px-3 py-2 rounded-md text-sm transition-colors 
                    ${
                      isActive
                        ? "bg-blue-50 text-blue-700 font-medium"
                        : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                    }`}
                >
                  {section.name}
                </a>
              </li>
            );
          })}
        </ul>

        {sections.length === 0 && (
          <p className={`italic text-gray-500 ${textPresets.paragraphSmall}`}>
            No sections available
          </p>
        )}
      </div>

      {/* Footer area - same styling as main sidebar */}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <p className={`text-center text-gray-500 ${textPresets.caption}`}>
          {sections.length} section{sections.length !== 1 ? "s" : ""} available
        </p>
      </div>
    </aside>
  );
}
