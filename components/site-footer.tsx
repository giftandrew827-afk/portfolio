import Link from 'next/link'
import { contact, navLinks } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-12 md:flex-row md:justify-between">
        <div className="flex max-w-xs flex-col gap-2">
          <p className="font-heading text-2xl font-semibold">Gift Andrew</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            AI Content Creator & Social Media Manager
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:gap-16">
          <nav aria-label="Footer">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Pages</h2>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:underline hover:decoration-primary hover:decoration-2 hover:underline-offset-4">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Contact</h2>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              <li>
                <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:underline hover:decoration-primary hover:decoration-2 hover:underline-offset-4">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="hover:underline hover:decoration-primary hover:decoration-2 hover:underline-offset-4">
                  Email
                </a>
              </li>
              <li>
                <a href={contact.tiktokUrl} target="_blank" rel="noopener noreferrer" className="hover:underline hover:decoration-primary hover:decoration-2 hover:underline-offset-4">
                  TikTok
                </a>
              </li>
              <li>
                <a href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:underline hover:decoration-primary hover:decoration-2 hover:underline-offset-4">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-1 border-t border-border px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Gift Andrew</p>
        <p className="break-all">{contact.email}</p>
      </div>
    </footer>
  )
}
