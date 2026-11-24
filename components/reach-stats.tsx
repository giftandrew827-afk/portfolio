'use client'

import { useEffect, useRef, useState } from 'react'

const milestones = [
  { platform: 'TikTok', followers: 17_800, views: 3_000_000 },
  { platform: 'Facebook', followers: 5_600, views: 10_000 },
  { platform: 'Instagram', followers: 2_000, views: 100_000 },
]

const formatter = new Intl.NumberFormat('en', {
  notation: 'compact',
  maximumFractionDigits: 1,
})
const accessibleFormatter = new Intl.NumberFormat('en')

export function ReachStats() {
  const sectionRef = useRef<HTMLElement>(null)
  const [counts, setCounts] = useState(
    milestones.map(({ followers, views }) => ({ followers, views })),
  )

  useEffect(() => {
    const section = sectionRef.current
    if (!section || !('IntersectionObserver' in window)) return

    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

        const startedAt = performance.now()
        const duration = 1800
        setCounts(milestones.map(() => ({ followers: 0, views: 0 })))

        const countUp = (now: number) => {
          const progress = Math.min((now - startedAt) / duration, 1)
          const easedProgress = 1 - (1 - progress) ** 4
          setCounts(
            milestones.map(({ followers, views }) => ({
              followers: Math.round(followers * easedProgress),
              views: Math.round(views * easedProgress),
            })),
          )

          if (progress < 1) frame = requestAnimationFrame(countUp)
        }

        frame = requestAnimationFrame(countUp)
      },
      { threshold: 0.35 },
    )

    observer.observe(section)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      aria-labelledby="reach-heading"
      className="relative isolate overflow-hidden border-y border-foreground/10 bg-foreground text-background"
    >
      <div
        className="reach-orbit pointer-events-none absolute -right-32 -top-56 -z-10 size-[34rem] rounded-full border border-background/10 sm:-right-20"
        aria-hidden="true"
      />
      <div
        className="reach-orbit reach-orbit-inner pointer-events-none absolute -right-12 -top-36 -z-10 size-[26rem] rounded-full border border-primary/40"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <div className="max-w-lg">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-background/60">
            <span className="reach-spark size-2 rounded-full bg-primary" aria-hidden="true" />
            A snapshot of the growing audience
          </p>
          <h2
            id="reach-heading"
            className="mt-5 text-balance text-3xl font-semibold leading-tight sm:text-4xl"
          >
            Good stories travel.
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-background/65 sm:text-base">
            One story, three communities. Here&apos;s how far Gift&apos;s videos have travelled so far.
          </p>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {milestones.map(({ platform }, index) => (
            <article
              key={platform}
              className="reach-platform rounded-3xl border border-background/15 bg-background/[0.03] p-5 sm:p-6"
              style={{ animationDelay: `${index * 120}ms` }}
              aria-labelledby={`reach-${platform.toLowerCase()}-title`}
            >
              <h3
                id={`reach-${platform.toLowerCase()}-title`}
                className="font-heading text-xl font-semibold"
              >
                {platform}
              </h3>
              <dl className="mt-6 grid grid-cols-2 gap-3">
                <div>
                  <dt className="text-[0.65rem] font-medium uppercase tracking-[0.15em] text-background/55 sm:text-xs">
                    Followers
                  </dt>
                  <dd
                    aria-label={`Over ${accessibleFormatter.format(milestones[index].followers)} ${platform} followers`}
                    className="mt-2 font-heading text-[clamp(1.9rem,6vw,3rem)] font-bold leading-none tracking-[-0.06em] text-primary tabular-nums"
                  >
                    <span aria-hidden="true">{formatter.format(counts[index].followers)}+</span>
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.65rem] font-medium uppercase tracking-[0.15em] text-background/55 sm:text-xs">
                    Video views
                  </dt>
                  <dd
                    aria-label={`Over ${accessibleFormatter.format(milestones[index].views)} ${platform} video views`}
                    className="mt-2 font-heading text-[clamp(1.9rem,6vw,3rem)] font-bold leading-none tracking-[-0.06em] text-primary tabular-nums"
                  >
                    <span aria-hidden="true">{formatter.format(counts[index].views)}+</span>
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
