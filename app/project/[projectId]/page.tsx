import { redirect } from "next/navigation";

// Updated to properly await params in Next.js 14
export default async function ProjectPage({
  params,
}: {
  params: { projectId: string };
}) {
  // Await the params object before accessing its properties
  const { projectId } = await params;

  // Redirect to the overview page
  redirect(`/project/${projectId}/overview`);
}
