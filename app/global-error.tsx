"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body>{/* Global error handling will go here */}</body>
    </html>
  );
}
