import * as React from "react"

import { cn } from "@/lib/utils"

type SectionShellProps = React.ComponentProps<"section"> & {
  containerClassName?: string
}

export function SectionShell({
  className,
  containerClassName,
  children,
  ...props
}: SectionShellProps) {
  return (
    <section className={cn(className)} {...props}>
      <div className={cn("mx-auto w-full max-w-6xl px-6", containerClassName)}>
        {children}
      </div>
    </section>
  )
}

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-balance font-[var(--font-display)] text-3xl font-semibold sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-pretty text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  )
}

