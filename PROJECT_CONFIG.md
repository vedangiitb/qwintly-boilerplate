# Qwintly Boilerplate: Minimal Project Config

This boilerplate is intentionally **UI-first**: a Next.js App Router project with Tailwind + shadcn/ui, optimized for marketing pages / front-end-only builds.

If you use an agent/IDE that accepts a "project config" object, this is the **reduced** config that matches the current repo layout.

```ts
export const projectConfig = {
  framework: {
    name: "Next.js",
    router: "App Router",
    language: "TypeScript",
    styling: "Tailwind CSS",
    ui: "shadcn/ui",
  },
  runtime: {
    target: "frontend-only",
    rendering: "server-components-by-default (use 'use client' only when needed)",
    serverActions: "optional (not used in boilerplate)",
    apiRoutes: "optional (not used in boilerplate)",
    dataFetching: "client-side (fetch) + local data modules in lib/",
  },
  tooling: {
    packageManager: "npm",
    linting: "eslint",
    formatting: "none (optional: prettier)",
    typecheck: "tsc --noEmit",
    testing: "none",
  },
  folders: {
    "app/": "routes, layouts, metadata, globals.css",
    "components/": "UI sections + shared components",
    "components/marketing/": "marketing site sections (header/footer/etc.)",
    "components/marketing/sections/": "home page sections (small, composable)",
    "components/ui/": "shadcn/ui primitives",
    "lib/": "shared config + utilities (cn, site config, etc.)",
    "public/": "static assets",
    "hooks/": "optional (add when you introduce reusable client hooks)",
    "services/": "optional (client-side wrappers for fetch / browser APIs)",
    "utils/": "optional (pure helpers if they outgrow lib/utils.ts)",
  },
  conventions: {
    fileBudgets: {
      goal: "keep files small so AI can scan and edit safely",
      nonVendorMaxLines: 120,
      vendorLikeFolders: ["components/ui/**"],
      preferredSplit: "split by feature/section into new files",
    },
    marketingSections: {
      homepage: {
        orchestrator: "app/page.tsx (compose sections; minimal logic)",
        sections: "components/marketing/sections/*.tsx",
        heroParts: "components/marketing/hero/*.tsx (optional splits)",
      },
    },
    shadcn: {
      installed: [
        "avatar",
        "badge",
        "button",
        "card",
        "dialog",
        "dropdown-menu",
        "input",
        "sheet",
        "table",
        "tabs",
        "tooltip",
      ],
      location: "components/ui/{component}.tsx",
      notes: "TooltipProvider is wired in app/layout.tsx",
    },
    imports: {
      alias: "@/* -> repo root (tsconfig paths)",
      order: ["next/react", "third-party", "@/*", "relative", "styles"],
    },
    routes: {
      required: [
        "app/page.tsx",
        "app/layout.tsx",
        "app/not-found.tsx",
        "app/globals.css",
      ],
      optionalPerRoute: [
        "app/{route}/page.tsx",
        "app/{route}/layout.tsx",
        "app/{route}/loading.tsx",
        "app/{route}/error.tsx",
      ],
      routeGroups: "app/(group)/... (optional)",
      dynamicSegments: "app/{route}/[param] (optional)",
    },
    naming: {
      components: "PascalCase",
      folders: "kebab-case",
      hooks: "useCamelCase"
    },
    components: {
      type: "function components",
      exports: "named exports (prefer)",
      propsTyping: "TypeScript types/interfaces when non-trivial",
    },
    styling: {
      default: "Tailwind-first",
      globals: "app/globals.css",
      helper: "lib/utils.ts: cn(...)",
    },
  },
} as const
```

## Why this is smaller than the previous config

- Drops folders that don't exist yet (`types/`, `store/`, `data/`, `providers/`, `styles/`, `assets/`, `config/`).
- Keeps only the conventions that match this repo today, while leaving hooks/services/utils as **optional** growth paths.
