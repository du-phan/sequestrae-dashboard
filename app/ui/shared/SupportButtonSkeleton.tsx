"use client";

import React from "react";

interface SupportButtonSkeletonProps {
  /**
   * Optional class name for additional styling
   */
  className?: string;
}

/**
 * A skeleton loader that matches the size and shape of the Support button
 * Used during page transitions to maintain visual consistency
 */
export default function SupportButtonSkeleton({
  className = "",
}: SupportButtonSkeletonProps) {
  // Use precisely the same structure as the real button
  return (
    <div className="relative group">
      <div
        className={`inline-flex items-center px-4 py-2 border border-transparent
                  rounded-md shadow-sm text-sm font-medium
                  bg-gray-100 animate-pulse ${className}`}
        style={{ minHeight: "38px" }}
        aria-hidden="true"
      >
        {/* Text placeholder - hidden on small screens */}
        <div className="hidden sm:block h-4 w-[132px] bg-gray-200 rounded"></div>

        {/* Mobile text placeholder */}
        <div className="sm:hidden h-4 w-[58px] bg-gray-200 rounded"></div>

        {/* Icon placeholder with exact dimensions and spacing */}
        <div className="h-4 w-4 ml-1.5 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}
