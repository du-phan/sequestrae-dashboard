import { supabase } from "./supabaseClient";

/**
 * Generic fetch function for read-only operations
 * @param {string} table - The table to query
 * @param {Object} options - Query options (select, filters, etc)
 * @returns {Promise<{data: any[] | null, error: Error | null}>}
 */
export async function fetchData(table, options = {}) {
  const {
    select = "*",
    filters = {},
    limit = 100,
    page = 0,
    orderBy = { column: "created_at", ascending: false },
  } = options;

  try {
    let query = supabase
      .from(table)
      .select(select)
      .order(orderBy.column, { ascending: orderBy.ascending });

    // Add pagination if needed
    if (limit > 0) {
      query = query.limit(limit).range(page * limit, (page + 1) * limit - 1);
    }

    // Add any filters
    Object.entries(filters).forEach(([column, value]) => {
      if (value !== undefined && value !== null) {
        query = query.eq(column, value);
      }
    });

    const { data, error } = await query;

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error(`Error fetching data from ${table}:`, error);
    return { data: null, error };
  }
}

/**
 * Fetch a single record by ID
 * @param {string} table - Table name
 * @param {string|number} id - Record ID
 * @param {string} select - Fields to select
 * @returns {Promise<{data: any | null, error: Error | null}>}
 */
export async function fetchById(table, id, select = "*") {
  try {
    const { data, error } = await supabase
      .from(table)
      .select(select)
      .eq("id", id)
      .single();

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error(`Error fetching ${table} with ID ${id}:`, error);
    return { data: null, error };
  }
}

/**
 * Count records in a table with optional filters
 * @param {string} table - Table name
 * @param {Object} filters - Optional filters
 * @returns {Promise<{count: number | null, error: Error | null}>}
 */
export async function countRecords(table, filters = {}) {
  try {
    let query = supabase
      .from(table)
      .select("*", { count: "exact", head: true });

    // Add any filters
    Object.entries(filters).forEach(([column, value]) => {
      if (value !== undefined && value !== null) {
        query = query.eq(column, value);
      }
    });

    const { count, error } = await query;

    if (error) throw error;
    return { count, error: null };
  } catch (error) {
    console.error(`Error counting records in ${table}:`, error);
    return { count: null, error };
  }
}
