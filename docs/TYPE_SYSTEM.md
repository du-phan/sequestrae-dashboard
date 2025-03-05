# Type System

This project uses a two-tier type system to clearly separate API data structures from UI component props. This separation helps maintain a clean architecture and prevents API implementation details from leaking into UI components.

## Overview

```
┌───────────┐     ┌───────────┐     ┌───────────┐
│           │     │           │     │           │
│   API     │────▶│  Mappers  │────▶│    UI     │
│  Types    │     │           │     │  Types    │
│           │     │           │     │           │
└───────────┘     └───────────┘     └───────────┘
```

## API Types (`/types/api.ts`)

These types represent the data structures as they come from the backend API or database:

- Match the shape of API responses or database tables
- Use snake_case property names to match backend conventions
- May contain complex nested structures
- Include fields that aren't relevant to the UI

Example:

```typescript
export interface RiskFactorPointDB {
  risk_factor_point_id: string;
  risk_factor_id: string;
  point_type: "strengths" | "considerations" | "recommended_actions";
  main_idea: string;
  explanation: string;
}
```

## UI Types (`/types/ui.ts`)

These types represent the data structures expected by UI components:

- Structured to match UI component needs
- Use camelCase property names to match frontend conventions
- Simplified structures for easy consumption by components
- Only contain fields that are displayed or used by the UI

Example:

```typescript
export interface RiskFactorPoint {
  id: number;
  text: string;
  type: "strengths" | "considerations" | "recommended_actions";
}
```

## Type Mapping

The mapping between API and UI types happens in the `/lib/mappers` directory:

### `typeMappers.ts`

Contains functions to transform API types to UI types:

- `mapRiskFactorPointToUI`: Converts API risk factor points to UI-friendly format
- `mapRiskFactorToUI`: Transforms API risk factors to UI component format
- `mapSubtopicToUI`: Creates UI-ready subtopic data from API subtopic
- `mapTopicToUI`: Maps complete topic data from the API to UI-friendly format

These functions handle:

- Type conversions (string IDs to numbers)
- Field renaming (snake_case to camelCase)
- Structure simplification
- Default values for missing data

### Project-Specific Mappers

Project-specific mapping logic is located in `/lib/project/mappers.ts`:

- `mapProjectToTopicData`: Maps project data to topic-specific UI components
- `mapProjectToDeliveryData`: Maps project data to the delivery risk topic format
- `mapProjectToIntegrityData`: Maps project data to the integrity topic format

## Usage Guidelines

### 1. API Interaction Layer

```typescript
// API functions should return data typed with API types
async function fetchProject(projectId: string): Promise<Project | null> {
  const data = await supabase.from("project_aggregated").select("*")...
  return data as Project; // API type
}
```

### 2. Transformation Layer

```typescript
// Transform data between API and API boundary
export async function fetchTopicData(
  projectId: string,
  topicId: string
): Promise<TopicData | null> {
  const project = await fetchProject(projectId);
  if (!project) return null;

  // Transform API type to UI type
  return mapTopicToUI(project, topicId);
}
```

### 3. UI Component Layer

```typescript
// UI components should accept props typed with UI types
function SubtopicSection({
  id,
  title,
  summary,
  riskFactors,
}: SubtopicSectionProps) {
  // Component implementation using UI types
}
```

### 4. Best Practices

1. **Keep API types isolated**: API types should never be directly used in UI components
2. **Transform early**: Convert API types to UI types as close to the API boundary as possible
3. **Pure UI components**: Components should only receive already transformed data
4. **Descriptive naming**: Use naming conventions that clearly distinguish between API and UI types
5. **Handle edge cases**: Mapping functions should handle missing or malformed data gracefully

## Benefits

- **Clean separation of concerns**: UI components don't need to know about API implementation details
- **Type safety**: Properly defined types catch errors at compile time
- **Easier refactoring**: Changes to API responses don't require changes to UI components
- **Better developer experience**: Components receive exactly the data they need in the right format
- **Testability**: Mapping functions can be tested independently of UI or API logic
