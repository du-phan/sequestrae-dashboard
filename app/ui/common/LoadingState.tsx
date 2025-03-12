import React from "react";

interface LoadingStateProps {
  message?: string;
}

export default function LoadingState({
  message = "Loading data...",
}: LoadingStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
      <p className="text-gray-600 text-center">{message}</p>
    </div>
  );
}
