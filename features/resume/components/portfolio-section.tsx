import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SOCIAL_LINKS } from "@/features/resume/config"
import { SectionHeader } from "@/features/resume/components/section-header"
import { portfolioItems } from "@/features/resume/data/resume"
import { Code, ExternalLink } from "lucide-react"
import Link from "next/link"

export function PortfolioSection() {
  return (
    <Card className="variant-primary variant-surface bg-[var(--variant-soft)]">
      <CardHeader className="variant-surface-header border-b-2">
        <SectionHeader
          icon={<Code className="h-5 w-5" />}
          title="Portfolio & Projects"
          variant="primary"
          link={{ href: SOCIAL_LINKS.github, textLink: "View My Github" }}
        />
      </CardHeader>
      <CardContent className="flex gap-6 overflow-x-auto pb-6 pt-6">
        {portfolioItems.map((item) => (
          <Card
            key={`${item.title}-${item.year}`}
            className="variant-secondary variant-border flex w-[350px] max-w-[85vw] shrink-0 flex-col bg-[var(--variant-soft)]"
          >
            <CardHeader className="variant-surface-header border-b-2 pb-4">
              <div className="flex items-start justify-between gap-4">
                <CardTitle className="text-base font-black uppercase leading-snug tracking-tight">
                  {item.title}
                </CardTitle>
                {item.link && (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0"
                  >
                    <ExternalLink className="h-4 w-4 text-foreground transition-colors hover:text-[var(--component-variant-secondary-bg)]" />
                  </Link>
                )}
              </div>
            </CardHeader>
            <CardContent className="max-h-72 min-h-72 flex-1 overflow-y-auto pt-4">
              <p className="text-sm font-medium leading-relaxed text-foreground">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  )
}
