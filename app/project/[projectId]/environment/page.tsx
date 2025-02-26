import React from "react";
import TopNavBar from "@/app/ui/projectPage/TopNavBar";

export default async function EnvironmenFactorPage({
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
            Environmental Factor
          </h1>
          <p className="mt-4 text-gray-600">Project ID: {projectId}</p>

          {/* Content specific to Environmental Factor */}
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-800">
                Biodiversity Impact
              </h2>
              <div className="mt-4 flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                  <div
                    className="bg-green-600 h-2.5 rounded-full"
                    style={{ width: "78%" }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-700">78%</span>
              </div>
              <p className="mt-4 text-gray-600">
                This project contributes positively to local biodiversity
                through habitat preservation and restoration of native plant
                species. Ongoing monitoring shows improvement in species
                diversity across the project area.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Wildlife Protection
                </span>
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Native Species
                </span>
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Habitat Conservation
                </span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-800">
                Water Systems
              </h2>
              <div className="mt-4 flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-700">85%</span>
              </div>
              <p className="mt-4 text-gray-600">
                Project activities have resulted in improved water quality in
                local watersheds. Reduced runoff and enhanced filtration have
                positively impacted downstream water systems.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Watershed Protection
                </span>
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Groundwater Quality
                </span>
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Reduced Pollution
                </span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow lg:col-span-2">
              <h2 className="text-xl font-semibold text-gray-800">
                Environmental Monitoring
              </h2>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-gray-800">
                      Soil Quality
                    </h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Improving
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Improved organic matter content and reduced erosion observed
                    across 85% of site.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-gray-800">
                      Air Quality
                    </h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Stable
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Local air quality measurements show reduction in particulate
                    matter and improved conditions.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-gray-800">
                      Native Species
                    </h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Increasing
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Population of key indicator species has increased by 23%
                    since project inception.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow lg:col-span-2">
              <h2 className="text-xl font-semibold text-gray-800">
                Environmental Risk Management
              </h2>
              <div className="mt-4 overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Risk Factor
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Impact
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Mitigation Strategy
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        Drought Periods
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Medium
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Drought-resistant species selection and water management
                        systems
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Managed
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        Invasive Species
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        High
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Regular monitoring and removal program with community
                        involvement
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          Ongoing
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        Erosion
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Low
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Terracing and native vegetation planting along slopes
                        and water channels
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Resolved
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
