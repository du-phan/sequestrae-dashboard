import React from "react";
import TopNavBar from "@/app/ui/projectPage/TopNavBar";

export default async function CarbonIntegrityPage({
  params,
}: {
  params: { projectId: string };
}) {
  const { projectId } = params;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <TopNavBar projectId={projectId} />

      {/* Main content area with proper spacing to account for fixed navbar */}
      <main className="pt-16 px-4">
        <div className="max-w-7xl mx-auto py-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Carbon Accounting & Integrity
          </h1>
          <p className="mt-4 text-gray-600">Project ID: {projectId}</p>

          {/* Sample content for the Integrity page */}
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-800">
                Carbon Credits
              </h2>
              <p className="mt-2 text-gray-600">
                Information about carbon credits verification and accounting
                methods for this project.
              </p>
              <div className="mt-4 bg-blue-50 p-4 rounded-md">
                <p className="text-blue-700 font-medium">
                  Verified Credits: 1,250 tCO2e
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-800">
                Methodology
              </h2>
              <p className="mt-2 text-gray-600">
                This project follows the Verified Carbon Standard (VCS)
                methodology for quantification.
              </p>
              <div className="mt-4 flex items-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  VCS Approved
                </span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow lg:col-span-2">
              <h2 className="text-xl font-semibold text-gray-800">
                Integrity Assessment
              </h2>
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
                <p className="mt-2 text-gray-600">
                  Overall integrity score: 85%
                </p>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-md font-medium text-gray-700">
                    Strengths
                  </h3>
                  <ul className="mt-2 list-disc list-inside text-gray-600">
                    <li>Third-party verification</li>
                    <li>Transparent accounting methods</li>
                    <li>Regular monitoring</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-md font-medium text-gray-700">
                    Areas for Improvement
                  </h3>
                  <ul className="mt-2 list-disc list-inside text-gray-600">
                    <li>Documentation completeness</li>
                    <li>Baseline calculation adjustments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
