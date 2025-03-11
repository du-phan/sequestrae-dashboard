import React from "react";
import StandardTopicPage from "@/app/ui/projectPage/StandardTopicPage";

// Remove type annotations
export default async function PolicyPage({ params }) {
  // Don't await params
  const { projectId } = params;

  return <StandardTopicPage projectId={projectId} topicId="policy" />;
}
