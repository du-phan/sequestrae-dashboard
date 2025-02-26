import React from "react";
import StandardTopicPage from "@/app/ui/projectPage/StandardTopicPage";

// Next.js 15 page component with params type
export default function DeliveryRiskPage({
  params,
}: {
  params: { projectId: string };
}) {
  const { projectId } = params;

  return <StandardTopicPage projectId={projectId} topicId="delivery" />;
}
