import { redirect } from "next/navigation";

// Remove type annotations from params
export default async function ProjectPage({ params }) {
  // Access projectId directly from params (no await)
  const { projectId } = params;

  // Redirect to the overview page - no code will execute after this
  redirect(`/project/${projectId}/overview`);
}
