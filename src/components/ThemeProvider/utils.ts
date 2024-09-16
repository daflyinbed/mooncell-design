export interface Color {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  11: string;
  a1: string;
  a2: string;
  a3: string;
  a4: string;
  a5: string;
  a6: string;
  a7: string;
  a8: string;
  a9: string;
  a10: string;
  a11: string;
  surface: string;
  indicator: string;
  track: string;
  contrast: string;
}
export interface Colors {
  light: Color;
  dark: Color;
}
export interface BackgroundColors {
  background: string;
  panelSolid: string;
  panelTranslucent: string;
  panelSurface: string;
  overlay: string;
}

export const ThemeProvideKey = Symbol("m-theme");
export interface ThemeConfig {
  radius?: "none" | "small" | "medium" | "large" | "full";
  panelBackground?: "solid" | "translucent";
  hasBackground?: boolean;
  appearances?: "inherit" | "light" | "dark";
}
