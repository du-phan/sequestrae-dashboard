"use client";

import React, { useState, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { textPresets } from "@/app/ui/theme";

export default function ProjectFilters() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("query")?.toString() || ""
  );

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    // Create a new URLSearchParams instance with null check
    const params = new URLSearchParams(searchParams?.toString() || "");

    if (searchQuery) {
      params.set("query", searchQuery);
    } else {
      params.delete("query");
    }
    params.set("page", "1"); // Reset to first page on new search

    // Use router.replace with scroll: false to prevent page from scrolling to top
    const url = `${pathname}?${params.toString()}`;

    // Create a new URL and update manually without scrolling
    window.history.pushState({}, "", url);
    replace(url, { scroll: false });

    // Keep focus on the search input for better UX
    if (searchInputRef.current) {
      searchInputRef.current.blur(); // Remove keyboard on mobile
    }
  };

  return (
    <div className="space-y-4">
      <h2
        className={`${textPresets.h4} text-gray-800 mb-4 flex items-center gap-2`}
      >
        <MagnifyingGlassIcon
          className="h-5 w-5 text-blue-500"
          aria-hidden="true"
        />
        Search Projects
      </h2>

      <div>
        <form onSubmit={handleSearch} className="w-full">
          <div className="flex items-stretch gap-2">
            <div className="relative flex-grow">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <MagnifyingGlassIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                ref={searchInputRef}
                type="text"
                name="search"
                placeholder="Search by project name, country, or registry..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full rounded-lg border-0 py-3 pl-12 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 
                           placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 
                           sm:text-sm sm:leading-6 transition-all duration-200"
                aria-label="Search projects"
              />
            </div>
            <button
              type="submit"
              className="shrink-0 flex items-center self-stretch px-5 rounded-lg bg-blue-50 text-blue-600 font-medium text-sm
                         hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500
                         transition-colors duration-200"
            >
              <span className="text-sm font-medium">Search</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
