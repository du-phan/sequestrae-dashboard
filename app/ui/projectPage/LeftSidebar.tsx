"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { SubTopic, RiskFactor } from "../../../types/ui";
import { usePathname } from "next/navigation";
import { textPresets } from "../theme";

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
  const pathname = usePathname();
  const [expandedSubtopics, setExpandedSubtopics] = useState<
    Record<string, boolean>
  >({});
  const [activeItem, setActiveItem] = useState<string>("");
  const sidebarRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isInitializedRef = useRef(false);

  // Add a ref to track manual scrolling state
  const isManualScrollingRef = useRef(false);
  // Add a timeout ref to clear any pending scroll lock timeouts
  const scrollLockTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Replace direct ref with ref callback function
  const setActiveItemRef = (element: HTMLElement | null) => {
    if (element && sidebarRef.current) {
      const sidebarRect = sidebarRef.current.getBoundingClientRect();
      const itemRect = element.getBoundingClientRect();

      // Check if item is outside visible area
      if (
        itemRect.top < sidebarRect.top ||
        itemRect.bottom > sidebarRect.bottom
      ) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  };

  // Function to expand a subtopic that contains a specific risk factor
  const expandSubtopicContainingRiskFactor = useCallback(
    (riskFactorId: string) => {
      // Skip expanding subtopics during manual scrolling
      if (isManualScrollingRef.current) return;

      subtopics.forEach((subtopic) => {
        if (subtopic.riskFactors?.some((rf) => rf.id === riskFactorId)) {
          setExpandedSubtopics((prev) => {
            // Only update if not already expanded
            if (!prev[subtopic.id]) {
              return { ...prev, [subtopic.id]: true };
            }
            return prev;
          });
        }
      });
    },
    [subtopics]
  );

  // Setup intersection observer for all risk factors
  const setupIntersectionObserver = useCallback(() => {
    // Clean up existing observer if any
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }

    // Create entries map to store intersection ratios
    const entries: Map<string, { ratio: number; element: Element }> = new Map();

    // Create a single observer for all elements
    observerRef.current = new IntersectionObserver(
      (observedEntries) => {
        // Skip processing if manual scrolling is in progress
        if (isManualScrollingRef.current) return;

        // Process all observed entries
        observedEntries.forEach((entry) => {
          const id = entry.target.id;

          if (entry.isIntersecting) {
            entries.set(id, {
              ratio: entry.intersectionRatio,
              element: entry.target,
            });
          } else {
            entries.delete(id);
          }
        });

        // Find the element with highest intersection ratio
        let highestRatio = 0;
        let topElementId = "";

        entries.forEach(({ ratio }, id) => {
          if (ratio > highestRatio) {
            highestRatio = ratio;
            topElementId = id;
          }
        });

        // Set active item if a visible element was found
        if (topElementId && topElementId !== activeItem) {
          setActiveItem(topElementId);
          expandSubtopicContainingRiskFactor(topElementId);
        }
      },
      {
        // Configure rootMargin to prioritize elements in the center of viewport
        rootMargin: "-20% 0px -40% 0px",
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      }
    );

    // Collect all risk factor elements and observe them
    const riskFactorElements = document.querySelectorAll(
      "[data-risk-factor-id]"
    );

    // Also observe subtopic sections
    const subtopicElements = document.querySelectorAll("[data-subtopic-id]");

    if (riskFactorElements.length === 0 && subtopicElements.length === 0) {
      // If elements aren't found yet, try again after a short delay
      setTimeout(() => {
        if (!isInitializedRef.current) setupIntersectionObserver();
      }, 500);
      return;
    }

    // Mark as initialized once we've found elements to observe
    isInitializedRef.current = true;

    // Observe all risk factor elements
    riskFactorElements.forEach((element) => {
      if (observerRef.current) observerRef.current.observe(element);
    });

    // Observe all subtopic elements
    subtopicElements.forEach((element) => {
      if (observerRef.current) observerRef.current.observe(element);
    });

    console.log(
      `Observing ${riskFactorElements.length} risk factor elements and ${subtopicElements.length} subtopic elements`
    );
  }, [activeItem, expandSubtopicContainingRiskFactor]);

  // Initialize intersection observer when the component mounts
  useEffect(() => {
    // Reset initialization flag when subtopics change
    isInitializedRef.current = false;

    // Short delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      setupIntersectionObserver();
    }, 200);

    return () => {
      clearTimeout(timer);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [subtopics, setupIntersectionObserver]);

  // Initialize expanded state for subtopics that contain the active item
  useEffect(() => {
    if (pathname) {
      // Extract the hash from the URL (if any)
      const hash = pathname.includes("#")
        ? pathname.substring(pathname.indexOf("#") + 1)
        : "";

      if (hash) {
        setActiveItem(hash);

        // Find which subtopic contains this risk factor
        const newExpandedState = { ...expandedSubtopics };

        subtopics.forEach((subtopic) => {
          // Check if this subtopic has the risk factor with the active hash
          const hasRiskFactor = subtopic.riskFactors?.some(
            (riskFactor) =>
              riskFactor.href === `#${hash}` || riskFactor.id === hash
          );

          // If subtopic ID matches hash or contains the active risk factor, expand it
          if (subtopic.id === hash || hasRiskFactor) {
            newExpandedState[subtopic.id] = true;
          }
        });

        setExpandedSubtopics(newExpandedState);
      }
    }
  }, [pathname, subtopics]);

  // Set up scroll lock mechanism
  const enableScrollLock = useCallback(() => {
    // Clear any existing timeout to prevent race conditions
    if (scrollLockTimeoutRef.current) {
      clearTimeout(scrollLockTimeoutRef.current);
    }

    // Enable scroll lock
    isManualScrollingRef.current = true;

    // Set a timeout to disable the lock after scrolling should be complete
    // Using a reasonable time that allows scrolling to complete even for long distances
    scrollLockTimeoutRef.current = setTimeout(() => {
      isManualScrollingRef.current = false;
      scrollLockTimeoutRef.current = null;
    }, 1000); // 1 second should be enough for most scroll animations to complete
  }, []);

  // Toggle subtopic expansion
  const toggleSubtopic = (subtopicId: string, e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking
    setExpandedSubtopics((prev) => ({
      ...prev,
      [subtopicId]: !prev[subtopicId],
    }));
  };

  // Handle click on a risk factor - improved with scroll lock
  const handleRiskFactorClick = (
    id: string,
    href: string,
    e: React.MouseEvent
  ) => {
    e.preventDefault();

    // Set active item immediately for UI feedback
    setActiveItem(id);

    // Enable scroll lock before scrolling
    enableScrollLock();

    // Find the element and scroll to it with proper offset
    const element = document.getElementById(id);
    if (element) {
      // Use scrollIntoView with start alignment for consistent behavior
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      // Fallback to default href navigation
      window.location.hash = href.substring(1);
    }
  };

  // Handle click on "Jump to Section" link - improved with scroll lock
  const handleSectionJump = (subtopicId: string, e: React.MouseEvent) => {
    e.preventDefault();

    // Set active item immediately for UI feedback
    setActiveItem(subtopicId);

    // Enable scroll lock before scrolling
    enableScrollLock();

    // Find the element and scroll to it with proper offset
    const element = document.getElementById(subtopicId);
    if (element) {
      // Use scrollIntoView with start alignment for consistent behavior
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      // Fallback to default href navigation
      window.location.hash = subtopicId;
    }
  };

  // Check if link is active
  const isActive = (id: string) => {
    return activeItem === id;
  };

  return (
    <aside className="sticky top-16 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 flex flex-col">
      <div
        ref={sidebarRef}
        className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
      >
        <h3
          className={`uppercase tracking-wider text-gray-500 font-semibold mb-4 ${textPresets.caption}`}
        >
          {currentTopic === "overview" ? "Project Overview" : "Topic Sections"}
        </h3>

        {subtopics.length > 0 ? (
          <ul className="space-y-2">
            {subtopics.map((subtopic) => (
              <li key={subtopic.id} className="mb-2">
                <div className="flex flex-col">
                  {/* Subtopic header - consistent padding and typography */}
                  <button
                    onClick={(e) => toggleSubtopic(subtopic.id, e)}
                    className={`flex items-center justify-between px-3 py-2 rounded-md w-full text-left transition-colors
                      ${textPresets.label}
                      ${
                        isActive(subtopic.id)
                          ? "bg-blue-50 text-blue-700"
                          : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                      }`}
                    ref={isActive(subtopic.id) ? setActiveItemRef : null}
                  >
                    {/* Subtopic name */}
                    <span className="flex-1 overflow-hidden text-ellipsis">
                      {subtopic.name}
                    </span>

                    {/* Only show chevron icon if risk factors exist */}
                    {subtopic.riskFactors &&
                      subtopic.riskFactors.length > 0 && (
                        <span className="ml-2 flex-shrink-0 text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className={`transition-transform ${
                              expandedSubtopics[subtopic.id]
                                ? "transform rotate-180"
                                : ""
                            }`}
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      )}
                  </button>

                  {/* Risk factors list - standardized spacing */}
                  {expandedSubtopics[subtopic.id] && (
                    <ul className="ml-4 mt-2 space-y-2 border-l border-gray-200 pl-2">
                      {/* Jump to Section link - consistent styling */}
                      <li>
                        <a
                          href={`#${subtopic.id}`}
                          onClick={(e) => handleSectionJump(subtopic.id, e)}
                          className={`block px-3 py-2 rounded-md transition-colors sidebar-item-text flex items-center
                          ${textPresets.caption}
                          ${
                            isActive(subtopic.id)
                              ? "bg-blue-100 text-blue-800"
                              : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                          }`}
                          ref={isActive(subtopic.id) ? setActiveItemRef : null}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 10l7-7m0 0l7 7m-7-7v18"
                            />
                          </svg>
                          Jump to section
                        </a>
                      </li>

                      {/* Risk factors - consistent typography and spacing */}
                      {subtopic.riskFactors &&
                        subtopic.riskFactors.length > 0 &&
                        subtopic.riskFactors.map((riskFactor) => (
                          <li key={riskFactor.id}>
                            <a
                              href={riskFactor.href}
                              onClick={(e) =>
                                handleRiskFactorClick(
                                  riskFactor.id,
                                  riskFactor.href,
                                  e
                                )
                              }
                              className={`block px-3 py-2 rounded-md transition-colors sidebar-item-text
                              ${textPresets.caption}
                              ${
                                isActive(riskFactor.id)
                                  ? "bg-blue-50 text-blue-700"
                                  : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                              }`}
                              ref={
                                isActive(riskFactor.id)
                                  ? setActiveItemRef
                                  : null
                              }
                            >
                              {riskFactor.name}
                            </a>
                          </li>
                        ))}

                      {/* Show message if no risk factors available */}
                      {(!subtopic.riskFactors ||
                        subtopic.riskFactors.length === 0) && (
                        <li
                          className={`px-3 py-2 italic text-gray-400 ${textPresets.caption}`}
                        >
                          No risk factors in this section
                        </li>
                      )}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className={`italic text-gray-500 ${textPresets.paragraphSmall}`}>
            No sections available
          </p>
        )}
      </div>

      {/* Footer area - consistent padding and typography */}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <p className={`text-center text-gray-500 ${textPresets.caption}`}>
          {subtopics.length} section{subtopics.length !== 1 ? "s" : ""}{" "}
          available
        </p>
      </div>
    </aside>
  );
}
