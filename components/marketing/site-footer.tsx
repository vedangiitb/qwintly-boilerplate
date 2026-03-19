import Link from "next/link"

import { navLinks, siteConfig } from "@/lib/site"

const footerLinks = [
  { label: "Templates", href: "#templates" },
  { label: "Pricing", href: "#pricing" },
  { label: "Changelog", href: "#" },
  { label: "Support", href: "#" },
]

const socialLinks = [
  { label: "Twitter", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Dribbble", href: "#" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <p className="font-[var(--font-display)] text-xl font-semibold">
              {siteConfig.name}
            </p>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Explore
            </p>
            <div className="mt-4 grid gap-2 text-sm">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-foreground">
                  {link.label}
                </Link>
              ))}
              {footerLinks.map((link) => (
                <Link key={link.label} href={link.href} className="hover:text-foreground">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Connect
            </p>
            <div className="mt-4 grid gap-2 text-sm">
              {socialLinks.map((link) => (
                <Link key={link.label} href={link.href} className="hover:text-foreground">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground">
          <span>© 2026 {siteConfig.name}. All rights reserved.</span>
          <span>Built for rapid, high-end marketing sites.</span>
        </div>
      </div>
    </footer>
  )
}
