"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

export default function Pagination({
  totalPages,
  currentPage,
}: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  // Create page navigation handler
  const createPageURL = (pageNumber: number | string) => {
    // Create a new URLSearchParams instance with null check
    const params = new URLSearchParams(searchParams?.toString() || "");

    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  // Generate page numbers to display
  const generatePagination = () => {
    // Always show first page
    const pagination: (number | string)[] = [1];

    // Calculate range of pages to show
    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    // Add ellipsis after first page if needed
    if (startPage > 2) {
      pagination.push("...");
    }

    // Add middle pages
    for (let i = startPage; i <= endPage; i++) {
      pagination.push(i);
    }

    // Add ellipsis before last page if needed
    if (endPage < totalPages - 1) {
      pagination.push("...");
    }

    // Add last page if there's more than one page
    if (totalPages > 1) {
      pagination.push(totalPages);
    }

    return pagination;
  };

  const pages = generatePagination();

  return totalPages <= 1 ? null : (
    <nav className="flex items-center justify-center" aria-label="Pagination">
      {/* Previous button */}
      <button
        className={clsx(
          "relative inline-flex items-center rounded-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 mr-2",
          {
            "hover:bg-gray-50": currentPage > 1,
            "opacity-50 cursor-not-allowed": currentPage <= 1,
          }
        )}
        onClick={() => {
          if (currentPage > 1) replace(createPageURL(currentPage - 1));
        }}
        disabled={currentPage <= 1}
      >
        <span className="sr-only">Previous</span>
        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
      </button>

      {/* Page numbers */}
      <div className="flex items-center">
        {pages.map((page, index) => {
          // If the page is an ellipsis
          if (page === "...") {
            return (
              <span
                key={`ellipsis-${index}`}
                className="relative inline-flex items-center px-4 py-2 text-sm text-gray-700"
              >
                ...
              </span>
            );
          }

          // If the page is a number
          return (
            <button
              key={`page-${page}`}
              onClick={() => replace(createPageURL(page))}
              className={clsx(
                "relative inline-flex items-center px-4 py-2 text-sm font-medium focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 mx-0.5",
                {
                  "bg-blue-600 text-white": currentPage === page,
                  "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50":
                    currentPage !== page,
                }
              )}
              aria-current={currentPage === page ? "page" : undefined}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* Next button */}
      <button
        className={clsx(
          "relative inline-flex items-center rounded-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 ml-2",
          {
            "hover:bg-gray-50": currentPage < totalPages,
            "opacity-50 cursor-not-allowed": currentPage >= totalPages,
          }
        )}
        onClick={() => {
          if (currentPage < totalPages) replace(createPageURL(currentPage + 1));
        }}
        disabled={currentPage >= totalPages}
      >
        <span className="sr-only">Next</span>
        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </nav>
  );
}
