import { RESUME_CONFIG } from "@/features/resume/config"
import { ExperienceSection } from "@/features/resume/components/experience-section"
import { HeroSection } from "@/features/resume/components/hero-section"
import { PersonalInfoDrawer } from "@/features/resume/components/personal-info-drawer"
import { PortfolioSection } from "@/features/resume/components/portfolio-section"
import { TechStackSection } from "@/features/resume/components/tech-stack-section"
import { getCurrentDateFormatted } from "@/lib/utils"

export function ResumePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-50 border-b-2 border-foreground bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-extrabold uppercase tracking-tight">
              {RESUME_CONFIG.title}
            </h1>
            <div className="flex items-center gap-2">
              <PersonalInfoDrawer />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-12 print:py-4 xl:py-16">
        <HeroSection />

        <div className="space-y-8">
          <ExperienceSection />
          <PortfolioSection />
          <TechStackSection />
        </div>

        <div className="mt-12 border-t-2 border-foreground py-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            by Indra • updated at {getCurrentDateFormatted()}
          </p>
        </div>
      </div>
    </div>
  )
}
