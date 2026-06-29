import { ExternalLink } from "lucide-react"
import Link from "next/link"
import type { ReactNode } from "react"

interface SectionHeaderProps {
  icon: ReactNode
  title: string
  link?: {
    href: string
    textLink: string
  }
}

export function SectionHeader({ icon, title, link }: SectionHeaderProps) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="shadow-brutal-sm flex h-10 w-10 shrink-0 items-center justify-center border-2 border-border bg-primary text-primary-foreground">
        {icon}
      </div>
      <div className="flex flex-col">
        <h2 className="text-2xl font-black uppercase tracking-tight">{title}</h2>
        {link && (
          <Link
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground hover:underline"
          >
            {link.textLink} <ExternalLink className="h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  )
}
