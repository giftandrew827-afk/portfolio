import type { Metadata } from 'next'
import { PageIntro } from '@/components/page-intro'
import { ContactCta } from '@/components/contact-cta'
import { ServiceCard } from '@/components/service-card'
import { SectionHeading } from '@/components/section-heading'
import { BrandGrid } from '@/components/brand-grid'
import { platforms, process, services } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'AI cinematic video, scriptwriting, social media management, content planning, video editing and graphic design by Gift Andrew.',
}

export default function ServicesPage() {
  return (
    <>
      <PageIntro eyebrow="Services" title="From first idea to a post people watch.">
        <p>I can take a story from script to finished video, then plan how it goes out on social media.</p>
      </PageIntro>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} headingLevel="h2" />
          ))}
        </ul>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <SectionHeading eyebrow="Process" title="How I work" />
          <ol className="mt-10 grid gap-4 md:grid-cols-5">
            {process.map((step, i) => (
              <li key={step.title} className="flex gap-4 rounded-2xl border border-border bg-background p-5 md:flex-col">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-background font-heading font-bold text-foreground">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-16">
        <BrandGrid label="Platforms I manage" items={platforms} />
      </section>

      <ContactCta />
    </>
  )
}
