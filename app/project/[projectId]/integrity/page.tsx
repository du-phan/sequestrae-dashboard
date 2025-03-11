import React from "react";
import StandardTopicPage from "@/app/ui/projectPage/StandardTopicPage";

// Using any type to bypass TypeScript errors with Next.js PageProps constraints
export default async function CarbonIntegrityPage({ params }: any) {
  const { projectId } = params;

  return <StandardTopicPage projectId={projectId} topicId="integrity" />;
}
