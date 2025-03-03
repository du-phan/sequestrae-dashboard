import React from "react";
import TopNavBar from "@/app/ui/projectPage/TopNavBar";

// Updated to properly await params in Next.js 14
export default async function ProjectPage({
  params,
}: {
  params: { projectId: string };
}) {
  // Await the params object before accessing its properties
  const { projectId } = await params;
  console.log(projectId);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <TopNavBar projectId={projectId} />

      {/* Main content area with proper spacing to account for fixed navbar */}
      <main className="pt-16 px-4">
        <div className="max-w-7xl mx-auto py-8">
          {/* Content for the selected topic will be rendered here */}
          <h1 className="text-2xl font-bold text-gray-900">Project Details</h1>
          <p>Project ID: {projectId}</p>
          {/* Additional content */}
        </div>
      </main>
    </div>
  );
}
