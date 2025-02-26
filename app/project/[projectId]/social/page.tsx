import React from "react";
import TopNavBar from "@/app/ui/projectPage/TopNavBar";

export default async function SocialImpactPage({
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
          <h1 className="text-2xl font-bold text-gray-900">Social Impact</h1>
          <p className="mt-4 text-gray-600">Project ID: {projectId}</p>

          {/* Sample content for the Social Impact page */}
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-800">
                Community Engagement
              </h2>
              <p className="mt-2 text-gray-600">
                Summary of engagement with local communities affected by this
                carbon project.
              </p>
              <div className="mt-4 bg-indigo-50 p-4 rounded-md">
                <p className="text-indigo-700 font-medium">
                  Community Status: Active participation from 5 local villages
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-800">
                Job Creation
              </h2>
              <p className="mt-2 text-gray-600">
                This project has created employment opportunities in the local
                area.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-900">78</p>
                  <p className="text-sm text-gray-600">New jobs created</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">82%</p>
                  <p className="text-sm text-gray-600">Local employment</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">45%</p>
                  <p className="text-sm text-gray-600">Women employed</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-800">
                Education & Training
              </h2>
              <p className="mt-2 text-gray-600">
                Programs developed to enhance local skills and knowledge.
              </p>
              <div className="mt-4 space-y-3">
                <div className="flex justify-between">
                  <span>Sustainable farming workshops</span>
                  <span className="font-medium">124 participants</span>
                </div>
                <div className="flex justify-between">
                  <span>Environmental education in schools</span>
                  <span className="font-medium">8 schools</span>
                </div>
                <div className="flex justify-between">
                  <span>Technical training programs</span>
                  <span className="font-medium">42 graduates</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-800">
                Health & Wellbeing
              </h2>
              <p className="mt-2 text-gray-600">
                Impact on community health outcomes and quality of life.
              </p>
              <div className="mt-4 space-y-3">
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                    <div
                      className="bg-green-600 h-2.5 rounded-full"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium">
                    65% improved access to clean water
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                    <div
                      className="bg-green-600 h-2.5 rounded-full"
                      style={{ width: "42%" }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium">
                    42% reduction in respiratory issues
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                    <div
                      className="bg-green-600 h-2.5 rounded-full"
                      style={{ width: "78%" }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium">
                    78% report improved quality of life
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow lg:col-span-2">
              <h2 className="text-xl font-semibold text-gray-800">
                Community Testimonials
              </h2>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="italic text-gray-700">
                    "This project has transformed our community. We now have
                    sustainable livelihoods and our children have better
                    opportunities for the future."
                  </p>
                  <p className="mt-2 font-medium text-gray-900">
                    - Maria Rodriguez, Community Leader
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="italic text-gray-700">
                    "The training I received allowed me to start my own small
                    sustainable business. I can now support my family while
                    helping protect our forests."
                  </p>
                  <p className="mt-2 font-medium text-gray-900">
                    - Thomas Okello, Local Entrepreneur
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow lg:col-span-2">
              <h2 className="text-xl font-semibold text-gray-800">
                Social Impact Goals
              </h2>
              <div className="mt-4">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Goal
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Target
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Progress
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Increase local employment
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          100 jobs
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          78 jobs (78%)
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            In Progress
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Clean water access
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          80% of households
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          65% of households
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            In Progress
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Education programs
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          5 schools
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          8 schools
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Exceeded
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Gender equality in employment
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          50% women
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          45% women
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            In Progress
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
