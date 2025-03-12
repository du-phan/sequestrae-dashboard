import { redirect } from "next/navigation";

// Next.js 15 recommended typing for page components with dynamic routes
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = params;
  // Redirect to overview page when accessing the project root
  return redirect(`/project/${projectId}/overview`);
}
