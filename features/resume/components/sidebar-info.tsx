import { cn } from "@/lib/utils"
import { AchievementsCard } from "@/features/resume/components/achievements-card"
import { CertificationsCard } from "@/features/resume/components/certifications-card"
import { CoreSkillsCard } from "@/features/resume/components/core-skills-card"
import { EducationCard } from "@/features/resume/components/education-card"
import { OrganizationsCard } from "@/features/resume/components/organizations-card"
import { PersonalCard } from "@/features/resume/components/personal-card"

interface SidebarInfoProps {
  className?: string
}

export function SidebarInfo({ className }: SidebarInfoProps) {
  return (
    <div className={cn("space-y-8", className)}>
      <PersonalCard />
      <EducationCard />
      <CoreSkillsCard />
      <CertificationsCard />
      <AchievementsCard />
      <OrganizationsCard />
    </div>
  )
}
