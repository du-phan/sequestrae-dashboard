import StandardTopicPage from "@/app/ui/projectPage/StandardTopicPage";

interface PolicyPageParams {
  params: Promise<{
    projectId: string;
  }>;
}

// Using a properly typed interface for Next.js page props
export default async function PolicyRiskPage({ params }: PolicyPageParams) {
  const { projectId } = await params;
  return <StandardTopicPage projectId={projectId} topicId="policy" />;
}
