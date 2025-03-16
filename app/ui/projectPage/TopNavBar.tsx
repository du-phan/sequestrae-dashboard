"use client";

import Link from "next/link";
import Image from "next/image"; // Add Next.js Image component
import { usePathname } from "next/navigation";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

interface TopNavBarProps {
  projectId?: string;
  projectName: string; // Changed to required prop (removed ? mark)
}

const navItems = [
  { name: "Overview", href: "" },
  { name: "Carbon Accounting & Integrity", href: "integrity" },
  { name: "Delivery Risk", href: "delivery" },
  { name: "Environmental Factor", href: "environment" },
  { name: "Policy Landscape", href: "policy" },
  { name: "Social Impact", href: "social" },
];

/**
 * Extract the current topic name from the pathname or navItems
 */
const getCurrentTopicName = (
  pathname: string | null,
  basePath: string
): string => {
  // Handle null pathname
  if (!pathname) return "Overview";

  // Remove the basePath from pathname to get the topic segment
  const pathWithoutBase = pathname.replace(basePath, "").replace(/^\/+/, "");

  // Find the matching nav item
  const matchedNavItem = navItems.find(
    (item) => pathWithoutBase === item.href || pathWithoutBase === ""
  );

  // Return the matched name or a default
  return matchedNavItem?.name || "Overview";
};

/**
 * Format project name by replacing underscores with spaces
 */
const formatProjectName = (name: string): string => {
  return name.replace(/_/g, " ");
};

const TopNavBar = ({ projectId, projectName }: TopNavBarProps) => {
  const pathname = usePathname();
  const basePath = projectId ? `/project/${projectId}` : "/project";
  const currentTopicName = getCurrentTopicName(pathname, basePath);

  // Format the project name for display while keeping original for the title attribute
  const displayProjectName = formatProjectName(projectName);

  return (
    <nav
      className="sticky top-0 z-40 bg-white border-b border-gray-200 h-16 shadow-sm"
      aria-label={`${projectName} - ${currentTopicName}`}
    >
      <div className="h-full px-4 flex items-center justify-between">
        {/* Logo and App Name */}
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
            <span className="text-gray-900 font-medium text-lg group-hover:text-lavender-600 transition-colors">
              Sequestrae
            </span>
          </a>
        </div>

        {/* Breadcrumb navigation - now comes after logo */}
        <div className="flex items-center text-sm text-gray-600 min-w-0 max-w-[40%]">
          <Link
            href="/dashboard"
            className="hover:text-lavender-600 transition-colors whitespace-nowrap flex-shrink-0"
          >
            Dashboard
          </Link>
          <ChevronRightIcon
            className="h-4 w-4 mx-1 flex-shrink-0 text-gray-400"
            aria-hidden="true"
          />
          <Link
            href={basePath}
            className="hover:text-lavender-600 transition-colors truncate max-w-[70%] flex-shrink-1 font-medium text-gray-800"
            title={projectName} // Original name for tooltip
          >
            {displayProjectName}
          </Link>
        </div>

        {/* Tabs navigation - contained properly to prevent overflow */}
        <div className="flex-shrink-0 ml-4">
          <div className="flex items-center overflow-x-auto no-scrollbar">
            <ul className="flex items-center space-x-2">
              {navItems.map((item) => {
                const href = `${basePath}${item.href ? `/${item.href}` : ""}`;
                const isActive = pathname === href;

                return (
                  <li key={item.name}>
                    <Link
                      href={href}
                      className={`px-3 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                        isActive
                          ? "bg-lavender-100 text-lavender-700"
                          : "text-gray-700 hover:text-lavender-600 hover:bg-gray-50"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
