import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { ProjectCard } from '@/components/project-card'
import { ContactCta } from '@/components/contact-cta'
import { SectionHeading } from '@/components/section-heading'
import { PortraitCard } from '@/components/portrait-card'
import { BrandGrid } from '@/components/brand-grid'
import { ServiceCard } from '@/components/service-card'
import { contact, platforms, projects, services, tools } from '@/lib/site'

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-10 md:grid-cols-[1.2fr_1fr] md:pb-24 md:pt-20">
          <div className="flex flex-col gap-6">
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium sm:text-sm">
              <span className="relative flex size-2" aria-hidden="true">
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              Open to roles, clients &amp; collabs
            </p>
            <h1 className="text-balance text-[2.6rem] font-bold leading-[1] sm:text-6xl md:text-7xl">
              I write stories and turn them into <span className="text-foreground">AI films.</span>
            </h1>
            <p className="max-w-lg text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              I&apos;m Gift Andrew, an AI content creator and social media manager. I write the
              script, produce the video and edit the final cut, then plan how it goes out.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-xl font-bold text-primary-foreground transition-opacity hover:opacity-90"
              >
                See my work
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                WhatsApp me
              </a>
            </div>
          </div>

          <PortraitCard priority />
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <SectionHeading eyebrow="Selected work" title="Recent projects" href="/work" linkLabel="All work" />
        </div>
        <ul className="no-scrollbar -mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-16 md:mx-auto md:grid md:max-w-6xl md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-20">
          {projects.map((project) => (
            <li key={project.slug} className="w-[80%] shrink-0 snap-start sm:w-[45%] md:w-auto">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <SectionHeading eyebrow="Services" title="What I can do for you" href="/services" linkLabel="All services" />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-4">
        <SectionHeading eyebrow="Toolkit" title="Tools I create with" />
        <div className="mt-10 flex flex-col gap-10">
          <BrandGrid label="Creative tools" items={tools} />
          <BrandGrid label="Platforms I manage" items={platforms} />
        </div>
      </section>

      <ContactCta />
    </>
  )
}
