import type { ReactNode } from "react"

interface SectionHeaderProps {
  icon: ReactNode
  title: string
}

export function SectionHeader({ icon, title }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shrink-0">
        {icon}
      </div>
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  )
}

