'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { contact, navLinks } from '@/lib/site'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span
            className="flex size-8 items-center justify-center rounded-full bg-card font-heading text-sm font-bold text-foreground"
            aria-hidden="true"
          >
            GA
          </span>
          <span className="font-heading text-lg font-semibold">Gift Andrew</span>
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-full border border-border bg-card p-1">
            {navLinks.map((link) => {
              const active = pathname.startsWith(link.href)
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'block rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
                      active
                        ? 'text-foreground underline decoration-primary decoration-2 underline-offset-4'
                        : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xl font-bold text-primary-foreground transition-opacity hover:opacity-90 md:inline-flex"
          >
            Hire me
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border bg-background md:hidden">
          <ul className="flex flex-col gap-1 px-5 py-4">
            {navLinks.map((link) => {
              const active = pathname.startsWith(link.href)
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'flex items-center justify-between rounded-xl px-4 py-3 font-heading text-xl font-semibold',
                      active ? 'bg-card text-foreground underline decoration-primary decoration-2 underline-offset-4' : 'text-foreground',
                    )}
                  >
                    {link.label}
                    <ArrowUpRight className="size-5 text-muted-foreground" aria-hidden="true" />
                  </Link>
                </li>
              )
            })}
            <li className="pt-3">
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center rounded-full bg-primary px-4 py-3.5 text-xl font-bold text-primary-foreground"
              >
                Hire me on WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
