"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function DashboardTopNavBar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-gray-200 h-16 shadow-sm">
      <div className="h-full px-4 flex items-center justify-between">
        {/* Logo and App Name - identical to ProjectTopNavBar for consistency */}
        <div className="flex-shrink-0 flex items-center mr-6">
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
            <span className="text-gray-900 font-medium text-lg group-hover:text-blue-600 transition-colors">
              Sequestrae
            </span>
          </a>
        </div>

        {/* Dashboard title with fixed vertical alignment */}
        <div className="flex-1 flex justify-center items-center h-full">
          <h1 className="text-lg font-semibold text-gray-800 tracking-tight leading-none m-0">
            Biochar CDR Intelligence Hub
          </h1>
        </div>

        {/* Empty div to maintain spacing */}
        <div className="flex-shrink-0 w-[100px]"></div>
      </div>
    </nav>
  );
}
