"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
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

  // References for tracking scroll state and observer
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const userClickedRef = useRef<boolean>(false);
  const userClickTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const visibleSectionsRef = useRef<Map<string, number>>(new Map());

  // Track when user clicks a sidebar link to prevent jarring behavior
  const markUserClicked = useCallback(() => {
    // Clear any existing timeout
    if (userClickTimeoutRef.current) {
      clearTimeout(userClickTimeoutRef.current);
    }

    // Set the flag to indicate user interaction
    userClickedRef.current = true;

    // Reset the flag after a delay
    userClickTimeoutRef.current = setTimeout(() => {
      userClickedRef.current = false;
      userClickTimeoutRef.current = null;
    }, 1000); // 1 second is usually enough for the scroll animation
  }, []);

  // Set up the intersection observer for tracking sections in view
  useEffect(() => {
    // Clean up previous observer if it exists
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }

    // Create a new observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Skip processing if user just clicked a navigation link
        if (userClickedRef.current) return;

        // Process all observed entries
        entries.forEach((entry) => {
          const id = entry.target.id;

          if (entry.isIntersecting) {
            // Store the intersection ratio for visible sections
            visibleSectionsRef.current.set(id, entry.intersectionRatio);
          } else {
            // Remove sections that are no longer visible
            visibleSectionsRef.current.delete(id);
          }
        });

        // Find the most visible section (highest intersection ratio)
        if (visibleSectionsRef.current.size > 0) {
          let highestRatio = 0;
          let topSectionId = "";

          visibleSectionsRef.current.forEach((ratio, id) => {
            if (ratio > highestRatio) {
              highestRatio = ratio;
              topSectionId = id;
            }
          });

          // Only update if we found a section with good visibility
          if (topSectionId && highestRatio > 0.1) {
            setActiveSection(topSectionId);
          }
        }
      },
      {
        // These settings work well for most page layouts
        rootMargin: "-10% 0px -50% 0px",
        threshold: [0, 0.1, 0.5, 1.0],
      }
    );

    // Observe all sections defined in props
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    // Cleanup observer on unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [sections]); // Re-initialize when sections change

  // Reference callback for scrolling active items into view in the sidebar
  const activeItemRef = useCallback((element: HTMLElement | null) => {
    // Only scroll the sidebar if the element exists and not during user click
    if (element && sidebarRef.current && !userClickedRef.current) {
      const sidebarRect = sidebarRef.current.getBoundingClientRect();
      const itemRect = element.getBoundingClientRect();

      // Check if item is outside the visible sidebar area
      if (
        itemRect.top < sidebarRect.top ||
        itemRect.bottom > sidebarRect.bottom
      ) {
        // Scroll the item into view
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  }, []);

  // Handle click on a sidebar link
  const handleClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();

    // Mark that user clicked to prevent observer updates
    markUserClicked();

    // Update active section immediately for better UX
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
    <aside
      className={`sticky top-16 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 flex flex-col ${className}`}
    >
      <div
        ref={sidebarRef}
        className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
      >
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
                  ref={isActive ? activeItemRef : null}
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
