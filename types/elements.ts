// types/elements.ts
export const ELEMENT_TYPES = [
  "fragment",
  "div",
  "text",
  "image",
  "button",
  "input",
  "textarea",
  "link",
  "icon",
  "component",
  "slot",
] as const;

export type ElementType = (typeof ELEMENT_TYPES)[number];

export type OnClickAction =
  | { kind: "route"; href: string; replace?: boolean }
  | { kind: "back" }
  | { kind: "reload" }
  | { kind: "external"; href: string; newTab?: boolean }
  | {
      kind: "setState";
      key: string;
      value?: any;
      operator?: "set" | "toggle" | "increment" | "decrement";
      scope?: "page" | "global";
    };

export type BuilderElement = {
  id: string;
  type: ElementType;

  props?: {
    onClick?: OnClickAction;

    text?: string;
    src?: string;
    href?: string;
    placeholder?: string;
    alt?: string;
    target?: string;
    rel?: string;
    value?: string;
    type?: string; // input type

    // icon
    name?: string;
    size?: number;
    color?: string;
    strokeWidth?: number;

    // component props
    componentId?: string;
    inputs?: Record<string, any>;

    // state bindings
    bindState?: string;
    bindStateScope?: "page" | "global";
  };

  children?: BuilderElement[];

  visible?: boolean;

  meta?: {
    name?: string;
    locked?: boolean;
  };

  className?: string; // Tailwind only
};

export type ConfigType = {
  state?: Record<string, any>;
  components?: Record<string, any>;
  elements: BuilderElement[];
};
