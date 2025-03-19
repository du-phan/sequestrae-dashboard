"use client";

import Image from "next/image";

export default function DashboardTopNavBar() {
  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-gray-200 h-16 shadow-sm">
      {/* Container div with fixed padding to ensure consistent alignment */}
      <div className="h-full mx-auto flex items-center">
        {/* Inner container with the same max width and padding as the content */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo and App Name - ensure fixed width matching right side */}
          <div className="flex-shrink-0 flex items-center w-[190px]">
            <a
              href="https://www.sequestrae.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center group"
              aria-label="Sequestrae homepage"
            >
              <div className="relative h-8 w-8 mr-2">
                <Image
                  src="/logo.png"
                  alt="Sequestrae Logo"
                  fill
                  sizes="32px"
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-gray-900 font-medium text-lg group-hover:text-gray-700 transition-colors">
                Sequestrae
              </span>
            </a>
          </div>

          {/* Dashboard title with true center alignment */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center h-full">
            <h1 className="text-lg font-semibold text-gray-800 tracking-tight leading-none m-0">
              Biochar CDR Intelligence Hub
            </h1>
          </div>

          {/* LinkedIn link with matching width for balance */}
          <div className="flex-shrink-0 w-[190px] flex justify-end">
            <a
              href="https://www.linkedin.com/company/sequestrae/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-500 hover:text-blue-600 transition-colors"
              aria-label="Visit Sequestrae LinkedIn page"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
