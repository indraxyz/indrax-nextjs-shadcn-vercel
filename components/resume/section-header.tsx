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
    <div className="flex gap-3 mb-6 items-center">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shrink-0">
        {icon}
      </div>
      <div className="flex flex-col ">
        <h2 className="text-2xl font-bold">{title}</h2>
        {link && (
          <Link
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary hover:underline transition-colors flex items-center gap-2"
          >
            {link.textLink} <ExternalLink className="h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  )
}
