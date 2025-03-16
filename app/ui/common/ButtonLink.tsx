import React, { ReactNode } from "react";
import Link from "next/link";
import { textPresets } from "@/app/ui/theme";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  isExternal?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
}

/**
 * ButtonLink - A styled link component that looks like a button
 * Used for navigation while maintaining button styling
 */
export default function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  className = "",
  isExternal = false,
  onClick,
  ariaLabel,
}: ButtonLinkProps) {
  // Size-specific styles
  const sizeStyles = {
    sm: "py-1.5 px-4 text-sm",
    md: "py-2.5 px-5 text-sm",
    lg: "py-3 px-6 text-base",
  };

  // Variant-specific styles
  const variantStyles = {
    primary: "bg-lavender-600 text-white hover:bg-lavender-700 shadow-sm",
    secondary:
      "bg-lavender-100 text-lavender-800 hover:bg-lavender-200 shadow-sm",
    outline:
      "bg-white text-lavender-700 border border-lavender-300 hover:bg-lavender-50 hover:border-lavender-400",
  };

  // Common styles for all button variants
  const baseStyles = `${textPresets.buttonText} rounded-lg transition-all duration-200 font-medium inline-flex items-center justify-center`;

  // Icon container styles - Added text color inheritance to ensure icon matches text
  const iconLeftStyles = "mr-2 -ml-1 text-inherit";
  const iconRightStyles =
    "ml-2 -mr-1 group-hover:translate-x-0.5 transition-transform duration-200 text-inherit";

  // Combine all styles
  const combinedStyles = `group ${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  // Handle external links
  const externalProps = isExternal
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  // Prepare the icon elements with proper styling
  const prepareIcon = (iconElement: ReactNode) => {
    if (React.isValidElement(iconElement)) {
      return React.cloneElement(
        iconElement as React.ReactElement<{ className?: string }>,
        {
          className: `${
            (iconElement.props as { className?: string }).className || ""
          } text-current`,
        }
      );
    }
    return iconElement;
  };

  return (
    <Link
      href={href}
      className={combinedStyles}
      onClick={onClick}
      aria-label={
        ariaLabel ||
        (isExternal ? `${children} (opens in a new tab)` : undefined)
      }
      {...externalProps}
    >
      {icon && iconPosition === "left" && (
        <span className={iconLeftStyles}>{prepareIcon(icon)}</span>
      )}

      {children}

      {icon && iconPosition === "right" && (
        <span className={iconRightStyles}>{prepareIcon(icon)}</span>
      )}
    </Link>
  );
}
