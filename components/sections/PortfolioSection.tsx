import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeader } from "@/components/resume"
import { Code, ExternalLink } from "lucide-react"
import Link from "next/link"
import { portfolioItems } from "@/data/resume"
import { SOCIAL_LINKS } from "@/constants"

export function PortfolioSection() {
  return (
    <Card className="rounded-none border-2 shadow-none">
      <CardHeader className="border-b-2 bg-muted/30">
        <SectionHeader
          icon={<Code className="h-5 w-5" />}
          title="Portfolio & Projects"
          link={{ href: SOCIAL_LINKS.github, textLink: "View My Github" }}
        />
      </CardHeader>
      <CardContent className="flex overflow-x-auto gap-6 pt-6 pb-6">
        {portfolioItems.map((item) => (
          <Card
            key={`${item.title}-${item.year}`}
            className="rounded-none border-2 border-t-4 border-t-foreground w-[350px] max-w-[85vw] shrink-0 shadow-none flex flex-col"
          >
            <CardHeader className="pb-4 border-b">
              <div className="flex items-start justify-between gap-4">
                <CardTitle className="text-base font-extrabold uppercase tracking-tight leading-snug">
                  {item.title}
                </CardTitle>
                {item.link && (
                  <Link href={item.link} target="_blank" rel="noopener noreferrer" className="shrink-0">
                    <ExternalLink className="h-4 w-4 text-foreground hover:text-muted-foreground transition-colors" />
                  </Link>
                )}
              </div>
            </CardHeader>
            <CardContent className="pt-4 flex-1 max-h-[300px] overflow-y-auto">
              <p className="text-sm font-medium text-foreground leading-relaxed">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  )
}
