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
  title: "Senior Software Engineer (Frontend, Fullstack)",
  email: "indracahyae@gmail.com",
  phone: "+62 813 3563 0404",
  location: "Surabaya, Indonesia",
  dateOfBirth: "Surabaya, 22 March 1994",
  age: 30,
  gender: "Male",
  status: "Married",
  address: "Kebo Iwa, Bali, Indonesia",
  github: "https://github.com/indraxyz",
  website: "https://indrax.my.id",
  highlightSkills: [
    "Vercel/ AWS/ Cloudflare",
    "Express/ Honojs/ Laravel",
    "Fullstack, Serverless",
    "TypeScript",
    "Next.js/ Remix/ Preact",
    "GraphQL, WebSocket, Crypto",
    "Prisma/ Drizzle",
    "MySQL/ Postgre/ MongoDB",
    "Tailwind/ Shadcn/ Tamagui",
    "Turbopack/ Vite/ Turborepo",
    "Tanstack, Rxjs, Mapbox, Swiper, Onborda",
    "Redux/ Zustand/ Context",
    "GSAP/ Framer Motion",
    "Echarts/ Recharts",
    "JWT/ Better-auth",
    "Vibe coding, Cursor, LLM, Gemini, n8n",
    "Notion, Github",
    "Stripe/ Midtrans",
    "Figma, Eraser",
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
    role: "Senior Software Engineer (Frontend, Fullstack)",
    description: [
      "Core team of Kisum App, development from inception, to production with a focus on architecture, scalable systems with best UI/UX and multi-tenant. Key modules developed include Artists, AI (Chat, Prediction), News, Events & Financials, Festivals, Venues, Vendors, and Market.",
      "Technologies: TypeScript, NextJs, UiUx (Tailwind & Shadcn, Redux/ Zustand/ Context, Tanstack, Mapbox, Swiper, Onborda, Echarts/ Recharts, Figma, Axios, Async, Hooks, React-hook-form, Zod ), GraphQL, WebSocket, REST API, JWT, Stripe, Figma, Jest, docker, github, Turbopack, MongoDB & PostgreSQL, Redis, Aws & Cloudflare, microservices, serverless (Lambda, Cloudflare Workers), express, Web Socket, Crypto, Stripe Payment Gateway, Github, Collaboration (Github Project, Teams, Zoom, Microsoft Cloud), Ai (gemini, n8n)",
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
  {
    group: "Core Development",
    category: "Languages",
    items: "TypeScript, Go, JavaScript, Python, PHP, SQL, NoSQL",
  },
  {
    group: "Core Development",
    category: "Backend Frameworks",
    items: "Hono.js, GoFiber, Laravel, Express",
  },
  {
    group: "Core Development",
    category: "Frontend Frameworks",
    items: "Next.js, Remix React-Router, Preact",
  },
  {
    group: "Core Development",
    category: "Software Architecture",
    items:
      "Microservice, Monolith, Service Oriented, Event-driven, Serverless, Microkernel, Monorepo",
  },
  {
    group: "Infrastructure & DevOps",
    category: "Deployment",
    items: "Vercel, AWS, Cloudflare",
  },
  {
    group: "Infrastructure & DevOps",
    category: "Containerization",
    items: "Docker",
  },
  {
    group: "Infrastructure & DevOps",
    category: "Serverless Functions",
    items: "AWS Lambda, Cloudflare Workers, Vercel Function",
  },
  {
    group: "Database & Storage",
    category: "Databases",
    items: "PostgreSQL, MySQL, MongoDB, Supabase, Firebase, Neon",
  },
  {
    group: "Database & Storage",
    category: "ORM & Database, other tools",
    items: "Prisma, Drizzle, Serverless Storage, Redis, Crypto, ",
  },
  {
    group: "Backend & API",
    category: "API",
    items: "RESTful, GraphQL",
  },
  {
    group: "Backend & API",
    category: "Realtime Communication",
    items: "RPC JSON-RPC, WebSocket",
  },
  {
    group: "Backend & API",
    category: "Authentication",
    items: "JWT, Auth.js, Better-auth",
  },
  {
    group: "Frontend Tools",
    category: "UI Components",
    items: "Shadcn, Radix, HeroUI, FluentUI, MantineUI, Chakra, Gluestack, Tamagui, Lit",
  },
  {
    group: "Frontend Tools",
    category: "Styling",
    items: "Emotion, Tailwind, UnoCSS, Kuma UI, Styled JSX",
  },
  {
    group: "Frontend Tools",
    category: "Build Tools",
    items: "Webpack, Turbopack, Vite, Turborepo",
  },
  {
    group: "Frontend tools",
    category: "State Management",
    items: "Redux, Zustand, Context",
  },
  {
    group: "Frontend tools",
    category: "Form Validation",
    items: "React-hook-form, Zod",
  },
  {
    group: "Frontend tools",
    category: "Network & Data Fetching",
    items: "TanStack Query, Axios, Fetch",
  },
  {
    group: "Frontend tools",
    category: "Frontend Utilities",
    items:
      "Lodash, RxJS, Tanstack Table, Hooks, Async, Loadable-components, Algolia, Alpine, Mapbox, Urql",
  },
  {
    group: "UI/UX Libraries",
    category: "Animation",
    items: "GSAP, Framer Motion, Remotion",
  },
  {
    group: "UI/UX Libraries",
    category: "Data Visualization",
    items: "Echarts, Recharts, Nivo, TanStack Table",
  },
  {
    group: "UI/UX Libraries",
    category: "Text Editors",
    items: "Tiptap, Plate, Quill",
  },
  {
    group: "UI/UX Libraries",
    category: "Sliders & Carousels",
    items: "Swiper, Embla-carousel",
  },
  {
    group: "UI/UX Libraries",
    category: "Onboarding",
    items: "Onborda",
  },
  {
    group: "UI/UX Libraries",
    category: "Diagramming",
    items: "React Flow",
  },
  {
    group: "Mobile Development",
    category: "Mobile - React Native",
    items:
      "Tamagui, Expo, Flash List, Firebase, React Navigation, Mapbox, Notifications, Hardware Module",
  },
  {
    group: "Development Tools",
    category: "Testing",
    items: "Jest, Vitest, Testify, Unit, Integration, JSON-server (data mocking)",
  },
  {
    group: "Development Tools",
    category: "Documentation",
    items: "Swagger, Storybook",
  },
  {
    group: "Development Tools",
    category: "Version Control",
    items: "Git, GitHub",
  },
  {
    group: "Development Tools",
    category: "IDE",
    items: "VSCode, Cursor",
  },
  {
    group: "AI & Automation",
    category: "AI",
    items: "Prompting, Model, Agents, Context",
  },
  {
    group: "AI & Automation",
    category: "Code Agents",
    items: "Cursor, Copilot",
  },
  {
    group: "AI & Automation",
    category: "LLM",
    items: "GPT, Claude, Gemini, Llama",
  },
  {
    group: "AI & Automation",
    category: "Vibe Coding",
    items: "Rules, MCP, Agent, Models, PRD, Context",
  },
  {
    group: "Business Tools",
    category: "Payment Gateways",
    items: "Midtrans, Stripe, Polar",
  },
  {
    group: "Business Tools",
    category: "Project Management",
    items: "Planner Microsoft, GitHub Project, Notion",
  },
  {
    group: "Business Tools",
    category: "Collaboration",
    items: "Notion, GitHub Project, Teams, Google Meet, Zoom, Microsoft Cloud, Google Workspace",
  },
  {
    group: "Design & Media",
    category: "Design Tools",
    items: "Figma, Eraser, PS, AI",
  },
  {
    group: "System",
    category: "Operating Systems",
    items: "Windows, Linux, MacOS",
  },
]

export const education: Education[] = [
  {
    degree: "Bachelor Degree (S1)",
    field: "Informatics Engineering",
    institution: "(UNTAG) Universitas 17 Agustus 1945 Surabaya",
    period: "Aug 2013 - Feb 2018",
    gpa: "3.66",
    thesis:
      "Developed an application (web & Android) called Crimenesia for facilitating crime reporting and communication between police and the community.",
    organization: [
      "Pencak Silat Merpati Putih",
      "HIMA Informatika UNTAG",
      "CTComp (Tech Community)",
    ],
    description:
      "Graduated with honors with a GPA of 3.66. Multiple tech community activities, participated in student organizations, and completed a thesis project developing a crime reporting application (Crimenesia) in collaboration with local police and the community.",
  },
  {
    degree: "Senior High School",
    field: "Natural Sciences Major",
    institution: "SMAN 1 Gedangan, Sidoarjo",
    period: "2009 - 2012",
    organization: ["DANS Sidoarjo (Duta Anti Narkoba Sidoarjo)"],
    description:
      "Graduated with a strong foundation in natural sciences, participated in student activities, and played an active role in anti-drug prevention initiatives with the Duta Anti Narkoba Sidoarjo (DANS) organization as Vice Chairman.",
  },
]

export const certifications: Certification[] = [
  {
    title: "Problem Solving",
    issuer: "HackerRank",
    period: "Dec 2024",
    link: "https://www.hackerrank.com/certificates/a42dc6068da4",
  },
  {
    title: "Information system audit",
    issuer: "BNSP Certification",
    period: "Mar 2018 - Mar 2021",
  },
  {
    title: "Website application security training",
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
    period: "2010 - 2012",
    description: "Duta Anti Narkoba Sidoarjo (DANS) BNNK Sidoarjo",
  },
  {
    title: "Member of Pencak Silat Merpati Putih",
    period: "2013 - 2015",
    description: "Universitas 17 Agustus 1945 Surabaya",
  },
]
