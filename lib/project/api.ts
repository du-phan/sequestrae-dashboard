import { supabase } from "../supabaseClient";
import { Project } from "../../types/api";
import { TopicData } from "../../types/ui";
import { mapTopicToUI } from "../mappers";

/**
 * Fetches a complete project from the project_aggregated table
 * @param projectId The unique identifier of the project
 * @returns The complete project data or null if not found
 */
export async function fetchProject(projectId: string): Promise<Project | null> {
  try {
    const { data, error } = await supabase
      .from("project_aggregated")
      .select("*")
      .eq("project_id", projectId)
      .single();

    if (error) {
      console.error("Error fetching project:", error);
      return null;
    }

    return data as Project;
  } catch (error) {
    console.error("Failed to fetch project:", error);
    return null;
  }
}

/**
 * Fetches all projects with limited fields for listing purposes
 * @returns Array of projects with basic information
 */
export async function fetchProjects() {
  try {
    const { data, error } = await supabase
      .from("project_aggregated")
      .select("project_id, project_name, created_at")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching projects:", error);
      return [];
    }

    return data;
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return [];
  }
}

/**
 * Fetches data for a specific topic within a project
 * @param projectId The project identifier
 * @param topicId The topic identifier to retrieve
 * @returns Formatted topic data ready for UI components
 */
export async function fetchTopicData(
  projectId: string,
  topicId: string
): Promise<TopicData | null> {
  const project = await fetchProject(projectId);

  if (!project) {
    console.error(`Project not found with ID: ${projectId}`);
    return null;
  }

  return mapTopicToUI(project, topicId);
}

/**
 * Fetches all available topics for a project
 * @param projectId The project identifier
 * @returns Array of unique topic identifiers
 */
export async function fetchProjectTopics(projectId: string): Promise<string[]> {
  const project = await fetchProject(projectId);

  if (!project) {
    return [];
  }

  // Extract unique topic identifiers
  const topics = project.topic_summaries.map((summary) => summary.topic);
  return [...new Set(topics)]; // Remove duplicates
}

/**
 * Fetches the complete aggregated project data from the project_aggregated materialized view
 * @param projectId The unique identifier of the project
 * @returns The complete nested JSON hierarchy for the project or null if not found
 */
export async function getProjectAggregated(
  projectId: string
): Promise<Project | null> {
  try {
    const { data, error } = await supabase
      .from("project_aggregated")
      .select("*")
      .eq("project_id", projectId)
      .single();

    if (error) {
      console.error("Error fetching aggregated project data:", error);
      return null;
    }

    return data as Project;
  } catch (error) {
    console.error("Failed to fetch project aggregated data:", error);
    return null;
  }
}

/**
 * Fetches projects list from Supabase with pagination and search
 * @param query Optional search term for project name
 * @param page Current page number (starts at 1)
 * @param limit Number of items per page
 * @returns Object containing projects array, total pages and total project count
 */
export async function getProjects({
  query = "",
  page = 1,
  limit = 10,
}: {
  query?: string;
  page?: number;
  limit?: number;
}) {
  try {
    // Calculate pagination range
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    // Build the query with pagination
    let projectQuery = supabase
      .from("projects")
      .select(
        `
        project_id, 
        project_name, 
        registry,
        country,
        feedstock_type,
        project_url
      `
      )
      .range(from, to);

    // Add text search if query parameter is provided
    if (query) {
      projectQuery = projectQuery.or(
        `project_name.ilike.%${query}%,country.ilike.%${query}%,registry.ilike.%${query}%,feedstock_type_in_string.ilike.%${query}%`
      );
    }

    // Execute the query
    const { data: projects, error } = await projectQuery;

    if (error) {
      console.error("Error fetching projects:", error);
      return { projects: [], totalPages: 0, totalProjects: 0 };
    }

    // Get total count for pagination
    let countQuery = supabase
      .from("projects")
      .select("project_id", { count: "exact" });

    if (query) {
      countQuery = countQuery.or(
        `project_name.ilike.%${query}%,country.ilike.%${query}%,registry.ilike.%${query}%,feedstock_type_in_string.ilike.%${query}%`
      );
    }

    const { count, error: countError } = await countQuery;

    if (countError) {
      console.error("Error fetching project count:", countError);
      return {
        projects: projects || [],
        totalPages: 1,
        totalProjects: projects?.length || 0,
      };
    }

    const totalProjects = count || 0;
    const totalPages = Math.ceil(totalProjects / limit);

    return {
      projects: projects || [],
      totalPages,
      totalProjects,
    };
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return { projects: [], totalPages: 0, totalProjects: 0 };
  }
}

/**
 * Fetches aggregate statistics across all projects
 * @returns Object containing counts of unique registries and countries
 */
export async function getProjectsStats() {
  try {
    // Fetch all projects to get registry and country information
    const { data, error } = await supabase
      .from("projects")
      .select("registry, country");

    if (error) {
      console.error("Error fetching project stats:", error);
      return { uniqueRegistries: 0, uniqueCountries: 0 };
    }

    // Calculate unique registries
    const uniqueRegistries = new Set(
      data.map((project) => project.registry).filter(Boolean) // Filter out null/undefined values
    ).size;

    // Calculate unique countries
    const uniqueCountries = new Set(
      data.map((project) => project.country).filter(Boolean) // Filter out null/undefined values
    ).size;

    return {
      uniqueRegistries,
      uniqueCountries,
    };
  } catch (error) {
    console.error("Failed to fetch project stats:", error);
    return { uniqueRegistries: 0, uniqueCountries: 0 };
  }
}
