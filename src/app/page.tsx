// src/app/page.tsx
import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";


type SkillCard = {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  footer: string;
  imageSrc: string;
};

const skillCards: SkillCard[] = [
  {
    title: "Software Engineering",
    subtitle: "Building scalable systems that solve real problems",
    description:
      "I develop reliable, high-performance applications focused on accessibility, efficiency, and long-term impact—bridging technology and real-world needs.",
    href: "/projects/",
    footer: "React · Next.js · Node · APIs · Databases · Deployment",
    imageSrc: "/projects/software.jpg",
  },
  {
    title: "Design",
    subtitle: "Designing clear, human-centered digital experiences",
    description:
      "I translate ideas into thoughtful interfaces aligned with culture, values, and purpose—prioritizing usability, clarity, and visual balance.",
    href: "/projects/",
    footer: "Figma · Adobe · UX/UI · Design Systems · Branding",
    imageSrc: "/projects/design.jpg",
  },
  {
    title: "Digital Marketing",
    subtitle: "Positioning brands to grow in the digital world",
    description:
      "I help businesses reach the right audience through strategic positioning, data-driven campaigns, and digital experiences that convert.",
    href: "/projects/",
    footer: "SEO · Analytics · Funnels · Content · Ads",
    imageSrc: "/projects/marketing.jpg",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="py-14">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                Software Engineer ·<br />
                Product Designer · Digital Growth Builder
              </h1>

              <p className="mt-5 max-w-xl text-base text-neutral-700">
                I help ideas become scalable digital products, from design to deployment to growth.
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
                  className="rounded-lg border border-[#1f55c6] px-5 py-2.5 text-sm font-semibold text-[#1f55c6] hover:bg-blue-50"
                   target="_blank"
                >
                  Resume
                </Link>

                <Link
                  href="/#contact"
                  className="rounded-lg border border-[#1f55c6] px-5 py-2.5 text-sm font-semibold text-[#1f55c6] hover:bg-blue-50"
                >
                  Contact Me
                </Link>
              </div>
            </div>

            {/* PHOTO */}
            <div className="flex justify-center md:justify-end">
                <div className="relative h-59 w-59 overflow-hidden rounded-full bg-white shadow-md">
                <Image
                  src="/profile.jpg"
                  alt="Abdoulaye Diallo"
                  fill
                  className="object-contain scale-110"
                  priority
                />
              </div>
            </div>
          </div>

          {/* STATS */}
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            <Stat title="8+ Years" desc="Engineering, design & digital products" />
            <Stat title="10+ Projects" desc="Web apps, platforms & brands" />
            <Stat title="3 Languages:" desc="English, French, Fulani" />
            <Stat title="Multiple Honors" desc="Jack Kent Cooke Scholar · Academic Excellence" />
          </div>
        </Container>
      </section>

      {/* RANGE OF PROJECTS */}
      <section className="py-8">
        <Container>
          <div className="mb-6">
            <h2 className="text-xl font-bold">Range of Projects</h2>
            <p className="mt-1 text-sm text-neutral-600">
              From idea to impact — design, build, and market digital products.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {skillCards.map((c) => (
              <SkillCard key={c.title} card={c} />
            ))}
          </div>
        </Container>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-10 scroll-mt-24" >
        <Container>
          <div className="mb-3 text-sm font-semibold text-neutral-800">About:</div>

          <div className="grid overflow-hidden rounded-2xl border border-neutral-200 bg-white md:grid-cols-[240px_1fr]">
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
                I am a software engineer with a strong foundation in planning, designing, and
                building full-stack applications. I turn ideas into real, scalable products through
                a combination of engineering, design thinking, and digital growth strategies — from
                concept to deployment.
              </p>

              <p className="mt-4 text-sm font-semibold text-neutral-800">
                I’m driven by impact, clarity, and building solutions that last.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-10 scroll-mt-24">
        <Container>
          <div className="text-center text-sm font-semibold text-neutral-800">Contact:</div>

          <div className="mt-4 overflow-hidden rounded-2xl border border-neutral-200 bg-white">
            <div className="grid gap-6 p-6 md:grid-cols-2 md:p-8">
              {/* Left */}
              <div className="space-y-4">
                <Field label="Full name:" placeholder="" />
                <Field label="Email:" placeholder="" />

                <button className="mt-2 rounded-lg bg-[#1f55c6] px-6 py-2.5 text-sm font-semibold text-white hover:opacity-95">
                  Submit
                </button>
              </div>

              {/* Right */}
              <div>
                <label className="mb-2 block text-xs font-semibold text-neutral-700">
                  Message:
                </label>
                <textarea
                  className="h-32 w-full resize-none rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none focus:border-[#1f55c6]"
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
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

function SkillCard({ card }: { card: SkillCard }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
      {/* Top image area */}
      <div className="relative h-40 w-full bg-neutral-100">
        {/* Uses the image you placed in /public/projects/... */}
        <Image
          src={card.imageSrc}
          alt={card.title}
          fill
          className="object-cover"
          priority={card.title === "Software Engineering"}
        />
      </div>

      <div className="p-6">
        <h3 className="text-base font-bold">{card.title}</h3>
        <p className="mt-2 text-sm font-semibold text-neutral-800">{card.subtitle}</p>

        <p className="mt-3 text-sm leading-6 text-neutral-600">{card.description}</p>

        <Link
          href={card.href}
          className="mt-4 inline-block text-sm font-semibold text-[#1f55c6] hover:underline"
        >
          View Projects
        </Link>

        <div className="mt-4 border-t border-neutral-200 pt-3 text-xs text-neutral-600">
          {card.footer}
        </div>
      </div>
    </div>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold text-neutral-700">{label}</label>
      <input
        className="h-10 w-full rounded-xl border border-neutral-200 px-4 text-sm outline-none focus:border-[#1f55c6]"
        placeholder={placeholder}
      />
    </div>
  );
}
