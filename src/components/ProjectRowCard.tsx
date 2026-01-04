// src/components/ProjectRowCard.tsx
import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectRowCard({ project }: { project: Project }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
      <div className="grid md:grid-cols-[260px_1fr]">
        {/* Left blue block */}
        <div className="bg-[#1f55c6] p-8">
          <div className="relative mx-auto aspect-square max-w-[190px] overflow-hidden rounded-2xl border-2 border-white/70 bg-white/5">
            {project.thumbnail ? (
              <Image
                src={project.thumbnail}
                alt={`${project.title} thumbnail`}
                fill
                className="object-contain p-4"
                priority={project.featured}
              />
            ) : null}
          </div>
        </div>

        {/* Right content */}
        <div className="p-7 md:p-8">
          <div className="text-base font-bold text-neutral-900">
            {project.title}
          </div>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-700">
            {project.summary}
          </p>

          <div className="mt-5 flex items-center justify-end">
            {project.links?.github && (
  <a
    href={project.links.github}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 text-sm font-semibold text-[#1f55c6] hover:underline"
  >
    View Project <span aria-hidden>→</span>
  </a>
)}

          </div>
        </div>
      </div>
    </div>
  );
}
