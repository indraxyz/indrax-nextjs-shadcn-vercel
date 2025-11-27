import type {
  ExperienceItem,
  PortfolioItem,
  TechStack,
  PersonalInfo,
  Education,
  Certification,
  Achievement,
  Organization,
} from "@/types"

export const personalInfo: PersonalInfo = {
  name: "Indra Cahya Edytya",
  title: "Fullstack Software Engineer",
  email: "indracahyae@gmail.com",
  phone: "+62 813 3563 0404",
  location: "Surabaya, Indonesia",
  dateOfBirth: "Surabaya, 22 March 1994",
  age: 30,
  gender: "Male",
  status: "Married",
  address: "Kedungturi permai II V-8, Kedungturi, Taman, Sidoarjo, 61257",
  github: "https://github.com/indraxyz",
}

export const bio = `Software engineering is like an inseparable part of my life. I feel alive and always enjoy it. 
I am an adaptive, disciplined, creative, communicative, problem solver and collaborative person. 
As a software engineer, I am an expert in frontend, backend, and project management (web and mobile).`

export const experiences: ExperienceItem[] = [
  {
    period: "Jun 2019 - Present",
    company: "PT Kode Kreatif Digital, Sidoarjo",
    role: "Fullstack Software Engineer",
    description: [
      "Develop web apps and hybrid mobile apps (profile, online store, education, health, finance, custom)",
      "Technologies: TypeScript, Material UI, Tailwind, Ant Design, ReactJS, Redux, NextJS, ExpressJS, Laravel, React Native, MySQL, PostgreSQL, ORM, GitHub, GraphQL, REST API, Web Socket, Golang, Python, Docker, Kubernetes",
    ],
  },
  {
    period: "May 2018 - May 2019",
    company: "Yayasan iik Bhakti Wiyata (partner with PT Sigma Intan Mahakarya), Surabaya",
    role: "Fullstack Software Engineer",
    description: [
      "Built Ners App, school app, canteen app from scratch",
      "Technologies: JavaScript, TypeScript, Material UI, Tailwind, ReactJS, Redux, NextJS, ExpressJS, Laravel, React Native, MySQL, PostgreSQL, GitHub, GraphQL, REST API, Web Socket",
    ],
  },
  {
    period: "Jun 2016 - Apr 2018",
    company: "CV. Indscript Computer, Sidoarjo",
    role: "Fullstack Software Engineer",
    description: [
      "Developed web/android applications based on client requirements",
      "Company profiles, online stores, parking systems, waiting systems, POS, custom solutions",
      "Technologies: Laravel, ExpressJS, ReactJS, Material UI, React Native, MySQL, ORM, GitHub, REST API",
    ],
  },
  {
    period: "Mar 2016 - May 2016",
    company: "CV. Mitra Mia Group, Surabaya",
    role: "Fullstack Web Developer, Team Lead (7 members)",
    description: [
      "Built online shop web for property listings",
      "Technologies: Laravel, jQuery, Bootstrap, MySQL, JSON, GitHub, REST API, VPS Server",
    ],
  },
  {
    period: "Aug 2012 - Feb 2013",
    company: "LPK Mitra Computer, Sidoarjo",
    role: "Technician, Professional Computer Trainer",
    description: ["Microsoft Office, Graphic Design, Technician, Networking"],
  },
]

export const portfolioItems: PortfolioItem[] = [
  {
    title: "WisataApp",
    description:
      "Booking rooms platform. Main features: search property, hotels, available rooms. Web base with TypeScript, NextJS, Tailwind, MaterialUI, REST API",
    year: "2024",
  },
  {
    title: "Spektra",
    description:
      "Project monitoring system. Main features: monitoring progress, register and approvals projects. Web base with NextJS, Tailwind, MaterialUI, EmotionJS, REST API",
    year: "2023",
  },
  {
    title: "Belov",
    description:
      "Correction data system. Main features: manage ticket (detail, attachments, verification, history, delete). Web base using Laravel, MySQL, ReactJS, BulmaCSS",
    year: "2022",
  },
  {
    title: "Parkir",
    description:
      "Parking management system. Main features: auto select location, park entrance and out, tariff and payment, report. Web base using Laravel, Tailwind, MySQL",
    year: "2021",
  },
  {
    title: "Crimenesia",
    description:
      "Crime reporting system between police and society. Main features: crime reporting and crime mapping. Web and android platform using Laravel, MySQL, jQuery, Semantic, NotyJS, ReactJS, React Native",
    year: "2017",
  },
  {
    title: "Github Portfolio",
    description: "My portfolio place and explore code on software development",
    year: "Ongoing",
    link: "https://github.com/indraxyz",
  },
]

export const techSkills = [
  "Cross team collaboration and communication",
  "Adapt to new and different technologies",
  "Analysis of business problems that solved with smart solutions",
  "UI/UX with better journey",
  "Algorithm, OOP, functional, clean and safe code",
  "Data structure, database design",
  "Black box, white box, Unit testing",
  "Solve bottlenecks, fixing errors and bugs",
  "System architecture and security, design pattern",
  "Project management maintaining monitoring improve and documented",
]

export const techStacks: TechStack[] = [
  { category: "Managements", items: "Agile, Scrum, Sprint" },
  { category: "Design", items: "Figma, CorelDraw, Adobe Xd, Ai, Ps, Lr" },
  { category: "Languages", items: "HTML, CSS, Javascript, Typescript, PHP, Python, Go" },
  { category: "Frontend", items: "Material UI, Tailwind, Ant Design, ReactJs, Redux, NextJs" },
  { category: "Backend", items: "NodeJs, ExpressJs, NestJs, Laravel, Web Socket" },
  { category: "Mobile", items: "React Native" },
  {
    category: "Database",
    items: "MySQL, PostgreSQL, MongoDB, ORM (TypeORM, Sequelize, Prisma)",
  },
  { category: "Versioning", items: "Github" },
  { category: "Testing", items: "Jest, Jasmine, Mocha" },
  { category: "Microservices", items: "GraphQL, Rest API, Redis, JSON" },
  { category: "Containers", items: "Docker, Kubernetes" },
  { category: "Cloud", items: "Vercel, AWS Amplify" },
  { category: "Operating System", items: "Windows, Linux, macOS" },
]

export const education: Education[] = [
  {
    degree: "Bachelor Degree (S1)",
    field: "Informatics Engineering",
    institution: "(UNTAG) Universitas 17 Agustus 1945 Surabaya",
    period: "Aug 2013 - Feb 2018",
    gpa: "3.66",
  },
  {
    degree: "Senior High School",
    field: "Natural Sciences Major",
    institution: "SMAN 1 Gedangan, Sidoarjo",
    period: "2009 - 2012",
  },
]

export const certifications: Certification[] = [
  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    period: "Dec 2024",
    link: "https://www.hackerrank.com/certificates/a42dc6068da4",
  },
  {
    title: "Analysts and Developers",
    issuer: "BNSP Certification",
    period: "Mar 2018 - Mar 2021",
  },
  {
    title: "Website application security audit",
    issuer: "ISTTS Institut Sains Terapan & Teknologi Surabaya",
    period: "Apr 2019",
  },
  {
    title: "Building iOT Application with Microcontroller, sensors, web server, mqtt cloud",
    issuer: "INIXINDO",
    period: "Oct 2019",
  },
]

export const achievements: Achievement[] = [
  {
    title: "1st Champion of DANS 2010",
    description: "Duta Anti Narkoba Sidoarjo (DANS) BNNK Sidoarjo",
  },
  {
    title: "8th Best Graduate",
    description: "SMPN 3 Waru (Junior High School)",
  },
]

export const organizations: Organization[] = [
  {
    title: "Vice Chairman of DANS Sidoarjo",
    period: "2010 - 2011",
    description: "Duta Anti Narkoba Sidoarjo (DANS) BNNK Sidoarjo",
  },
  {
    title: "Member of Pencak Silat Merpati Putih",
    period: "2013 - 2015",
    description: "Universitas 17 Agustus 1945 Surabaya",
  },
]

