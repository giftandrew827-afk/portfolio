import Link from 'next/link'
import { ArrowUpRight, Play } from 'lucide-react'
import type { Project } from '@/lib/site'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative block aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-foreground"
    >
      <video
        src={`${project.video}#t=0.5`}
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-linear-to-t from-foreground/90 via-foreground/20 to-transparent" aria-hidden="true" />

      <span className="absolute left-4 top-4 rounded-full bg-foreground/70 px-3 py-1 text-xs font-semibold text-background backdrop-blur">
        {project.number}
      </span>
      <span
        className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:scale-110"
        aria-hidden="true"
      >
        <Play className="ml-0.5 size-5 fill-current" />
      </span>

      <span className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-5">
        <span className="flex items-center justify-between gap-2">
          <span className="font-heading text-2xl font-semibold text-background">{project.title}</span>
          <ArrowUpRight
            className="size-5 shrink-0 text-background transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
        <span className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-background/40 bg-foreground/50 px-2.5 py-1 text-xs font-medium text-background backdrop-blur"
            >
              {tag}
            </span>
          ))}
        </span>
      </span>
    </Link>
  )
}
