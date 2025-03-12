/**
 * Typography scale for consistent text sizing across the application
 * Based on 8px grid system with purposeful size increments
 */
export const typography = {
  size: {
    xs: "text-xs", // 12px
    sm: "text-sm", // 14px
    base: "text-base", // 16px
    lg: "text-lg", // 18px
    xl: "text-xl", // 20px
    "2xl": "text-2xl", // 24px
    "3xl": "text-3xl", // 30px
    "4xl": "text-4xl", // 36px
    "5xl": "text-5xl", // 48px
  },
  weight: {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  },
  leading: {
    none: "leading-none",
    tight: "leading-tight",
    snug: "leading-snug",
    normal: "leading-normal",
    relaxed: "leading-relaxed",
    loose: "leading-loose",
  },
};

/**
 * Typography preset combinations for common text elements
 * Use these consistently throughout the application
 */
export const textPresets = {
  // Headings
  h1: `${typography.size["4xl"]} md:${typography.size["5xl"]} ${typography.weight.bold} ${typography.leading.tight}`,
  h2: `${typography.size["2xl"]} md:${typography.size["3xl"]} ${typography.weight.semibold} ${typography.leading.tight}`,
  h3: `${typography.size.xl} md:${typography.size["2xl"]} ${typography.weight.semibold} ${typography.leading.snug}`,
  h4: `${typography.size.lg} ${typography.weight.medium} ${typography.leading.snug}`,
  h5: `${typography.size.base} ${typography.weight.medium} ${typography.leading.tight}`,

  // Body text
  bodyLarge: `${typography.size.lg} ${typography.leading.relaxed}`,
  body: `${typography.size.base} ${typography.leading.relaxed}`,
  bodySmall: `${typography.size.sm} ${typography.leading.normal}`,

  // UI text
  label: `${typography.size.sm} ${typography.weight.medium}`,
  caption: `${typography.size.xs} ${typography.leading.tight}`,

  // Standardized paragraph styles
  paragraph: `text-base leading-relaxed text-gray-700`,
  paragraphSmall: `text-sm leading-relaxed text-gray-600`,

  // Specialized text styles
  topicSummary: `text-base leading-relaxed text-gray-700`,
  subtopicSummary: `text-base leading-relaxed text-gray-700`,
  riskFactorContent: `text-base text-gray-700`,
};

/**
 * Z-index scale for consistent layering across the application
 * Higher values appear on top of lower values
 */
export const zIndex = {
  base: 0,
  content: 10,
  navigation: 30,
  modal: 40,
  tooltip: 50,
};

// Color scheme - these are CSS variables that can be used in Tailwind classes
const colors = {
  primary: "var(--color-primary)",
  secondary: "var(--color-secondary)",
  accent: "var(--color-accent)",
  background: "var(--color-background)",
  text: "var(--color-text)",
};

// Spacing system - based on 8pt grid
const spacing = {
  xs: "0.25rem", // 4px
  sm: "0.5rem", // 8px
  md: "1rem", // 16px
  lg: "1.5rem", // 24px
  xl: "2rem", // 32px
  "2xl": "3rem", // 48px
};

// Border radius presets
const borderRadius = {
  sm: "0.125rem", // 2px
  md: "0.25rem", // 4px
  lg: "0.5rem", // 8px
  xl: "1rem", // 16px
  full: "9999px", // For circular elements
};

// Shadow presets
const shadows = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
};

// Transition presets
const transitions = {
  fast: "150ms ease-in-out",
  medium: "300ms ease-in-out",
  slow: "500ms ease-in-out",
};

// Layout constraints
const maxWidths = {
  content: "80rem", // 1280px - max width for main content
  container: "90rem", // 1440px - max width for container
};

// Create a theme object with all values
const theme = {
  typography,
  textPresets,
  colors,
  spacing,
  borderRadius,
  shadows,
  transitions,
  maxWidths,
  zIndex,
};

export default theme;
