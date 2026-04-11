import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeading, SectionShell } from "@/components/marketing/sections/section-shell"

type PricingTier = {
  name: string
  price: string
  detail: string
  features: string[]
}

type PricingSectionProps = {
  tiers: PricingTier[]
}

export function PricingSection({ tiers }: PricingSectionProps) {
  return (
    <SectionShell id="pricing" className="py-20">
      <SectionHeading
        eyebrow="Pricing"
        title="Simple pricing for every builder workflow."
        description="Offer clients a clear path to launch while keeping your internal tooling lean and predictable."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {tiers.map((tier) => (
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
    </SectionShell>
  )
}

