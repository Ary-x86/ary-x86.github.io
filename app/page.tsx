import Link from "next/link";
import RadialGlows from "@/components/RadialGlows";
import SectionFade from "@/components/SectionFade";
import ProjectCard from "@/components/ProjectCard";
import ModeToggle from "@/components/ModeToggle";
import { proProjects } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <RadialGlows />

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 pt-8 sm:pt-10">
        <p className="label">ary-x86 · pro</p>
        <nav className="flex items-center gap-6 text-xs uppercase tracking-widest text-[color:var(--muted)]">
          <a href="#work" className="hover:text-[color:var(--foreground)] transition-colors">
            Work
          </a>
          <a href="#about" className="hover:text-[color:var(--foreground)] transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-[color:var(--foreground)] transition-colors">
            Contact
          </a>
          <ModeToggle variant="pro" />
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        {/* Hero */}
        <section className="flex min-h-[82vh] flex-col justify-center py-20">
          <p className="label mb-6">Data Science · AI · Research</p>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl">
            Aryan<br />Swami-Persaud
          </h1>
          <p className="mt-8 max-w-2xl text-lg sm:text-xl text-[color:var(--muted)] leading-relaxed">
            Data Science &amp; AI student. Founder of{" "}
            <span className="text-[color:var(--foreground)]">Leafshift</span> — building{" "}
            <span className="text-[color:var(--foreground)]">AgriAI</span> and{" "}
            <span className="text-[color:var(--foreground)]">DROS</span>, a bio-inspired
            decision system combining sparse MoE and selective state-spaces.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="rounded-full bg-[color:var(--foreground)] px-5 py-2.5 text-sm font-medium text-[color:var(--background)] hover:bg-[color:var(--accent)] transition-colors"
            >
              See work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[color:var(--border)] px-5 py-2.5 text-sm font-medium text-[color:var(--foreground)] hover:border-[color:var(--foreground)] transition-colors"
            >
              Get in touch
            </a>
          </div>
        </section>

        {/* About */}
        <SectionFade className="py-24" as="section">
          <div id="about" className="grid gap-10 md:grid-cols-3">
            <p className="label md:col-span-1">About</p>
            <div className="md:col-span-2 space-y-6">
              <p className="text-2xl leading-relaxed">
                I work at the intersection of <strong>applied ML</strong>,{" "}
                <strong>systems thinking</strong>, and <strong>eco-tech</strong> — translating
                research into tools that hold up in the field.
              </p>
              <p className="text-base text-[color:var(--muted)] leading-relaxed">
                Through Leafshift, I&apos;m building an agriculture stack that treats farms as
                dynamical systems. The DROS research paper synthesises sparse
                mixture-of-experts, selective state-space models, and bio-inspired control
                into a single resilient architecture. Alongside the research I do low-level
                security work (C exploits, memory safety), math &amp; CS visualisers, and the
                occasional systems-thinking essay.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {["Next.js", "PyTorch", "C", "Systems Thinking", "Research", "Founder"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs tracking-wide text-[color:var(--muted)]"
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </SectionFade>

        {/* Work */}
        <SectionFade className="py-24" as="section">
          <div id="work" className="space-y-10">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="label mb-3">Selected work</p>
                <h2 className="text-3xl sm:text-4xl">Research, systems, and exploits.</h2>
              </div>
              <Link
                href="/creative/"
                className="hidden sm:inline text-sm text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors"
              >
                More in /creative →
              </Link>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {proProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </SectionFade>

        {/* Contact */}
        <SectionFade className="py-24" as="section">
          <div
            id="contact"
            className="card-surface relative overflow-hidden rounded-2xl p-10 sm:p-14"
          >
            <p className="label mb-4">Contact</p>
            <h2 className="text-3xl sm:text-5xl max-w-3xl">
              Research, collaboration, or a reason to ship something weird — all welcome.
            </h2>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="mailto:leafshiftsolutions@gmail.com"
                className="rounded-full bg-[color:var(--foreground)] px-5 py-2.5 text-sm font-medium text-[color:var(--background)] hover:bg-[color:var(--accent)] transition-colors"
              >
                leafshiftsolutions@gmail.com
              </a>
              <a
                href="https://github.com/ary-x86"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[color:var(--border)] px-5 py-2.5 text-sm font-medium hover:border-[color:var(--foreground)] transition-colors"
              >
                GitHub ↗
              </a>
              <Link
                href="/creative/"
                className="rounded-full border border-[color:var(--border)] px-5 py-2.5 text-sm font-medium hover:border-[color:var(--accent)] transition-colors"
              >
                Creative side →
              </Link>
            </div>
          </div>
        </SectionFade>
      </main>

      <footer className="mx-auto mt-16 max-w-6xl px-6 py-10 text-xs text-[color:var(--muted)]">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[color:var(--border)] pt-8">
          <span>© {new Date().getFullYear()} Aryan Swami-Persaud · Leafshift</span>
          <span className="flex gap-5">
            <Link href="/creative/" className="hover:text-[color:var(--foreground)]">
              /creative
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
