import { CalendarDays, Clapperboard, Megaphone, Palette, PenLine, Scissors } from 'lucide-react'
import type { ServiceIcon } from '@/lib/site'

const icons = {
  film: Clapperboard,
  pen: PenLine,
  megaphone: Megaphone,
  calendar: CalendarDays,
  scissors: Scissors,
  palette: Palette,
} satisfies Record<ServiceIcon, unknown>

export function ServiceCard({
  title,
  description,
  icon,
  index,
  headingLevel: Heading = 'h3',
}: {
  title: string
  description: string
  icon: ServiceIcon
  index: number
  headingLevel?: 'h2' | 'h3'
}) {
  const Icon = icons[icon]
  return (
    <li className="group flex flex-col gap-5 rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary/50">
      <div className="flex items-center justify-between">
        <span className="flex size-12 items-center justify-center rounded-2xl bg-background text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="size-6" aria-hidden="true" />
        </span>
        <span className="font-heading text-sm font-semibold text-muted-foreground">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <div>
        <Heading className="text-xl font-semibold">{title}</Heading>
        <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </li>
  )
}
