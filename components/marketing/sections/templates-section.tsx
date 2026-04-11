import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeading, SectionShell } from "@/components/marketing/sections/section-shell"

type TemplateSummary = {
  name: string
  summary: string
}

type TemplatesSectionProps = {
  templates: TemplateSummary[]
}

export function TemplatesSection({ templates }: TemplatesSectionProps) {
  return (
    <SectionShell
      id="templates"
      className="border-y border-border/60 bg-muted/30 py-20"
    >
      <SectionHeading
        eyebrow="Templates"
        title="Templates that feel custom right out of the box."
        description="Start with expressive defaults and let the generator layer adjust tone, imagery, and layout density."
      />
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
    </SectionShell>
  )
}

