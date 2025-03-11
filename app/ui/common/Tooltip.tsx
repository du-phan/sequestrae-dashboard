"use client";

import React, { useState, useRef } from "react";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
} from "@floating-ui/react";

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  placement?: "top" | "right" | "bottom" | "left";
  delay?: number;
}

export function Tooltip({
  children,
  content,
  placement = "top",
  delay = 200,
}: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [delayedIsOpen, setDelayedIsOpen] = useState(false);
  const showTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { x, y, strategy, refs, context } = useFloating({
    placement,
    open: delayedIsOpen,
    onOpenChange: (open) => {
      setIsOpen(open);

      // Clear any existing timeouts
      if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);

      // For opening: set a delay
      if (open) {
        showTimeoutRef.current = setTimeout(() => {
          setDelayedIsOpen(true);
        }, delay);
      } else {
        // For closing: do it immediately
        setDelayedIsOpen(false);
      }
    },
    whileElementsMounted: autoUpdate,
    middleware: [offset(8), flip(), shift({ padding: 8 })],
  });

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  return (
    <>
      <div
        ref={refs.setReference}
        {...getReferenceProps()}
        className="inline-block"
      >
        {children}
      </div>
      {isOpen && (
        <FloatingPortal>
          <div
            ref={refs.setFloating}
            style={{
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
              zIndex: 50,
              opacity: delayedIsOpen ? 1 : 0,
              transition: "opacity 150ms ease-in-out",
              pointerEvents: delayedIsOpen ? "auto" : "none",
            }}
            {...getFloatingProps()}
            className="bg-white shadow-lg rounded-md border border-gray-200 text-sm text-gray-900 max-w-sm"
          >
            {content}
          </div>
        </FloatingPortal>
      )}
    </>
  );
}
