import { createClient } from "@supabase/supabase-js";

// Create a Supabase client configured to use cookies
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseKey);

// Function to fetch projects with optional filtering and pagination
export async function fetchProjects(options = {}) {
  const {
    page = 1,
    pageSize = 10,
    searchQuery = "",
    country = "",
    registry = "",
  } = options;

  // Calculate the offset for pagination
  const offset = (page - 1) * pageSize;

  // Start with a query for all projects
  let query = supabase.from("projects").select("*", { count: "exact" });

  // Add search filter if provided
  if (searchQuery) {
    query = query.or(
      `project_name.ilike.%${searchQuery}%, project_description.ilike.%${searchQuery}%`
    );
  }

  // Add country filter if provided
  if (country) {
    query = query.eq("country", country);
  }

  // Add registry filter if provided
  if (registry) {
    query = query.eq("registry", registry);
  }

  // Add pagination
  query = query.range(offset, offset + pageSize - 1);

  // Execute the query
  const { data, error, count } = await query;

  if (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }

  // Calculate total pages
  const totalPages = Math.ceil((count || 0) / pageSize);

  return {
    projects: data || [],
    totalPages,
    totalProjects: count || 0,
  };
}

// Function to fetch a single project by ID
export async function fetchProjectById(projectId) {
  if (!projectId) {
    throw new Error("Project ID is required");
  }

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("project_id", projectId)
    .single();

  if (error) {
    console.error(`Error fetching project with ID ${projectId}:`, error);
    throw error;
  }

  return data;
}

// Function to check DB health
export async function checkDatabaseHealth() {
  try {
    const { error } = await supabase.from("health_check").select("*").limit(1);

    if (error) {
      return {
        status: "error",
        message: error.message,
      };
    }

    return {
      status: "healthy",
      message: "Database connection is working properly",
    };
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
}

// Function to list all available tables in the schema
export async function listDatabaseTables() {
  try {
    const { error } = await supabase.rpc("list_tables");

    if (error) {
      return {
        status: "error",
        message: error.message,
      };
    }

    return {
      status: "success",
      tables: data,
    };
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
}

export default supabase;
