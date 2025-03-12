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

      {/* Main content with consistent padding matching ProjectLayout */}
      <main className="flex-1 p-4 md:p-6 lg:p-8 relative z-0">{children}</main>
    </div>
  );
}
