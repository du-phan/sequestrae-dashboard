import { supabase } from "../supabaseClient";
import { Project } from "../../types/project";
import { mapProjectToTopicData } from "./mappers";

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
export async function fetchTopicData(projectId: string, topicId: string) {
  const project = await fetchProject(projectId);

  if (!project) {
    throw new Error(`Project not found with ID: ${projectId}`);
  }

  return mapProjectToTopicData(project, topicId);
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
