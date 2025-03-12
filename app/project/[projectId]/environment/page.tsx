import StandardTopicPage from "@/app/ui/projectPage/StandardTopicPage";

interface EnvironmentPageParams {
  params: Promise<{
    projectId: string;
  }>;
}

// Using a properly typed interface for Next.js page props
export default async function EnvironmentRiskPage({
  params,
}: EnvironmentPageParams) {
  const { projectId } = await params;
  return <StandardTopicPage projectId={projectId} topicId="environment" />;
}
