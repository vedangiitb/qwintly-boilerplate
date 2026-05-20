import type { StyleConfig, StyleTokenKey } from "@/types/styleConfig";

const CSS_VAR_BY_TOKEN: Record<StyleTokenKey, string> = {
  radius: "--radius",
  background: "--background",
  foreground: "--foreground",
  card: "--card",
  cardForeground: "--card-foreground",
  popover: "--popover",
  popoverForeground: "--popover-foreground",
  primary: "--primary",
  primaryForeground: "--primary-foreground",
  secondary: "--secondary",
  secondaryForeground: "--secondary-foreground",
  muted: "--muted",
  mutedForeground: "--muted-foreground",
  accent: "--accent",
  accentForeground: "--accent-foreground",
  destructive: "--destructive",
  border: "--border",
  input: "--input",
  ring: "--ring",
  chart1: "--chart-1",
  chart2: "--chart-2",
  chart3: "--chart-3",
  chart4: "--chart-4",
  chart5: "--chart-5",
  sidebar: "--sidebar",
  sidebarForeground: "--sidebar-foreground",
  sidebarPrimary: "--sidebar-primary",
  sidebarPrimaryForeground: "--sidebar-primary-foreground",
  sidebarAccent: "--sidebar-accent",
  sidebarAccentForeground: "--sidebar-accent-foreground",
  sidebarBorder: "--sidebar-border",
  sidebarRing: "--sidebar-ring",
};

function escapeStyleTagBreaker(css: string) {
  return css.replace(/<\/style/gi, "<\\/style");
}

export function buildCssVars(config: StyleConfig) {
  const entries = (Object.keys(CSS_VAR_BY_TOKEN) as StyleTokenKey[]).map(
    (key) => `${CSS_VAR_BY_TOKEN[key]}:${config.tokens[key]}`,
  );

  const css = `:root{${entries.join(";")}}`;
  return escapeStyleTagBreaker(css);
}

