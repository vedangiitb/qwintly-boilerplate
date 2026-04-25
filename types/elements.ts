// types/elements.ts
export type ElementType =
  | "fragment"
  | "div"
  | "text"
  | "image"
  | "button"
  | "input"
  | "textarea"
  | "link"
  | "icon";

export type BuilderElement = {
  id: string;
  type: ElementType;

  props?: {
    text?: string;
    src?: string;
    alt?: string;
    href?: string;
    target?: string;
    rel?: string;
    placeholder?: string;
    value?: string;
    type?: string; // input type

    // icon
    name?: string;
    size?: number;
    color?: string;
    strokeWidth?: number;
  };

  children?: BuilderElement[];

  visible?: boolean;

  meta?: {
    name?: string;
    locked?: boolean;
  };

  className?: string; // Tailwind only
};
