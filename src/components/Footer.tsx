// src/components/Footer.tsx
import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#1f55c6] text-white">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-md border border-white/30">
                <span className="text-xs font-semibold">AD</span>
              </div>
              <div className="leading-tight">
                <div className="font-semibold">Abdoulaye Diallo</div>
                <div className="text-xs text-white/80">The Future is now</div>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="text-sm">
            <div className="mb-3 font-semibold">Pages</div>
            <ul className="space-y-2 text-white/85">
              <li>
                <Link className="hover:text-white" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/resume">
                  Resume
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="text-sm">
            <div className="mb-3 font-semibold">Connect</div>
            <ul className="space-y-2 text-white/85">
              <li>
                <a className="hover:text-white" href="#" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#" target="_blank" rel="noreferrer">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 py-6 text-center text-sm text-white/85">
          Copyright: {new Date().getFullYear()}
        </div>
      </Container>
    </footer>
  );
}
