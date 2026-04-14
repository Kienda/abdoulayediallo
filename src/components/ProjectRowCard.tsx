// src/components/ProjectRowCard.tsx
import type { Project } from "@/data/projects";

const PROJECT_COLORS: Record<string, { from: string; to: string }> = {
  blue:   { from: "#1f55c6", to: "#3730a3" },
  green:  { from: "#059669", to: "#0f766e" },
  purple: { from: "#7c3aed", to: "#5b21b6" },
  pink:   { from: "#ec4899", to: "#be185d" },
};

export default function ProjectRowCard({ project }: { project: Project }) {
  const colors = PROJECT_COLORS[project.color ?? "blue"];

  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
      <div className="grid md:grid-cols-[260px_1fr]">
        {/* Left — gradient block */}
        <div
          className="flex items-center justify-center p-8"
          style={{ background: `linear-gradient(135deg, ${colors.from}, ${colors.to})` }}
        >
          <span className="text-center text-base font-bold text-white drop-shadow">
            {project.title}
          </span>
        </div>

        {/* Right — content */}
        <div className="p-7 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="text-base font-bold text-neutral-900">{project.title}</div>
            {project.year && (
              <span className="shrink-0 text-xs text-neutral-500">{project.year}</span>
            )}
          </div>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-700">
            {project.summary}
          </p>

          {/* Tech stack chips */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-700"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-5">
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1f55c6] hover:underline"
              >
                GitHub <span aria-hidden>→</span>
              </a>
            )}
            {project.links?.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-600 hover:text-neutral-900 hover:underline"
              >
                Live Demo <span aria-hidden>↗</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
