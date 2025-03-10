import React from "react";
import { textPresets } from "@/app/ui/theme";

export default function DashboardHeader() {
  return (
    <div className="mb-8">
      {/* Heading with fixed vertical alignment - matching TopicIntro styling */}
      <div className="flex">
        {/* Blue vertical line fixed at exact height */}
        <div className="flex-shrink-0 w-1 bg-blue-600 rounded-full self-stretch"></div>

        {/* Heading with proper padding and no bottom margin */}
        <h1 className={`${textPresets.h3} text-gray-900 ml-4 py-0 mb-0`}>
          Projects Dashboard
        </h1>
      </div>

      {/* Description with consistent left margin */}
      <div className="ml-5 max-w-prose mt-4">
        <p className={`${textPresets.paragraph}`}>
          Browse, search, and manage your carbon projects. Click on any project
          to view detailed analysis including carbon accounting, delivery risk,
          environmental impact, policy landscape, and social aspects.
        </p>
      </div>
    </div>
  );
}
