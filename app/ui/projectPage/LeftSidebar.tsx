"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { SubTopic } from "../../../types/ui"; // Removed RiskFactor as it's not used
import { usePathname } from "next/navigation";
import { textPresets } from "../theme";
// Removed unused imports: Link and ArrowLeftIcon

// Add debounce utility function with more specific types
function debounce<T extends (...args: Parameters<T>) => ReturnType<T>>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Format project name by replacing underscores with spaces
 */
const formatProjectName = (name: string): string => {
  return name.replace(/_/g, " ");
};

interface LeftSidebarProps {
  subtopics: SubTopic[];
  // Removed currentTopic as it's not used
  // Removed projectId as it's not used
  projectName: string; // Added project name prop
}

export default function LeftSidebar({
  subtopics,
  // Removed projectId parameter
  projectName,
}: LeftSidebarProps) {
  const pathname = usePathname();
  const [expandedSubtopics, setExpandedSubtopics] = useState<
    Record<string, boolean>
  >({});
  const [activeItem, setActiveItem] = useState<string>("");
  const sidebarRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isInitializedRef = useRef(false);

  // Track when user clicks sidebar items - critical for fixing the issue
  const userClickedInSidebarRef = useRef<boolean>(false);
  const userClickLockTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll lock mechanism
  const isManualScrollingRef = useRef(false);
  const scrollLockTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const visibleElementsRef = useRef<Map<string, number>>(new Map());

  // Format the project name for display
  const displayProjectName = formatProjectName(projectName);

  // Replace direct ref with ref callback function - keep minimal
  const setActiveItemRef = useCallback((element: HTMLElement | null) => {
    // Don't auto-scroll sidebar if user just clicked a sidebar item
    // This is key to preventing the sidebar from jumping back after a click
    if (element && sidebarRef.current && !userClickedInSidebarRef.current) {
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
  }, []);

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

  // Improved scroll lock with longer duration
  const enableScrollLock = useCallback(() => {
    // Clear any existing timeout
    if (scrollLockTimeoutRef.current) {
      clearTimeout(scrollLockTimeoutRef.current);
    }

    // Enable scroll lock
    isManualScrollingRef.current = true;

    // Set a longer timeout to disable the lock after scrolling completes
    scrollLockTimeoutRef.current = setTimeout(() => {
      isManualScrollingRef.current = false;
      scrollLockTimeoutRef.current = null;
    }, 1000);
  }, []);

  // Mark that user has clicked in sidebar - crucial for fix
  const markUserClickedSidebar = useCallback(() => {
    // Clear any existing timeout
    if (userClickLockTimeoutRef.current) {
      clearTimeout(userClickLockTimeoutRef.current);
    }

    // Mark that user clicked in sidebar
    userClickedInSidebarRef.current = true;

    // Set a timeout to reset the flag after scroll animation is done
    userClickLockTimeoutRef.current = setTimeout(() => {
      userClickedInSidebarRef.current = false;
      userClickLockTimeoutRef.current = null;
    }, 2000); // Longer timeout to ensure scroll animation completes
  }, []);

  // Use a debounced version of setActiveItem to prevent rapid changes
  const debouncedSetActiveItem = useCallback(
    debounce((itemId: string) => {
      // Don't update active item if:
      // 1. We're in manual scrolling mode OR
      // 2. User just clicked a sidebar item (THIS IS KEY)
      if (isManualScrollingRef.current || userClickedInSidebarRef.current) {
        return;
      }

      setActiveItem(itemId);
      expandSubtopicContainingRiskFactor(itemId);
    }, 150), // 150ms debounce to smooth out scrolling
    [expandSubtopicContainingRiskFactor]
  );

  // Setup intersection observer with improved handling
  const setupIntersectionObserver = useCallback(() => {
    // Clean up existing observer
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }

    // Create a new observer with reduced sensitivity
    observerRef.current = new IntersectionObserver(
      (observedEntries) => {
        // Skip processing if manual scrolling is in progress
        // or if user just clicked a sidebar item
        if (isManualScrollingRef.current || userClickedInSidebarRef.current)
          return;

        // Process all observed entries
        observedEntries.forEach((entry) => {
          const id = entry.target.id;
          if (!id) return; // Skip elements without IDs

          // IMPORTANT: Skip subtopic elements - only track risk factors
          const isSubtopic = subtopics.some((subtopic) => subtopic.id === id);
          if (isSubtopic) return;

          if (entry.isIntersecting) {
            visibleElementsRef.current.set(id, entry.intersectionRatio);
          } else {
            visibleElementsRef.current.delete(id);
          }
        });

        // If we have visible elements, find the most visible one
        if (visibleElementsRef.current.size > 0) {
          let highestRatio = 0;
          let topElementId = "";

          visibleElementsRef.current.forEach((ratio, id) => {
            if (ratio > highestRatio) {
              highestRatio = ratio;
              topElementId = id;
            }
          });

          // Only update if we found an element with good visibility
          // and it's not the same as current active item
          if (
            topElementId &&
            highestRatio > 0.3 &&
            topElementId !== activeItem
          ) {
            debouncedSetActiveItem(topElementId);
          }
        }
      },
      {
        // Reduced sensitivity - only consider elements more fully in view
        rootMargin: "-10% 0px -30% 0px",
        // Fewer thresholds for better performance
        threshold: [0, 0.3, 0.6, 1.0],
      }
    );

    // Collect all elements to observe
    const riskFactorElements = document.querySelectorAll(
      "[data-risk-factor-id]"
    );
    // IMPORTANT: Don't observe subtopic elements anymore
    // const subtopicElements = document.querySelectorAll("[data-subtopic-id]");

    // If no elements found, try again after a delay
    if (riskFactorElements.length === 0) {
      setTimeout(() => {
        if (!isInitializedRef.current) setupIntersectionObserver();
      }, 500);
      return;
    }

    // Mark as initialized
    isInitializedRef.current = true;

    // Observe only risk factor elements
    riskFactorElements.forEach((element) => {
      if (observerRef.current) observerRef.current.observe(element);
    });

    // REMOVED: Don't observe subtopic elements
  }, [activeItem, debouncedSetActiveItem, subtopics]);

  // Initialize intersection observer when the component mounts
  useEffect(() => {
    // Reset initialization flag when subtopics change
    isInitializedRef.current = false;
    visibleElementsRef.current = new Map();

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

        // Enable scroll lock to prevent intersection observer from interfering
        enableScrollLock();
      }
    }
  }, [pathname, subtopics, enableScrollLock, expandedSubtopics]);

  // Toggle subtopic expansion
  const toggleSubtopic = (subtopicId: string, e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking

    // Mark user interaction with sidebar
    markUserClickedSidebar();

    setExpandedSubtopics((prev) => ({
      ...prev,
      [subtopicId]: !prev[subtopicId],
    }));
  };

  // Improved risk factor click handler - with user sidebar click tracking
  const handleRiskFactorClick = (
    id: string,
    href: string,
    e: React.MouseEvent
  ) => {
    e.preventDefault();

    // Mark that user clicked in sidebar - THIS IS KEY TO FIX
    markUserClickedSidebar();

    // Set active item immediately for UI feedback
    setActiveItem(id);

    // Enable scroll lock before scrolling content
    enableScrollLock();

    // Find the element and scroll to it with proper offset
    const element = document.getElementById(id);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 10);
    } else {
      // Fallback to default href navigation
      window.location.hash = href.substring(1);
    }
  };

  // Improved section jump handler - with user sidebar click tracking
  const handleSectionJump = (subtopicId: string, e: React.MouseEvent) => {
    e.preventDefault();

    // Mark that user clicked in sidebar - THIS IS KEY TO FIX
    markUserClickedSidebar();

    // Set active item immediately for UI feedback
    setActiveItem(subtopicId);

    // Enable scroll lock before scrolling
    enableScrollLock();

    // Find the element and scroll to it with proper offset
    const element = document.getElementById(subtopicId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 10);
    } else {
      // Fallback to default hash navigation
      window.location.hash = subtopicId;
    }
  };

  // Check if link is active - add a filter to prevent highlighting subtopics
  const isActive = (id: string) => {
    // Only allow highlighting risk factors, not main subtopics
    const isSubtopic = subtopics.some((subtopic) => subtopic.id === id);
    return activeItem === id && !isSubtopic;
  };

  // Add global scroll handler to detect user scrolling
  useEffect(() => {
    const handleUserScroll = () => {
      // If this isn't a programmatic scroll (not locked), then it's a user scroll
      if (!isManualScrollingRef.current) {
        // Do nothing special here, just detect user scrolling
      }
    };

    // Add event listener with passive: true for better performance
    window.addEventListener("scroll", handleUserScroll, { passive: true });

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleUserScroll);
    };
  }, []);

  return (
    <aside className="sticky top-16 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 flex flex-col">
      {/* Content area with project name replacing "Subtopic Sections" */}
      <div
        ref={sidebarRef}
        className="flex-1 overflow-y-auto pt-5 pb-5 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
      >
        {/* Adjust the header to match list item padding */}
        <h3
          className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-4 px-5 truncate"
          title={projectName}
        >
          {displayProjectName}
        </h3>

        {subtopics.length > 0 ? (
          <ul className="space-y-2 px-5">
            {subtopics.map((subtopic) => (
              <li key={subtopic.id} className="mb-1.5">
                <div className="flex flex-col">
                  {/* Subtopic header - removed px-3 as we're using container padding */}
                  <button
                    onClick={(e) => toggleSubtopic(subtopic.id, e)}
                    data-item-id={subtopic.id}
                    className={`flex items-center justify-between py-2 rounded-md w-full text-left transition-colors
                      ${textPresets.label}
                      ${
                        isActive(subtopic.id)
                          ? "bg-lavender-100 text-lavender-700"
                          : "text-gray-600 hover:bg-gray-50 hover:text-lavender-600"
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

                  {/* Risk factors list - adjust padding for proper nesting alignment */}
                  {expandedSubtopics[subtopic.id] && (
                    <ul className="ml-4 mt-2 space-y-2 border-l border-gray-200 pl-2">
                      {/* Jump to Section link - removed px-3 since container has padding */}
                      <li>
                        <a
                          href={`#${subtopic.id}`}
                          onClick={(e) => handleSectionJump(subtopic.id, e)}
                          className={`block py-2 rounded-md transition-colors sidebar-item-text flex items-center
                          ${textPresets.caption}
                          ${
                            isActive(subtopic.id)
                              ? "bg-lavender-100 text-lavender-800"
                              : "bg-gray-100 text-gray-700 hover:bg-lavender-50 hover:text-lavender-700"
                          }`}
                          ref={isActive(subtopic.id) ? setActiveItemRef : null}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3 ml-1 mr-1"
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

                      {/* Risk factors - removed px-3 since container has padding */}
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
                              className={`block py-2 rounded-md transition-colors sidebar-item-text
                              ${textPresets.caption}
                              ${
                                isActive(riskFactor.id)
                                  ? "bg-lavender-100 text-lavender-800 font-medium border-l-2 border-lavender-500 -ml-[2px] pl-[10px]"
                                  : "text-gray-600 hover:bg-lavender-50 hover:text-lavender-700 ml-1 pl-[9px]"
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
                          className={`py-2 ml-1 pl-2 italic text-gray-400 ${textPresets.caption}`}
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
          <p
            className={`italic text-gray-500 px-5 ${textPresets.paragraphSmall}`}
          >
            No sections available
          </p>
        )}
      </div>
    </aside>
  );
}
