"use client";

import Link from "next/link";
import Image from "next/image"; // Add Next.js Image component
import { usePathname } from "next/navigation";

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

const TopNavBar = ({ projectId, projectName }: TopNavBarProps) => {
  const pathname = usePathname();
  const basePath = projectId ? `/project/${projectId}` : "/project";
  const currentTopicName = getCurrentTopicName(pathname, basePath);

  return (
    <nav
      className="sticky top-0 z-40 bg-white border-b border-gray-200 h-16 shadow-sm"
      aria-label={`${projectName} - ${currentTopicName}`}
    >
      <div className="h-full px-4 flex items-center">
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
            <span className="text-gray-900 font-medium text-lg group-hover:text-lavender-600 transition-colors">
              Sequestrae
            </span>
          </a>
        </div>

        {/* Centered Tabs navigation */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center overflow-x-auto no-scrollbar">
            <ul className="flex items-center space-x-2">
              {navItems.map((item) => {
                const href = `${basePath}${item.href ? `/${item.href}` : ""}`;
                const isActive = pathname === href;

                return (
                  <li key={item.name}>
                    <Link
                      href={href}
                      className={`px-3 py-2 text-sm font-medium rounded-t-sm transition-all duration-200 whitespace-nowrap border-b ${
                        isActive
                          ? "text-lavender-700 border-lavender-500 bg-lavender-50/80"
                          : "text-gray-700 hover:text-lavender-600 hover:bg-gray-50/80 border-transparent hover:border-lavender-200/70"
                      } h-10 flex items-center`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Empty div for layout balance */}
        <div className="flex-shrink-0 invisible md:visible">
          <div className="w-8"></div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
