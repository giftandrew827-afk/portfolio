import { Mail, MessageCircle } from 'lucide-react'
import { contact } from '@/lib/site'

export function ContactCta() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
      <div className="rounded-3xl bg-card p-7 text-foreground md:p-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-muted-foreground">Roles, clients and collaborations</p>
            <h2 className="mt-2 text-balance text-3xl font-bold leading-tight md:text-5xl">
              Have a story or a brand to grow?
            </h2>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              Tell me about it and I&apos;ll get back to you.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              WhatsApp me
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold transition-colors hover:border-foreground/30 hover:bg-background"
            >
              <Mail className="size-4" aria-hidden="true" />
              Email me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
