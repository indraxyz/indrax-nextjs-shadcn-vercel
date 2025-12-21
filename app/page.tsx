"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Timeline, TimelineItem, TimelineContent } from "@/components/ui/timeline"
import { InfoItem, SectionHeader, ProfileAvatar } from "@/components/resume"
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  GraduationCap,
  Briefcase,
  Code,
  Award,
  Users,
  ExternalLink,
  Github,
  Download,
  UserSearch,
  Globe,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  personalInfo,
  bio,
  experiences,
  portfolioItems,
  techSkills,
  techStacks,
  education,
  certifications,
  achievements,
  organizations,
} from "@/data/resume"
import { RESUME_CONFIG, SOCIAL_LINKS } from "@/constants"
import { getCurrentDateFormatted } from "@/lib/utils"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Header with Print Button */}
      <div className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">{RESUME_CONFIG.title}</h1>
            {/* <Button
              variant="outline"
              size="sm"
              onClick={() => window.print()}
              className="hidden print:hidden"
            >
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button> */}
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-8 md:py-12 print:py-4">
        {/* Hero Section */}
        <Card className="mb-8 overflow-hidden border-2 shadow-lg print:shadow-none">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col gap-8 md:flex-row md:items-start">
              <div className="flex justify-center md:justify-start">
                <ProfileAvatar src="/foto-profile.jpg" alt={personalInfo.name} fallback="ICE" />
              </div>
              <div className="flex-1 space-y-4 text-center md:text-left">
                <div>
                  <h1 className="text-3xl font-bold md:text-4xl bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    {personalInfo.name}
                  </h1>
                  <p className="mt-2 text-xl font-medium text-muted-foreground">
                    {personalInfo.title}
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                  {personalInfo.highlightSkills?.map((skill, i) => (
                    <Badge variant="secondary" className="text-xs" key={i}>
                      {skill}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground ">{bio}</p>
                <div className="flex flex-wrap justify-center gap-4 md:justify-start pt-2">
                  <Link
                    href={SOCIAL_LINKS.email}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span>{personalInfo.email}</span>
                  </Link>
                  <Link
                    href={SOCIAL_LINKS.phone}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span>{personalInfo.phone}</span>
                  </Link>
                  {personalInfo.github && (
                    <Link
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      <span>github.com/indraxyz</span>
                    </Link>
                  )}
                  {personalInfo.website && (
                    <Link
                      href={personalInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Globe className="h-4 w-4" />
                      <span>{personalInfo.website}</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experiences Section */}
            <Card>
              <CardHeader>
                <SectionHeader
                  icon={<Briefcase className="h-5 w-5" />}
                  title="Professional Experience"
                />
              </CardHeader>
              <CardContent>
                <Timeline>
                  {experiences.map((exp, index) => (
                    <TimelineItem key={index} isLast={index === experiences.length - 1}>
                      <TimelineContent>
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="text-xs font-semibold text-primary uppercase tracking-wide">
                              {exp.period}
                            </p>
                            <Badge variant="outline" className="text-xs">
                              {exp.role}
                            </Badge>
                          </div>
                          <h3 className="text-lg font-bold">{exp.company}</h3>
                          <ul className="list-disc list-inside space-y-1.5 text-sm text-muted-foreground ml-2">
                            {exp.description.map((desc, i) => (
                              <li key={i} className="leading-relaxed">
                                {desc}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </Timeline>
              </CardContent>
            </Card>

            {/* Portfolio Section */}
            <Card>
              <CardHeader>
                <SectionHeader icon={<Code className="h-5 w-5" />} title="Portfolio & Projects" />
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {portfolioItems.map((item, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-md transition-all duration-200 border-l-4 border-l-primary"
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-base mb-1">{item.title}</CardTitle>
                            <CardDescription className="text-xs">{item.year}</CardDescription>
                          </div>
                          {item.link && (
                            <Link href={item.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                            </Link>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tech Stacks */}
            <Card>
              <CardHeader>
                <SectionHeader icon={<Code className="h-5 w-5" />} title="Tech Stack" />
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {techStacks.map((stack, index) => (
                    <div key={index}>
                      <p className="font-semibold text-xs mb-1">{stack.category}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{stack.items}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Identity Section */}
            <Card>
              <CardHeader>
                <SectionHeader icon={<User className="h-5 w-5" />} title="Personal" />
              </CardHeader>
              <CardContent className="space-y-1">
                <InfoItem
                  icon={<User className="h-4 w-4" />}
                  label="Name"
                  value={`${personalInfo.name} S.Kom`}
                />
                <Separator />
                <InfoItem
                  icon={<Calendar className="h-4 w-4" />}
                  label="Date of Birth"
                  value={personalInfo.dateOfBirth}
                />
                <Separator />
                <InfoItem
                  icon={<UserSearch className="h-4 w-4" />}
                  label="Age/ Gender/ Status"
                  value={`${personalInfo.age} years / ${personalInfo.gender} / ${personalInfo.status}`}
                />
                <Separator />
                <InfoItem
                  icon={<MapPin className="h-4 w-4" />}
                  label="Address"
                  value={personalInfo.address}
                />
              </CardContent>
            </Card>

            {/* Education Section */}
            <Card>
              <CardHeader>
                <SectionHeader icon={<GraduationCap className="h-5 w-5" />} title="Education" />
              </CardHeader>
              <CardContent className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="space-y-3">
                    <div>
                      <p className="font-semibold text-sm mb-1">{edu.degree}</p>
                      <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground mb-1">{edu.field}</p>
                      <p className="text-xs text-primary font-medium mt-1">
                        {edu.period}
                        {edu.gpa && ` • GPA: ${edu.gpa}`}
                      </p>
                    </div>
                    {edu.thesis && (
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Thesis:</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {edu.thesis}
                        </p>
                      </div>
                    )}
                    {edu.organization && edu.organization.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-1">Organizations:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                          {edu.organization.map((org, i) => (
                            <li key={i}>{org}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {edu.description && (
                      <div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    )}
                    {index < education.length - 1 && <Separator className="mt-4" />}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Tech Skills */}
            <Card>
              <CardHeader>
                <SectionHeader icon={<Award className="h-5 w-5" />} title="Core Skills" />
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {techSkills.map((skill, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-sm leading-relaxed">{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card>
              <CardHeader>
                <SectionHeader icon={<Award className="h-5 w-5" />} title="Certifications" />
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index}>
                      <p className="font-semibold text-sm mb-1">{cert.title}</p>
                      <p className="text-xs text-muted-foreground mb-1">{cert.issuer}</p>
                      {cert.link && (
                        <Link
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-primary hover:underline flex items-center gap-1"
                        >
                          View Certificate <ExternalLink className="h-3 w-3" />
                        </Link>
                      )}
                      <p className="text-xs text-muted-foreground mt-1">{cert.period}</p>
                      {index < certifications.length - 1 && <Separator className="mt-3" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <SectionHeader icon={<Award className="h-5 w-5" />} title="Achievements" />
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index}>
                      <p className="font-semibold text-sm">{achievement.title}</p>
                      <p className="text-xs text-muted-foreground">{achievement.description}</p>
                      {index < achievements.length - 1 && <Separator className="mt-3" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Organizations */}
            {organizations.length > 0 && (
              <Card>
                <CardHeader>
                  <SectionHeader icon={<Users className="h-5 w-5" />} title="Organizations" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {organizations.map((org, index) => (
                      <div key={index}>
                        <p className="font-semibold text-sm">{org.title}</p>
                        {org.description && (
                          <p className="text-xs text-muted-foreground">{org.description}</p>
                        )}
                        <p className="text-xs text-muted-foreground">{org.period}</p>
                        {index < organizations.length - 1 && <Separator className="mt-3" />}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-8 mt-8 border-t">
          <p className="text-sm text-muted-foreground">
            Made with ❤️ by {personalInfo.name} • Last updated: {getCurrentDateFormatted()}
          </p>
        </div>
      </div>
    </div>
  )
}
