import React from "react";
import { textPresets } from "@/app/ui/theme";

export default function DashboardHeader() {
  return (
    <div className="bg-white shadow-sm rounded-lg p-6 mb-8">
      <div className="flex items-start">
        {/* Left side with vertical line and title */}
        <div className="flex flex-1">
          {/* Blue vertical line with enhanced styling */}
          <div className="flex-shrink-0 w-1.5 bg-blue-600 rounded-full self-stretch mr-4"></div>

          {/* Title and description content */}
          <div className="flex-1">
            <h1 className={`${textPresets.h3} text-gray-900 mb-4`}>
              Projects Dashboard
            </h1>

            <p className={`${textPresets.paragraph} text-gray-700 max-w-3xl`}>
              Browse, search, and manage your carbon projects. Click on any
              project to view detailed analysis including carbon accounting,
              delivery risk, environmental impact, policy landscape, and social
              aspects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
