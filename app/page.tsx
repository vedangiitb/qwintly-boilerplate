import { SiteHeader } from "@/components/marketing/site-header"
import { SiteFooter } from "@/components/marketing/site-footer"
import { FinalCtaSection } from "@/components/marketing/sections/final-cta-section"
import { HeroSection } from "@/components/marketing/sections/hero-section"
import { PricingSection } from "@/components/marketing/sections/pricing-section"
import { ProcessSection } from "@/components/marketing/sections/process-section"
import { SectionsOverview } from "@/components/marketing/sections/sections-overview"
import { TemplatesSection } from "@/components/marketing/sections/templates-section"
import {
  featureHighlights,
  pricingTiers,
  processSteps,
  siteConfig,
  templates,
} from "@/lib/site"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <HeroSection description={siteConfig.description} />
        <SectionsOverview features={featureHighlights} />
        <TemplatesSection templates={templates} />
        <ProcessSection steps={processSteps} />
        <PricingSection tiers={pricingTiers} />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </div>
  )
}
