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
  name: "Indra Cahya E S.Kom",
  title: "Senior Software Engineer",
  email: "indracahyae@gmail.com",
  phone: "+62 813 3563 0404",
  location: "Surabaya, Indonesia",
  dateOfBirth: "Surabaya, 22 March 1994",
  age: 30,
  gender: "Male",
  status: "Married",
  address: "Kebo Iwa, Bali, Indonesia",
  github: "https://github.com/indraxyz",
  highlightSkills: [
    "Vercel/ AWS/ Cloudflare",
    "Honojs/ Laravel",
    "Fullstack, Serverless",
    "TypeScript",
    "Next.js/ Remix/ Preact",
    "GraphQL, WebSocket, Crypto",
    "Prisma/ Drizzle",
    "MySQL/ Postgre/ MongoDB",
    "Tailwind/ Shadcn/ Tamagui",
    "Turbopack/ Vite",
    "Tanstack, Rxjs, Mapbox, Swiper, Onborda",
    "Redux/ Zustand/ Context",
    "GSAP/ Framer Motion",
    "Echarts/ Recharts",
    "JWT/ Better-auth",
    "Vibe coding, Cursor, LLM",
    "Notion, Github",
    "Stripe/ Midtrans",
    "Figma, Eraser, Miro",
    "Jest, Vitest",
  ],
}

export const bio = `A seasoned Software Engineer with extensive expertise in building scalable applications. 
I specialize in modern technologies, delivering high-quality solutions that solve complex business challenges. 
With a proven track record in full-stack development, system architecture, and project management, I bring a comprehensive approach to software engineering that combines technical excellence with strategic thinking.`

export const experiences: ExperienceItem[] = [
  {
    period: "Apr 2025 - Present",
    company: "Primuse, Bali",
    role: "Senior Software Engineer",
    description: [
      "Core team of Kisum App",
      "Technologies: TypeScript, NextJS, Tailwind, Shadcn, GraphQL, WebSocket, REST API, Vercel, AWS, Cloudflare, Redux/ Zustand/ Context, Tanstack, Mapbox, Swiper, Onborda, Echarts, Recharts, JWT, Stripe, Figma, Jest, docker, github, Turbopack, MongoDB, Aws/ Cloudflare",
    ],
  },
  {
    period: "Jun 2019 - Mar 2025",
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
    title: "Students",
    description:
      "fullstack application built with Next.js 16, MongoDB, and GraphQL using Apollo Server and Client. feature-based architecture for optimal maintainability and scalability.",
    year: "2025",
  },
  {
    title: "Calculator",
    description:
      "beautiful, secure that built with React 19, TypeScript, Vite, Tailwind CSS v4, and React Router v7. This calculator combines modern design with robust security measures, excellent user experience, optimized code architecture.",
    year: "2025",
  },
  {
    title: "Pokemon",
    description:
      "search about pokemons that built with typescript, nextJs, material ui, tailwind, pokemon api v2.",
    year: "2025",
  },
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
  "Cross-functional team collaboration and effective communication",
  "Rapid adaptation to emerging technologies and frameworks",
  "Business problem analysis with innovative technical solutions",
  "User-centered design and seamless UX journey optimization",
  "Advanced algorithms, OOP principles, functional programming, and clean code practices",
  "Data structures, database architecture, and schema design",
  "Comprehensive testing strategies: black box, white box, and unit testing",
  "Performance optimization, bottleneck resolution, and debugging expertise",
  "System architecture design, security implementation, and design patterns",
  "End-to-end project management: planning, monitoring, optimization, and documentation",
]

export const techStacks: TechStack[] = [
  { category: "Cloud & Hosting", items: "Vercel, AWS, Cloudflare" },
  { category: "Backend Frameworks", items: "Hono.js, Laravel" },
  { category: "Development Type", items: "Fullstack, Serverless" },
  { category: "Languages", items: "TypeScript" },
  { category: "Frontend Frameworks", items: "Next.js, Remix, Preact" },
  { category: "APIs & Real-time", items: "GraphQL, WebSocket, Crypto" },
  { category: "ORM & Database Tools", items: "Prisma, Drizzle" },
  { category: "Databases", items: "MySQL, PostgreSQL, MongoDB" },
  { category: "UI Libraries & Styling", items: "Tailwind, Shadcn, Tamagui" },
  { category: "Build Tools", items: "Turbopack, Vite" },
  { category: "Libraries", items: "Tanstack, Rxjs, Mapbox, Swiper, Onborda" },
  { category: "State Management", items: "Redux, Zustand, Context" },
  { category: "Animation", items: "GSAP, Framer Motion" },
  { category: "Data Visualization", items: "Echarts, Recharts" },
  { category: "Authentication", items: "JWT, Better-auth" },
  { category: "Development Tools", items: "Vibe coding, Cursor, LLM" },
  { category: "Collaboration & Versioning", items: "Notion, Github" },
  { category: "Payment Integration", items: "Stripe, Midtrans" },
  { category: "Design Tools", items: "Figma, Eraser, Miro" },
  { category: "Testing", items: "Jest, Vitest" },
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
