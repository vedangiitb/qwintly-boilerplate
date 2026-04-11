import { ArrowRight, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"

type HeroLeftProps = {
  description: string
}

export function HeroLeft({ description }: HeroLeftProps) {
  return (
    <div>
      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border/70 bg-background/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        <Sparkles className="h-4 w-4 text-primary" />
        Generator-ready starter kit
      </div>
      <h1 className="mt-10 text-balance font-[var(--font-display)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
        Launch brand-ready websites in days, not weeks.
      </h1>
      <p className="mt-5 text-pretty text-lg text-muted-foreground">
        {description} Designed for the Qwintly builder to drop in content, swap
        sections, and ship high-end marketing pages fast.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Button size="lg" className="gap-2">
          Create a site
          <ArrowRight className="h-4 w-4" />
        </Button>
        <Button size="lg" variant="outline">
          Preview templates
        </Button>
      </div>
      <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
        <div>
          <p className="text-xl font-semibold text-foreground">28+</p>
          <p>Composable sections</p>
        </div>
        <div>
          <p className="text-xl font-semibold text-foreground">95+</p>
          <p>Performance score</p>
        </div>
        <div>
          <p className="text-xl font-semibold text-foreground">3 min</p>
          <p>From brief to build</p>
        </div>
      </div>
    </div>
  )
}

