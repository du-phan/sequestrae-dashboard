import { colorPalette } from "@/app/ui/theme";

/**
 * Map component types to specific colors from our palette
 */
type ComponentType =
  | "info"
  | "success"
  | "warning"
  | "error"
  | "primary"
  | "secondary";

/**
 * Returns Tailwind background and text color classes based on component type
 * @param type The type of component (info, success, warning, error, primary, secondary)
 * @returns Object containing Tailwind classes for background and text colors
 */
export function getComponentColors(type: ComponentType) {
  switch (type) {
    case "primary":
      return {
        bg: `bg-[${colorPalette.lavender[50]}]`,
        bgHover: `hover:bg-[${colorPalette.lavender[100]}]`,
        text: `text-[${colorPalette.lavender[500]}]`,
        textHover: `hover:text-[${colorPalette.lavender[700]}]`,
        border: `border-[${colorPalette.lavender[200]}]`,
        shadow: `shadow-[0_2px_8px_rgba(163,141,183,0.15)]`,
      };
    case "secondary":
      return {
        bg: `bg-[${colorPalette.teal[50]}]`,
        bgHover: `hover:bg-[${colorPalette.teal[100]}]`,
        text: `text-[${colorPalette.teal[500]}]`,
        textHover: `hover:text-[${colorPalette.teal[700]}]`,
        border: `border-[${colorPalette.teal[200]}]`,
        shadow: `shadow-[0_2px_8px_rgba(131,183,173,0.15)]`,
      };
    case "info":
      return {
        bg: `bg-[${colorPalette.blue[50]}]`,
        bgHover: `hover:bg-[${colorPalette.blue[100]}]`,
        text: `text-[${colorPalette.blue[500]}]`,
        textHover: `hover:text-[${colorPalette.blue[700]}]`,
        border: `border-[${colorPalette.blue[200]}]`,
        shadow: `shadow-[0_2px_8px_rgba(141,163,183,0.15)]`,
      };
    case "success":
      return {
        bg: `bg-[${colorPalette.green[50]}]`,
        bgHover: `hover:bg-[${colorPalette.green[100]}]`,
        text: `text-[${colorPalette.green[500]}]`,
        textHover: `hover:text-[${colorPalette.green[700]}]`,
        border: `border-[${colorPalette.green[200]}]`,
        shadow: `shadow-[0_2px_8px_rgba(141,183,163,0.15)]`,
      };
    case "warning":
      return {
        bg: `bg-[${colorPalette.amber[50]}]`,
        bgHover: `hover:bg-[${colorPalette.amber[100]}]`,
        text: `text-[${colorPalette.amber[500]}]`,
        textHover: `hover:text-[${colorPalette.amber[700]}]`,
        border: `border-[${colorPalette.amber[200]}]`,
        shadow: `shadow-[0_2px_8px_rgba(183,163,141,0.15)]`,
      };
    case "error":
      return {
        bg: `bg-[${colorPalette.rose[50]}]`,
        bgHover: `hover:bg-[${colorPalette.rose[100]}]`,
        text: `text-[${colorPalette.rose[500]}]`,
        textHover: `hover:text-[${colorPalette.rose[700]}]`,
        border: `border-[${colorPalette.rose[200]}]`,
        shadow: `shadow-[0_2px_8px_rgba(183,141,163,0.15)]`,
      };
    default:
      return {
        bg: `bg-[${colorPalette.lavender[50]}]`,
        bgHover: `hover:bg-[${colorPalette.lavender[100]}]`,
        text: `text-[${colorPalette.lavender[500]}]`,
        textHover: `hover:text-[${colorPalette.lavender[700]}]`,
        border: `border-[${colorPalette.lavender[200]}]`,
        shadow: `shadow-[0_2px_8px_rgba(163,141,183,0.15)]`,
      };
  }
}

/**
 * Generate CSS variable values for our custom colors
 * Useful for creating a theme that can be used via CSS variables
 */
export function generateCssColorVariables() {
  let cssVars = {};

  // Generate variables for each color in our palette
  Object.entries(colorPalette).forEach(([colorName, shades]) => {
    Object.entries(shades).forEach(([shade, value]) => {
      cssVars[`--color-${colorName}-${shade}`] = value;
    });
  });

  return cssVars;
}
