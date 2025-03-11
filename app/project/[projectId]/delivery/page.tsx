import React from "react";
import StandardTopicPage from "@/app/ui/projectPage/StandardTopicPage";

// Add proper type definition for params
type PageParams = {
  params: {
    projectId: string;
  };
};

export default async function DeliveryRiskPage({ params }: PageParams) {
  // Don't await params, it's not a Promise in this context
  const { projectId } = params;
  return <StandardTopicPage projectId={projectId} topicId="delivery" />;
}
