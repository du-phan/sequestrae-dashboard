import React from "react";
import StandardTopicPage from "@/app/ui/projectPage/StandardTopicPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Impact | Project Dashboard",
  description:
    "Analysis of the project's social impact and community engagement",
};

// Remove type annotations
export default async function SocialImpactPage({ params }) {
  // Don't await params, it's not a Promise
  const { projectId } = params;

  // Use the StandardTopicPage component with the social topic ID
  return <StandardTopicPage projectId={projectId} topicId="social" />;
}
