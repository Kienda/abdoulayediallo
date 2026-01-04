// src/app/projects/[slug]/page.tsx
import Container from "@/components/Container";
import FigmaEmbed from "@/components/FigmaEmbed";
import Link from "next/link";
import { projects } from "@/data/projects";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Container>
        <section className="py-16">
          <h1 className="text-4xl font-bold">Project not found</h1>
          <p className="mt-2 text-neutral-700">No project matches: {slug}</p>
          <Link className="mt-6 inline-block text-[#1f55c6] hover:underline" href="/projects">
            ← Back to Projects
          </Link>
        </section>
      </Container>
    );
  }

  return (
    <Container>
      {/* Header */}
      <section className="py-12">
        <h1 className="text-5xl font-bold tracking-tight">{project.title}</h1>
        <p className="mt-3 max-w-2xl text-neutral-700">{project.summary}</p>
      </section>

      {/* ✅ Only show this UI/UX section for the design project */}
      {project.slug === "sample-design" && (
        <section className="pb-16 space-y-8">
          <div className="rounded-2xl border border-neutral-200 bg-white p-7">
            <h2 className="text-xl font-bold">ColumbiaCribs (UI/UX)</h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-neutral-700">
              Designed a campus housing review experience enabling Columbia students to share reliable
              building reviews. Led key parts of the visual identity and high-fidelity UI, collaborating
              with the team on components and interaction patterns.
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-700">
              <li>Designed the logo and visual identity to support trust and clarity</li>
              <li>Created reusable UI components and consistent spacing/type scale</li>
              <li>Iterated through feedback loops with teammates and stakeholders</li>
            </ul>
          </div>

          <FigmaEmbed
            title="ColumbiaCribs — High Fidelity Prototype"
            src="https://embed.figma.com/design/CloiEorTdQuJTFpWJaZ1IK/UID-Team-26-High-Fidelity-Design?node-id=46-171&embed-host=share"
          />

          <div className="rounded-2xl border border-neutral-200 bg-white p-7">
            <h2 className="text-xl font-bold">Cmynd E-Commerce Concept</h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-neutral-700">
              A high-fidelity e-commerce UI concept created to practice product design, layout systems,
              and conversion-focused UX patterns including product browsing, cart, and checkout confirmation.
            </p>
          </div>

          <FigmaEmbed
            title="Cmynd — E-Commerce UI Prototype"
            src="https://embed.figma.com/design/cicjLTbYFu3cluWCOLBnG7/cmynd-E-com-V1?node-id=251-249&embed-host=share"
          />
        </section>
      )}

      {/* Back link */}
      <div className="pb-16">
        <Link className="text-[#1f55c6] hover:underline" href="/projects">
          ← Back to Projects
        </Link>
      </div>
    </Container>
  );
}
