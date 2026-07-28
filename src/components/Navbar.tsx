// src/components/Navbar.tsx
import Link from "next/link";
import Container from "./Container";
import { Icon } from "./Icons";

export default function Navbar() {
  return (
    <header className="bg-[#1f55c6] text-white">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Left: logo + name */}
          <Link href="/" className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-md border border-white/30">
              <span className="text-xs font-semibold">AD</span>
            </div>

            <div className="leading-tight">
              <div className="text-base font-semibold">Abdoulaye Diallo</div>
              <div className="text-xs text-white/80">Software Engineer</div>
            </div>
          </Link>

          {/* Right: nav */}
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <Link className="inline-flex items-center gap-1.5 text-white/90 transition hover:-translate-y-0.5 hover:text-white" href="/projects">
              <Icon name="layers" className="h-4 w-4" /> Projects
            </Link>
            <a className="inline-flex items-center gap-1.5 text-white/90 transition hover:-translate-y-0.5 hover:text-white" href="/Resume-AbdoulayeDiallo.pdf" target="_blank" rel="noopener noreferrer">
              <Icon name="download" className="h-4 w-4" /> Resume
            </a>
            <Link className="inline-flex items-center gap-1.5 text-white/90 transition hover:-translate-y-0.5 hover:text-white" href="/#about">
              <Icon name="user" className="h-4 w-4" /> About
            </Link>
            <Link className="inline-flex items-center gap-1.5 text-white/90 transition hover:-translate-y-0.5 hover:text-white" href="/#contact">
              <Icon name="mail" className="h-4 w-4" /> Contact
            </Link>
          </nav>

          {/* Mobile (simple) */}
          <Link
            href="/projects"
            className="rounded-md border border-white/25 px-3 py-1 text-sm md:hidden"
          >
            Projects
          </Link>
        </div>
      </Container>
    </header>
  );
}
