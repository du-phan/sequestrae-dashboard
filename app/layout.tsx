import "@/app/ui/global.css";
import type { Metadata } from "next";
import LinkedInHead from "./components/LinkedInHead";
import { Analytics } from "@vercel/analytics/next";

// Define base URL for absolute URLs in metadata
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://sequestrae.com";

export const metadata: Metadata = {
  title: {
    default: "Biochar CDR Intelligence Platform",
    template: "%s | Sequestrae",
  },
  description:
    "Biochar carbon removal intelligence platform for evaluating project quality and risks",
  metadataBase: new URL(baseUrl),
  // Open Graph metadata
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Sequestrae",
    title: "Sequestrae - Biochar CDR Intelligence Platform",
    description:
      "Analyze biochar carbon removal projects with transparent insights and evaluations",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Sequestrae Dashboard Preview",
      },
    ],
  },
  // Twitter metadata
  twitter: {
    card: "summary_large_image",
    title: "Sequestrae - Biochar CDR Intelligence Platform",
    description:
      "Analyze biochar carbon removal projects with transparent insights and evaluations",
    images: [`${baseUrl}/og-image.png`],
    creator: "@sequestrae",
  },
  // Add canonical URL
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <LinkedInHead />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
