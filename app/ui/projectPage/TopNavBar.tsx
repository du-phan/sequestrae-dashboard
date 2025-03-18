"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useTransition } from "react";
import SupportButtonSkeleton from "../shared/SupportButtonSkeleton";

interface TopNavBarProps {
  projectId?: string;
  projectName: string;
  projectUrl?: string; // URL to the registry page where credits can be purchased
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

const TopNavBar = ({ projectId, projectName, projectUrl }: TopNavBarProps) => {
  const pathname = usePathname();
  const basePath = projectId ? `/project/${projectId}` : "/project";
  const currentTopicName = getCurrentTopicName(pathname, basePath);
  const [showTooltip, setShowTooltip] = useState(false);

  // Use isPending from useTransition to detect navigation state
  const [isPending, startTransition] = useTransition();
  const [isNavigating, setIsNavigating] = useState(false);

  // Combine the actual transition state with our controlled state
  const isLoading = isPending || isNavigating;

  // Reset loading state when pathname changes
  useEffect(() => {
    // When pathname changes, briefly show loading state
    setIsNavigating(true);
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

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

                // Improved isActive logic that correctly handles all path variants
                let isActive = false;

                if (item.href === "") {
                  // For Overview tab, check all possible path variants
                  isActive =
                    pathname === basePath ||
                    pathname === `${basePath}/` ||
                    pathname === `${basePath}/overview` ||
                    pathname === `${basePath}/overview/`;
                } else {
                  // For other tabs, check for exact match
                  isActive = pathname === href || pathname === `${href}/`;
                }

                // Wrap navigation in startTransition to enable pending states
                const handleClick = () => {
                  if (isActive) return; // Don't navigate if already active

                  // Don't prevent navigation, but track the transition
                  startTransition(() => {
                    // Navigation will happen naturally through the Link
                  });
                };

                return (
                  <li key={item.name}>
                    <Link
                      href={href}
                      onClick={handleClick}
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

        {/* Registry CTA button with loading skeleton */}
        <div className="flex-shrink-0">
          {isLoading ? (
            // Show skeleton during navigation
            <SupportButtonSkeleton />
          ) : projectUrl ? (
            <div className="relative group">
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent
                          rounded-md shadow-sm text-sm font-medium 
                          bg-lavender-600 text-white hover:bg-lavender-700
                          transition-all duration-200
                          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lavender-500"
                aria-label="Support this project by purchasing carbon credits"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <span className="hidden sm:inline text-white">
                  Support this project
                </span>
                <span className="sm:hidden text-white">Support</span>

                {/* External link icon with pure white stroke */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1.5 group-hover:translate-x-0.5 transition-transform duration-200 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>

              {/* Fixed tooltip with minimal padding and no extra space */}
              {showTooltip && (
                <div className="absolute right-0 mt-2 w-56 bg-gray-800 rounded shadow-lg z-50 tooltip-animation-enter overflow-hidden">
                  <span className="block text-white text-xs leading-normal py-1.5 px-2.5">
                    Go to the registry page to purchase carbon credits from this
                    biochar project
                  </span>
                </div>
              )}
            </div>
          ) : (
            <div className="w-8" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
