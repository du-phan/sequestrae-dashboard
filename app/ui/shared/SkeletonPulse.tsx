import React from "react";

interface SkeletonPulseProps {
  className?: string;
  width?: string;
  height?: string;
}

export default function SkeletonPulse({
  className = "",
  width = "100%",
  height = "1rem",
}: SkeletonPulseProps) {
  return (
    <div
      className={`bg-gray-200 rounded-md animate-pulse ${className}`}
      style={{ width, height }}
    ></div>
  );
}
