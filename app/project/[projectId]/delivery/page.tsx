import React from "react";
import StandardTopicPage from "@/app/ui/projectPage/StandardTopicPage";

// Remove interface and type annotations
export default async function DeliveryRiskPage({ params }) {
  // Don't await params, it's not a Promise in this context
  const { projectId } = params;
  return <StandardTopicPage projectId={projectId} topicId="delivery" />;
}
