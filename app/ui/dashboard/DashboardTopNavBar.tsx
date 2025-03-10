"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function DashboardTopNavBar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-gray-200 h-16 shadow-sm">
      <div className="h-full px-4 mx-auto max-w-7xl flex items-center justify-between">
        {/* Logo and App Name */}
        <div className="flex-shrink-0 flex items-center">
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
            {/* Changed to black text for better visual harmony with logo */}
            <span className="text-gray-900 font-medium text-lg group-hover:text-gray-700 transition-colors">
              Sequestrae
            </span>
          </a>
        </div>

        {/* Dashboard title with color that maintains visual hierarchy */}
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
