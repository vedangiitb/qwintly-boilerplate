// lib/renderer/registry.tsx
import type { BuilderElement, ElementType } from "@/types/elements";
import { icons } from "lucide-react";
import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import type { RenderContext } from "./RenderElement";
import { RenderElement } from "./RenderElement";

type ElementRenderer = (el: BuilderElement, ctx: RenderContext) => ReactNode;

export const registry: Partial<Record<ElementType, ElementRenderer>> = {
  fragment: (el, ctx) => <>{renderChildren(el.children, ctx)}</>,

  div: (el, ctx) => (
    <div
      id={el.id}
      className={twMerge(el.className)}
      onClick={el.props?.onClick ? ctx.onClick(el.props.onClick) : undefined}
    >
      {renderChildren(el.children, ctx)}
    </div>
  ),

  text: (el, ctx) => (
    <p
      id={el.id}
      className={twMerge(el.className)}
      onClick={el.props?.onClick ? ctx.onClick(el.props.onClick) : undefined}
    >
      {el.props?.text}
    </p>
  ),

  image: (el, ctx) => {
    if (!el.props?.src) return null;

    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        id={el.id}
        className={twMerge(el.className)}
        onClick={el.props?.onClick ? ctx.onClick(el.props.onClick) : undefined}
        src={el.props.src}
        alt={el.props.alt ?? ""}
      />
    );
  },

  input: (el, ctx) => (
    <input
      id={el.id}
      className={twMerge(el.className)}
      onClick={el.props?.onClick ? ctx.onClick(el.props.onClick) : undefined}
      placeholder={el.props?.placeholder}
      type={el.props?.type || "text"}
      defaultValue={el.props?.value}
    />
  ),

  textarea: (el, ctx) => (
    <textarea
      id={el.id}
      className={twMerge(el.className)}
      onClick={el.props?.onClick ? ctx.onClick(el.props.onClick) : undefined}
      placeholder={el.props?.placeholder}
      defaultValue={el.props?.value}
    />
  ),

  link: (el, ctx) => (
    <a
      id={el.id}
      className={twMerge(el.className)}
      onClick={el.props?.onClick ? ctx.onClick(el.props.onClick) : undefined}
      href={el.props?.href ?? "#"}
      target={el.props?.target}
      rel={el.props?.rel}
    >
      {el.children?.length ? renderChildren(el.children, ctx) : el.props?.text}
    </a>
  ),

  icon: (el, ctx) => {
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
        onClick={
          el.props?.onClick
            ? ctx.onClick<SVGSVGElement>(el.props.onClick)
            : undefined
        }
      />
    );
  },

  button: (el, ctx) => (
    <button
      id={el.id}
      className={twMerge(el.className)}
      onClick={el.props?.onClick ? ctx.onClick(el.props.onClick) : undefined}
    >
      {el.children?.length ? renderChildren(el.children, ctx) : el.props?.text}
    </button>
  ),
};

function renderChildren(
  children: BuilderElement[] | undefined,
  ctx: RenderContext,
) {
  return children?.map((child) => (
    <RenderElement key={child.id} el={child} ctx={ctx} />
  ));
}
