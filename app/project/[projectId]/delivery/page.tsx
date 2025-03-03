import React from "react";
import StandardTopicPage from "@/app/ui/projectPage/StandardTopicPage";

interface PageProps {
  params: {
    projectId: string;
  };
}

export default async function DeliveryRiskPage({ params }: PageProps) {
  const projectId = params.projectId;
  return <StandardTopicPage projectId={projectId} topicId="delivery" />;
}
