import React from "react";
import StandardTopicPage from "@/app/ui/projectPage/StandardTopicPage";

export default async function PolicyPage({
  params,
}: {
  params: { projectId: string };
}) {
  const { projectId } = await params;

  return <StandardTopicPage projectId={projectId} topicId="policy" />;
}
