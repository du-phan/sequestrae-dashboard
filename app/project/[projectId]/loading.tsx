"use client";

import React from "react";
import TopNavBar from "@/app/ui/projectPage/TopNavBar"; // Import the actual TopNavBar component

export default function ProjectLoadingSkeleton() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Use the actual TopNavBar component instead of a skeleton */}
      <TopNavBar projectName="Loading project..." />

      <div className="flex flex-1">
        {/* LeftSidebar Skeleton */}
        <div className="w-64 flex-shrink-0">
          <div className="sticky top-16 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 flex flex-col">
            <div className="flex-1 overflow-y-auto p-6">
              {/* Real topic sections header instead of skeleton */}
              <h3 className="uppercase tracking-wider text-gray-500 font-semibold mb-6 text-xs">
                Topic Sections
              </h3>

              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="space-y-2">
                    <div className="h-8 w-full bg-gray-200 rounded-md animate-pulse"></div>
                    <div className="ml-4 space-y-2">
                      <div className="h-6 w-[90%] bg-gray-100 rounded-md animate-pulse"></div>
                      <div className="h-6 w-[85%] bg-gray-100 rounded-md animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <div className="h-4 w-24 mx-auto bg-gray-200 rounded-md animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Main content skeleton */}
        <main className="flex-1 bg-gray-50 p-4 md:p-6 lg:p-8">
          <div className="max-w-4xl mx-auto">
            {/* Topic introduction skeleton */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="h-8 w-1/3 bg-gray-200 rounded-md animate-pulse mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-200 rounded-md animate-pulse"></div>
                <div className="h-4 w-[90%] bg-gray-200 rounded-md animate-pulse"></div>
                <div className="h-4 w-[70%] bg-gray-200 rounded-md animate-pulse"></div>
              </div>
            </div>

            {/* Summary card section skeleton */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="flex mb-8">
                <div className="flex-shrink-0 w-1 bg-blue-200 rounded-full self-stretch"></div>
                <div className="h-6 w-48 bg-gray-200 rounded-md animate-pulse ml-4"></div>
              </div>

              <div className="ml-5 mt-4">
                <div className="border border-blue-100 bg-blue-50 p-6 rounded-lg">
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-blue-100 rounded-md animate-pulse"></div>
                    <div className="h-4 w-[95%] bg-blue-100 rounded-md animate-pulse"></div>
                    <div className="h-4 w-[80%] bg-blue-100 rounded-md animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed analysis section skeleton */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="flex mb-8">
                <div className="flex-shrink-0 w-1 bg-blue-200 rounded-full self-stretch"></div>
                <div className="h-6 w-40 bg-gray-200 rounded-md animate-pulse ml-4"></div>
              </div>

              <div className="ml-5">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="mb-8">
                    <div className="h-6 w-48 bg-gray-200 rounded-md animate-pulse mb-4"></div>
                    <div className="space-y-2 mb-6">
                      <div className="h-4 w-full bg-gray-200 rounded-md animate-pulse"></div>
                      <div className="h-4 w-[90%] bg-gray-200 rounded-md animate-pulse"></div>
                      <div className="h-4 w-[85%] bg-gray-200 rounded-md animate-pulse"></div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                      <div className="h-5 w-32 bg-gray-300 rounded-md animate-pulse mb-4"></div>
                      <div className="space-y-4">
                        {[1, 2].map((j) => (
                          <div key={j} className="space-y-2">
                            <div className="h-4 w-[95%] bg-gray-200 rounded-md animate-pulse"></div>
                            <div className="h-4 w-[90%] bg-gray-200 rounded-md animate-pulse"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
