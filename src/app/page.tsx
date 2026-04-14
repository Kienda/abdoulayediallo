// src/app/page.tsx
import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { projects, type Project, type ProjectColor } from "@/data/projects";

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
    items: ["Python", "C++", "JavaScript", "TypeScript", "SQL"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "REST APIs", "JWT"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub Actions", "Docker", "Vercel", "Render"],
  },
] as const;

// ─── Experience data ──────────────────────────────────────────────────────────
const EXPERIENCE = [
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
            <div>
              <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                Abdoulaye Diallo
              </h1>
              <p className="mt-2 text-lg font-semibold text-[#1f55c6]">
                Software Engineer · Building scalable full-stack applications
              </p>
              <p className="mt-4 max-w-xl text-base text-neutral-700">
                CS student at Columbia University building production web
                applications. Looking for Software Engineering internships for
                Summer 2026.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="rounded-lg bg-[#1f55c6] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                >
                  View Projects
                </Link>
                <Link
                  href="/Resume-AbdoulayeDiallo.pdf"
                  target="_blank"
                  className="rounded-lg border border-[#1f55c6] px-5 py-2.5 text-sm font-semibold text-[#1f55c6] hover:bg-blue-50"
                >
                  Resume
                </Link>
                <Link
                  href="/#contact"
                  className="rounded-lg border border-neutral-300 px-5 py-2.5 text-sm font-semibold text-neutral-700 hover:bg-neutral-50"
                >
                  Contact Me
                </Link>
              </div>
            </div>

            {/* Photo */}
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
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            <Stat title="Columbia CS '28" desc="B.A. Computer Science, New York" />
            <Stat title="3.6 GPA" desc="Dean's List, academic excellence" />
            <Stat title="10+ Projects" desc="Web apps, platforms & tools" />
            <Stat title="JKC Scholar" desc="Jack Kent Cooke Scholar" />
          </div>
        </Container>
      </section>

      {/* ── FEATURED PROJECTS ─────────────────────────────────────────────── */}
      <section className="py-8">
        <Container>
          <div className="mb-6 flex items-center justify-between">
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
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredProjects.map((p) => (
              <FeaturedProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── SKILLS ───────────────────────────────────────────────────────── */}
      <section className="py-8">
        <Container>
          <h2 className="mb-6 text-xl font-bold">Skills</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SKILLS.map((group) => (
              <SkillGroup key={group.label} label={group.label} items={group.items} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────────── */}
      <section id="about" className="py-10 scroll-mt-24">
        <Container>
          <div className="mb-3 text-sm font-semibold text-neutral-800">About:</div>

          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
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
                  Seeking Software Engineering internships for Summer 2026.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── EXPERIENCE ───────────────────────────────────────────────────── */}
      <section id="experience" className="py-10 scroll-mt-24">
        <Container>
          <div className="mb-4 text-sm font-semibold text-neutral-800">Experience:</div>
          <div className="space-y-4">
            {EXPERIENCE.map((e) => (
              <ExperienceCard key={e.role + e.company} {...e} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <section id="contact" className="py-10 scroll-mt-24">
        <Container>
          <div className="text-center text-sm font-semibold text-neutral-800">Contact:</div>

          <div className="mt-4 overflow-hidden rounded-2xl border border-neutral-200 bg-white">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function Stat({ title, desc }: { title: string; desc: string }) {
  return (
    <div>
      <div className="text-xl font-bold">{title}</div>
      <div className="mt-1 text-sm text-neutral-600">{desc}</div>
    </div>
  );
}

function FeaturedProjectCard({ project }: { project: Project }) {
  const colors = PROJECT_COLORS[project.color ?? "blue"];

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
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
              Live Demo ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function SkillGroup({ label, items }: { label: string; items: readonly string[] }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5">
      <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
        {label}
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-800"
          >
            {skill}
          </span>
        ))}
      </div>
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
