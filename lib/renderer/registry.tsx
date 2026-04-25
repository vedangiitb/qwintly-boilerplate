// lib/renderer/registry.tsx
import { RenderElement } from "./RenderElement";
import type { ReactNode } from "react";
import { icons } from "lucide-react";
import type { BuilderElement, ElementType } from "@/types/elements";
import { twMerge } from "tailwind-merge";

type ElementRenderer = (el: BuilderElement) => ReactNode;

export const registry: Partial<Record<ElementType, ElementRenderer>> = {
  fragment: (el) => <>{renderChildren(el.children)}</>,
  
  div: (el) => (
    <div id={el.id} className={twMerge(el.className)}>
      {renderChildren(el.children)}
    </div>
  ),

  text: (el) => (
    <p id={el.id} className={twMerge(el.className)}>
      {el.props?.text}
    </p>
  ),

  image: (el) => {
    if (!el.props?.src) return null;

    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        id={el.id}
        className={twMerge(el.className)}
        src={el.props.src}
        alt={el.props.alt ?? ""}
      />
    );
  },

  input: (el) => (
    <input
      id={el.id}
      className={twMerge(el.className)}
      placeholder={el.props?.placeholder}
      type={el.props?.type || "text"}
      defaultValue={el.props?.value}
    />
  ),

  textarea: (el) => (
    <textarea
      id={el.id}
      className={twMerge(el.className)}
      placeholder={el.props?.placeholder}
      defaultValue={el.props?.value}
    />
  ),

  link: (el) => (
    <a
      id={el.id}
      className={twMerge(el.className)}
      href={el.props?.href ?? "#"}
      target={el.props?.target}
      rel={el.props?.rel}
    >
      {el.children?.length ? renderChildren(el.children) : el.props?.text}
    </a>
  ),

  icon: (el) => {
    const iconName = el.props?.name ?? el.meta?.name;
    if (!iconName) return null;

    const LucideIcon = icons[iconName as keyof typeof icons];
    if (!LucideIcon) return null;

    return (
      <LucideIcon
        id={el.id}
        className={twMerge(el.className)}
        size={el.props?.size}
        color={el.props?.color}
        strokeWidth={el.props?.strokeWidth}
      />
    );
  },

  button: (el) => (
    <button id={el.id} className={twMerge(el.className)}>
      {el.children?.length ? renderChildren(el.children) : el.props?.text}
    </button>
  ),
};

function renderChildren(children?: BuilderElement[]) {
  return children?.map((child) => <RenderElement key={child.id} el={child} />);
}
