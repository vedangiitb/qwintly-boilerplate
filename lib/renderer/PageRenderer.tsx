"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { RenderElement, type RenderContext } from "./RenderElement";
import { resolveElement } from "./resolver";
import { useGlobalState } from "./GlobalStateContext";
import type { BuilderElement } from "@/types/elements";

type ConfigType = {
  state?: Record<string, any>;
  components?: Record<string, any>;
  elements: BuilderElement[];
};

export function PageRenderer({ config }: Readonly<{ config: ConfigType }>) {
  const router = useRouter();
  
  // Connect to the global state context
  const { globalState, updateGlobalState, globalComponents } = useGlobalState();

  // Manage reactive page-local state initialized from pageConfig
  const [state, setState] = useState<Record<string, any>>(() => config.state || {});

  const updateState = (
    key: string,
    value: any,
    operator?: "set" | "toggle" | "increment" | "decrement"
  ) => {
    setState((prev) => {
      const next = { ...prev };
      const currentVal = next[key];

      if (operator === "toggle") {
        next[key] = !currentVal;
      } else if (operator === "increment") {
        next[key] = (typeof currentVal === "number" ? currentVal : 0) + (typeof value === "number" ? value : 1);
      } else if (operator === "decrement") {
        next[key] = (typeof currentVal === "number" ? currentVal : 0) - (typeof value === "number" ? value : 1);
      } else {
        next[key] = value;
      }

      return next;
    });
  };

  const ctx: RenderContext = {
    state,
    updateState,
    globalState,
    updateGlobalState,
    onClick: (action) => (e) => {
      if (action.kind === "setState") {
        e.preventDefault();
        if (action.scope === "global" && updateGlobalState) {
          updateGlobalState(action.key, action.value, action.operator);
        } else {
          updateState(action.key, action.value, action.operator);
        }
        return;
      }

      if (action.kind === "route") {
        e.preventDefault();
        if (action.replace) router.replace(action.href);
        else router.push(action.href);
        return;
      }

      if (action.kind === "external") {
        e.preventDefault();
        if (action.newTab) globalThis.open(action.href, "_blank", "noopener,noreferrer");
        else globalThis.location.href = action.href;
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
  };

  // Resolve elements with cascading local -> global component lookups and local/global expressions
  const resolvedElements = (config.elements || []).flatMap((el) =>
    resolveElement(el, state, globalState, {}, config.components || {}, globalComponents)
  );

  return resolvedElements.map((el) => (
    <RenderElement key={el.id} el={el} ctx={ctx} />
  ));
}
