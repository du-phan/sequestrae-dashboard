import React from "react";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Project Sidebar will go here */}
      {children}
    </div>
  );
}
