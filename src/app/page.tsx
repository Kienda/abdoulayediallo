// src/app/page.tsx
import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { projects, type Project, type ProjectColor } from "@/data/projects";
import { Reveal, RevealGroup, RevealItem, HoverLift } from "@/components/motion/Motion";
import { Icon, type IconName } from "@/components/Icons";

// ─── Gradient color map (defined here so Tailwind scans are not needed) ───────
const PROJECT_COLORS: Record<ProjectColor, { from: string; to: string }> = {
  blue:   { from: "#1f55c6", to: "#3730a3" },
  green:  { from: "#059669", to: "#0f766e" },
  purple: { from: "#7c3aed", to: "#5b21b6" },
  pink:   { from: "#ec4899", to: "#be185d" },
};

const featuredProjects = projects.filter((p) => p.featured);

// ─── Skills data ──────────────────────────────────────────────────────────────
const SKILLS = [
  {
    label: "Languages",
    icon: "code",
    items: ["Python", "C++", "JavaScript", "TypeScript", "SQL"],
  },
  {
    label: "Frontend",
    icon: "layers",
    items: ["React", "React Native", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    label: "Backend",
    icon: "database",
    items: ["Node.js", "Express", "FastAPI", "PostgreSQL", "REST APIs", "JWT"],
  },
  {
    label: "Tools & Infrastructure",
    icon: "tools",
    items: [
      "Git",
      "GitHub Actions",
      "Docker",
      "Vercel",
      "Render",
      "AWS",
      "Firebase",
      "Nginx",
      "Cloudflare",
      "Linux",
    ],
  },
  {
    label: "AI / Data",
    icon: "sparkles",
    items: [
      "ChromaDB",
      "Retrieval-Augmented Generation (RAG)",
      "sentence-transformers",
    ],
  },
] as const;

// ─── Experience data ──────────────────────────────────────────────────────────
const EXPERIENCE = [
  {
    role: "Software Engineer & Tech Lead",
    company: "Heuvia",
    dates: "2025 – Present",
    bullets: [
      "Lead a 5-person team that built a multi-tenant LMS for colleges in Guinea (development complete, preparing first rollout).",
      "Designed the architecture: subdomain routing (Nginx + Cloudflare), 4-role permissions, curriculum-based enrollment on a React / React Native / Node.js / PostgreSQL stack.",
      "Own production deployment across web and mobile, plus code review and team coordination.",
    ],
  },
  {
    role: "IRT Support Specialist",
    company: "Research Foundation of CUNY",
    dates: "Jun – Aug 2025",
    bullets: [
      "Resolved 200+ Microsoft 365 / Active Directory requests weekly with a 99% resolution rate.",
      "Deployed and configured 100+ Windows machines, standardizing IT workflows.",
    ],
  },
  {
    role: "IT Manager & Designer",
    company: "Guinea High Tech",
    dates: "2015 – 2022",
    bullets: [
      "Scaled the team from 1 to 10+, delivering technical solutions to 250+ businesses.",
      "Automated system setup and standardized configurations across the organization.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Identix Guinée",
    dates: "2018",
    bullets: [
      "Built and shipped web app features using Laravel (PHP) and Bootstrap.",
    ],
  },
] as const;

// ─────────────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="py-14">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2">
            {/* Headline, subtitle and CTAs fade-and-rise in sequence, once, on load */}
            <RevealGroup trigger="mount">
              <RevealItem>
                <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                  Abdoulaye Diallo
                </h1>
              </RevealItem>
              <RevealItem className="mt-2">
                <p className="text-lg font-semibold text-[#1f55c6]">
                  Software Engineer · Building scalable full-stack applications
                </p>
              </RevealItem>
              <RevealItem className="mt-4">
                <p className="max-w-xl text-base text-neutral-700">
                  CS student at Columbia University building production web
                  applications. Looking for Software Engineering internships for
                  Summer 2027.
                </p>
              </RevealItem>

              <RevealItem className="mt-7">
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#1f55c6] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:opacity-95 motion-reduce:transform-none motion-reduce:transition-none"
                  >
                    <Icon name="rocket" className="h-4 w-4" /> View Projects
                  </Link>
                  <a
                    href="/Resume-AbdoulayeDiallo.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-[#1f55c6] px-5 py-2.5 text-sm font-semibold text-[#1f55c6] transition hover:-translate-y-0.5 hover:bg-blue-50 motion-reduce:transform-none motion-reduce:transition-none"
                  >
                    <Icon name="download" className="h-4 w-4" /> Resume
                  </a>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-5 py-2.5 text-sm font-semibold text-neutral-700 transition hover:-translate-y-0.5 hover:bg-neutral-50 motion-reduce:transform-none motion-reduce:transition-none"
                  >
                    <Icon name="mail" className="h-4 w-4" /> Contact Me
                  </Link>
                </div>
              </RevealItem>
            </RevealGroup>

            {/* Photo — deliberately NOT animated: it is the LCP element, and
                fading it in would make the largest paint wait on hydration. */}
            <div className="flex justify-center md:justify-end">
              <div className="relative h-56 w-56 overflow-hidden rounded-full bg-white shadow-md">
                <Image
                  src="/profile.jpg"
                  alt="Abdoulaye Diallo, Software Engineer"
                  fill
                  className="object-contain scale-110"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <RevealGroup className="mt-12 grid gap-8 md:grid-cols-4">
            <RevealItem>
              <Stat icon="graduation" title="Columbia CS '28" desc="B.A. Computer Science, New York" />
            </RevealItem>
            <RevealItem>
              <Stat icon="code" title="10+ Projects" desc="Web apps, platforms & tools" />
            </RevealItem>
            <RevealItem>
              <Stat icon="sparkles" title="JKC Scholar" desc="Jack Kent Cooke Scholar" />
            </RevealItem>
          </RevealGroup>
        </Container>
      </section>

      {/* ── FEATURED PROJECTS ─────────────────────────────────────────────── */}
      <section className="py-8">
        <Container>
          <Reveal className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">Featured Projects</h2>
              <p className="mt-1 text-sm text-neutral-600">
                Production-ready applications — full-stack, desktop, and web.
              </p>
            </div>
            <Link
              href="/projects"
              className="text-sm font-semibold text-[#1f55c6] hover:underline"
            >
              View all →
            </Link>
          </Reveal>

          <RevealGroup className="grid gap-6 md:grid-cols-3">
            {featuredProjects.map((p) => (
              <RevealItem key={p.slug} className="h-full">
                <FeaturedProjectCard project={p} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* ── SKILLS ───────────────────────────────────────────────────────── */}
      <section className="py-8">
        <Container>
          <Reveal>
            <h2 className="mb-6 text-xl font-bold">Skills</h2>
          </Reveal>
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SKILLS.map((group) => (
              <RevealItem key={group.label} className="h-full">
                <SkillGroup label={group.label} icon={group.icon} items={group.items} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────────── */}
      <section id="about" className="py-10 scroll-mt-24">
        <Container>
          <Reveal className="mb-4 flex items-center gap-3"><span className="icon-orb h-9 w-9"><Icon name="user" className="h-4 w-4" /></span><h2 className="text-xl font-bold">About</h2></Reveal>

          <Reveal className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
            <div className="grid md:grid-cols-[240px_1fr]">
              <div className="p-6 md:p-7">
                <div className="relative h-48 w-48 overflow-hidden rounded-full bg-white shadow-md">
                  <Image
                    src="/profile.jpg"
                    alt="Abdoulaye Diallo"
                    fill
                    className="object-contain scale-110"
                    priority
                  />
                </div>
              </div>

              <div className="p-6 md:p-7">
                <p className="max-w-3xl text-sm leading-7 text-neutral-800">
                  I&apos;m a sophomore at Columbia University (B.A. Computer Science,
                  expected May 2028) and a Jack Kent Cooke Scholar. I build
                  full-stack web applications and tools that solve real problems —
                  spanning backend APIs, database design, and React frontends, with
                  a focus on clean architecture and production reliability.
                </p>
                <p className="mt-4 text-sm font-semibold text-neutral-800">
                  Seeking Software Engineering internships for Summer 2027.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── EXPERIENCE ───────────────────────────────────────────────────── */}
      <section id="experience" className="py-10 scroll-mt-24">
        <Container>
          <Reveal className="mb-4 flex items-center gap-3"><span className="icon-orb h-9 w-9"><Icon name="briefcase" className="h-4 w-4" /></span><h2 className="text-xl font-bold">Experience</h2></Reveal>
          <RevealGroup className="space-y-4">
            {EXPERIENCE.map((e) => (
              <RevealItem key={e.role + e.company}>
                <ExperienceCard {...e} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <section id="contact" className="py-10 scroll-mt-24">
        <Container>
          <Reveal className="flex items-center justify-center gap-3">
            <span className="icon-orb h-9 w-9"><Icon name="mail" className="h-4 w-4" /></span><h2 className="text-xl font-bold">Contact</h2>
          </Reveal>

          <Reveal className="mt-4 overflow-hidden rounded-2xl border border-neutral-200 bg-white">
            <ContactForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function Stat({ icon, title, desc }: { icon: IconName; title: string; desc: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="icon-orb h-11 w-11"><Icon name={icon} className="h-5 w-5" /></span>
      <div><div className="text-xl font-bold">{title}</div><div className="mt-1 text-sm text-neutral-600">{desc}</div></div>
    </div>
  );
}

function FeaturedProjectCard({ project }: { project: Project }) {
  const colors = PROJECT_COLORS[project.color ?? "blue"];

  return (
    <HoverLift className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      {/* Gradient header */}
      <div
        className="flex h-36 items-center justify-center px-6"
        style={{ background: `linear-gradient(135deg, ${colors.from}, ${colors.to})` }}
      >
        <span className="text-center text-base font-bold text-white drop-shadow">
          {project.title}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm leading-6 text-neutral-700">{project.summary}</p>

        {/* Stack chips */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-auto flex gap-4 pt-4">
          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#1f55c6] hover:underline"
            >
              GitHub →
            </a>
          )}
          {project.links?.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-neutral-500 hover:text-neutral-800 hover:underline"
            >
              {project.links.demoLabel ?? "Live"} ↗
            </a>
          )}
        </div>
      </div>
    </HoverLift>
  );
}

function SkillGroup({ label, icon, items }: { label: string; icon: IconName; items: readonly string[] }) {
  return (
    <div className="h-full rounded-2xl border border-neutral-200 bg-white p-5">
      <div className="mb-4 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-600">
        <span className="icon-orb h-8 w-8"><Icon name={icon} className="h-4 w-4" /></span>{label}
      </div>
      {/* Pills appear in a quick sequence — tighter stagger than the cards */}
      <RevealGroup className="flex flex-wrap gap-2" stagger={0.04}>
        {items.map((skill) => (
          <RevealItem
            key={skill}
            as="span"
            className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-800"
          >
            {skill}
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}

function ExperienceCard({
  role,
  company,
  dates,
  bullets,
}: {
  role: string;
  company: string;
  dates: string;
  bullets: readonly string[];
}) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <div className="text-sm font-bold text-neutral-900">{role}</div>
          <div className="text-sm text-neutral-600">{company}</div>
        </div>
        <span className="shrink-0 rounded-full bg-neutral-100 px-3 py-0.5 text-xs font-medium text-neutral-600">
          {dates}
        </span>
      </div>
      <ul className="mt-3 space-y-1">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2 text-sm leading-6 text-neutral-700">
            <span className="mt-1 shrink-0 text-[#1f55c6]">·</span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
