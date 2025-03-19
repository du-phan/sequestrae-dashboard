"use client";

import React from "react";
import SkeletonPulse from "../../shared/SkeletonPulse";

interface MainContentAreaSkeletonProps {
  className?: string;
}

/**
 * Skeleton loader for MainContentArea component
 * Mirrors the structure of the actual component to prevent layout shifts
 */
export default function MainContentAreaSkeleton({
  className = "",
}: MainContentAreaSkeletonProps) {
  return (
    <div className={`max-w-4xl mx-auto ${className}`}>
      {/* Topic introduction skeleton */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <div className="relative">
          <div className="flex mb-6">
            <div className="flex-shrink-0 w-1 bg-lavender-300 rounded-full self-stretch mr-4"></div>
            <SkeletonPulse height="2rem" width="60%" />
          </div>
        </div>

        {/* Description skeleton */}
        <div className="ml-5 relative">
          <div className="bg-gray-50/80 border border-gray-100 rounded-lg p-6 mb-2 shadow-sm">
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <SkeletonPulse
                  height="1.375rem"
                  width="1.375rem"
                  className="rounded-md"
                />
              </div>
              <div className="flex-grow">
                <SkeletonPulse height="0.875rem" width="25%" className="mb-2" />
                <SkeletonPulse height="1rem" className="mb-2" />
                <SkeletonPulse height="1rem" className="mb-2" />
                <SkeletonPulse height="1rem" width="75%" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary card section skeleton */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <div className="flex mb-8">
          <div className="flex-shrink-0 w-1 bg-lavender-300 rounded-full self-stretch"></div>
          <SkeletonPulse height="1.5rem" width="40%" className="ml-4" />
        </div>

        <div className="ml-5 mt-4">
          {/* Summary card skeleton */}
          <div className="rounded-lg p-0 bg-white border border-gray-200 shadow-md relative overflow-hidden">
            <div className="h-1.5 w-full bg-lavender-200"></div>
            <div className="p-6">
              <div className="flex">
                <div className="mr-4 flex-shrink-0">
                  <SkeletonPulse
                    height="1.5rem"
                    width="1.5rem"
                    className="rounded"
                  />
                </div>
                <div>
                  <SkeletonPulse
                    height="0.875rem"
                    width="20%"
                    className="mb-2"
                  />
                  <SkeletonPulse height="1rem" className="mb-1" />
                  <SkeletonPulse height="1rem" className="mb-1" />
                  <SkeletonPulse height="1rem" width="90%" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed analysis skeleton */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <div className="flex mb-8">
          <div className="flex-shrink-0 w-1 bg-lavender-300 rounded-full self-stretch"></div>
          <SkeletonPulse height="1.5rem" width="35%" className="ml-4" />
        </div>

        <div className="ml-5">
          {/* First subtopic skeleton */}
          <SubtopicSectionSkeleton />

          {/* Second subtopic skeleton - with divider */}
          <div className="mt-12 mb-12">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          </div>

          <SubtopicSectionSkeleton />
        </div>
      </div>
    </div>
  );
}

/**
 * Skeleton for a subtopic section
 */
function SubtopicSectionSkeleton() {
  return (
    <div className="w-full">
      {/* Subtopic heading */}
      <div className="mb-6 pb-2 border-b border-gray-200">
        <div className="flex items-center mb-1">
          <SkeletonPulse height="0.875rem" width="15%" className="mr-2" />
        </div>
        <SkeletonPulse height="1.25rem" width="50%" />
      </div>

      {/* Subtopic summary */}
      <div className="mb-8">
        <div className="bg-gray-50 border border-gray-100 rounded-lg p-5 relative">
          <div className="flex items-start">
            <SkeletonPulse
              height="1.25rem"
              width="1.25rem"
              className="mr-2 flex-shrink-0 rounded"
            />
            <div className="flex-1">
              <SkeletonPulse height="0.875rem" width="20%" className="mb-2" />
              <SkeletonPulse height="1rem" className="mb-1" />
              <SkeletonPulse height="1rem" className="mb-1" />
              <SkeletonPulse height="1rem" width="80%" />
            </div>
          </div>
        </div>
      </div>

      {/* Risk factors section */}
      <div className="mb-4 ml-1">
        <SkeletonPulse height="1rem" width="25%" className="mb-6" />

        <div className="space-y-8">
          {/* Risk factor card skeletons */}
          <RiskFactorCardSkeleton />
          <RiskFactorCardSkeleton />
        </div>
      </div>
    </div>
  );
}

/**
 * Skeleton for a risk factor card
 */
function RiskFactorCardSkeleton() {
  return (
    <div className="border rounded-lg bg-white border-gray-200 shadow-sm">
      {/* Card header */}
      <div className="border-b border-gray-100 py-4 px-6">
        <SkeletonPulse height="0.75rem" width="20%" className="mb-1" />
        <SkeletonPulse height="1.25rem" width="70%" />
      </div>

      {/* Card body */}
      <div className="p-6 pt-5">
        {/* Point type counts */}
        <div className="flex flex-wrap gap-2 mb-5">
          <SkeletonPulse
            height="1.5rem"
            width="5rem"
            className="rounded-full"
          />
          <SkeletonPulse
            height="1.5rem"
            width="7rem"
            className="rounded-full"
          />
          <SkeletonPulse
            height="1.5rem"
            width="6rem"
            className="rounded-full"
          />
        </div>

        {/* Expand button */}
        <SkeletonPulse height="1rem" width="7rem" />
      </div>
    </div>
  );
}
