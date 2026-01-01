/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/**
 * getSoftLayoutStyles - Generate themed styles for SoftLayout
 * Returns style object for Ant Design Row component
 */
export const getSoftLayoutStyles = ({
  variant,
  bgColor,
  opacity,
  borderRadius,
  shadow,
  overflow,
  controller,
}) => {
  // Get theme from controller if available
  const darkMode = controller?.darkMode || false;

  // Theme colors (simplified - you can expand this)
  const colors = {
    transparent: "transparent",
    white: "#ffffff",
    black: "#000000",
    primary: "#cb0c9f",
    secondary: "#8392ab",
    info: "#17c1e8",
    success: "#82d616",
    warning: "#fbcf33",
    error: "#ea0606",
    light: "#e9ecef",
    dark: "#344767",
    "grey-100": "#f8f9fa",
    "grey-200": "#e9ecef",
    "grey-300": "#dee2e6",
    "grey-400": "#ced4da",
    "grey-500": "#adb5bd",
    "grey-600": "#6c757d",
    "grey-700": "#495057",
    "grey-800": "#343a40",
    "grey-900": "#212529",
  };

  // Border radius values
  const borderRadiusValues = {
    none: "0",
    xs: "0.125rem",
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    xxl: "1rem",
    section: "10rem",
  };

  // Box shadow values
  const boxShadowValues = {
    none: "none",
    xs: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)",
    sm: "0 0.125rem 0.5rem rgba(0, 0, 0, 0.1)",
    md: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.15)",
    lg: "0 0.5rem 1rem rgba(0, 0, 0, 0.175)",
    xl: "0 1rem 2rem rgba(0, 0, 0, 0.2)",
    xxl: "0 1.5rem 3rem rgba(0, 0, 0, 0.25)",
    inset: "inset 0 1px 2px rgba(0, 0, 0, 0.075)",
  };

  // Layout variant styles
  const variantStyles = {
    fullscreen: {
      width: "100vw",
      height: "100vh",
      minHeight: "100vh",
      overflow: overflow,
    },
    contained: {
      width: "100%",
      height: "100%",
      overflow: overflow,
    },
    fluid: {
      width: "100%",
      minHeight: "100vh",
      overflow: overflow,
    },
  };

  // Background color
  let backgroundValue = colors[bgColor] || bgColor || "transparent";

  // Border radius
  let borderRadiusValue = borderRadiusValues[borderRadius] || borderRadius || "0";

  // Box shadow
  let boxShadowValue = boxShadowValues[shadow] || shadow || "none";

  // Base styles
  const baseStyles = {
    position: "relative",
    margin: 0,
    padding: 0,
  };

  // Combine all styles
  return {
    ...baseStyles,
    ...variantStyles[variant],
    opacity,
    background: backgroundValue,
    backgroundColor: backgroundValue,
    borderRadius: borderRadiusValue,
    boxShadow: boxShadowValue,
  };
};

/**
 * Responsive breakpoints helper
 * Matches Ant Design breakpoints
 */
export const breakpoints = {
  xs: 480, // Mobile
  sm: 576, // Tablet
  md: 768, // Small desktop
  lg: 992, // Desktop
  xl: 1200, // Large desktop
  xxl: 1600, // Extra large desktop
};

/**
 * Common gutter presets
 */
export const gutterPresets = {
  none: 0,
  xs: [8, 8],
  sm: [12, 12],
  md: [16, 16],
  lg: [24, 24],
  xl: [32, 32],
  xxl: [48, 48],
};

/**
 * Responsive gutter helper
 * Example: { xs: 8, sm: 16, md: 24, lg: 32 }
 */
export const responsiveGutter = (config) => config;
