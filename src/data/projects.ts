// src/data/projects.ts

export type ProjectCategory = "web" | "game" | "design";

export type ProjectColor = "blue" | "green" | "purple" | "pink";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  tags: string[];
  featured?: boolean;
  year?: string;
  color?: ProjectColor;
  links?: {
    demo?: string;
    demoLabel?: string;
    github?: string;
    figma?: string;
    caseStudy?: string;
  };
  thumbnail?: string;
};

export const projects: Project[] = [
  {
    slug: "heuvia",
    title: "Heuvia — LMS Platform",
    category: "web",
    summary:
      "Multi-tenant Learning Management System for colleges in Guinea. Subdomain routing (Nginx + Cloudflare), a 4-role permission system, and curriculum-based enrollment. Built as Tech Lead of a 5-person team; development complete, preparing first institutional rollout.",
    tags: ["React", "React Native", "Node.js", "PostgreSQL", "Nginx", "Cloudflare"],
    featured: true,
    color: "blue",
    links: {
      // Private repo — no GitHub link.
      demo: "https://www.heuvia.com",
    },
  },
  {
    slug: "tontin",
    title: "Tontin — Group Savings Fintech",
    category: "web",
    summary:
      "Digital tontine app with wallets, group contribution pots, savings vaults, and a member trust-scoring system. FastAPI backend with full CRUD, self-deployed on AWS.",
    tags: ["FastAPI", "Python", "PostgreSQL", "AWS"],
    featured: true,
    color: "green",
    links: {
      demo: "https://tontin.net",
    },
  },
  {
    slug: "unofficial-guide-rag",
    title: "The Unofficial Guide — RAG System",
    category: "web",
    summary:
      "Retrieval-Augmented Generation system answering questions over Columbia CS professor reviews, with grounded generation and source citations. Collected 376 reviews, indexed embeddings (all-MiniLM-L6-v2) in ChromaDB.",
    tags: ["Python", "ChromaDB", "sentence-transformers", "Groq"],
    featured: true,
    color: "purple",
    links: {
      github:
        "https://github.com/Kienda/ai201-project1-unofficial-guide-starter",
    },
  },
  {
    slug: "thirst-to-thrive",
    title: "Thirst to Thrive — Interactive Browser Game",
    category: "game",
    summary:
      "A narrative resource-management game inspired by charity: water's mission. Restore clean water to a village through missions, difficulty modes, a hope and health system, inventory, badges, and full keyboard and mobile controls.",
    tags: ["JavaScript", "HTML5", "CSS", "Game State Management"],
    featured: false,
    color: "blue",
    links: {
      demo: "https://kienda.github.io/05-charity-water-game-prototype/",
      demoLabel: "Play",
      github: "https://github.com/Kienda/05-charity-water-game-prototype",
    },
  },
  {
    slug: "alkule",
    title: "Alkule — Language Learning Platform",
    category: "web",
    summary:
      "Live platform for learning the ADLaM (Fulani) script, with typing practice, courses, and a media library. Firebase auth/storage, PostgreSQL data, deployed on Railway with Cloudflare DNS/SSL.",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Firebase"],
    featured: false,
    color: "pink",
    links: {
      demo: "https://alkule.com",
    },
  },
  {
    slug: "studentsuccess",
    title: "StudentSuccess",
    category: "web",
    summary:
      "Full-stack academic guidance platform with role-based auth (admin/student), personalized dashboards, and CRUD operations backed by PostgreSQL.",
    tags: ["Node.js", "Express", "PostgreSQL", "JWT", "Handlebars", "bcrypt"],
    featured: false,
    year: "2025",
    color: "blue",
    links: {
      github: "https://github.com/Kienda/StudentSuccess",
    },
  },
  {
    slug: "college-navigator",
    title: "College Navigator",
    category: "web",
    summary:
      "Desktop academic tracking app built in C++ with Qt and SQLite. Helps students track milestones and receive personalized academic guidance.",
    tags: ["C++", "Qt", "SQLite", "Desktop App"],
    featured: false,
    year: "2024",
    color: "green",
    links: {
      github: "https://github.com/Kienda/HonorsProject",
    },
  },
  {
    slug: "portfolio",
    title: "Personal Portfolio",
    category: "web",
    summary:
      "This site — built with Next.js, TypeScript, and Tailwind. Includes a working contact form via Resend, deployed on Vercel with Cloudflare DNS.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Resend", "Vercel"],
    featured: false,
    year: "2026",
    color: "purple",
    links: {
      github: "https://github.com/Kienda/abdoulayediallo",
      demo: "https://abdoulayediallo.com",
    },
  },
  {
    slug: "uiux-case-studies",
    title: "ColumbiaCribs UI/UX",
    category: "design",
    summary:
      "End-to-end UI/UX case study for a student housing review platform — brand identity, design system, and high-fidelity Figma prototypes.",
    tags: ["Figma", "UI/UX", "Design Systems", "Prototyping"],
    featured: false,
    year: "2026",
    color: "pink",
    links: {
      github: "https://github.com/Kienda/columbiacribs-uiux",
    },
  },
];
