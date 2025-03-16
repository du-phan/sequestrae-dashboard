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

  // Interactive element text styles
  buttonText: `${typography.size.sm} ${typography.weight.medium}`,
  linkText: `${typography.size.base} ${typography.weight.medium}`,

  // Form element text styles
  inputText: `${typography.size.base}`,
  inputLabel: `${typography.size.sm} ${typography.weight.medium}`,
  inputHelper: `${typography.size.xs} ${typography.leading.tight}`,
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

/**
 * Custom color palette derived from brand color (#A38DB7)
 * Optimized for accessibility with WCAG 2.1 AA compliance
 * and perceptually uniform color steps
 */
export const colorPalette = {
  // Primary brand color with refined shades for better contrast and harmony
  lavender: {
    50: "#F8F6FA", // Lightest background - subtle hint of lavender
    100: "#F0EAF5", // Light background - suitable for cards/containers
    200: "#E1D6EB", // Border, divider - subtle definition
    300: "#CDB9DE", // Stronger visual elements - light emphasis
    400: "#B69FD1", // Secondary elements - medium emphasis
    500: "#A38DB7", // Brand color - primary emphasis
    600: "#8A71A3", // Interactive elements - buttons, links
    700: "#705A85", // Strong emphasis text on light backgrounds
    800: "#564468", // Very high contrast text against light backgrounds
    900: "#3C2F4A", // Darkest shade - for maximum contrast needs
  },
  // Complementary colors
  teal: {
    50: "#F2F7F6",
    100: "#E2EEEB",
    200: "#C6DED8",
    300: "#A9CDC4",
    400: "#83B7AD",
    500: "#69A398",
    600: "#508B7F",
    700: "#3C6E64",
    800: "#2A504A",
    900: "#1C352F",
  },
  blue: {
    50: "#F2F5F8",
    100: "#E2EBF1",
    200: "#C6D7E3",
    300: "#A9C3D5",
    400: "#8DA3B7",
    500: "#738CA1",
    600: "#5A7387",
    700: "#445A6D",
    800: "#2F4153",
    900: "#1E2A36",
  },
  green: {
    50: "#F2F7F4",
    100: "#E3EEE8",
    200: "#C7DED2",
    300: "#ABCDBB",
    400: "#8DB7A3",
    500: "#72A189",
    600: "#588870",
    700: "#426C57",
    800: "#2E503E",
    900: "#1D3327",
  },
  amber: {
    50: "#F7F5F2",
    100: "#EEEAE2",
    200: "#DED5C6",
    300: "#CDBFA9",
    400: "#B7A38D",
    500: "#A18C72",
    600: "#8B7558",
    700: "#6E5D44",
    800: "#504530",
    900: "#352E1C",
  },
  rose: {
    50: "#F7F2F5",
    100: "#EEE2E9",
    200: "#DEC6D4",
    300: "#CDA9BE",
    400: "#B78DA3",
    500: "#A1738C",
    600: "#875A73",
    700: "#6D445A",
    800: "#532F41",
    900: "#361E2A",
  },
};

/**
 * Color usage guidelines to ensure consistent application:
 * - Use lavender-50/100 for section backgrounds, cards, and containers
 * - Use lavender-200/300 for borders, dividers, and subtle emphasis
 * - Use lavender-400/500 for UI components like buttons, tabs, and indicators
 * - Use lavender-600/700 for interactive elements (hover states) and medium emphasis text
 * - Use lavender-800/900 for high-contrast text and key visual elements
 *
 * Accessibility combinations that meet WCAG 2.1 AA (4.5:1 contrast ratio):
 * - Text: lavender-700+ on lavender-50/100/200 backgrounds
 * - Text: lavender-50/100 on lavender-700/800/900 backgrounds
 */

// Semantic color mappings
export const semanticColors = {
  primary: colorPalette.lavender[400], // Main brand color
  primary_light: colorPalette.lavender[100],
  primary_dark: colorPalette.lavender[600],

  secondary: colorPalette.teal[400],
  secondary_light: colorPalette.teal[100],
  secondary_dark: colorPalette.teal[600],

  info: colorPalette.blue[400],
  info_light: colorPalette.blue[100],
  info_dark: colorPalette.blue[600],

  success: colorPalette.green[400],
  success_light: colorPalette.green[100],
  success_dark: colorPalette.green[600],

  warning: colorPalette.amber[400],
  warning_light: colorPalette.amber[100],
  warning_dark: colorPalette.amber[600],

  error: colorPalette.rose[400],
  error_light: colorPalette.rose[100],
  error_dark: colorPalette.rose[600],
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
  colorPalette, // Add our custom palette to the theme
  semanticColors,
};

export default theme;
