import { variantClassNames, type VisualVariant } from "@/components/ui/variants"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import type { ReactNode } from "react"

interface SectionHeaderProps {
  icon: ReactNode
  title: string
  variant?: VisualVariant
  link?: {
    href: string
    textLink: string
  }
}

export function SectionHeader({ icon, title, variant = "primary", link }: SectionHeaderProps) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div
        className={`variant-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-none border-2 ${variantClassNames[variant]}`}
      >
        {icon}
      </div>
      <div className="flex flex-col">
        <h2 className="text-2xl font-black uppercase tracking-tight">{title}</h2>
        {link && (
          <Link
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-current opacity-85 transition hover:opacity-100 hover:underline"
          >
            {link.textLink} <ExternalLink className="h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  )
}
