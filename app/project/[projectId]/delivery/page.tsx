import StandardTopicPage from "@/app/ui/projectPage/StandardTopicPage";

interface DeliveryPageParams {
  params: Promise<{
    projectId: string;
  }>;
}

export default async function DeliveryRiskPage({ params }: DeliveryPageParams) {
  const { projectId } = await params;
  return <StandardTopicPage projectId={projectId} topicId="delivery" />;
}
