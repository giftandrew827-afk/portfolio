export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-12 md:pb-14 md:pt-20">
        <p className="text-sm font-semibold text-muted-foreground">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-balance text-4xl font-bold leading-[1.05] md:text-6xl">{title}</h1>
        {children && (
          <div className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {children}
          </div>
        )}
      </div>
    </section>
  )
}
