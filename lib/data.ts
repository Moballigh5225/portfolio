export const personal = {
  name: "Moballighul Islam",
  title: "Web Front-End Developer",
  tagline: "Building elegant, scalable interfaces that users love.",
  location: "New Delhi, India",
  email: "moballigh5225@gmail.com",
  linkedin: "https://www.linkedin.com/in/moballighul-islam-620a8a160",
  github: "https://github.com/Moballigh5225",
  summary:
    "Web Front-End Developer with 4+ years of experience building responsive, scalable, and maintainable user interfaces using ReactJS, JavaScript, CSS, and HTML. Proven ability to translate high-fidelity mockups and complex product requirements into elegant, unit-testable UI code. Experienced in design system development, reusable component architecture, REST API integration, Agile/Scrum delivery, and cross-browser/cross-device optimization across SaaS applications.",
};

export const skills = [
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "PHP", "Python", "HTML5", "CSS3"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Redux", "Zustand" , "Recoil" ,"React Query", "jQuery", "Material UI", "Bootstrap", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Flask", "PHP"],
  },
  {
    category: "Database",
    items: ["MySQL", "SQLite", "Oracle"],
  },
  {
    category: "Cloud",
    items: ["AWS EC2","Linux Administration"],
  },
];

export const experience = [
  {
    company: "Acefone",
    role: "Senior Executive — Full Stack",
    location: "Gurugram, India",
    period: "Mar 2025 – Present",
    bullets: [
      "Built 2 corporate SaaS websites using React.js and Next.js (SSR/SSG), translating high-fidelity mockups into pixel-accurate, responsive interfaces across mobile and desktop.",
      "Developed and maintained a React-based design system with reusable, unit-testable components, ensuring strict adherence to UI/UX style guide standards and cross-browser compatibility.",
      "Built a lead analytics dashboard in React with SQL-backed real-time filtering (Failed, Live, Success, Junk) integrating REST APIs and MVC architecture.",
      "Engineered dynamic forms with UTM/GCLID tracking via Google Tag Manager; authored PHP logic for real-time lead syncing into Zoho CRM.",
      "Designed RESTful APIs integrating Zoho CRM, Zoho Desk, and Wotnot; architected an AI Blog Summarization API (LangChain + OpenAI) with caching (~5K req/day) and rate limiting.",
      "Authored API and security test scripts covering auth bypass, rate-limit enforcement, and input sanitization; used Chrome DevTools for performance profiling.",
      "Developed rapid UI prototypes using Adobe XD for stakeholder review, accelerating design-to-development handoff.",
    ],
  },
  {
    company: "Eprosign Technical Solutions",
    role: "Software Developer",
    location: "Noida, India",
    period: "Jul 2023 – Aug 2024",
    bullets: [
      "Developed and maintained the company's primary SaaS product website using React and Next.js with SEO-friendly SSR, multilingual (i18n) support, and optimized routing.",
      "Built and extended a reusable React component library with Material UI, integrating REST APIs and Zustand state management.",
      "Resolved cross-browser compatibility and cross-form-factor issues; improved performance via code-splitting, dynamic imports, image optimization, and memoization.",
      "Collaborated with UX designers to uphold design system standards, participated in Agile sprint planning and code reviews via Jira.",
    ],
  },
  {
    company: "Pankhuri",
    role: "Frontend Developer",
    location: "Remote, India",
    period: "Oct 2022 – Jun 2023",
    bullets: [
      "Developed Yoda tutor dashboard in React.js with real-time session analytics; applied lazy loading and code splitting to optimize performance across diverse network conditions.",
      "Translated wireframes into pixel-accurate, cross-browser-compatible React components with consistent behavior across Chrome, Firefox, and Safari.",
      "Participated in Agile/Scrum ceremonies, delivering features iteratively and communicating blockers proactively to onshore and offshore teammates.",
    ],
  },
  {
    company: "MAX IT Solutions",
    role: "Software Trainee",
    location: "Bihar, India",
    period: "Aug 2021 – Sep 2022",
    bullets: [
      "Standardized UI components using React, Bootstrap, Tailwind CSS, and Material UI; integrated REST APIs with client-side form validation.",
      "Gained experience in jQuery-based DOM manipulation, JavaScript client-side scripting, and build tooling (Grunt/Gulp).",
      "Participated in code reviews and sprint planning, building foundational knowledge of Agile delivery and clean code practices.",
    ],
  },
];

export const projects = [
  {
    title: "Acefone Lead Analytics Dashboard",
    description:
      "Internal full-stack tracking dashboard built for Acefone. Fetches live lead data from MySQL and syncs Lead IDs directly from Zoho CRM. Features real-time status filtering (Success, Failed, Live, Junk), donut chart distribution, time-series graphs, advanced filters (date range, campaign, source, slug), and CSV export. Authentication protected.",
    tags: ["React.js", "JavaScript", "HTML", "CSS", "Bootstrap", "MySQL", "Zoho CRM", "REST API"],
    github: null,
    live: null,
    internal: true,
    images: ["/projects/dashboard-1.png", "/projects/dashboard-2.png"],
  },
  {
    title: "Wotnot Chatbot Flow System",
    description:
      "Designed and built a full chatbot flow system on Wotnot for Acefone. Includes multi-step bot flows for lead capture, automated lead creation and updation logic synced with Zoho CRM, owner assignment automation, and an existing lead flag checker to avoid duplicate entries.",
    tags: ["Wotnot", "Bot Flow", "Zoho CRM", "Lead Automation", "PHP", "JavaScript"],
    github: null,
    live: null,
    internal: true,
    images: ["/projects/botflow-1.png", "/projects/botflow-2.png"],
  },
  {
    title: "Acefone Corporate Website",
    description:
      "Production-grade corporate website for Acefone (VoIP SaaS). Integrated full lead creation pipeline with GCLID and Google Ads tracking, Zoho CRM and Zoho Desk sync, Wotnot live chat, multiple dynamic forms, and a complete PHP backend. Every visitor interaction is tracked and pushed into CRM automatically.",
    tags: ["PHP", "WordPress", "Zoho CRM", "Zoho Desk", "Wotnot", "Google Ads", "HTML", "CSS", "JavaScript"],
    github: null,
    live: "https://www.acefone.com",
    internal: false,
    images: [],
  },
  {
    title: "AI Blog Summarization Platform",
    description:
      "Full-stack AI-powered content tool featuring a Summarizer API built with LangChain and OpenAI. Supports configurable prompt pipelines for length, tone, and audience. Includes an Analytics API for usage tracking, backed by SQLAlchemy and SQLite with caching (~5K req/day), rate limiting, and secret-key authentication.",
    tags: ["React.js", "LangChain", "OpenAI API", "Python", "SQLite", "REST API","Falsk"],
    github: "https://github.com/moballighulislam/blog_aisummarizer",
    live: null,
    internal: true,
    images: [],
  },
  {
    title: "Brain-Wave",
    description:
      "Modern AI-powered website template emphasizing sleek design and advanced UI functionality. Built to demonstrate frontend craft with smooth animations and a polished component system.",
    tags: ["React.js", "HTML", "CSS", "Tailwind CSS", "Material UI"],
    github: "https://github.com/Moballigh5225/brain-wave",
    live: "https://brain-wave-azure.vercel.app/",
    internal: false,
    images: [],
  },
  {
    title: "Ecomshop",
    description:
      "Full-stack e-commerce web app with product browsing, user authentication, and shopping cart functionality. Structured to support seamless navigation, account access, and efficient cart management across the platform.",
    tags: ["React.js", "Node.js", "Express", "MongoDB", "JavaScript", "CSS3"],
    github: "https://github.com/Moballigh5225/ecommerce-shop",
    live: "https://ecommerce-shop-e32y.onrender.com/",
    internal: false,
    images: [],
  },
];

export const certifications = [
  {
    title: "Database@AWS Certified Architect Professional",
    issuer: "Oracle",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=54F232ABEA34701051F5DDA214DECF87C885EBB910CAFC461096BC4CA04BE2B6",
  },
  {
    title: "Cloud Infrastructure Certified Developer Professional",
    issuer: "Oracle",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=44DBF1B7126CF6F422497A27A8524A821C34D190EC88273645C3ADAED9E5FD3D",
  },
  {
    title: "Cloud Infrastructure Certified AI Foundations Associate",
    issuer: "Oracle",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=D5FF075EDE0FACF4F7F50BAF5B23A20837B33534A50D4DF1F99A78A2B1A3B8A4",
  },
];

export const education = {
  degree: "B.Tech in Computer Science",
  institution: "Jawaharlal Nehru Technology University",
  period: "2016 – 2022",
};
