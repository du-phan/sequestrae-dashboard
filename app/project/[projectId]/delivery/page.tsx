import React from "react";
import TopNavBar from "@/app/ui/projectPage/TopNavBar";

export default async function DeliveryRiskPage({
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
          <h1 className="text-2xl font-bold text-gray-900">Delivery Risk</h1>
          <p className="mt-4 text-gray-600">Project ID: {projectId}</p>

          {/* Content specific to Delivery Risk */}
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow col-span-2">
              <h2 className="text-xl font-semibold text-gray-800">
                Risk Overview
              </h2>
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700">Overall Risk Rating:</span>
                  <span className="font-medium text-amber-600">Medium</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-amber-500 h-2.5 rounded-full"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Project Implementation:</span>
                  <div className="flex items-center">
                    <span className="mr-2">Low</span>
                    <div className="w-24 bg-gray-200 rounded-full h-1.5">
                      <div
                        className="bg-green-500 h-1.5 rounded-full"
                        style={{ width: "25%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Market Volatility:</span>
                  <div className="flex items-center">
                    <span className="mr-2">High</span>
                    <div className="w-24 bg-gray-200 rounded-full h-1.5">
                      <div
                        className="bg-red-500 h-1.5 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Regulatory Changes:</span>
                  <div className="flex items-center">
                    <span className="mr-2">Medium</span>
                    <div className="w-24 bg-gray-200 rounded-full h-1.5">
                      <div
                        className="bg-amber-500 h-1.5 rounded-full"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-800">
                Risk Mitigation
              </h2>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-600">
                    Diversified revenue streams
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-600">
                    Insurance provisions in place
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-600">
                    Regulatory compliance team
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-600">
                    Quarterly risk assessments
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow lg:col-span-3">
              <h2 className="text-xl font-semibold text-gray-800">
                Risk Timeline & Projections
              </h2>
              <div className="mt-4 h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500 text-center">
                  Risk projection chart will be displayed here.
                  <br />
                  Showing quarterly risk assessments and mitigation
                  effectiveness.
                </p>
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-md">
                  <h3 className="font-medium text-blue-800">Short-term</h3>
                  <p className="mt-1 text-sm text-blue-600">
                    Focused on operational adjustments to reduce immediate
                    technical risks.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-md">
                  <h3 className="font-medium text-blue-800">Mid-term</h3>
                  <p className="mt-1 text-sm text-blue-600">
                    Developing partnerships to diversify market risk exposure.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-md">
                  <h3 className="font-medium text-blue-800">Long-term</h3>
                  <p className="mt-1 text-sm text-blue-600">
                    Strategic positioning for regulatory stability and policy
                    engagement.
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
