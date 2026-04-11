import { Bolt, LayoutGrid, Timer } from "lucide-react"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionShell } from "@/components/marketing/sections/section-shell"

type ProcessStep = {
  title: string
  description: string
}

type ProcessSectionProps = {
  steps: ProcessStep[]
}

export function ProcessSection({ steps }: ProcessSectionProps) {
  return (
    <SectionShell id="process" className="py-20">
      <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Process
          </span>
          <h2 className="mt-4 text-balance font-[var(--font-display)] text-3xl font-semibold sm:text-4xl">
            Turn a prompt into a full site with zero friction.
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            The boilerplate is structured so your generator job can drop in
            data, flip palettes, and ship a full front-end without touching
            layout code.
          </p>
          <div className="mt-6 flex flex-col gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-3">
              <Bolt className="h-4 w-4 text-primary" />
              Lightning-fast build times and streamlined layout exports.
            </div>
            <div className="flex items-center gap-3">
              <LayoutGrid className="h-4 w-4 text-primary" />
              Shared spacing and grid rhythm for consistent output.
            </div>
            <div className="flex items-center gap-3">
              <Timer className="h-4 w-4 text-primary" />
              Sections optimized for mobile and desktop screens.
            </div>
          </div>
        </div>
        <div className="grid gap-6">
          {steps.map((step, index) => (
            <Card key={step.title} className="border-border/60 bg-background">
              <CardHeader>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Step {index + 1}
                </p>
                <CardTitle>{step.title}</CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}

