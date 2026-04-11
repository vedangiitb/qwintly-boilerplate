import Link from "next/link"

import { Button } from "@/components/ui/button"
import { SectionShell } from "@/components/marketing/sections/section-shell"

export function FinalCtaSection() {
  return (
    <SectionShell className="border-t border-border/60 bg-primary/5 py-16">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h3 className="font-[var(--font-display)] text-2xl font-semibold">
            Ready to generate your next site?
          </h3>
          <p className="mt-2 text-muted-foreground">
            Start from this boilerplate and let the builder do the rest.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="lg">Launch builder</Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="mailto:hello@qwintly.com">Talk to us</Link>
          </Button>
        </div>
      </div>
    </SectionShell>
  )
}

