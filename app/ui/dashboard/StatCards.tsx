import React from "react";
import { colorPalette } from "@/app/ui/theme";

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
  // Format numbers with thousands separators
  const formattedValue =
    typeof value === "number" ? new Intl.NumberFormat().format(value) : value;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:border-gray-200 hover:shadow-md transition-all duration-200">
      <div className="p-5">
        {/* Improved card header */}
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-medium text-gray-700">{title}</p>
          <div
            className={`p-2.5 rounded-md ${bgColor} transition-transform duration-300 hover:scale-105`}
          >
            <div className={`${iconColor} w-5 h-5`}>{icon}</div>
          </div>
        </div>

        {/* Better value display */}
        <div className="mt-2">
          <h3 className={`text-2xl font-bold text-gray-900`}>
            {formattedValue}
          </h3>

          {/* Improved subtitle */}
          {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
        </div>
      </div>

      {/* Removed the colored bottom bar */}
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <StatCard
        title="Biochar Projects"
        value={projectsCount}
        subtitle="Total projects analyzed"
        icon={
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
        }
        bgColor="bg-blueCustom-50"
        iconColor="text-blueCustom-400"
      />

      <StatCard
        title="Geographical Scope"
        value={countriesCount}
        subtitle="Countries represented"
        icon={
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        }
        bgColor="bg-amberCustom-50"
        iconColor="text-amberCustom-400"
      />

      <StatCard
        title="Registries"
        value={registriesCount}
        subtitle="Carbon credit standards"
        icon={
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        }
        bgColor="bg-greenCustom-50"
        iconColor="text-greenCustom-400"
      />
    </div>
  );
}
