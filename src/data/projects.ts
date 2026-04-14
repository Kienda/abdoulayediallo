// src/data/projects.ts

export type ProjectCategory = "web" | "design";

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
    github?: string;
    figma?: string;
    caseStudy?: string;
  };
  thumbnail?: string;
};

export const projects: Project[] = [
  {
    slug: "studentsuccess",
    title: "StudentSuccess",
    category: "web",
    summary:
      "Full-stack academic guidance platform with role-based auth (admin/student), personalized dashboards, and CRUD operations backed by PostgreSQL.",
    tags: ["Node.js", "Express", "PostgreSQL", "JWT", "Handlebars", "bcrypt"],
    featured: true,
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
    featured: true,
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
    featured: true,
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
