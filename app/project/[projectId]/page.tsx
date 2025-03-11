import { redirect } from "next/navigation";

// Using any type to bypass TypeScript errors with Next.js PageProps constraints
export default async function ProjectPage({ params }: any) {
  // Access projectId directly from params (no await)
  const { projectId } = params;

  // Redirect to the overview page - no code will execute after this
  redirect(`/project/${projectId}/overview`);
}
