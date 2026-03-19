import Link from "next/link"

import { Button } from "@/components/ui/button"
import { navLinks, siteConfig } from "@/lib/site"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-[var(--font-display)] text-lg font-semibold tracking-tight"
        >
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_0_6px_rgba(0,0,0,0.04)]" />
          {siteConfig.name}
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="hidden sm:inline-flex">
            View docs
          </Button>
          <Button>Start a project</Button>
        </div>
      </div>
    </header>
  )
}
