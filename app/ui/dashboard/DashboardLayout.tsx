"use client";

import React from "react";
import DashboardTopNavBar from "./DashboardTopNavBar";
import BackgroundPattern from "./BackgroundPattern";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

/**
 * DashboardLayout component - Provides the main layout structure for dashboard pages
 * With enhanced visual elements for a more modern look
 */
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 relative">
      <BackgroundPattern />
      <DashboardTopNavBar />

      {/* Main content with improved consistent spacing */}
      <main className="flex-1 px-4 py-5 md:px-6 md:py-6 lg:px-8 lg:py-7 relative z-0 max-w-7xl mx-auto">
        {children}
      </main>
    </div>
  );
}
