import React, { ReactNode } from "react";
import Link from "next/link";

interface TableActionButtonProps {
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  children: ReactNode;
  variant?: "default" | "primary" | "danger";
  className?: string;
  ariaLabel?: string;
}

/**
 * TableActionButton - A standardized button component for table row actions
 *
 * @param {string} href - Optional URL for Link-based buttons
 * @param {function} onClick - Optional click handler for button-based actions
 * @param {ReactNode} icon - Optional icon to display before text
 * @param {ReactNode} children - Button text/content
 * @param {string} variant - Visual style variant (default, primary, danger)
 * @param {string} className - Additional CSS classes
 * @param {string} ariaLabel - Accessible name for the button
 */
export default function TableActionButton({
  href,
  onClick,
  icon,
  children,
  variant = "default",
  className = "",
  ariaLabel,
}: TableActionButtonProps) {
  // Define base styles for all variants
  const baseStyles =
    "inline-flex items-center justify-center gap-1.5 font-medium rounded-md px-3 py-1 " +
    "transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-1 text-sm ";

  // Define variant-specific styles
  const variantStyles = {
    default:
      "text-gray-700 hover:bg-lavender-50 hover:text-lavender-700 " +
      "border border-transparent hover:border-lavender-200 focus:ring-lavender-300",
    primary:
      "text-lavender-700 bg-lavender-50 hover:bg-lavender-100 " +
      "border border-lavender-200 focus:ring-lavender-300",
    danger:
      "text-rose-700 hover:bg-rose-50 " +
      "border border-transparent hover:border-rose-200 focus:ring-rose-300",
  };

  // Combine styles based on variant
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  // Render as Link or Button based on props
  if (href) {
    return (
      <Link href={href} className={buttonStyles} aria-label={ariaLabel}>
        {icon && <span className="text-gray-500">{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonStyles} aria-label={ariaLabel}>
      {icon && <span className="text-gray-500">{icon}</span>}
      {children}
    </button>
  );
}
