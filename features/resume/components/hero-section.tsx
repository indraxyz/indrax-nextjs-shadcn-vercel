import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { bio, personalInfo } from "@/features/resume/data/resume"
import { ProfileAvatar } from "@/features/resume/components/profile-avatar"

export function HeroSection() {
  return (
    <Card className="mb-8 overflow-hidden rounded-none border-2 shadow-none">
      <CardContent className="p-8 xl:p-12">
        <div className="flex flex-col gap-10 xl:flex-row xl:items-start">
          <div className="shrink-0 justify-center text-center xl:justify-start">
            <ProfileAvatar src="/foto-profile.jpg" alt={personalInfo.name} fallback="ICE" />
          </div>
          <div className="flex-1 space-y-6 text-center xl:text-left">
            <div className="space-y-2">
              <h1 className="text-4xl font-extrabold uppercase tracking-tighter text-foreground md:text-5xl">
                {personalInfo.name}
              </h1>
              <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground md:text-base">
                {personalInfo.title}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 xl:justify-start">
              {personalInfo.highlightSkills?.map((skill) => (
                <Badge
                  variant="outline"
                  className="border-foreground px-3 py-1 text-xs uppercase tracking-widest text-foreground"
                  key={skill}
                >
                  {skill}
                </Badge>
              ))}
            </div>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-foreground xl:mx-0 md:text-lg">
              {bio}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
