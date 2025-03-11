import StandardTopicPage from "@/app/ui/projectPage/StandardTopicPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Impact | Project Dashboard",
  description:
    "Analysis of the project's social impact and community engagement",
};

interface SocialPageParams {
  params: {
    projectId: string;
  };
}

// Using a properly typed interface for Next.js page props
export default async function SocialRiskPage({ params }: SocialPageParams) {
  const { projectId } = params;
  return <StandardTopicPage projectId={projectId} topicId="social" />;
}
