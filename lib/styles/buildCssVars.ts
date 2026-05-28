import { STYLE_TOKEN_KEYS } from "@/types/styleConfig";
import type { StyleConfig, StyleTokenKey } from "@/types/styleConfig";

const CSS_VAR_BY_TOKEN: Record<StyleTokenKey, string> = STYLE_TOKEN_KEYS.reduce(
  (acc, key) => {
    const kebab = key
      .replace(/([a-z\d])([A-Z])/g, "$1-$2")
      .replace(/([a-zA-Z])(\d)/g, "$1-$2")
      .toLowerCase();
    acc[key] = `--${kebab}`;
    return acc;
  },
  {} as Record<StyleTokenKey, string>,
);

function escapeStyleTagBreaker(css: string) {
  return css.replace(/<\/style/gi, String.raw`<\/style`);
}

export function buildCssVars(config: StyleConfig) {
  const entries = (Object.keys(CSS_VAR_BY_TOKEN) as StyleTokenKey[]).map(
    (key) => `${CSS_VAR_BY_TOKEN[key]}:${config.tokens[key]} !important`,
  );

  const css = `:root{${entries.join(";")}}`;
  return escapeStyleTagBreaker(css);
}
