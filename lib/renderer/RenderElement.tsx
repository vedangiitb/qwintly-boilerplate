// lib/renderer/RenderElement.tsx
import { registry } from "./registry";
import type { BuilderElement } from "@/types/elements";

export function RenderElement({ el }: { el: BuilderElement }) {
  if (el.visible === false) return null;

  const renderer = registry[el.type];
  if (!renderer) {
    console.warn(`Unknown element type: ${el.type}`);
    return (
      <div className="border border-red-500 p-2 text-xs">
        Unknown element: {el.type}
      </div>
    );
  }
  return renderer(el);
}
