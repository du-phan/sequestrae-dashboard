import { NextResponse } from "next/server";

export async function GET() {
  // For security reasons, only show partial key values in non-development environments
  const isDevelopment = process.env.NODE_ENV === "development";

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "not set";
  let supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "not set";

  // Mask key in non-development environments
  if (!isDevelopment && supabaseKey !== "not set") {
    supabaseKey = `${supabaseKey.substring(0, 5)}...${supabaseKey.substring(
      supabaseKey.length - 5
    )}`;
  }

  return NextResponse.json({
    environment: process.env.NODE_ENV || "not set",
    supabase: {
      url: supabaseUrl,
      keyPresent: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      keyPreview: supabaseKey,
      urlValid: (() => {
        try {
          if (!supabaseUrl || supabaseUrl === "not set") return false;
          new URL(supabaseUrl);
          return true;
        } catch (e) {
          return false;
        }
      })(),
    },
  });
}
