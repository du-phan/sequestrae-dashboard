import { createClient } from "@supabase/supabase-js";

/**
 * Supabase Client Configuration
 *
 * This module sets up and exports the Supabase client for use throughout the application.
 * In Next.js 15, this client can be used in:
 * - Server Components for data fetching
 * - Route Handlers for API endpoints
 * - Server Actions for database operations
 * - Client Components for realtime subscriptions or auth operations
 */

// Get environment variables
// Next.js automatically loads these from .env.local
let supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Validate that required environment variables are present
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing Supabase environment variables. Please check your .env.local file."
  );
}

// Clean the URL by trimming whitespace to prevent URL parsing errors
// Common issue when copying URLs from various sources
supabaseUrl = supabaseUrl.trim();

// Validate URL format to catch configuration errors early
try {
  new URL(supabaseUrl);
} catch (error) {
  console.error("Invalid Supabase URL format:", error);
  throw new Error(`Invalid Supabase URL format: ${supabaseUrl}`);
}

// Create and export the Supabase client instance
// This single instance should be used across the app for all Supabase interactions
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    // Only persist sessions in browser environment, not during SSR
    persistSession: typeof window !== "undefined",
    autoRefreshToken: true,
  },
});

/**
 * Helper function to check Supabase connection health
 *
 * Useful for verifying database connectivity during app initialization
 * or for health check endpoints in Next.js API routes
 *
 * @returns {Promise<{success: boolean, error?: any, data?: any}>}
 */
export async function checkSupabaseConnection() {
  try {
    console.log("Checking Supabase connection...");

    // Use Auth API as a lightweight way to check connectivity
    // This avoids using RPC which might not be available in all projects
    const { data: healthData, error: healthError } =
      await supabase.auth.getSession();

    if (healthError) {
      console.error("Supabase connection error:", healthError);
      return {
        success: false,
        error: healthError?.message || "Could not connect to Supabase server",
      };
    }

    // Connection is working if we get here
    console.log("Basic Supabase connection established");

    // Now try to access the projects table to verify database access
    try {
      const { data: tableData, error: tableError } = await supabase
        .from("projects")
        .select("project_name")
        .limit(1);

      // Table may not exist or user may not have access
      if (tableError) {
        console.error("Supabase table access error:", tableError);

        // If this is a permission error, the connection is working but permissions are wrong
        if (
          tableError.code === "42501" ||
          tableError.message?.includes("permission denied")
        ) {
          return {
            success: true,
            data: {
              message:
                "Connected to Supabase, but permission denied on 'projects' table",
              warning: tableError.message,
            },
          };
        }

        // If table doesn't exist
        if (
          tableError.code === "42P01" ||
          tableError.message?.includes("does not exist")
        ) {
          return {
            success: true,
            data: {
              message:
                "Connected to Supabase, but 'projects' table does not exist",
              warning: tableError.message,
            },
          };
        }

        // Other errors
        return {
          success: true, // Connection works, but table access fails
          data: {
            message:
              "Connected to Supabase, but encountered an issue with table access",
            warning: tableError.message || "Error accessing database table",
          },
        };
      }

      // All checks passed with full table access
      return {
        success: true,
        data: {
          message: "Connection to Supabase established successfully",
          details: "Successfully connected and accessed the projects table",
        },
      };
    } catch (tableErr) {
      // Even if table access fails, the connection is still working
      console.error("Error accessing table:", tableErr);
      return {
        success: true,
        data: {
          message: "Connected to Supabase, but could not verify table access",
          warning: tableErr.message,
        },
      };
    }
  } catch (err) {
    console.error("Failed to connect to Supabase:", err);
    return {
      success: false,
      error: err?.message || "Unexpected error connecting to Supabase",
    };
  }
}

// Export a typed version for safer queries (if using TypeScript)
export const typedSupabase = supabase;
