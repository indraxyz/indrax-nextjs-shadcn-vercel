import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Timeline, TimelineItem, TimelineContent } from "@/components/ui/timeline"
import { SectionHeader } from "@/components/resume"
import { Briefcase } from "lucide-react"
import { experiences } from "@/data/resume"

export function ExperienceSection() {
  return (
    <Card className="rounded-none border-2 shadow-none">
      <CardHeader className="border-b-2 bg-muted/30">
        <SectionHeader
          icon={<Briefcase className="h-5 w-5" />}
          title="Professional Experience"
        />
      </CardHeader>
      <CardContent className="pt-8">
        {/* Desktop Timeline View */}
        <div className="hidden xl:block max-h-[1250px] overflow-y-auto pr-4">
          <Timeline>
            {experiences.map((exp, index) => (
              <TimelineItem key={index} isLast={index === experiences.length - 1}>
                <TimelineContent>
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="text-xs font-bold text-foreground bg-muted px-2 py-1 uppercase tracking-widest border border-border">
                        {exp.period}
                      </p>
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">({exp.timing})</span>
                      <Badge variant="outline" className="text-xs uppercase tracking-wider rounded-none px-2 border-foreground">
                        {exp.role}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-extrabold uppercase tracking-tight">{exp.company}</h3>
                    <ul className="list-disc list-outside space-y-2 text-sm text-foreground ml-4">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="leading-relaxed font-medium">
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
        {/* Mobile Horizontal Scroll View */}
        <div className="flex overflow-x-auto xl:hidden gap-6 pb-4">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="rounded-none border-2 border-t-4 border-t-foreground max-w-96 shrink-0 shadow-none"
            >
              <CardHeader className="pb-4 border-b-2 bg-muted/30">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <p className="text-[10px] font-bold text-foreground bg-muted px-2 py-1 uppercase tracking-widest border border-border">
                    {exp.period}
                  </p>
                  <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">({exp.timing})</span>
                </div>
                <Badge variant="outline" className="text-[10px] uppercase tracking-wider rounded-none px-2 border-foreground w-fit mb-2">
                  {exp.role}
                </Badge>
                <CardTitle className="text-lg font-extrabold uppercase tracking-tight">{exp.company}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 max-h-72 overflow-y-auto">
                <ul className="list-disc list-outside space-y-2 text-sm text-foreground ml-4">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="leading-relaxed font-medium">
                      {desc}
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
