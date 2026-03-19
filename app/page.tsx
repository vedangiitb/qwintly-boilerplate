import Link from "next/link"
import {
  ArrowRight,
  Bolt,
  LayoutGrid,
  Sparkles,
  Timer,
  Wand2,
} from "lucide-react"

import { SiteFooter } from "@/components/marketing/site-footer"
import { SiteHeader } from "@/components/marketing/site-header"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  featureHighlights,
  pricingTiers,
  processSteps,
  siteConfig,
  templates,
} from "@/lib/site"

const featureIcons = [Sparkles, LayoutGrid, Wand2]

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-32 top-10 h-72 w-72 animate-[float_12s_ease-in-out_infinite] rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute -right-24 top-28 h-80 w-80 animate-[float_14s_ease-in-out_infinite] rounded-full bg-amber-200/40 blur-3xl dark:bg-amber-300/10" />
            <div className="absolute bottom-0 left-1/3 h-64 w-64 animate-[glow_8s_ease-in-out_infinite] rounded-full bg-emerald-200/40 blur-[110px] dark:bg-emerald-300/10" />
          </div>
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-24 pt-20">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border/70 bg-background/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              <Sparkles className="h-4 w-4 text-primary" />
              Generator-ready starter kit
            </div>
            <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div>
                <h1 className="text-balance font-[var(--font-display)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                  Launch brand-ready websites in days, not weeks.
                </h1>
                <p className="mt-5 text-pretty text-lg text-muted-foreground">
                  {siteConfig.description} Designed for the Qwintly builder to
                  drop in content, swap sections, and ship high-end marketing
                  pages fast.
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
              <div className="grid gap-4">
                <Card className="border-border/60 bg-background/80 shadow-[0_15px_45px_-30px_rgba(0,0,0,0.35)] backdrop-blur">
                  <CardHeader>
                    <CardTitle className="text-lg">Build snapshot</CardTitle>
                    <CardDescription>
                      A quick view of what the generator outputs.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center justify-between rounded-lg border border-border/60 bg-muted/30 px-4 py-3">
                      <span>Hero + CTA</span>
                      <span className="font-semibold text-foreground">Ready</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border border-border/60 bg-muted/30 px-4 py-3">
                      <span>Feature grid</span>
                      <span className="font-semibold text-foreground">Ready</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border border-border/60 bg-muted/30 px-4 py-3">
                      <span>Pricing table</span>
                      <span className="font-semibold text-foreground">Ready</span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-border/60 bg-background/80">
                  <CardContent className="flex items-start gap-4 p-6">
                    <Timer className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-semibold">Zero config</p>
                      <p className="text-sm text-muted-foreground">
                        Ship the first draft without touching the theme layer.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="sections" className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Sections
            </span>
            <h2 className="text-balance font-[var(--font-display)] text-3xl font-semibold sm:text-4xl">
              A structured, flexible system for every generator build.
            </h2>
            <p className="max-w-2xl text-pretty text-muted-foreground">
              Each section follows a consistent layout rhythm with optional
              accent treatments, making it easy for your builder job to mix and
              match with confidence.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featureHighlights.map((feature, index) => {
              const Icon = featureIcons[index]
              return (
                <Card
                  key={feature.title}
                  className="border-border/60 bg-background/80"
                >
                  <CardHeader>
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </section>

        <section
          id="templates"
          className="border-y border-border/60 bg-muted/30"
        >
          <div className="mx-auto w-full max-w-6xl px-6 py-20">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Templates
              </span>
              <h2 className="text-balance font-[var(--font-display)] text-3xl font-semibold sm:text-4xl">
                Templates that feel custom right out of the box.
              </h2>
              <p className="max-w-2xl text-pretty text-muted-foreground">
                Start with expressive defaults and let the generator layer
                adjust tone, imagery, and layout density.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {templates.map((template) => (
                <Card key={template.name} className="border-border/60">
                  <CardHeader>
                    <CardTitle>{template.name}</CardTitle>
                    <CardDescription>{template.summary}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between rounded-lg border border-border/60 bg-muted/20 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      <span>Layout pack</span>
                      <span className="text-primary">Ready</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button size="lg">Browse all templates</Button>
              <Button size="lg" variant="outline">
                Generate your own
              </Button>
            </div>
          </div>
        </section>

        <section id="process" className="mx-auto w-full max-w-6xl px-6 py-20">
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
              {processSteps.map((step, index) => (
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
        </section>

        <section id="pricing" className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Pricing
            </span>
            <h2 className="text-balance font-[var(--font-display)] text-3xl font-semibold sm:text-4xl">
              Simple pricing for every builder workflow.
            </h2>
            <p className="max-w-2xl text-pretty text-muted-foreground">
              Offer clients a clear path to launch while keeping your internal
              tooling lean and predictable.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <Card key={tier.name} className="border-border/60 bg-background/80">
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <CardDescription>{tier.detail}</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-5">
                  <div>
                    <p className="text-3xl font-semibold text-foreground">
                      {tier.price}
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      per project
                    </p>
                  </div>
                  <div className="grid gap-2 text-sm text-muted-foreground">
                    {tier.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button variant="outline">Choose {tier.name}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="border-t border-border/60 bg-primary/5">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
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
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
