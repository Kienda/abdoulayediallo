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
    title: "StudentSuccess — Academic Guidance Platform",
    category: "web",
    summary:
      "A full-stack academic guidance platform with authentication, role-based access, and personalized student dashboards backed by PostgreSQL.",
    tags: ["Node.js", "Express", "PostgreSQL", "JWT", "Handlebars", "Full-Stack"],
    featured: true,
    links: {
      github: "https://github.com/Kienda/StudentSuccess",
    },
    thumbnail: "/projects/software.jpg",
  },
  {
    slug: "uiux-case-studies",
    title: "UI/UX Case Studies",
    category: "design",
    summary:
      "Led UI/UX design for a student housing review platform, delivering brand identity, design system, and high-fidelity prototypes in Figma.",
    tags: ["Figma", "UI/UX", "Design Systems"],
    featured: true,
    links: {
      github: "https://github.com/Kienda/columbiacribs-uiux",
    },
    thumbnail: "/projects/design.jpg",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing Campaigns",
    category: "marketing",
    summary:
      "Positioned brands through strategy, analytics, and conversion-focused digital experiences.",
    tags: ["SEO", "Analytics", "Content"],
    featured: false,
    links: {
      github: "https://github.com/Kienda/StudentSuccess",
    },
    thumbnail: "/projects/marketing.jpg",
  },
  {
    slug: "college-navigator",
    title: "College Navigator — Desktop Academic Guidance App",
    category: "web",
    summary:
      "A Qt/C++ desktop application that helps college students track milestones and receive personalized academic and career guidance.",
    tags: ["C++", "Qt", "SQLite", "Desktop App"],
    featured: false,
    links: {
      github: "https://github.com/Kienda/HonorsProject",
    },
    thumbnail: "/projects/software.jpg",
  },
];
