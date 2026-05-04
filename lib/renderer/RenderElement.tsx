// lib/renderer/RenderElement.tsx
"use client";

import { useRouter } from "next/navigation";
import { registry } from "./registry";
import type { BuilderElement, OnClickAction } from "@/types/elements";
import type { MouseEventHandler } from "react";

export type RenderContext = {
  onClick: <T extends Element = HTMLElement>(action: OnClickAction) => MouseEventHandler<T>;
};

export function RenderElement({ el, ctx }: { el: BuilderElement; ctx?: RenderContext }) {
  const router = useRouter();
  
  if (el.visible === false) return null;
  const resolvedCtx: RenderContext =
    ctx ??
    ({
      onClick: (action) => (e) => {
        if (action.kind === "route") {
          e.preventDefault();
          if (action.replace) router.replace(action.href);
          else router.push(action.href);
          return;
        }

        if (action.kind === "external") {
          e.preventDefault();
          if (action.newTab) window.open(action.href, "_blank", "noopener,noreferrer");
          else window.location.href = action.href;
          return;
        }

        if (action.kind === "back") {
          e.preventDefault();
          router.back();
          return;
        }

        if (action.kind === "reload") {
          e.preventDefault();
          router.refresh();
        }
      },
    } satisfies RenderContext);

  const renderer = registry[el.type];
  if (!renderer) {
    console.warn(`Unknown element type: ${el.type}`);
    return (
      <div className="border border-red-500 p-2 text-xs">
        Unknown element: {el.type}
      </div>
    );
  }
  return renderer(el, resolvedCtx);
}
