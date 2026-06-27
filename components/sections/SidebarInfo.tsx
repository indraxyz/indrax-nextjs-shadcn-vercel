import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { InfoItem, SectionHeader } from "@/components/resume"
import {
  User,
  Calendar,
  UserSearch,
  MapPin,
  GraduationCap,
  Award,
  Users,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"
import {
  personalInfo,
  education,
  techSkills,
  certifications,
  achievements,
  organizations,
} from "@/data/resume"

interface SidebarInfoProps {
  className?: string
}

function getCurrentAge(birthDate?: string, fallbackAge?: number) {
  if (!birthDate) return fallbackAge

  const today = new Date()
  const birth = new Date(birthDate)
  let age = today.getFullYear() - birth.getFullYear()
  const monthDiff = today.getMonth() - birth.getMonth()

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age -= 1
  }

  return age
}

export function SidebarInfo({ className }: SidebarInfoProps) {
  const currentAge = getCurrentAge(personalInfo.birthDate, personalInfo.age)

  return (
    <div className={className}>
      {/* Identity Section */}
      <Card className="rounded-none border-2 shadow-none">
        <CardHeader className="border-b-2 bg-muted/30">
          <SectionHeader icon={<User className="h-5 w-5" />} title="Personal" />
        </CardHeader>
        <CardContent className="space-y-1 pt-6">
          <InfoItem
            icon={<User className="h-4 w-4" />}
            label="Name"
            value={`${personalInfo.name}`}
          />
          <Separator className="my-2" />
          <InfoItem
            icon={<Calendar className="h-4 w-4" />}
            label="Date of Birth"
            value={personalInfo.dateOfBirth}
          />
          <Separator className="my-2" />
          <InfoItem
            icon={<UserSearch className="h-4 w-4" />}
            label="Age/ Gender/ Status"
            value={`${currentAge} years / ${personalInfo.gender} / ${personalInfo.status}`}
          />
          <Separator className="my-2" />
          <InfoItem
            icon={<MapPin className="h-4 w-4" />}
            label="Address"
            value={personalInfo.address}
          />
        </CardContent>
      </Card>

      {/* Education Section */}
      <Card className="rounded-none border-2 shadow-none">
        <CardHeader className="border-b-2 bg-muted/30">
          <SectionHeader icon={<GraduationCap className="h-5 w-5" />} title="Education" />
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          {education.map((edu, index) => (
            <div key={`${edu.institution}-${edu.period}`} className="space-y-3">
              <div>
                <p className="font-bold text-sm uppercase tracking-wider mb-1">{edu.degree}</p>
                <p className="text-sm font-medium">{edu.institution}</p>
                <p className="text-sm text-muted-foreground mb-1">{edu.field}</p>
                <p className="text-xs text-foreground font-bold mt-1 bg-muted inline-block px-2 py-1">
                  {edu.period}
                  {edu.gpa && ` • GPA: ${edu.gpa}`}
                </p>
              </div>
              {edu.thesis && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-1">Thesis:</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{edu.thesis}</p>
                </div>
              )}
              {edu.organization && edu.organization.length > 0 && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-1">Organizations:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                    {edu.organization.map((org) => (
                      <li key={org}>{org}</li>
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
      <Card className="rounded-none border-2 shadow-none">
        <CardHeader className="border-b-2 bg-muted/30">
          <SectionHeader icon={<Award className="h-5 w-5" />} title="Core Skills" />
        </CardHeader>
        <CardContent className="pt-6">
          <ul className="space-y-3">
            {techSkills.map((skill) => (
              <li key={skill} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 bg-foreground shrink-0" />
                <span className="text-sm font-medium leading-relaxed">{skill}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Certifications */}
      <Card className="rounded-none border-2 shadow-none">
        <CardHeader className="border-b-2 bg-muted/30">
          <SectionHeader icon={<Award className="h-5 w-5" />} title="Certifications" />
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div key={`${cert.title}-${cert.period}`}>
                <p className="font-bold text-sm leading-tight mb-1">{cert.title}</p>
                <p className="text-xs font-medium text-muted-foreground mb-1">{cert.issuer}</p>
                {cert.link && (
                  <Link
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold hover:underline flex items-center gap-1 uppercase tracking-wider"
                  >
                    View Certificate <ExternalLink className="h-3 w-3" />
                  </Link>
                )}
                <p className="text-xs text-foreground font-bold mt-2 bg-muted inline-block px-2 py-1">{cert.period}</p>
                {index < certifications.length - 1 && <Separator className="mt-4" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card className="rounded-none border-2 shadow-none">
        <CardHeader className="border-b-2 bg-muted/30">
          <SectionHeader icon={<Award className="h-5 w-5" />} title="Achievements" />
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <div key={achievement.title}>
                <p className="font-bold text-sm leading-tight mb-1">{achievement.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{achievement.description}</p>
                {index < achievements.length - 1 && <Separator className="mt-4" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Organizations */}
      {organizations.length > 0 && (
        <Card className="rounded-none border-2 shadow-none">
          <CardHeader className="border-b-2 bg-muted/30">
            <SectionHeader icon={<Users className="h-5 w-5" />} title="Organizations" />
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              {organizations.map((org, index) => (
                <div key={`${org.title}-${org.period}`}>
                  <p className="font-bold text-sm leading-tight mb-1">{org.title}</p>
                  {org.description && (
                    <p className="text-xs text-muted-foreground leading-relaxed mb-1">{org.description}</p>
                  )}
                  <p className="text-xs text-foreground font-bold mt-2 bg-muted inline-block px-2 py-1">{org.period}</p>
                  {index < organizations.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
