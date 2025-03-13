"use client";

import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  maxWidth?: string;
  delayShow?: number;
  offset?: number;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = "top",
  maxWidth = "300px",
  delayShow = 200,
  offset = 10,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Handle mouse enter/exit
  const handleMouseEnter = () => {
    timerRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delayShow);
  };

  const handleMouseLeave = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setIsVisible(false);
  };

  // Position the tooltip
  useEffect(() => {
    if (isVisible && triggerRef.current && tooltipRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();

      let top = 0;
      let left = 0;

      switch (position) {
        case "top":
          top = triggerRect.top - tooltipRect.height - offset;
          left =
            triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
          break;
        case "bottom":
          top = triggerRect.bottom + offset;
          left =
            triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
          break;
        case "left":
          top =
            triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
          left = triggerRect.left - tooltipRect.width - offset;
          break;
        case "right":
          top =
            triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
          left = triggerRect.right + offset;
          break;
      }

      // Adjust if tooltip would go off screen
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Don't let it go off the right
      if (left + tooltipRect.width > viewportWidth - 20) {
        left = viewportWidth - tooltipRect.width - 20;
      }

      // Don't let it go off the left
      if (left < 20) {
        left = 20;
      }

      // Don't let it go off the top
      if (top < 20) {
        if (position === "top") {
          top = triggerRect.bottom + offset;
        } else {
          top = 20;
        }
      }

      // Don't let it go off the bottom
      if (top + tooltipRect.height > viewportHeight - 20) {
        if (position === "bottom") {
          top = triggerRect.top - tooltipRect.height - offset;
        } else {
          top = viewportHeight - tooltipRect.height - 20;
        }
      }

      setTooltipPosition({
        top: top + window.scrollY,
        left: left + window.scrollX,
      });
    }
  }, [isVisible, position, offset]);

  // Clean up any timeouts
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  // Create portal container
  useEffect(() => {
    if (
      typeof document !== "undefined" &&
      !document.getElementById("tooltip-container")
    ) {
      const container = document.createElement("div");
      container.id = "tooltip-container";
      document.body.appendChild(container);
    }

    return () => {
      const container = document.getElementById("tooltip-container");
      if (container && container.childNodes.length === 0) {
        document.body.removeChild(container);
      }
    };
  }, []);

  // Check if content is a simple string
  const isSimpleText = typeof content === "string";

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleMouseEnter}
        onBlur={handleMouseLeave}
        className="inline-block"
      >
        {children}
      </div>

      {isVisible &&
        typeof document !== "undefined" &&
        document.getElementById("tooltip-container") &&
        createPortal(
          <div
            ref={tooltipRef}
            className={`fixed z-50 rounded-md shadow-lg bg-gray-800 text-white tooltip-animation-enter text-xs ${className}`}
            style={{
              top: `${tooltipPosition.top}px`,
              left: `${tooltipPosition.left}px`,
              maxWidth: maxWidth,
              padding: isSimpleText ? "0.375rem 0.625rem" : "0", // Reduced padding for simple text
            }}
            role="tooltip"
          >
            {isSimpleText ? (
              content // Simple text just goes in the padded container
            ) : (
              // Custom content may include its own padding
              <div>{content}</div>
            )}

            {/* Tooltip arrow */}
            <div
              className={`absolute w-2 h-2 bg-gray-800 transform rotate-45
              ${position === "top" ? "bottom-[-4px]" : ""}
              ${position === "bottom" ? "top-[-4px]" : ""}
              ${position === "left" ? "right-[-4px]" : ""}
              ${position === "right" ? "left-[-4px]" : ""}
              ${
                position === "top" || position === "bottom"
                  ? "left-[calc(50%-4px)]"
                  : ""
              }
              ${
                position === "left" || position === "right"
                  ? "top-[calc(50%-4px)]"
                  : ""
              }`}
            />
          </div>,
          document.getElementById("tooltip-container")!
        )}
    </>
  );
};
