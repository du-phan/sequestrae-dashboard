import React from "react";
import StandardTopicPage from "@/app/ui/projectPage/StandardTopicPage";

interface DeliveryPageParams {
  params: {
    projectId: string;
  };
}

// Using a properly typed interface for Next.js page props
export default async function DeliveryRiskPage({ params }: DeliveryPageParams) {
  const { projectId } = params;
  return <StandardTopicPage projectId={projectId} topicId="delivery" />;
}
