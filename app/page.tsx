import Link from "next/link";
import RadialGlows from "@/components/RadialGlows";
import SectionFade from "@/components/SectionFade";
import ProjectCard from "@/components/ProjectCard";
import ModeToggle from "@/components/ModeToggle";
import NumberedHeading from "@/components/NumberedHeading";
import Marquee from "@/components/Marquee";
import SideRail from "@/components/SideRail";
import ProAccentLoader from "@/components/ProAccentLoader";
import { proProjects } from "@/lib/projects";

const RAIL = [
  { id: "hero", label: "Intro" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

const MARQUEE = [
  "Data Science",
  "Applied ML",
  "Systems Thinking",
  "AgriAI",
  "DROS",
  "Research",
  "C + Security",
  "Leafshift",
];

export default function Home() {
  return (
    <>
      <RadialGlows />
      <SideRail items={RAIL} />

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 pt-8 sm:pt-10">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-xs uppercase tracking-[0.22em]"
        >
          <span className="h-2 w-2 rotate-45 bg-[color:var(--foreground)]" aria-hidden />
          <span className="text-[color:var(--foreground)]">ary-x86</span>
          <span className="text-[color:var(--muted)]">/ pro</span>
        </Link>
        <nav className="flex items-center gap-6 text-xs uppercase tracking-widest text-[color:var(--muted)]">
          <a href="#work" className="hidden sm:inline hover:text-[color:var(--foreground)] transition-colors">
            Work
          </a>
          <a href="#about" className="hidden sm:inline hover:text-[color:var(--foreground)] transition-colors">
            About
          </a>
          <a href="#contact" className="hidden sm:inline hover:text-[color:var(--foreground)] transition-colors">
            Contact
          </a>
          <ModeToggle variant="pro" />
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        {/* Hero */}
        <section id="hero" className="relative flex min-h-[90vh] flex-col justify-center py-20">
          <div aria-hidden className="absolute inset-x-0 top-0 bottom-20 -z-0 opacity-80">
            <ProAccentLoader />
          </div>

          <div className="relative">
            <div className="flex items-center gap-3 mb-8">
              <span
                className="font-mono text-xs text-[color:var(--muted)]"
                style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}
              >
                00
              </span>
              <span className="h-px w-10 bg-[color:var(--border)]" />
              <span className="label">Data Science · AI · Research</span>
            </div>

            <h1 className="text-[clamp(3rem,10vw,9rem)] leading-[0.9]">
              Aryan<br />
              <span
                className="italic font-medium"
                style={{
                  fontFamily: "ui-serif, Georgia, Cambria, serif",
                  letterSpacing: "-0.035em",
                }}
              >
                Swami-Persaud.
              </span>
            </h1>

            <p className="mt-10 max-w-2xl text-lg sm:text-xl text-[color:var(--muted)] leading-relaxed">
              Data Science &amp; AI student. Founder of{" "}
              <span className="text-[color:var(--foreground)]">Leafshift</span>. Building{" "}
              <span className="text-[color:var(--foreground)]">AgriAI</span> and{" "}
              <span className="text-[color:var(--foreground)]">DROS</span> — a bio-inspired
              decision system that fuses sparse mixture-of-experts with selective
              state-spaces.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="rounded-full bg-[color:var(--foreground)] px-6 py-3 text-sm font-medium text-[color:var(--background)] hover:bg-[color:var(--accent)] transition-colors"
              >
                See work →
              </a>
              <a
                href="#contact"
                className="rounded-full border border-[color:var(--border)] px-6 py-3 text-sm font-medium text-[color:var(--foreground)] hover:border-[color:var(--foreground)] transition-colors"
              >
                Get in touch
              </a>
              <Link
                href="/creative/"
                className="group flex items-center gap-2 px-2 py-3 text-sm text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors"
              >
                or browse the creative side
                <span className="transition-transform group-hover:translate-x-1">↗</span>
              </Link>
            </div>
          </div>

          {/* Hero meta strip */}
          <div className="relative mt-24 grid grid-cols-2 gap-8 border-t border-[color:var(--border)] pt-8 sm:grid-cols-4">
            {[
              ["Role", "DS / AI Student"],
              ["Company", "Leafshift"],
              ["Research", "DROS"],
              ["Based", "The Netherlands"],
            ].map(([k, v]) => (
              <div key={k}>
                <p className="label mb-2">{k}</p>
                <p className="text-sm text-[color:var(--foreground)]">{v}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Marquee */}
        <div className="mt-6">
          <Marquee items={MARQUEE} speed={45} />
        </div>

        {/* About */}
        <SectionFade className="py-32" as="section">
          <div id="about">
            <NumberedHeading
              num="01"
              label="About"
              title={
                <>
                  Applied ML, systems thinking,
                  <br />
                  <span
                    className="italic font-medium text-[color:var(--muted)]"
                    style={{ fontFamily: "ui-serif, Georgia, Cambria, serif" }}
                  >
                    eco-tech.
                  </span>
                </>
              }
              subtitle={
                <>
                  I translate research into tools that hold up in the field. Through
                  Leafshift, I&apos;m building an agriculture stack that treats farms as
                  dynamical systems. The DROS paper combines sparse
                  mixture-of-experts, selective state-spaces, and bio-inspired control into
                  a single resilient architecture. Alongside the research I do low-level
                  security work, math &amp; CS visualisers, and the occasional
                  systems-thinking essay.
                </>
              }
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Research", "Sparse MoE · Selective SSMs · Bio-inspired"],
                ["Build", "Next.js · PyTorch · C"],
                ["Think", "Dynamical systems · Policy · Essays"],
                ["Ship", "AgriAI · DROS · Coursework"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="card-surface rounded-xl p-5 hover:border-[color:var(--foreground)]/30 transition-colors"
                >
                  <p className="label mb-2">{k}</p>
                  <p className="text-sm leading-relaxed">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionFade>

        {/* Work */}
        <SectionFade className="py-32" as="section">
          <div id="work" className="space-y-14">
            <div className="flex items-end justify-between gap-6">
              <NumberedHeading
                num="02"
                label="Selected work"
                title={
                  <>
                    Research, systems,
                    <br />
                    <span
                      className="italic font-medium text-[color:var(--muted)]"
                      style={{ fontFamily: "ui-serif, Georgia, Cambria, serif" }}
                    >
                      exploits.
                    </span>
                  </>
                }
              />
              <Link
                href="/creative/"
                className="hidden shrink-0 sm:block text-sm text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors"
              >
                More in /creative →
              </Link>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {proProjects.map((p, i) => (
                <div
                  key={p.id}
                  className={i === 0 ? "lg:col-span-2 lg:row-span-1" : ""}
                >
                  <ProjectCard project={p} featured={i === 0} index={i} />
                </div>
              ))}
            </div>
          </div>
        </SectionFade>

        {/* Contact */}
        <SectionFade className="py-32" as="section">
          <div id="contact" className="card-surface relative overflow-hidden rounded-3xl p-10 sm:p-16">
            <div
              aria-hidden
              className="absolute -top-40 -right-40 h-[28rem] w-[28rem] rounded-full opacity-60 blur-[120px]"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(14,165,233,0.55), transparent 70%)",
              }}
            />
            <NumberedHeading
              num="03"
              label="Contact"
              title={
                <>
                  Research, collaboration,
                  <br />
                  <span
                    className="italic font-medium text-[color:var(--muted)]"
                    style={{ fontFamily: "ui-serif, Georgia, Cambria, serif" }}
                  >
                    or something weird.
                  </span>
                </>
              }
              subtitle="All welcome. Email gets read first."
            />
            <div className="relative mt-12 flex flex-wrap gap-3">
              <a
                href="mailto:leafshiftsolutions@gmail.com"
                className="rounded-full bg-[color:var(--foreground)] px-6 py-3 text-sm font-medium text-[color:var(--background)] hover:bg-[color:var(--accent)] transition-colors"
              >
                leafshiftsolutions@gmail.com ↗
              </a>
              <a
                href="https://github.com/ary-x86"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[color:var(--border)] px-6 py-3 text-sm font-medium hover:border-[color:var(--foreground)] transition-colors"
              >
                GitHub ↗
              </a>
              <Link
                href="/creative/"
                className="rounded-full border border-[color:var(--border)] px-6 py-3 text-sm font-medium hover:border-[color:var(--accent)] transition-colors"
              >
                Creative side →
              </Link>
            </div>
          </div>
        </SectionFade>
      </main>

      <footer className="mx-auto mt-10 max-w-6xl px-6 py-12 text-xs text-[color:var(--muted)]">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[color:var(--border)] pt-8">
          <span
            className="font-mono"
            style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}
          >
            © {new Date().getFullYear()} · Aryan Swami-Persaud · Leafshift
          </span>
          <span className="flex gap-5">
            <Link href="/creative/" className="hover:text-[color:var(--foreground)]">
              /creative
            </Link>
            <Link href="/archive/" className="hover:text-[color:var(--foreground)]">
              /archive
            </Link>
            <a href="/legacy/" className="hover:text-[color:var(--foreground)]">
              /legacy
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}
