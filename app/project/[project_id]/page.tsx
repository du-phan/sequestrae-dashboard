export default function ProjectPage({
  params,
}: {
  params: { project_id: string };
}) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Project Details</h1>
      <p>You are viewing project with ID: {params.project_id}</p>
    </div>
  );
}
