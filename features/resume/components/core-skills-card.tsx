import { techSkills } from "@/features/resume/data/resume"
import { SidebarSectionCard } from "@/features/resume/components/sidebar-section-card"
import { Award } from "lucide-react"

export function CoreSkillsCard() {
  return (
    <SidebarSectionCard icon={<Award className="h-5 w-5" />} title="Core Skills">
      <ul className="space-y-3">
        {techSkills.map((skill) => (
          <li key={skill} className="flex items-start gap-3">
            <span className="mt-1.5 h-2 w-2 shrink-0 bg-foreground" />
            <span className="text-sm font-medium leading-relaxed">{skill}</span>
          </li>
        ))}
      </ul>
    </SidebarSectionCard>
  )
}
