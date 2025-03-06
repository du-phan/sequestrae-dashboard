"use client";

import React, { useState, useEffect, useRef } from "react";
import { SubTopic, RiskFactor } from "../../../types/ui"; // Updated import
import { usePathname } from "next/navigation";

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
  const activeItemRef = useRef<HTMLAnchorElement>(null);

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

  // Scroll to active item when it changes
  useEffect(() => {
    if (activeItemRef.current && sidebarRef.current) {
      // Get positions
      const sidebarRect = sidebarRef.current.getBoundingClientRect();
      const itemRect = activeItemRef.current.getBoundingClientRect();

      // Check if item is outside visible area
      if (
        itemRect.top < sidebarRect.top ||
        itemRect.bottom > sidebarRect.bottom
      ) {
        activeItemRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  }, [activeItem, expandedSubtopics]);

  // Toggle subtopic expansion
  const toggleSubtopic = (subtopicId: string, e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking
    setExpandedSubtopics((prev) => ({
      ...prev,
      [subtopicId]: !prev[subtopicId],
    }));
  };

  // Handle click on a risk factor
  const handleRiskFactorClick = (id: string) => {
    setActiveItem(id);
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
              <li key={subtopic.id} className="mb-1">
                <div className="flex flex-col">
                  {/* Subtopic header - entire area now triggers expand/collapse */}
                  <button
                    onClick={(e) => toggleSubtopic(subtopic.id, e)}
                    className={`flex items-center justify-between px-3 py-2 text-sm rounded-md w-full text-left transition-colors
                      ${
                        isActive(subtopic.id)
                          ? "bg-blue-50 text-blue-700"
                          : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                      }`}
                    ref={isActive(subtopic.id) ? activeItemRef : undefined}
                  >
                    {/* Subtopic name */}
                    <span className="flex-1 font-medium overflow-hidden text-ellipsis">
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

                  {/* Risk factors list - conditionally rendered when subtopic is expanded */}
                  {expandedSubtopics[subtopic.id] &&
                    subtopic.riskFactors &&
                    subtopic.riskFactors.length > 0 && (
                      <ul className="ml-4 mt-1 space-y-1 border-l border-gray-200 pl-2">
                        {subtopic.riskFactors.map((riskFactor) => (
                          <li key={riskFactor.id}>
                            <a
                              href={riskFactor.href}
                              onClick={() =>
                                handleRiskFactorClick(riskFactor.id)
                              }
                              className={`block px-3 py-1.5 text-xs rounded-md transition-colors leading-snug sidebar-item-text
                              ${
                                isActive(riskFactor.id)
                                  ? "bg-blue-50 text-blue-700"
                                  : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                              }`}
                              ref={
                                isActive(riskFactor.id)
                                  ? activeItemRef
                                  : undefined
                              }
                            >
                              {riskFactor.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500 italic">No sections available</p>
        )}
      </div>

      {/* Optional footer area - can be used for additional controls */}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <p className="text-xs text-gray-500 text-center">
          {subtopics.length} section{subtopics.length !== 1 ? "s" : ""}{" "}
          available
        </p>
      </div>
    </aside>
  );
}
