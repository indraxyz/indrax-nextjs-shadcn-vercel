import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeader } from "@/components/resume"
import { Code } from "lucide-react"
import { techStacks } from "@/data/resume"

export function TechStackSection() {
  const groupedStacks = techStacks.reduce((acc, stack) => {
    const group = stack.group || "Other"
    if (!acc[group]) {
      acc[group] = []
    }
    acc[group].push(stack)
    return acc
  }, {} as Record<string, typeof techStacks>)

  return (
    <Card className="rounded-none border-2 shadow-none">
      <CardHeader className="border-b-2 bg-muted/30">
        <SectionHeader icon={<Code className="h-5 w-5" />} title="Tech Stack" />
      </CardHeader>
      <CardContent className="flex overflow-x-auto gap-6 pt-6 pb-6">
        {Object.entries(groupedStacks).map(([groupName, stacks]) => (
          <Card
            key={groupName}
            className="rounded-none border-2 border-t-4 border-t-foreground shadow-none w-[350px] max-w-[85vw] shrink-0 flex flex-col"
          >
            <CardHeader className="pb-4 border-b">
              <CardTitle className="text-base font-extrabold uppercase tracking-tight">{groupName}</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-5 max-h-72 overflow-y-auto">
              {stacks.map((stack) => (
                <div key={`${groupName}-${stack.category}`} className="space-y-1.5">
                  <p className="font-bold text-[10px] text-foreground bg-muted inline-block px-2 py-1 uppercase tracking-widest border border-border">
                    {stack.category}
                  </p>
                  <p className="text-sm font-medium text-foreground leading-relaxed">
                    {stack.items}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  )
}
