export const STYLE_TOKEN_KEYS = [
  "radius",
  "background",
  "foreground",
  "card",
  "cardForeground",
  "popover",
  "popoverForeground",
  "primary",
  "primaryForeground",
  "secondary",
  "secondaryForeground",
  "muted",
  "mutedForeground",
  "accent",
  "accentForeground",
  "destructive",
  "border",
  "input",
  "ring",
  "chart1",
  "chart2",
  "chart3",
  "chart4",
  "chart5",
  "sidebar",
  "sidebarForeground",
  "sidebarPrimary",
  "sidebarPrimaryForeground",
  "sidebarAccent",
  "sidebarAccentForeground",
  "sidebarBorder",
  "sidebarRing",
] as const;

export type StyleTokenKey = (typeof STYLE_TOKEN_KEYS)[number];

export type StyleConfig = {
  version: number;
  tokens: Record<StyleTokenKey, string>;
};

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function assertSafeCssValue(key: string, value: string) {
  if (!value.trim()) {
    throw new Error(`styleConfig.tokens.${key} must be a non-empty string`);
  }
  if (value.includes("<") || value.includes(">")) {
    throw new Error(`styleConfig.tokens.${key} contains forbidden characters`);
  }
  if (value.toLowerCase().includes("</style")) {
    throw new Error(
      `styleConfig.tokens.${key} contains a forbidden substring ("</style")`,
    );
  }
}

export function assertStyleConfig(config: unknown): StyleConfig {
  if (!isPlainObject(config)) throw new Error("styleConfig must be an object");

  const version = config.version;
  if (typeof version !== "number" || !Number.isFinite(version)) {
    throw new Error("styleConfig.version must be a finite number");
  }

  const tokens = (config as Record<string, unknown>).tokens;
  if (!isPlainObject(tokens)) throw new Error("styleConfig.tokens must be an object");

  const resolvedTokens = {} as Record<StyleTokenKey, string>;
  for (const key of STYLE_TOKEN_KEYS) {
    const rawValue = (tokens as Record<string, unknown>)[key];
    if (typeof rawValue !== "string") {
      throw new Error(`styleConfig.tokens.${key} must be a string`);
    }
    assertSafeCssValue(key, rawValue);
    resolvedTokens[key] = rawValue;
  }

  const extraKeys = Object.keys(tokens).filter(
    (k) => !(STYLE_TOKEN_KEYS as readonly string[]).includes(k),
  );
  if (extraKeys.length) {
    throw new Error(
      `styleConfig.tokens contains unknown keys: ${extraKeys
        .sort((a, b) => a.localeCompare(b))
        .join(", ")}`,
    );
  }

  return { version, tokens: resolvedTokens };
}
