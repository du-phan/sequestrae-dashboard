/**
 * Typography scale for consistent text sizing across the application
 * Based on 8px grid system with purposeful size increments
 *
 * Updated to ensure better text consistency across components
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

export default {
  typography,
  textPresets,
  zIndex,
};
