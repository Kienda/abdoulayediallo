// src/components/ProjectCard.tsx
import Link from "next/link";
import type { Project } from "@/data/projects";

const categoryLabel: Record<Project["category"], string> = {
  web: "Web App",
  design: "Design",
  marketing: "Digital Marketing",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      {/* thumbnail */}
      <div className="aspect-[16/9] overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100">
        {/* If you add real images later, replace this div with <Image/> */}
        <div className="h-full w-full" />
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <span className="text-xs font-semibold text-[#1f55c6]">
          {categoryLabel[project.category]}
        </span>
        {project.year ? (
          <span className="text-xs text-neutral-500">{project.year}</span>
        ) : null}
      </div>

      <h3 className="mt-2 text-lg font-bold">{project.title}</h3>
      <p className="mt-2 text-sm text-neutral-700">{project.summary}</p>

      {/* tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.slice(0, 5).map((t) => (
          <span
            key={t}
            className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs text-neutral-700"
          >
            {t}
          </span>
        ))}
      </div>

      {/* actions */}
      <div className="mt-5 flex items-center gap-3">
        <Link
          href={project.links?.caseStudy ?? "/projects"}
          className="text-sm font-semibold text-[#1f55c6] hover:underline"
        >
          Read Case Study →
        </Link>

        {project.links?.demo ? (
          <a
            href={project.links.demo}
            className="text-sm text-neutral-600 hover:text-neutral-900"
            target="_blank"
            rel="noreferrer"
          >
            Demo
          </a>
        ) : null}

        {project.links?.github ? (
          <a
            href={project.links.github}
            className="text-sm text-neutral-600 hover:text-neutral-900"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        ) : null}
      </div>
    </div>
  );
}
