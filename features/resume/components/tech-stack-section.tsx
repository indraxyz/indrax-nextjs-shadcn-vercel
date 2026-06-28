import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeader } from "@/features/resume/components/section-header"
import { techStacks } from "@/features/resume/data/resume"
import { Code } from "lucide-react"

const groupedStacks = techStacks.reduce(
  (acc, stack) => {
    const group = stack.group || "Other"
    if (!acc[group]) {
      acc[group] = []
    }
    acc[group].push(stack)
    return acc
  },
  {} as Record<string, typeof techStacks>
)

export function TechStackSection() {
  return (
    <Card className="rounded-none border-2 shadow-none">
      <CardHeader className="border-b-2 bg-muted/30">
        <SectionHeader icon={<Code className="h-5 w-5" />} title="Tech Stack" />
      </CardHeader>
      <CardContent className="flex gap-6 overflow-x-auto pb-6 pt-6">
        {Object.entries(groupedStacks).map(([groupName, stacks]) => (
          <Card
            key={groupName}
            className="flex w-[350px] max-w-[85vw] shrink-0 flex-col rounded-none border-2 border-t-4 border-t-foreground shadow-none"
          >
            <CardHeader className="border-b pb-4">
              <CardTitle className="text-base font-extrabold uppercase tracking-tight">
                {groupName}
              </CardTitle>
            </CardHeader>
            <CardContent className="max-h-72 space-y-5 overflow-y-auto pt-4">
              {stacks.map((stack) => (
                <div key={`${groupName}-${stack.category}`} className="space-y-1.5">
                  <p className="inline-block border border-border bg-muted px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-foreground">
                    {stack.category}
                  </p>
                  <p className="text-sm font-medium leading-relaxed text-foreground">{stack.items}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  )
}
