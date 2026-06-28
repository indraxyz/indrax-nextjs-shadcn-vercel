import { Separator } from "@/components/ui/separator"
import { achievements } from "@/features/resume/data/resume"
import { SidebarSectionCard } from "@/features/resume/components/sidebar-section-card"
import { Award } from "lucide-react"

export function AchievementsCard() {
  return (
    <SidebarSectionCard icon={<Award className="h-5 w-5" />} title="Achievements">
      <div className="space-y-4">
        {achievements.map((achievement, index) => (
          <div key={achievement.title}>
            <p className="mb-1 text-sm font-bold leading-tight">{achievement.title}</p>
            <p className="text-xs leading-relaxed text-muted-foreground">
              {achievement.description}
            </p>
            {index < achievements.length - 1 && <Separator className="mt-4" />}
          </div>
        ))}
      </div>
    </SidebarSectionCard>
  )
}
