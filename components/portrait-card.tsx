import Image from 'next/image'

export function PortraitCard({ priority = false }: { priority?: boolean }) {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-card">
        <div
          className="absolute inset-x-6 top-6 aspect-square rounded-full border-[1.75rem] border-white/15"
          aria-hidden="true"
        />
        <Image
          src="/images/gift-portrait.png"
          alt="Portrait of Gift Andrew in a black blazer and white top"
          fill
          priority={priority}
          sizes="(min-width: 768px) 384px, 90vw"
          className="object-contain object-bottom brightness-[0.9] saturate-[0.82] contrast-[1.04]"
        />
      </div>
      <span className="absolute left-3 top-5 rounded-full bg-background/90 px-3 py-1.5 text-xs font-semibold backdrop-blur">
        Scriptwriter
      </span>
      <span className="absolute bottom-5 right-3 rounded-full bg-background/90 px-3 py-1.5 text-xs font-semibold backdrop-blur">
        AI filmmaker
      </span>
    </div>
  )
}
