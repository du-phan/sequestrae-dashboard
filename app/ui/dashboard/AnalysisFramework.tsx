import React from "react";
import {
  CalculatorIcon,
  ExclamationTriangleIcon,
  GlobeAmericasIcon,
  ScaleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

type DimensionProps = {
  icon: React.ReactNode;
  name: string;
  color: string;
};

const Dimension = ({ icon, name, color }: DimensionProps) => {
  return (
    <div className="flex items-center gap-2 py-1.5 px-2 rounded-md hover:bg-white hover:shadow-sm transition-all">
      <div className={`${color}`}>{icon}</div>
      <span className="text-xs font-medium text-gray-700">{name}</span>
    </div>
  );
};

export default function AnalysisFramework() {
  return (
    <div className="bg-gray-50 rounded-lg p-4 mb-6">
      <div className="flex flex-wrap justify-center gap-4">
        <Dimension
          icon={<CalculatorIcon className="w-4 h-4" />}
          name="Carbon Accounting & Integrity"
          color="text-blue-600"
        />
        <Dimension
          icon={<ExclamationTriangleIcon className="w-4 h-4" />}
          name="Delivery Risk"
          color="text-amber-600"
        />
        <Dimension
          icon={<GlobeAmericasIcon className="w-4 h-4" />}
          name="Environmental Impact"
          color="text-green-600"
        />
        <Dimension
          icon={<ScaleIcon className="w-4 h-4" />}
          name="Policy Landscape"
          color="text-indigo-600"
        />
        <Dimension
          icon={<UserGroupIcon className="w-4 h-4" />}
          name="Social Impact"
          color="text-rose-600"
        />
      </div>
      <p className="text-xs text-center text-gray-500 mt-2">
        Our AI-powered engine evaluates every project across these 5 dimensions
      </p>
    </div>
  );
}
