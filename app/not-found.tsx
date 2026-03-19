import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="mx-auto max-w-lg text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          404 error
        </p>
        <h1 className="mt-4 font-[var(--font-display)] text-3xl font-semibold">
          We couldn&apos;t find that page.
        </h1>
        <p className="mt-3 text-muted-foreground">
          The page may have moved, or the generator hasn&apos;t created it yet.
        </p>
        <Button asChild className="mt-6">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </div>
  )
}
