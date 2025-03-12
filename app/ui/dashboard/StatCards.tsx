import React from "react";
import { textPresets } from "@/app/ui/theme";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  bgColor: string;
  iconColor: string;
  subtitle?: string;
}

const StatCard = ({
  title,
  value,
  icon,
  bgColor,
  iconColor,
  subtitle,
}: StatCardProps) => {
  // Format numbers with thousands separators for better readability
  const formattedValue =
    typeof value === "number" ? new Intl.NumberFormat().format(value) : value;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="p-5">
        {/* Improved header with better spacing */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <div
            className={`p-2.5 rounded-full ${bgColor} flex items-center justify-center`}
          >
            <div className={`${iconColor}`}>{icon}</div>
          </div>
        </div>

        {/* Enhanced value display with better vertical spacing */}
        <div className="text-center py-2">
          <h3
            className={`${textPresets.h3} text-gray-900 font-bold tracking-tight`}
          >
            {formattedValue}
          </h3>

          {/* Optional subtitle for additional context */}
          {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
        </div>
      </div>

      {/* Enhanced visual indicator at bottom */}
      <div
        className="h-1.5 bg-gradient-to-r from-transparent via-opacity-100 to-transparent"
        style={{ backgroundColor: `var(--${bgColor.split("-")[1]}-100)` }}
      ></div>
    </div>
  );
};

interface StatCardsProps {
  projectsCount: number;
  registriesCount: number;
  countriesCount: number;
}

export default function StatCards({
  projectsCount,
  registriesCount,
  countriesCount,
}: StatCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <StatCard
        title="Total Biochar Projects"
        value={projectsCount}
        subtitle="Projects analyzed in the platform"
        icon={
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
        }
        bgColor="bg-blue-50"
        iconColor="text-blue-600"
      />

      <StatCard
        title="Countries Represented"
        value={countriesCount}
        subtitle="Global project distribution"
        icon={
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        }
        bgColor="bg-indigo-50"
        iconColor="text-indigo-600"
      />

      <StatCard
        title="Unique Registries"
        value={registriesCount}
        subtitle="Carbon credit registries"
        icon={
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        }
        bgColor="bg-green-50"
        iconColor="text-green-600"
      />
    </div>
  );
}
