"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface TopNavBarProps {
  projectId?: string;
}

const navItems = [
  { name: "Overview", href: "" },
  { name: "Carbon Accounting & Integrity", href: "integrity" },
  { name: "Delivery Risk", href: "delivery" },
  { name: "Environmental Factor", href: "environment" },
  { name: "Policy", href: "policy" },
  { name: "Social Impact", href: "social" },
];

const TopNavBar = ({ projectId }: TopNavBarProps) => {
  const pathname = usePathname();
  const basePath = projectId ? `/project/${projectId}` : "/project";

  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-gray-200 h-16 shadow-sm">
      <div className="h-full px-4 mx-auto flex items-center overflow-x-auto">
        <ul className="flex items-center space-x-4">
          {navItems.map((item) => {
            const href = `${basePath}${item.href ? `/${item.href}` : ""}`;
            const isActive = pathname === href;

            return (
              <li key={item.name}>
                <Link
                  href={href}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
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
    </nav>
  );
};

export default TopNavBar;
