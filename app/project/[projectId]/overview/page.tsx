import React from "react";
import StandardTopicPage from "@/app/ui/projectPage/StandardTopicPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Overview | Project Dashboard",
  description: "Overview and key information about the project",
};

export default async function OverviewPage({
  params,
}: {
  params: { projectId: string };
}) {
  const { projectId } = await params;

  return <StandardTopicPage projectId={projectId} topicId="overview" />;
}
