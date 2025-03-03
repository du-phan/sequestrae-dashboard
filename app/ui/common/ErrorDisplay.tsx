"use client";

import React from "react";

interface ErrorDisplayProps {
  message?: string;
}

export default function ErrorDisplay({
  message = "Something went wrong",
}: ErrorDisplayProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="text-red-500 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">
        Error Loading Data
      </h3>
      <p className="text-gray-600 mb-4">{message}</p>
      <button
        onClick={() => window.location.reload()}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
}
