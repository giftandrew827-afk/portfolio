import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { ContactCta } from '@/components/contact-cta'
import { contact, projects, tools } from '@/lib/site'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return { title: project.title, description: project.summary }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) notFound()

  const project = projects[index]
  const next = projects[(index + 1) % projects.length]

  const details = [
    { label: 'My role', value: 'Concept, script, AI production and edit' },
    { label: 'Format', value: project.format ?? 'AI-generated video' },
    { label: 'Tools I use', value: tools.map((t) => t.name).join(', ') },
  ]

  return (
    <>
      <article className="mx-auto max-w-6xl px-5 py-8 md:py-14">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 rounded-lg border border-border px-3.5 py-2 text-sm font-medium transition-colors hover:border-foreground/30 hover:bg-card"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          All work
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-start lg:gap-12">
          <div className="overflow-hidden rounded-3xl border border-border bg-foreground">
            <video
              src={project.video}
              controls
              playsInline
              preload="metadata"
              className="mx-auto max-h-[80svh] w-full object-contain"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm font-semibold text-muted-foreground">Project {project.number}</p>
              <h1 className="mt-2 text-4xl font-bold md:text-5xl">{project.title}</h1>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground md:text-lg">{project.summary}</p>
            </div>
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li key={tag} className="rounded-full bg-card px-3 py-1 text-sm font-medium text-foreground">
                  {tag}
                </li>
              ))}
            </ul>
            <dl className="flex flex-col divide-y divide-border rounded-2xl border border-border bg-card">
              {details.map((d) => (
                <div key={d.label} className="flex flex-col gap-1 p-4">
                  <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{d.label}</dt>
                  <dd className="font-medium">{d.value}</dd>
                </div>
              ))}
            </dl>
            <a
              href={contact.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold transition-colors hover:border-foreground/30 hover:bg-card sm:w-fit"
            >
              More on TikTok {contact.tiktokHandle}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {next.slug !== project.slug && (
          <Link
            href={`/work/${next.slug}`}
            className="group mt-12 flex items-center justify-between gap-4 rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary"
          >
            <span>
              <span className="block text-sm text-muted-foreground">Next project</span>
              <span className="font-heading text-2xl font-semibold">{next.title}</span>
            </span>
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:translate-x-1">
              <ArrowRight className="size-5" aria-hidden="true" />
            </span>
          </Link>
        )}
      </article>
      <ContactCta />
    </>
  )
}
