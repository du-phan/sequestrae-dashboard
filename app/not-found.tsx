import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="mb-4">The page you're looking for doesn't exist.</p>
      <Link href="/" className="text-blue-600 hover:text-blue-800 underline">
        Return Home
      </Link>
    </div>
  );
}
