import type { BuilderElement } from "@/types/elements";

const IDENTIFIER_REGEX = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;

/**
 * Safely evaluates a JavaScript expression within the context of state, global, and compProps.
 * Re-exposes valid state variables as local variables in the function scope for brevity.
 */
function evalExpression(
  expr: string,
  state: Record<string, any>,
  global: Record<string, any> = {},
  compProps?: Record<string, any>
): any {
  try {
    const keys = Object.keys(state).filter((k) => IDENTIFIER_REGEX.test(k));
    const values = keys.map((k) => state[k]);

    // Construct the sandboxed evaluator function
    const fn = new Function(...keys, "state", "global", "compProps", `return (${expr});`);
    return fn(...values, state, global, compProps);
  } catch (err) {
    console.error(`Error evaluating expression: "${expr}"`, err);
    return undefined;
  }
}

/**
 * Recursively resolves values (strings, arrays, objects) containing `{{expression}}` blocks.
 */
export function resolveValue(
  value: any,
  state: Record<string, any>,
  globalState: Record<string, any>,
  compProps?: Record<string, any>
): any {
  if (typeof value === "string") {
    // If the entire string is a single expression, return its raw type (e.g. boolean, number)
    const exactMatch = value.trim().match(/^\{\{\s*([\s\S]+?)\s*\}\}$/);
    if (exactMatch) {
      return evalExpression(exactMatch[1], state, globalState, compProps);
    }

    // Otherwise, interpolate expressions as a string
    return value.replace(/\{\{\s*([\s\S]+?)\s*\}\}/g, (_, expr) => {
      const val = evalExpression(expr, state, globalState, compProps);
      return val !== undefined ? String(val) : "";
    });
  }

  if (Array.isArray(value)) {
    return value.map((item) => resolveValue(item, state, globalState, compProps));
  }

  if (value !== null && typeof value === "object") {
    const resolved: Record<string, any> = {};
    for (const key of Object.keys(value)) {
      resolved[key] = resolveValue(value[key], state, globalState, compProps);
    }
    return resolved;
  }

  return value;
}

/**
 * Recursively resolves an element tree by:
 * 1. Evaluating visibility rules.
 * 2. Expanding components with inputs (local page components, falling back to global components).
 * 3. Positioning slotted children.
 * 4. Evaluating dynamic expressions within properties.
 */
export function resolveElement(
  el: BuilderElement,
  state: Record<string, any>,
  globalState: Record<string, any>,
  compProps?: Record<string, any>,
  components?: Record<string, any>,
  globalComponents?: Record<string, any>,
  slotElements?: BuilderElement[]
): BuilderElement[] {
  // 1. Resolve visibility. If falsy, don't render.
  const visible = el.visible !== undefined ? resolveValue(el.visible, state, globalState, compProps) : true;
  if (!visible) {
    return [];
  }

  // 2. Handle standard Slot rendering.
  if (el.type === "slot") {
    return slotElements || [];
  }

  // 3. Handle Component rendering.
  if (el.type === "component") {
    const componentId = el.props?.componentId;
    // Cascading lookup: local page components override global components
    const componentDef = componentId && (components?.[componentId] ?? globalComponents?.[componentId]);
    if (!componentDef) {
      console.warn(`Component definition not found for: ${componentId}`);
      return [];
    }

    // Resolve component inputs in the caller's context
    const rawInputs = el.props?.inputs || {};
    const resolvedInputs: Record<string, any> = {};
    for (const key of Object.keys(rawInputs)) {
      resolvedInputs[key] = resolveValue(rawInputs[key], state, globalState, compProps);
    }

    // Resolve children of this component in the caller's context to pass down as slots
    const resolvedSlotElements: BuilderElement[] = [];
    if (el.children) {
      for (const child of el.children) {
        resolvedSlotElements.push(
          ...resolveElement(child, state, globalState, compProps, components, globalComponents, slotElements)
        );
      }
    }

    // Render the component's root element with its resolved inputs and slot elements
    if (!componentDef.element) {
      return [];
    }
    return resolveElement(
      componentDef.element,
      state,
      globalState,
      resolvedInputs,
      components,
      globalComponents,
      resolvedSlotElements
    );
  }

  // 4. Resolve regular element properties and children.
  const resolvedProps = el.props ? resolveValue(el.props, state, globalState, compProps) : undefined;

  const resolvedChildren: BuilderElement[] = [];
  if (el.children) {
    for (const child of el.children) {
      resolvedChildren.push(
        ...resolveElement(child, state, globalState, compProps, components, globalComponents, slotElements)
      );
    }
  }

  return [
    {
      ...el,
      props: resolvedProps,
      children: resolvedChildren.length > 0 ? resolvedChildren : undefined,
    },
  ];
}
