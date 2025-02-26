import React from "react";
import StandardTopicPage from "@/app/ui/projectPage/StandardTopicPage";

export default function PolicyPage({
  params,
}: {
  params: { projectId: string };
}) {
  const { projectId } = params;

  return <StandardTopicPage projectId={projectId} topicId="policy" />;
}
