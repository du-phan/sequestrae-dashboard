import React, { Suspense } from "react";
import ProjectLoadingSkeleton from "./[projectId]/loading";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Suspense fallback={<ProjectLoadingSkeleton />}>{children}</Suspense>
    </div>
  );
}
