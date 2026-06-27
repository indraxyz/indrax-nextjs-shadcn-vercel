import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ProfileAvatar } from "@/components/resume"
import { personalInfo, bio } from "@/data/resume"

export function HeroSection() {
  return (
    <Card className="mb-8 overflow-hidden border-2 shadow-none rounded-none">
      <CardContent className="p-8 xl:p-12">
        <div className="flex flex-col gap-10 xl:flex-row xl:items-start">
          <div className="flex justify-center xl:justify-start shrink-0">
            <ProfileAvatar src="/foto-profile.jpg" alt={personalInfo.name} fallback="ICE" />
          </div>
          <div className="flex-1 space-y-6 text-center xl:text-left">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tighter text-foreground">
                {personalInfo.name}
              </h1>
              <p className="text-sm md:text-base font-semibold uppercase tracking-widest text-muted-foreground">
                {personalInfo.title}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 xl:justify-start">
              {personalInfo.highlightSkills?.map((skill) => (
                <Badge variant="outline" className="text-xs uppercase tracking-widest px-3 py-1 border-foreground text-foreground" key={skill}>
                  {skill}
                </Badge>
              ))}
            </div>
            <p className="text-base md:text-lg leading-relaxed text-foreground max-w-3xl mx-auto xl:mx-0 font-medium">
              {bio}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
