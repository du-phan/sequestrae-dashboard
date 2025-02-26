"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Props interface for the TopNavBar component
// projectId is optional and used to build navigation URLs
interface TopNavBarProps {
  projectId?: string;
}

// Navigation items configuration array
// Each item has a name (displayed text) and href (route segment)
// The href is appended to the base project path to form complete URLs
const navItems = [
  { name: "Overview", href: "" }, // Empty href means root project page
  { name: "Carbon Accounting & Integrity", href: "carbon" },
  { name: "Delivery Risk", href: "risk" },
  { name: "Environmental Factor", href: "environment" },
  { name: "Policy", href: "policy" },
  { name: "Social Impact", href: "social" },
];

// TopNavBar component - horizontal navigation for project pages
const TopNavBar = ({ projectId }: TopNavBarProps) => {
  // Get the current path to determine active navigation item
  const pathname = usePathname();

  // Build the base path for all navigation links
  // If projectId is provided, we use /project/{id}, otherwise just /project
  const basePath = projectId ? `/project/${projectId}` : "/project";

  return (
    // Main navigation container - fixed at top of viewport
    // h-16 = 64px height as per specifications
    // z-50 ensures nav appears above other content
    <nav className="fixed top-0 w-full h-16 bg-white shadow-sm z-50">
      {/* Inner container with horizontal padding (px-4 = 16px) */}
      <div className="flex items-center h-full px-4">
        {/* Navigation items list with gap between items (space-x-4 = 16px) */}
        <ul className="flex items-center space-x-4">
          {navItems.map((item) => {
            // Construct the full URL for this navigation item
            const href = `${basePath}${item.href ? `/${item.href}` : ""}`;

            // Check if this item corresponds to the current route
            const isActive = pathname === href;

            return (
              <li key={item.name}>
                {/* 
                  Next.js Link component for client-side navigation
                  Styling changes based on active state:
                  - Active: blue background with dark blue text
                  - Inactive: gray text that turns blue on hover
                */}
                <Link
                  href={href}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-700" // Active state styling
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50" // Inactive state styling
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default TopNavBar;
