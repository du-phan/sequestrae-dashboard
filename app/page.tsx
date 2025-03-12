import { redirect } from "next/navigation";

export default function HomePage() {
  // Redirect to dashboard page
  // This is a server-side redirect, so it will happen before the page is rendered
  // The 308 status code indicates a permanent redirect
  redirect("/dashboard");
}
