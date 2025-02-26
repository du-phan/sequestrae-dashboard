import React from "react";
import StandardTopicPage from "@/app/ui/projectPage/StandardTopicPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Impact | Project Dashboard",
  description:
    "Analysis of the project's social impact and community engagement",
};

export default function SocialImpactPage({
  params,
}: {
  params: { projectId: string };
}) {
  const { projectId } = params;

  // Use the StandardTopicPage component with the social topic ID
  return <StandardTopicPage projectId={projectId} topicId="social" />;
}
