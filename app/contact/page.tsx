import type { Metadata } from 'next'
import { ArrowUpRight, Mail, MessageCircle, Music2 } from 'lucide-react'
import { PageIntro } from '@/components/page-intro'
import { contact } from '@/lib/site'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Gift Andrew on WhatsApp, by email or on TikTok.',
}

export default function ContactPage() {
  const channels = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: contact.whatsappDisplay,
      note: 'Fastest reply',
      href: contact.whatsappUrl,
      action: 'Start a chat',
    },
    {
      icon: Mail,
      label: 'Email',
      value: contact.email,
      note: 'For briefs and job details',
      href: `mailto:${contact.email}`,
      action: 'Send an email',
    },
    {
      icon: Music2,
      label: 'TikTok',
      value: contact.tiktokHandle,
      note: 'See more of my videos',
      href: contact.tiktokUrl,
      action: 'Visit profile',
    },
  ]

  return (
    <>
      <PageIntro eyebrow="Contact" title="Let's work together.">
        <p>Hiring, need someone to run your social media, or want to collaborate on a story? Reach me here.</p>
      </PageIntro>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <ul className="grid gap-4 md:grid-cols-3">
          {channels.map(({ icon: Icon, label, value, note, href, action }, i) => {
            const external = href.startsWith('http')
            const featured = i === 0
            return (
              <li key={label}>
                <a
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className={cn(
                    'group flex h-full flex-col gap-8 rounded-3xl border p-6 transition-colors',
                    featured
                      ? 'border-primary bg-card text-foreground'
                      : 'border-border bg-card hover:border-primary',
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        'flex size-12 items-center justify-center rounded-2xl',
                        'bg-background text-foreground',
                      )}
                    >
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <span className="text-xs font-semibold text-muted-foreground">
                      {note}
                    </span>
                  </div>
                  <div className="mt-auto">
                    <h2 className="font-heading text-2xl font-semibold">{label}</h2>
                    <p className="mt-1 break-all text-muted-foreground">{value}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold underline decoration-primary decoration-2 underline-offset-4">
                      {action}
                      <ArrowUpRight
                        className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </a>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}
