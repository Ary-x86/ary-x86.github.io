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
  "Leiden University",
  "Data Science & AI",
  "Machine Learning",
  "Deep Learning",
  "Low-level + High-level",
  "Cybersecurity",
  "Mathematics",
  "Dynamical Systems",
];

const INTERESTS = [
  ["Studying", "Data Science & AI at Leiden University"],
  ["Into", "ML, DL, math (low + high level), programming languages"],
  ["Also curious about", "Cybersecurity, policy as dynamical systems"],
  ["Based", "The Netherlands"],
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
          <ModeToggle variant="main" />
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        {/* Hero */}
        <section id="hero" className="relative flex min-h-[88vh] flex-col justify-center py-20">
          <div className="grid items-center gap-10 md:grid-cols-[1.3fr_1fr]">
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <span
                  className="font-mono text-xs text-[color:var(--muted)]"
                  style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}
                >
                  00
                </span>
                <span className="h-px w-10 bg-[color:var(--border)]" />
                <span className="label">Student · Leiden University</span>
              </div>

              <h1 className="text-[clamp(2.5rem,8vw,6.5rem)] leading-[0.95]">
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

              <p className="mt-8 max-w-xl text-base sm:text-lg text-[color:var(--muted)] leading-relaxed">
                Data Science &amp; AI student at Leiden. Curious about everything, mainly machine
                learning, deep learning, low-level and high-level programming,
                mathematics, cybersecurity, and modelling systems as dynamical
                ones. I like working on projects, collaborating, and trading
                ideas. My goal in life is polymathy. I believe studying any field
                is simply a case study for understanding the world at large. To understand
                one field deeply is to gain a lens through which all other fields become clearer."
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#work"
                  className="rounded-full bg-[color:var(--foreground)] px-6 py-3 text-sm font-medium text-[color:var(--background)] hover:bg-[color:var(--accent)] transition-colors"
                >
                  See my work →
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-[color:var(--border)] px-6 py-3 text-sm font-medium text-[color:var(--foreground)] hover:border-[color:var(--foreground)] transition-colors"
                >
                  Get in touch
                </a>
                <Link
                  href="/fun/"
                  className="group flex items-center gap-2 px-2 py-3 text-sm text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors"
                >
                  or wander into /fun
                  <span className="transition-transform group-hover:translate-x-1">↗</span>
                </Link>
              </div>
            </div>

            {/* 3D accent — beside name, not behind */}
            <div
              aria-hidden
              className="relative mx-auto aspect-square w-full max-w-[420px] md:mx-0"
            >
              <div className="absolute inset-0">
                <ProAccentLoader />
              </div>
              <div
                className="pointer-events-none absolute inset-0 rounded-full opacity-40 blur-3xl -z-10"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(124,58,237,0.45), transparent 70%)",
                }}
              />
            </div>
          </div>

          {/* Interests strip */}
          <div className="relative mt-20 grid grid-cols-2 gap-8 border-t border-[color:var(--border)] pt-8 sm:grid-cols-4">
            {INTERESTS.map(([k, v]) => (
              <div key={k}>
                <p className="label mb-2">{k}</p>
                <p className="text-sm text-[color:var(--foreground)] leading-relaxed">{v}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Marquee */}
        <div className="mt-6">
          <Marquee items={MARQUEE} speed={50} />
        </div>

        {/* About */}
        <SectionFade className="py-32" as="section">
          <div id="about">
            <NumberedHeading
              num="01"
              label="About"
              title={
                <>
                  A student who likes
                  <br />
                  <span
                    className="italic font-medium text-[color:var(--muted)]"
                    style={{ fontFamily: "ui-serif, Georgia, Cambria, serif" }}
                  >
                    a lot of things.
                  </span>
                </>
              }
              subtitle={
                <>
                  I study Data Science &amp; AI at Leiden. I spend a lot of time
                  programming — from memory-level C work to higher-level
                  Python/TypeScript — and I&apos;m genuinely interested in most
                  of it. I like mathematics, machine learning and deep
                  learning, cybersecurity, and treating social / policy
                  questions as dynamical systems. Outside coursework I build
                  small things, write, and talk to people who know things I
                  don&apos;t.
                </>
              }
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["I code in", "Python · TypeScript · C · a bit of Rust"],
                ["Tools I use", "PyTorch · Next.js · Linux · Git"],
                ["Open to", "Research, collaboration, questions"],
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
                label="My work"
                title={
                  <>
                    What I&apos;m
                    <br />
                    <span
                      className="italic font-medium text-[color:var(--muted)]"
                      style={{ fontFamily: "ui-serif, Georgia, Cambria, serif" }}
                    >
                      building.
                    </span>
                  </>
                }
                subtitle="The career-facing projects. University coursework, essays and hobby research live on /fun."
              />
              <Link
                href="/fun/"
                className="hidden shrink-0 sm:block text-sm text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors"
              >
                Wander into /fun →
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
              <div className="card-surface rounded-2xl p-6 sm:p-7 border-dashed border-[color:var(--border)]/60">
                <p className="label mb-2">More coming</p>
                <p className="text-sm text-[color:var(--muted)] leading-relaxed">
                  I&apos;m a student, so this section is intentionally small.
                  Serious projects will land here as they happen. Poke /fun for
                  everything else.
                </p>
              </div>
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
                  Questions, collaboration,
                  <br />
                  <span
                    className="italic font-medium text-[color:var(--muted)]"
                    style={{ fontFamily: "ui-serif, Georgia, Cambria, serif" }}
                  >
                    or just saying hi.
                  </span>
                </>
              }
              subtitle="Recruiters, researchers, fellow students — all welcome. Email gets read first."
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
                href="/fun/"
                className="rounded-full border border-[color:var(--border)] px-6 py-3 text-sm font-medium hover:border-[color:var(--accent)] transition-colors"
              >
                /fun →
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
            © {new Date().getFullYear()} · Aryan Swami-Persaud
          </span>
          <span className="flex gap-5">
            <Link href="/fun/" className="hover:text-[color:var(--foreground)]">
              /fun
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
