'use client'

import { useEffect, useRef, useState } from 'react'

const milestones = {
  followers: 17_800,
  views: 3_000_000,
}

const formatter = new Intl.NumberFormat('en', {
  notation: 'compact',
  maximumFractionDigits: 1,
})

export function ReachStats() {
  const sectionRef = useRef<HTMLElement>(null)
  const [counts, setCounts] = useState(milestones)

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
        setCounts({ followers: 0, views: 0 })

        const countUp = (now: number) => {
          const progress = Math.min((now - startedAt) / duration, 1)
          const easedProgress = 1 - (1 - progress) ** 4
          setCounts({
            followers: Math.round(milestones.followers * easedProgress),
            views: Math.round(milestones.views * easedProgress),
          })

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

      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
        <div className="max-w-md">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-background/60">
            <span className="reach-spark size-2 rounded-full bg-primary" aria-hidden="true" />
            A little proof of the scroll-stopping
          </p>
          <h2
            id="reach-heading"
            className="mt-5 text-balance text-3xl font-semibold leading-tight sm:text-4xl"
          >
            Good stories travel.
          </h2>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-background/65 sm:text-base">
            And these are a few of the people and plays they&apos;ve found along the way.
          </p>
        </div>

        <dl className="grid grid-cols-2 gap-5 sm:gap-8">
          <div className="reach-stat border-l border-background/20 pl-4 sm:pl-7">
            <dt className="text-xs font-medium uppercase tracking-[0.16em] text-background/60 sm:text-sm">
              TikTok Followers
            </dt>
            <dd
              aria-label="Over 17,800 TikTok followers"
              className="mt-3 font-heading text-[clamp(2.6rem,8vw,5.25rem)] font-bold leading-none tracking-[-0.07em] text-primary tabular-nums"
            >
              <span aria-hidden="true">{formatter.format(counts.followers)}+</span>
            </dd>
            <p className="mt-4 text-xs text-background/50 sm:text-sm">A growing creative community</p>
          </div>

          <div className="reach-stat reach-stat-later border-l border-background/20 pl-4 sm:pl-7">
            <dt className="text-xs font-medium uppercase tracking-[0.16em] text-background/60 sm:text-sm">
              Video Views
            </dt>
            <dd
              aria-label="Over 3 million video views"
              className="mt-3 font-heading text-[clamp(2.6rem,8vw,5.25rem)] font-bold leading-none tracking-[-0.07em] text-primary tabular-nums"
            >
              <span aria-hidden="true">{formatter.format(counts.views)}+</span>
            </dd>
            <p className="mt-4 text-xs text-background/50 sm:text-sm">Stories watched, shared, replayed</p>
          </div>
        </dl>
      </div>
    </section>
  )
}
