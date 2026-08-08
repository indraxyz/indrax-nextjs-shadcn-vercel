import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { variantClassNames, type VisualVariant } from "@/components/ui/variants"
import type { ReactNode } from "react"

interface SidebarSectionCardProps {
  title: string
  icon: ReactNode
  variant?: VisualVariant
  children: ReactNode
}

export function SidebarSectionCard({
  title,
  icon,
  variant = "primary",
  children,
}: SidebarSectionCardProps) {
  return (
    <Card className={`${variantClassNames[variant]} bg-[var(--variant-soft)]`}>
      <CardHeader className="variant-surface-header border-b-2">
        <div className="flex items-center gap-3">
          <div
            className={`variant-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-none border-2 ${variantClassNames[variant]}`}
          >
            {icon}
          </div>
          <h2 className="text-xl font-black uppercase tracking-tight">{title}</h2>
        </div>
      </CardHeader>
      <CardContent className="pt-6">{children}</CardContent>
    </Card>
  )
}
