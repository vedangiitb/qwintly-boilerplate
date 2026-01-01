import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    ...nextVitals[0],
  },
  {
    files: ["**/*.{ts,tsx}"],
    ...nextTs[0],
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);
