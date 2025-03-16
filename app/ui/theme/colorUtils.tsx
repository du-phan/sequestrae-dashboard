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
        bg: `bg-lavender-50`,
        bgHover: `hover:bg-lavender-100`,
        text: `text-lavender-700`,
        textHover: `hover:text-lavender-800`,
        border: `border-lavender-200`,
        shadow: `shadow-[0_2px_8px_rgba(163,141,183,0.15)]`,
      };
    case "secondary":
      return {
        bg: `bg-tealCustom-50`,
        bgHover: `hover:bg-tealCustom-100`,
        text: `text-tealCustom-700`,
        textHover: `hover:text-tealCustom-800`,
        border: `border-tealCustom-200`,
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
        bg: `bg-lavender-50`,
        bgHover: `hover:bg-lavender-100`,
        text: `text-lavender-700`,
        textHover: `hover:text-lavender-800`,
        border: `border-lavender-200`,
        shadow: `shadow-[0_2px_8px_rgba(163,141,183,0.15)]`,
      };
  }
}
