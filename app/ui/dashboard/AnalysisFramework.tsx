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
  bgColor: string;
};

const Dimension = ({ icon, name, color, bgColor }: DimensionProps) => {
  return (
    <div
      className={`flex items-center gap-3 py-2 px-3 rounded-lg ${bgColor} hover:shadow-md transition-all duration-300 group`}
    >
      <div
        className={`${color} transition-transform duration-300 group-hover:scale-110`}
      >
        {icon}
      </div>
      <span className="text-xs font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
        {name}
      </span>
    </div>
  );
};

export default function AnalysisFramework() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
      <div className="flex flex-col items-center mb-4">
        <h3 className="text-base font-medium text-gray-800">
          Our Evaluation Framework
        </h3>
        <p className="text-xs text-center text-gray-500 mt-1">
          Every project is analyzed across these five dimensions
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <Dimension
          icon={<CalculatorIcon className="w-5 h-5" />}
          name="Carbon Accounting & Integrity"
          color="text-blue-600"
          bgColor="bg-blue-50"
        />
        <Dimension
          icon={<ExclamationTriangleIcon className="w-5 h-5" />}
          name="Delivery Risk"
          color="text-amber-600"
          bgColor="bg-amber-50"
        />
        <Dimension
          icon={<GlobeAmericasIcon className="w-5 h-5" />}
          name="Environmental Impact"
          color="text-green-600"
          bgColor="bg-green-50"
        />
        <Dimension
          icon={<ScaleIcon className="w-5 h-5" />}
          name="Policy Landscape"
          color="text-indigo-600"
          bgColor="bg-indigo-50"
        />
        <Dimension
          icon={<UserGroupIcon className="w-5 h-5" />}
          name="Social Impact"
          color="text-rose-600"
          bgColor="bg-rose-50"
        />
      </div>
    </div>
  );
}
