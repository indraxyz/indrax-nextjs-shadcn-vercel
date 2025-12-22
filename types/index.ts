export interface ExperienceItem {
  period: string
  company: string
  role: string
  description: string[]
}

export interface PortfolioItem {
  title: string
  description: string
  year: string
  link?: string
}

export interface TechStack {
  category: string
  items: string
  group?: string
}

export interface SkillSets {
  role:
    | "backend"
    | "frontend"
    | "fullstack"
    | "mobile"
    | "database"
    | "devops"
    | "cloud"
    | "testing"
    | "other"
  name: string
  skills: string[]
}
export interface PersonalInfo {
  name: string
  title: string
  email: string
  phone: string
  location: string
  dateOfBirth: string
  age: number
  gender: string
  status: string
  address: string
  github?: string
  linkedin?: string
  skillSets?: SkillSets[]
  highlightSkills?: string[]
  website?: string
}

export interface Education {
  degree: string
  field: string
  institution: string
  period: string
  gpa?: string
  thesis?: string
  description?: string
  organization?: string[]
}

export interface Certification {
  title: string
  issuer: string
  period: string
  link?: string
}

export interface Achievement {
  title: string
  description: string
  year?: string
}

export interface Organization {
  title: string
  role?: string
  period: string
  description?: string
}
