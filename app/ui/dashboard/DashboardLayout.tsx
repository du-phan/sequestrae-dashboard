"use client";

import React from "react";
import DashboardTopNavBar from "./DashboardTopNavBar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

/**
 * DashboardLayout component - Provides the main layout structure for dashboard pages
 * Following the same pattern as ProjectLayout for consistency
 */
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <DashboardTopNavBar />

      {/* Main content with consistent padding matching ProjectLayout */}
      <main className="flex-1 bg-gray-50 p-4 md:p-6 lg:p-8">{children}</main>
    </div>
  );
}
