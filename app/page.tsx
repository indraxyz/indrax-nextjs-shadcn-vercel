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
  Menu,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
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
        <div className="container mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">{RESUME_CONFIG.title}</h1>
            <div className="flex items-center gap-2">
              {/* Mobile Drawer Trigger */}
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="outline" size="icon" className="lg:hidden">
                    <User className="h-5 w-5" />
                    <span className="sr-only">Open personal information</span>
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Personal Information</DrawerTitle>
                    <DrawerDescription>
                      Summary of my personal details, education, and organizations
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="overflow-y-auto px-4 pb-4 space-y-6">
                    {/* Personal Section */}
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

                        <Separator />
                        <InfoItem
                          icon={<Mail className="h-4 w-4" />}
                          label="Email"
                          value={
                            <Link
                              href={SOCIAL_LINKS.email}
                              className="text-sm  hover:text-primary transition-colors"
                            >
                              {personalInfo.email}
                            </Link>
                          }
                        />
                        <Separator />
                        <InfoItem
                          icon={<Phone className="h-4 w-4" />}
                          label="Phone"
                          value={
                            <Link
                              href={SOCIAL_LINKS.phone}
                              className="text-sm  hover:text-primary transition-colors"
                            >
                              {personalInfo.phone}
                            </Link>
                          }
                        />
                        {personalInfo.github && (
                          <>
                            <Separator />
                            <InfoItem
                              icon={<Github className="h-4 w-4" />}
                              label="GitHub"
                              value={
                                <Link
                                  href={personalInfo.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm  hover:text-primary transition-colors"
                                >
                                  github.com/indraxyz
                                </Link>
                              }
                            />
                          </>
                        )}
                        {personalInfo.website && (
                          <>
                            <Separator />
                            <InfoItem
                              icon={<Globe className="h-4 w-4" />}
                              label="Website Link"
                              value={
                                <Link
                                  href={personalInfo.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm  hover:text-primary transition-colors"
                                >
                                  {personalInfo.website}
                                </Link>
                              }
                            />
                          </>
                        )}
                      </CardContent>
                    </Card>

                    {/* Education Section */}
                    <Card>
                      <CardHeader>
                        <SectionHeader
                          icon={<GraduationCap className="h-5 w-5" />}
                          title="Education"
                        />
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
                                <p className="text-xs font-semibold text-foreground mb-1">
                                  Thesis:
                                </p>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {edu.thesis}
                                </p>
                              </div>
                            )}
                            {edu.organization && edu.organization.length > 0 && (
                              <div>
                                <p className="text-xs font-semibold text-foreground mb-1">
                                  Organizations:
                                </p>
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

                    {/* Organizations */}
                    {organizations.length > 0 && (
                      <Card>
                        <CardHeader>
                          <SectionHeader
                            icon={<Users className="h-5 w-5" />}
                            title="Organizations"
                          />
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
                  <DrawerFooter>
                    <DrawerClose asChild>
                      <Button variant="outline">Close</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
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
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-8 xl:py-12 print:py-4">
        {/* Hero Section */}
        <Card className="mb-8 overflow-hidden border-2 shadow-lg print:shadow-none">
          <CardContent className="p-6 xl:p-8">
            <div className="flex flex-col gap-8 xl:flex-row xl:items-start">
              <div className="flex justify-center xl:justify-start">
                <ProfileAvatar src="/foto-profile.jpg" alt={personalInfo.name} fallback="ICE" />
              </div>
              <div className="flex-1 space-y-4 text-center xl:text-left">
                <div>
                  <h1 className="text-xl font-bold bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    {personalInfo.name}
                  </h1>
                  <p className="mt-2 text-sm font-medium text-muted-foreground">
                    {personalInfo.title}
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-2 xl:justify-start">
                  {personalInfo.highlightSkills?.map((skill, i) => (
                    <Badge variant="secondary" className="text-xs" key={i}>
                      {skill}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground ">{bio}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8 col-span-1">
            {/* Experiences Section */}
            <Card>
              <CardHeader>
                <SectionHeader
                  icon={<Briefcase className="h-5 w-5" />}
                  title="Professional Experience"
                />
              </CardHeader>
              <CardContent>
                {/* Desktop Timeline View */}
                <div className="hidden xl:block">
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
                </div>
                {/* Mobile Horizontal Scroll View */}
                <div className="flex overflow-x-auto xl:hidden gap-4 pb-4">
                  {experiences.map((exp, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-md transition-all duration-200 border-l-4 border-l-primary max-w-96 shrink-0"
                    >
                      <CardHeader className="pb-3">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <p className="text-xs font-semibold text-primary uppercase tracking-wide">
                            {exp.period}
                          </p>
                          <Badge variant="outline" className="text-xs">
                            {exp.role}
                          </Badge>
                        </div>
                        <CardTitle className="text-base">{exp.company}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <ul className="list-disc list-inside space-y-1.5 text-sm text-muted-foreground ml-2">
                          {exp.description.map((desc, i) => (
                            <li key={i} className="leading-relaxed">
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

            {/* Portfolio Section */}
            <Card>
              <CardHeader>
                <SectionHeader
                  icon={<Code className="h-5 w-5" />}
                  title="Portfolio & Projects"
                  link={{ href: SOCIAL_LINKS.github, textLink: "View My Github" }}
                />
              </CardHeader>
              <CardContent className="flex overflow-x-auto xl:grid xl:grid-cols-3 gap-4">
                {/* <div className="flex xl:flex-nowrap gap-4 "> */}
                {portfolioItems.map((item, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-md transition-all duration-200 border-l-4 border-l-primary max-w-96 shrink-0"
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
                {/* </div> */}
              </CardContent>
            </Card>

            {/* Tech Stacks */}
            <Card>
              <CardHeader>
                <SectionHeader icon={<Code className="h-5 w-5" />} title="Tech Stack" />
              </CardHeader>
              <CardContent className="flex overflow-x-auto xl:grid xl:grid-cols-3 gap-4">
                {/* <div className="flex flex-nowrap gap-4 "> */}
                {Object.entries(
                  techStacks.reduce((acc, stack) => {
                    const group = stack.group || "Other"
                    if (!acc[group]) {
                      acc[group] = []
                    }
                    acc[group].push(stack)
                    return acc
                  }, {} as Record<string, typeof techStacks>)
                ).map(([groupName, stacks]) => (
                  <Card
                    key={groupName}
                    className="hover:shadow-md transition-all duration-200 border-l-4 border-l-primary w-96 xl:w-full shrink-0"
                  >
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base mb-2">{groupName}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 space-y-4">
                      {stacks.map((stack, index) => (
                        <div key={index} className="space-y-1">
                          <p className="font-semibold text-xs text-primary">{stack.category}</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {stack.items}
                          </p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                ))}
                {/* </div> */}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8 hidden lg:block">
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
            by Indra • updated at {getCurrentDateFormatted()}
          </p>
        </div>
      </div>
    </div>
  )
}
