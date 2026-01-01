// src/app/projects/page.tsx
"use client";

import { useMemo, useState } from "react";
import Container from "@/components/Container";
import ProjectRowCard from "@/components/ProjectRowCard";
import { projects, type ProjectCategory } from "@/data/projects";

const filters: { label: string; value: "all" | ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Software Engineering", value: "web" },
  { label: "Design", value: "design" },
  { label: "Digital Marketing", value: "marketing" },
];

export default function ProjectsPage() {
  const [active, setActive] = useState<"all" | ProjectCategory>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return projects
      .filter((p) => (active === "all" ? true : p.category === active))
      .filter((p) => {
        if (!q) return true;
        return (
          p.title.toLowerCase().includes(q) ||
          p.summary.toLowerCase().includes(q) ||
          p.tags.join(" ").toLowerCase().includes(q)
        );
      });
  }, [active, query]);

  return (
    <Container>
      {/* Header */}
      <section className="py-12">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="mt-3 max-w-2xl text-neutral-700">
          A selection of work across software engineering, design, and digital marketing.
        </p>

        {/* Filters + Search */}
        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => {
              const isActive = active === f.value;
              return (
                <button
                  key={f.value}
                  onClick={() => setActive(f.value)}
                  className={[
                    "rounded-full border px-4 py-2 text-sm font-semibold transition",
                    isActive
                      ? "border-[#1f55c6] bg-[#1f55c6] text-white"
                      : "border-neutral-200 bg-white text-neutral-800 hover:bg-neutral-50",
                  ].join(" ")}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects..."
            className="w-full rounded-xl border border-neutral-200 px-4 py-2 text-sm outline-none focus:border-[#1f55c6] md:w-80"
          />
        </div>
      </section>

      {/* Rows */}
      <section className="pb-16">
        <div className="space-y-6">
          {filtered.map((p) => (
            <ProjectRowCard key={p.slug} project={p} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 text-neutral-700">
            No projects found. Try another filter or search term.
          </div>
        )}
      </section>
    </Container>
  );
}
