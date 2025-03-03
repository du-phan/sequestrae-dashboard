import { NextResponse } from "next/server";
import { checkSupabaseConnection } from "@/lib/supabaseClient";

export async function GET() {
  try {
    console.log("Received request to check Supabase health");
    const result = await checkSupabaseConnection();

    if (result.success) {
      console.log("Supabase health check succeeded:", result.data);
      return NextResponse.json(
        { status: "ok", ...result.data },
        { status: 200 }
      );
    } else {
      console.error("Supabase health check failed:", result.error);
      return NextResponse.json(
        {
          status: "error",
          message: result.error || "Unknown error checking Supabase connection",
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Exception in Supabase health check:", error);
    return NextResponse.json(
      {
        status: "error",
        message:
          error?.message ||
          "Internal server error checking Supabase connection",
      },
      { status: 500 }
    );
  }
}
