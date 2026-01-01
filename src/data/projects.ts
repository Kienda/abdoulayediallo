// src/data/projects.ts
export type ProjectCategory = "web" | "design" | "marketing";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string; 
  tags: string[];
  featured?: boolean;
  year?: string;
  links?: {
    caseStudy?: string; 
    demo?: string;
    github?: string;
    figma?: string;
  };
  thumbnail?: string; 
};

export const projects: Project[] = [
  {
    slug: "sample-webapp",
    title: "Sample Web App",
    category: "web",
    summary: "Built a web app to solve a real user workflow end-to-end.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    featured: true,
    links: { caseStudy: "/projects/sample-webapp", demo: "#", github: "#" },
    thumbnail: "/projects/software.jpg",
  },
  {
    slug: "sample-design",
    title: "Sample UI/UX Case Study",
    category: "design",
    summary: "Designed a clear, human-centered experience with a reusable system.",
    tags: ["Figma", "UI/UX", "Design System"],
    featured: true,
    links: { caseStudy: "/projects/sample-design", figma: "#" },
    thumbnail: "/projects/design.jpg",
  },
  {
    slug: "sample-marketing",
    title: "Sample Digital Campaign",
    category: "marketing",
    summary: "Positioned a brand with strategy, content, and conversion-focused design.",
    tags: ["SEO", "Analytics", "Content"],
    featured: false,
    links: { caseStudy: "/projects/sample-marketing" },
    thumbnail: "/projects/marketing.jpg",
  },
];
