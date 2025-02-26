import React from "react";
import TopNavBar from "@/app/ui/projectPage/TopNavBar";

export default async function PolicyPage({
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
            Policy & Regulations
          </h1>
          <p className="mt-4 text-gray-600">Project ID: {projectId}</p>

          {/* Sample content for the Policy page */}
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-800">
                Regulatory Compliance
              </h2>
              <p className="mt-2 text-gray-600">
                Summary of compliance with carbon market regulations and
                standards.
              </p>
              <div className="mt-4 bg-green-50 p-4 rounded-md">
                <p className="text-green-700 font-medium">
                  Status: Compliant with all applicable regulations
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-800">
                Policy Framework
              </h2>
              <p className="mt-2 text-gray-600">
                This project operates under national carbon reduction policy
                guidelines.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  National Policy
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                  Regional Standards
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                  Industry Guidelines
                </span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow lg:col-span-2">
              <h2 className="text-xl font-semibold text-gray-800">
                Key Policy Documents
              </h2>
              <div className="mt-4 divide-y divide-gray-200">
                <div className="py-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-800">
                      Carbon Offset Agreement
                    </p>
                    <p className="text-sm text-gray-600">
                      Updated: Jan 15, 2023
                    </p>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                    View
                  </button>
                </div>
                <div className="py-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-800">
                      Regulatory Compliance Report
                    </p>
                    <p className="text-sm text-gray-600">
                      Updated: Mar 22, 2023
                    </p>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                    View
                  </button>
                </div>
                <div className="py-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-800">
                      Carbon Credit Verification Protocol
                    </p>
                    <p className="text-sm text-gray-600">
                      Updated: Nov 8, 2023
                    </p>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                    View
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow lg:col-span-2">
              <h2 className="text-xl font-semibold text-gray-800">
                Upcoming Policy Changes
              </h2>
              <div className="mt-4">
                <div className="bg-yellow-50 p-4 rounded-md">
                  <p className="text-yellow-700 font-medium">
                    New carbon accounting standards will become mandatory
                    starting Q3 2024
                  </p>
                  <p className="mt-2 text-yellow-600">
                    This project will need to implement changes to meet the new
                    requirements. A transition plan is currently being
                    developed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
