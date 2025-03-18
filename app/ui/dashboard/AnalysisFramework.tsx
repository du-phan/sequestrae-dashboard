"use client";

import React, { useState } from "react";
import {
  CalculatorIcon,
  ExclamationTriangleIcon,
  GlobeAmericasIcon,
  ScaleIcon,
  UserGroupIcon,
  BookOpenIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";

type TopicProps = {
  icon: React.ReactNode;
  name: string;
  color: string;
  bgColor: string;
};

const Topic = ({ icon, name, color, bgColor }: TopicProps) => {
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

// Component for each step in the analysis process
const AnalysisStep = ({
  number,
  title,
  description,
  children,
  reducedPadding = false,
}: {
  number: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  reducedPadding?: boolean;
}) => {
  return (
    <div
      className={`flex items-start gap-3 relative bg-white rounded-lg shadow-sm ${
        reducedPadding ? "pt-3.5 px-3.5 pb-2" : "p-3.5"
      }`}
    >
      <div className="flex-shrink-0 bg-lavender-50 rounded-full w-6 h-6 flex items-center justify-center border border-lavender-200 text-lavender-600 z-10">
        <span className="inline-flex items-center justify-center text-xs font-semibold leading-none">
          {number}
        </span>
      </div>
      <div className="flex-1 pt-0.5">
        <h5 className="text-sm font-medium text-gray-900 mb-1">{title}</h5>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>

        {/* Render children if present (for assessment categories) */}
        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  );
};

// Component for assessment category in the framework
const AssessmentCategory = ({
  title,
  description,
  bgColor,
  textColor,
}: {
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
}) => {
  // Icon selection based on category title - using same icons as ProjectInsightsSection
  const getIcon = () => {
    switch (title) {
      case "Strengths":
        return (
          <svg
            className="w-3.5 h-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            />
          </svg>
        );
      case "Considerations":
        return (
          <svg
            className="w-3.5 h-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
            />
          </svg>
        );
      case "Recommended Actions":
        return (
          <svg
            className="w-3.5 h-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow transition-all duration-200 flex flex-col h-full">
      <div
        className={`py-2.5 border-b border-gray-100 ${bgColor} rounded-t-lg flex justify-center items-center`}
      >
        {/* Fix: Align icon and text properly by using a single flex container with inline items */}
        <div className={`${textColor} inline-flex items-center`}>
          {getIcon()}
          <span className="ml-1.5 text-xs font-medium leading-none">
            {title}
          </span>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-2.5">
        <p className="text-sm text-gray-600 text-center m-0">{description}</p>
      </div>
    </div>
  );
};

export default function AnalysisFramework() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const topics = [
    {
      icon: <CalculatorIcon className="w-5 h-5" />,
      name: "Carbon Accounting & Integrity",
      color: "text-blueCustom-400",
      bgColor: "bg-blueCustom-50",
    },
    {
      icon: <ExclamationTriangleIcon className="w-5 h-5" />,
      name: "Delivery Risk",
      color: "text-amberCustom-400",
      bgColor: "bg-amberCustom-50",
    },
    {
      icon: <GlobeAmericasIcon className="w-5 h-5" />,
      name: "Environmental Impact",
      color: "text-greenCustom-400",
      bgColor: "bg-greenCustom-50",
    },
    {
      icon: <ScaleIcon className="w-5 h-5" />,
      name: "Policy Landscape",
      color: "text-lavender-500",
      bgColor: "bg-lavender-50",
    },
    {
      icon: <UserGroupIcon className="w-5 h-5" />,
      name: "Social Impact",
      color: "text-roseCustom-400",
      bgColor: "bg-roseCustom-50",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 pt-6 px-6 pb-1 mb-6">
      <div className="flex flex-col items-center mb-4">
        <h3 className="text-base font-medium text-gray-800">
          Our Evaluation Framework
        </h3>
        <p className="text-xs text-center text-gray-500 mt-1">
          Every project is analyzed across these five topics
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {topics.map((topic, index) => (
          <Topic
            key={index}
            icon={topic.icon}
            name={topic.name}
            color={topic.color}
            bgColor={topic.bgColor}
          />
        ))}
      </div>

      {/* Expandable explanation section with balanced padding */}
      <div className="mt-3 border-t border-gray-100 py-2">
        <button
          onClick={toggleExpanded}
          className="flex items-center justify-between w-full text-sm text-lavender-600 hover:text-lavender-700 font-medium rounded-md py-1 px-2
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-300 focus-visible:ring-opacity-50
            focus:outline-none"
          aria-expanded={isExpanded}
          aria-controls="analysis-explanation"
        >
          <div className="flex items-center gap-2">
            <BookOpenIcon className="h-4 w-4" />
            <span>How each topic is analyzed</span>
          </div>
          <div
            className={`transition-colors duration-200 ${
              isExpanded ? "bg-lavender-100" : "bg-transparent"
            } rounded-full p-0.5 flex items-center justify-center`}
          >
            {isExpanded ? (
              <ChevronUpIcon className="h-5 w-5 transition-transform duration-200" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 transition-transform duration-200" />
            )}
          </div>
        </button>

        {/* Collapsible content with adjusted spacing */}
        <div
          id="analysis-explanation"
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isExpanded ? "max-h-[1000px] opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-lg p-5 border border-gray-200 bg-white shadow-sm">
            <p className="text-sm text-gray-600 mb-4">
              Our methodology breaks down each topic using a consistent
              structure:
            </p>

            <div className="space-y-2.5">
              <AnalysisStep
                number="1"
                title="Subtopics"
                description="Each topic is divided into clear subtopics covering key areas of analysis."
                reducedPadding={true}
              />

              <AnalysisStep
                number="2"
                title="Factors"
                description="Within each subtopic, we highlight specific factors that directly influence project performance."
                reducedPadding={true}
              />

              {/* Third step now includes the assessment categories as children */}
              <AnalysisStep
                number="3"
                title="Assessment Framework"
                description="Each factor is assessed clearly in three categories:"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                  <AssessmentCategory
                    title="Strengths"
                    description="Positive aspects supporting project quality"
                    bgColor="bg-greenCustom-50"
                    textColor="text-greenCustom-700"
                  />

                  <AssessmentCategory
                    title="Considerations"
                    description="Issues or areas needing attention"
                    bgColor="bg-roseCustom-50"
                    textColor="text-roseCustom-700"
                  />

                  <AssessmentCategory
                    title="Recommended Actions"
                    description="Clear next steps to improve outcomes"
                    bgColor="bg-blueCustom-50"
                    textColor="text-blueCustom-700"
                  />
                </div>
              </AnalysisStep>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
