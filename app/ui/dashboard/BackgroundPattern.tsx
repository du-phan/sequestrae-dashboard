import React from "react";

export default function BackgroundPattern() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Top Pattern - Enhanced with gradients and animations */}
      <svg
        className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-blue-50 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] opacity-80"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="grid-pattern"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>

          {/* Add gradients for visual enhancement */}
          <linearGradient
            id="blue-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
            <stop offset="50%" stopColor="rgba(79, 70, 229, 0.08)" />
            <stop offset="100%" stopColor="rgba(147, 51, 234, 0.1)" />
          </linearGradient>
        </defs>

        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#grid-pattern)"
        />

        {/* Animated subtle waves */}
        <path
          d="M-100,180 C150,180 350,20 500,180 C650,330 750,180 900,180 V500 H-100 Z"
          fill="url(#blue-gradient)"
          className="animate-slow-pulse"
          opacity="0.4"
        />

        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
          <path
            d="M-200.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
      </svg>

      {/* Bottom Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-[30rem] bg-gradient-to-t from-gray-50 to-transparent opacity-70" />

      {/* Accent Circles - Visual elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.02]" />
    </div>
  );
}
