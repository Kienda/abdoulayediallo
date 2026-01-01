// src/app/page.tsx
import Container from "@/components/Container";
import Link from "next/link";

export default function HomePage() {
  return (
    <Container>
      {/* HERO */}
      <section className="py-14">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Software Engineer ·<br />
              Product Designer · Digital Growth Builder
            </h1>

            <p className="mt-5 max-w-xl text-base text-neutral-700">
              I help ideas become scalable digital products — from design to deployment to growth.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="rounded-lg bg-[#1f55c6] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-95"
              >
                View Projects
              </Link>

              <Link
                href="/resume"
                className="rounded-lg border border-[#1f55c6] px-5 py-2.5 text-sm font-semibold text-[#1f55c6] hover:bg-blue-50"
              >
                Resume
              </Link>

              <Link
                href="/contact"
                className="rounded-lg border border-[#1f55c6] px-5 py-2.5 text-sm font-semibold text-[#1f55c6] hover:bg-blue-50"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Photo placeholder */}
          <div className="flex justify-center md:justify-end">
            <div className="h-44 w-44 overflow-hidden rounded-full border border-neutral-200 bg-neutral-100" />
          </div>
        </div>

        {/* STATS */}
        <div className="mt-12 grid gap-8 md:grid-cols-4">
          <Stat title="8+ Years" desc="Engineering, design & digital products" />
          <Stat title="10+ Projects" desc="Web apps, platforms & brands" />
          <Stat title="3" desc="Languages: English, French, Fulani" />
          <Stat title="Multiple Honors" desc="Jack Kent Cooke Scholar · Academic Excellence" />
        </div>
      </section>
    </Container>
  );
}

function Stat({ title, desc }: { title: string; desc: string }) {
  return (
    <div>
      <div className="text-2xl font-bold">{title}</div>
      <div className="mt-2 text-sm text-neutral-700">{desc}</div>
    </div>
  );
}
