import type { Metadata } from 'next'
import { PageIntro } from '@/components/page-intro'
import { ProjectCard } from '@/components/project-card'
import { ContactCta } from '@/components/contact-cta'
import { projects } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Original AI-generated video projects written and produced by Gift Andrew.',
}

export default function WorkPage() {
  return (
    <>
      <PageIntro eyebrow="Work" title="Stories I wrote, produced and edited.">
        <p>Original AI-generated videos. Open a project to watch it.</p>
      </PageIntro>
      <section className="mx-auto max-w-6xl px-5 pb-6">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </section>
      <ContactCta />
    </>
  )
}
