import StandardTopicPage from "@/app/ui/projectPage/StandardTopicPage";

interface IntegrityPageParams {
  params: Promise<{
    projectId: string;
  }>;
}

// Using a properly typed interface for Next.js page props
export default async function IntegrityRiskPage({
  params,
}: IntegrityPageParams) {
  const { projectId } = await params;
  return <StandardTopicPage projectId={projectId} topicId="integrity" />;
}
