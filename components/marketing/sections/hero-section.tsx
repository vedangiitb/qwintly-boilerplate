import { HeroLeft } from "@/components/marketing/hero/hero-left"
import { HeroRight } from "@/components/marketing/hero/hero-right"

type HeroSectionProps = {
  description: string
}

export function HeroSection({ description }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-72 w-72 animate-[float_12s_ease-in-out_infinite] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -right-24 top-28 h-80 w-80 animate-[float_14s_ease-in-out_infinite] rounded-full bg-amber-200/40 blur-3xl dark:bg-amber-300/10" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 animate-[glow_8s_ease-in-out_infinite] rounded-full bg-emerald-200/40 blur-[110px] dark:bg-emerald-300/10" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-24 pt-20">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <HeroLeft description={description} />
          <HeroRight />
        </div>
      </div>
    </section>
  )
}

