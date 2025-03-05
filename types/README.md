# Types Directory

This directory contains TypeScript type definitions used throughout the application.

## Files

- `api.ts` - Contains type definitions for API and database structures
- `ui.ts` - Contains type definitions for UI component props
- `project.ts` - Legacy type definitions (maintained for backward compatibility)

## Usage Guidelines

1. When working with API responses or database data, use types from `api.ts`
2. When creating UI components, use types from `ui.ts`
3. Never use API types directly in UI components - always transform them first using mappers

For detailed documentation about the type system, see [/docs/TYPE_SYSTEM.md](/docs/TYPE_SYSTEM.md).
