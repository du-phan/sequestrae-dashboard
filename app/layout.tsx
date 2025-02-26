import "@/app/ui/global.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sequestrae Dashboard",
  description: "Dashboard for Sequestrae application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
