import type { Metadata } from 'next'
import { ArrowUpRight, Linkedin, Mail, MessageCircle, Music2, Phone } from 'lucide-react'
import { contact } from '@/lib/site'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Gift Andrew on WhatsApp, by email, LinkedIn or TikTok.',
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
      icon: Phone,
      label: 'Phone',
      value: contact.whatsappDisplay,
      note: 'Call me directly',
      href: contact.phoneUrl,
      action: 'Call now',
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
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Gift Chinyere Chukwuemeka',
      note: 'Let’s connect professionally',
      href: contact.linkedinUrl,
      action: 'Connect on LinkedIn',
    },
  ]

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div
          className="contact-orbit pointer-events-none absolute -right-20 top-0 -z-10 size-72 rounded-full border border-primary/20 md:right-[8%] md:size-96"
          aria-hidden="true"
        />
        <div
          className="contact-orbit contact-orbit-delayed pointer-events-none absolute -right-8 top-12 -z-10 size-48 rounded-full border border-primary/15 md:right-[12%] md:top-16 md:size-72"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-6xl px-5 pb-10 pt-12 md:pb-14 md:pt-20">
          <div className="contact-enter max-w-3xl">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <span className="contact-pulse size-2 rounded-full bg-primary" aria-hidden="true" />
              Contact
            </p>
            <h1 className="mt-4 text-balance text-4xl font-bold leading-[1.05] md:text-6xl">
              Good stories start with a <span className="text-primary">hello.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Looking for short-form video, social media support, or a creative partner for your next
              campaign? Tell me a little about it and I&apos;ll be in touch.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {channels.map(({ icon: Icon, label, value, note, href, action }, i) => {
            const external = href.startsWith('http')
            const featured = i === 0
            return (
              <li
                key={label}
                className="contact-enter"
                style={{ animationDelay: `${120 + i * 90}ms` }}
              >
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

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="contact-enter grid gap-8 rounded-3xl border border-border bg-card p-7 md:grid-cols-[1.2fr_1fr] md:items-center md:p-10">
          <div>
            <p className="text-sm font-semibold text-muted-foreground">A good place to start</p>
            <h2 className="mt-2 text-balance text-3xl font-bold md:text-4xl">
              Tell me what you&apos;re working on.
            </h2>
            <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
              A few details about your idea help me understand how I can help and what the next step
              could be.
            </p>
          </div>
          <ul className="flex flex-col gap-3 text-sm font-medium">
            {['What you are promoting or creating', 'Who you want to reach', 'Your goals or timeline'].map(
              (detail, i) => (
                <li key={detail} className="flex items-center gap-3 rounded-xl bg-background p-4">
                  <span className="font-heading text-sm font-semibold text-primary">
                    0{i + 1}
                  </span>
                  {detail}
                </li>
              ),
            )}
          </ul>
        </div>
      </section>
    </>
  )
}
