import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Timeline, TimelineContent, TimelineItem } from "@/components/ui/timeline"
import { experiences } from "@/features/resume/data/resume"
import { SectionHeader } from "@/features/resume/components/section-header"
import { Briefcase } from "lucide-react"

function ExperienceDetails({ company, period, timing, role, description }: (typeof experiences)[number]) {
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-3">
        <p className="border border-border bg-muted px-2 py-1 text-xs font-bold uppercase tracking-widest text-foreground">
          {period}
        </p>
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          ({timing})
        </span>
        <Badge
          variant="outline"
          className="rounded-none border-foreground px-2 text-xs uppercase tracking-wider"
        >
          {role}
        </Badge>
      </div>
      <h3 className="text-xl font-extrabold uppercase tracking-tight">{company}</h3>
      <ul className="ml-4 list-outside list-disc space-y-2 text-sm text-foreground">
        {description.map((item) => (
          <li key={item} className="leading-relaxed font-medium">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ExperienceSection() {
  return (
    <Card className="rounded-none border-2 shadow-none">
      <CardHeader className="border-b-2 bg-muted/30">
        <SectionHeader icon={<Briefcase className="h-5 w-5" />} title="Professional Experience" />
      </CardHeader>
      <CardContent className="pt-8">
        <div className="hidden max-h-[1250px] overflow-y-auto pr-4 xl:block">
          <Timeline>
            {experiences.map((experience, index) => (
              <TimelineItem
                key={`${experience.company}-${experience.period}`}
                isLast={index === experiences.length - 1}
              >
                <TimelineContent>
                  <ExperienceDetails {...experience} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 xl:hidden">
          {experiences.map((experience) => (
            <Card
              key={`${experience.company}-${experience.period}`}
              className="max-w-96 shrink-0 rounded-none border-2 border-t-4 border-t-foreground shadow-none"
            >
              <CardHeader className="border-b-2 bg-muted/30 pb-4">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <p className="border border-border bg-muted px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-foreground">
                    {experience.period}
                  </p>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    ({experience.timing})
                  </span>
                </div>
                <Badge
                  variant="outline"
                  className="mb-2 w-fit rounded-none border-foreground px-2 text-[10px] uppercase tracking-wider"
                >
                  {experience.role}
                </Badge>
                <CardTitle className="text-lg font-extrabold uppercase tracking-tight">
                  {experience.company}
                </CardTitle>
              </CardHeader>
              <CardContent className="max-h-72 overflow-y-auto pt-4">
                <ul className="ml-4 list-outside list-disc space-y-2 text-sm text-foreground">
                  {experience.description.map((item) => (
                    <li key={item} className="leading-relaxed font-medium">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
