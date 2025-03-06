"use client";

import Link from "next/link";
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
  { name: "Policy", href: "policy" },
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

const TopNavBar = ({ projectId, projectName }: TopNavBarProps) => {
  const pathname = usePathname();
  const basePath = projectId ? `/project/${projectId}` : "/project";
  const currentTopicName = getCurrentTopicName(pathname, basePath);

  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-gray-200 h-16 shadow-sm">
      <div className="h-full px-4 flex items-center justify-between">
        {/* Simplified Breadcrumb navigation - removed redundant topic name */}
        <div className="flex items-center text-sm text-gray-600 min-w-0 max-w-[50%]">
          <Link
            href="/dashboard"
            className="hover:text-blue-600 transition-colors whitespace-nowrap flex-shrink-0"
          >
            Dashboard
          </Link>
          <ChevronRightIcon
            className="h-4 w-4 mx-1 flex-shrink-0 text-gray-400"
            aria-hidden="true"
          />
          <Link
            href={basePath}
            className="hover:text-blue-600 transition-colors truncate max-w-[70%] flex-shrink-1 font-medium text-gray-800"
            title={projectName} // Add title for tooltip on hover
          >
            {projectName}
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
                          ? "bg-blue-50 text-blue-700"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
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
