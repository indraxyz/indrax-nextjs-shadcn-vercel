import { Card, CardContent, CardHeader } from "@/components/ui/card"
import type { ReactNode } from "react"

interface SidebarSectionCardProps {
  title: string
  icon: ReactNode
  children: ReactNode
}

export function SidebarSectionCard({ title, icon, children }: SidebarSectionCardProps) {
  return (
    <Card className="rounded-none border-2 shadow-none">
      <CardHeader className="border-b-2 bg-muted/30">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            {icon}
          </div>
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
      </CardHeader>
      <CardContent className="pt-6">{children}</CardContent>
    </Card>
  )
}
