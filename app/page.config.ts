import type { BuilderElement } from "@/types/elements";

export const config = {
  elements: [
    { id: "root", type: "div", className: "min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100", children: [
      { id: "wrap", type: "div", className: "mx-auto max-w-6xl px-6 py-14", children: [
        { id: "header", type: "div", className: "flex items-center justify-between gap-6", children: [
          { id: "brand", type: "div", className: "flex items-center gap-3", children: [
            { id: "brand-icon", type: "icon", className: "h-9 w-9 rounded-xl bg-slate-800/60 p-2 ring-1 ring-slate-700", props: { name: "Sparkles" } },
            { id: "brand-text", type: "text", className: "text-sm font-semibold tracking-wide text-slate-200", props: { text: "Qwintly Starter" } },
          ]},
          { id: "header-actions", type: "div", className: "flex items-center gap-2", children: [
            { id: "features-link", type: "link", className: "rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800/60 hover:text-slate-50", props: { href: "#features", text: "Features" } },
            { id: "github-link", type: "link", className: "inline-flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-950 transition hover:bg-white", props: { href: "https://github.com/", target: "_blank", rel: "noreferrer" }, children: [
              { id: "gh-icon", type: "icon", className: "h-4 w-4", props: { name: "Github" } },
              { id: "gh-text", type: "text", props: { text: "GitHub" } },
            ] },
          ]},
        ]},
        { id: "hero", type: "div", className: "mt-14 space-y-6", children: [
          { id: "badge", type: "div", className: "inline-flex items-center gap-2 rounded-full bg-slate-800/60 px-3 py-1 text-xs text-slate-200 ring-1 ring-slate-700", children: [
            { id: "badge-icon", type: "icon", className: "h-3.5 w-3.5", props: { name: "Zap" } },
            { id: "badge-text", type: "text", props: { text: "Config-driven UI" } },
          ] },
          { id: "title", type: "text", className: "text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl", props: { text: "Build pages from elements." } },
          { id: "subtitle", type: "text", className: "max-w-prose text-base text-slate-300 sm:text-lg", props: { text: "A tiny renderer + a clean config. Add blocks, icons, links, and forms without touching React." } },
          { id: "ctas", type: "div", className: "flex flex-wrap items-center gap-3", children: [
            { id: "cta-primary", type: "link", className: "inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-500/20 transition hover:bg-indigo-400", props: { href: "#get-started" }, children: [
              { id: "cta-primary-text", type: "text", props: { text: "Get started" } },
              { id: "cta-primary-icon", type: "icon", className: "h-4 w-4", props: { name: "ArrowRight" } },
            ] },
            { id: "cta-secondary", type: "link", className: "inline-flex items-center gap-2 rounded-xl bg-slate-800/60 px-4 py-2.5 text-sm font-semibold text-slate-100 ring-1 ring-slate-700 transition hover:bg-slate-800", props: { href: "https://github.com/", target: "_blank", rel: "noreferrer", text: "View repo" } },
          ]},
        ]},
        { id: "features", type: "div", meta: { name: "features" }, className: "mt-16", children: [
          { id: "features-title", type: "text", className: "text-2xl font-semibold tracking-tight text-white", props: { text: "Features" } },
          { id: "cards", type: "div", className: "mt-6 grid gap-4 md:grid-cols-2", children: [
            { id: "card-1", type: "div", className: "rounded-2xl bg-slate-900/50 p-5 ring-1 ring-slate-700", children: [
              { id: "c1-icon", type: "icon", className: "h-9 w-9 rounded-xl bg-indigo-500/15 p-2 text-indigo-300 ring-1 ring-indigo-500/20", props: { name: "LayoutGrid" } },
              { id: "c1-title", type: "text", className: "mt-4 text-sm font-semibold text-white", props: { text: "Composable blocks" } },
              { id: "c1-body", type: "text", className: "mt-1 text-sm text-slate-400", props: { text: "Nest elements to build sections fast." } },
            ] },
            { id: "card-2", type: "div", className: "rounded-2xl bg-slate-900/50 p-5 ring-1 ring-slate-700", children: [
              { id: "c2-icon", type: "icon", className: "h-9 w-9 rounded-xl bg-emerald-500/15 p-2 text-emerald-300 ring-1 ring-emerald-500/20", props: { name: "Wand2" } },
              { id: "c2-title", type: "text", className: "mt-4 text-sm font-semibold text-white", props: { text: "Tailwind-first" } },
              { id: "c2-body", type: "text", className: "mt-1 text-sm text-slate-400", props: { text: "Style everything via `className`." } },
            ] },
          ] },
        ]},
        { id: "get-started", type: "div", meta: { name: "get-started" }, className: "mt-16 rounded-2xl bg-slate-900/60 p-6 ring-1 ring-slate-700", children: [
          { id: "gs-title", type: "text", className: "text-sm font-semibold text-slate-200", props: { text: "Get started" } },
          { id: "gs-body", type: "text", className: "mt-1 text-sm text-slate-400", props: { text: "Edit app/page.config.ts to change the page—no components needed." } },
        ]},
        { id: "footer", type: "div", className: "mt-16 border-t border-slate-800 pt-8 text-sm text-slate-400", children: [
          { id: "copy", type: "text", props: { text: "© 2026 Qwintly Boilerplate" } },
        ]},
      ]},
    ]},
  ],
} satisfies { elements: BuilderElement[] };
