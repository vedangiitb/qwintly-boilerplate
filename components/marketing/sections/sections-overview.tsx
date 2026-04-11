import { LayoutGrid, Sparkles, Wand2 } from "lucide-react"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeading, SectionShell } from "@/components/marketing/sections/section-shell"

type FeatureHighlight = {
  title: string
  description: string
}

const featureIcons = [Sparkles, LayoutGrid, Wand2]

type SectionsOverviewProps = {
  features: FeatureHighlight[]
}

export function SectionsOverview({ features }: SectionsOverviewProps) {
  return (
    <SectionShell id="sections" className="py-20">
      <SectionHeading
        eyebrow="Sections"
        title="A structured, flexible system for every generator build."
        description="Each section follows a consistent layout rhythm with optional accent treatments, making it easy for your builder job to mix and match with confidence."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = featureIcons[index]
          return (
            <Card key={feature.title} className="border-border/60 bg-background/80">
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
    </SectionShell>
  )
}

