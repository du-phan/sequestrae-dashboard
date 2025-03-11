import React from "react";
import StandardTopicPage from "@/app/ui/projectPage/StandardTopicPage";

// Remove type annotations and let Next.js 15 handle typing
export default async function EnvironmentFactorPage({ params }) {
  // Don't await params, it's not a Promise in this context
  const { projectId } = params;

  return <StandardTopicPage projectId={projectId} topicId="environment" />;
}
