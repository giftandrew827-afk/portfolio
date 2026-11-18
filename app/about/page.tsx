import type { Metadata } from 'next'
import { Cake, Church, Clapperboard, GraduationCap, User } from 'lucide-react'
import { ContactCta } from '@/components/contact-cta'
import { PortraitCard } from '@/components/portrait-card'
import { SectionHeading } from '@/components/section-heading'
import { BrandGrid } from '@/components/brand-grid'
import { experience, platforms, tools, type ExperienceIcon } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Gift Andrew is an AI content creator and social media manager who writes and produces her own cinematic stories.',
}

const experienceIcons = {
  user: User,
  church: Church,
  clapperboard: Clapperboard,
  cake: Cake,
} satisfies Record<ExperienceIcon, unknown>

const skills = [
  'AI video production',
  'Scriptwriting',
  'Storytelling',
  'Short films',
  'Social media',
  'Content planning',
  'Video editing',
  'Graphic design',
]

export default function AboutPage() {
  return (
    <>
      <section>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-10 md:grid-cols-[1fr_1.2fr] md:pb-24 md:pt-20">
          <div className="order-2 md:order-1">
            <PortraitCard priority />
          </div>
          <div className="order-1 flex flex-col gap-6 md:order-2">
            <p className="text-sm font-semibold text-muted-foreground">About me</p>
            <h1 className="text-balance text-[2.6rem] font-bold leading-[1] sm:text-6xl">
              Hi, I&apos;m Gift. I tell stories <span className="text-foreground">with AI.</span>
            </h1>
            <div className="flex flex-col gap-4 text-pretty leading-relaxed text-muted-foreground md:text-lg">
              <p>
                I come up with original concepts, write my own scripts and produce AI-generated
                cinematic videos and short films. I handle the creative development of every story
                myself, from the first idea to the final edit.
              </p>
              <p>
                I also manage social media accounts and create content for different platforms:
                planning posts, making them, editing them and designing the graphics.
              </p>
            </div>
            <ul className="flex flex-wrap gap-2" aria-label="Skills">
              {skills.map((skill) => (
                <li key={skill} className="rounded-full border border-border bg-card px-3 py-1.5 text-sm">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <SectionHeading eyebrow="Experience" title="Accounts I've managed" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {experience.map(({ label, icon }) => {
              const Icon = experienceIcons[icon]
              return (
                <li key={label} className="flex flex-col gap-5 rounded-3xl border border-border bg-background p-6">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-background text-foreground">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <p className="text-pretty text-lg font-semibold leading-snug">{label}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <SectionHeading eyebrow="Toolkit" title="What I work with" />
        <div className="mt-10 flex flex-col gap-10">
          <BrandGrid label="Creative tools" items={tools} />
          <BrandGrid label="Platforms" items={platforms} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-6 sm:flex-row sm:items-center md:p-8">
          <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-background text-foreground">
            <GraduationCap className="size-7" aria-hidden="true" />
          </span>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Education</h2>
            <p className="mt-1 font-heading text-xl font-semibold md:text-2xl">Hospitality and Hotel Management</p>
            <p className="text-sm text-muted-foreground">Currently studying</p>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  )
}
