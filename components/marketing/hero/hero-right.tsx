import { Timer } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function HeroRight() {
  return (
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
  )
}

