import { MD3LightTheme as DefaultTheme } from "react-native-paper";

export const theme = {
  ...DefaultTheme,
  colors: {
    primary: "#FF6B6B", // Tomato Red
    onPrimary: "#FFFFFF", // White
    primaryContainer: "#FFD6A5", // Light Peach
    onPrimaryContainer: "#333333", // Dark Gray
    secondary: "#6BFF6B", // Mint Green
    onSecondary: "#333333", // Dark Gray
    secondaryContainer: "#A5FFD6", // Light Mint
    // onSecondaryContainer: "#333333", // Dark Gray
    tertiary: "#FFA06B", // Peach Orange
    // onTertiary: "#333333", // Dark Gray
    tertiaryContainer: "#FFD6A5", // Light Peach
    // onTertiaryContainer: "#333333", // Dark Gray
    error: "#FF6B6B", // Tomato Red (Same as primary for emphasis)
    onError: "#FFFFFF", // White (Same as onPrimary for emphasis)
    errorContainer: "#FFD6A5", // Light Peach (Same as primaryContainer for emphasis)
    onErrorContainer: "#333333", // Dark Gray (Same as onPrimaryContainer for emphasis)
    background: "#FAF3E0", // Creamy Yellow
    onBackground: "#333333", // Dark Gray
    surface: "#FFFFFF", // White
    onSurface: "#333333", // Dark Gray (Font color)
    surfaceVariant: "#F2EFE5", // Light Cream
    onSurfaceVariant: "#444038", // Dark Cream
    outline: "#D8D0C0", // Light Gray
    outlineVariant: "#BCB4A0", // Lighter Gray
    shadow: "rgba(0, 0, 0, 0.2)", // Slight Box Shadow
    scrim: "rgba(0, 0, 0, 0.4)", // Overlay for Modals
    inverseSurface: "#444038", // Dark Cream (Same as onSurfaceVariant for contrast)
    inverseOnSurface: "#F2EFE5", // Light Cream (Same as surfaceVariant for contrast)
    inversePrimary: "#FF6B6B", // Tomato Red (Same as primary for contrast)
    elevation: {
      level0: "transparent",
      level1: "rgba(0, 0, 0, 0.1)", // Light Box Shadow
      level2: "rgba(0, 0, 0, 0.2)", // Moderate Box Shadow
      level3: "rgba(0, 0, 0, 0.3)", // Slight Darkness
      level4: "rgba(0, 0, 0, 0.4)", // Moderate Darkness
      level5: "rgba(0, 0, 0, 0.5)", // Significant Darkness
    },
    surfaceDisabled: "rgba(27, 28, 24, 0.12)",
    onSurfaceDisabled: "rgba(27, 28, 24, 0.38)",
    backdrop: "rgba(46, 50, 39, 0.4)",
  },
};
