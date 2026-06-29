import { Card, CardContent, CardHeader } from "@/components/ui/card"
import type { ReactNode } from "react"

interface SidebarSectionCardProps {
  title: string
  icon: ReactNode
  children: ReactNode
}

export function SidebarSectionCard({ title, icon, children }: SidebarSectionCardProps) {
  return (
    <Card className="border-2 border-border bg-card">
      <CardHeader className="border-b-2 border-border bg-muted">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-border bg-primary text-primary-foreground shadow-brutal-sm">
            {icon}
          </div>
          <h2 className="text-2xl font-black uppercase tracking-tight">{title}</h2>
        </div>
      </CardHeader>
      <CardContent className="pt-6">{children}</CardContent>
    </Card>
  )
}
