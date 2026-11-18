import Image from 'next/image'
import type { Brand } from '@/lib/site'

export function BrandGrid({ label, items }: { label: string; items: Brand[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</h3>
      <ul className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
        {items.map((item) => (
          <li
            key={item.name}
            className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary md:p-5"
          >
            <span className="flex size-12 items-center justify-center rounded-xl bg-foreground p-2.5 text-background">
              <Image src={item.logo} alt="" width={28} height={28} className="size-7" />
            </span>
            <span className="flex flex-col gap-0.5">
              <span className="font-semibold leading-tight">{item.name}</span>
              <span className="text-xs text-muted-foreground">{item.note}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
