import React from "react";
import StandardTopicPage from "@/app/ui/projectPage/StandardTopicPage";

interface PageProps {
  params: Promise<{
    projectId: string;
  }>;
}

export default async function DeliveryRiskPage({ params }: PageProps) {
  const { projectId } = await params;
  return <StandardTopicPage projectId={projectId} topicId="delivery" />;
}
