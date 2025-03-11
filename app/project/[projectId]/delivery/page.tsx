import React from "react";
import StandardTopicPage from "@/app/ui/projectPage/StandardTopicPage";

// Using any type to bypass TypeScript errors with Next.js PageProps constraints
export default async function DeliveryRiskPage({ params }: any) {
  // Don't await params, it's not a Promise in this context
  const { projectId } = params;
  return <StandardTopicPage projectId={projectId} topicId="delivery" />;
}
