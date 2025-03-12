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

          {/* Empty div with matching width for balance */}
          <div className="flex-shrink-0 w-[190px]"></div>
        </div>
      </div>
    </nav>
  );
}
