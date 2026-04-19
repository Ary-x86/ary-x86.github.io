import Link from "next/link";
import SectionFade from "@/components/SectionFade";
import ModeToggle from "@/components/ModeToggle";
import NumberedHeading from "@/components/NumberedHeading";
import ProjectCarousel from "@/components/ProjectCarousel";
import FunBootScreen from "@/components/FunBootScreen";
import FunHero from "@/components/FunHero";
import SplineRobot from "@/components/SplineRobot";
import { funProjects, FUN_CATEGORIES } from "@/lib/projects";

export const metadata = {
  title: "Aryan Swami-Persaud — /fun",
  description:
    "University coursework, explainers, visualisations, essays and stray experiments.",
};

export default function Fun() {
  return (
    <>
      <FunBootScreen />

      <header className="absolute top-0 left-0 right-0 z-20 mx-auto flex max-w-6xl items-center justify-between px-6 pt-8 sm:pt-10">
        <Link
          href="/fun/"
          className="flex items-center gap-2.5 text-xs uppercase tracking-[0.22em]"
        >
          <span
            className="h-2 w-2 rounded-full"
            style={{
              background: "linear-gradient(135deg,#7c3aed,#0ea5e9,#ec4899)",
            }}
            aria-hidden
          />
          <span className="text-[color:var(--foreground)]">ary-x86</span>
          <span className="text-[color:var(--muted)]">/ fun</span>
        </Link>
        <nav className="flex items-center gap-6 text-xs uppercase tracking-widest text-[color:var(--muted)]">
          <ModeToggle variant="fun" />
        </nav>
      </header>

      <FunHero />

      <main>
        {/* Projects + category filter */}
        <section className="section-teal relative py-32">
          <div className="mx-auto max-w-6xl px-6">
            <NumberedHeading
              num="02"
              label="Projects"
              title={
                <>
                  Pick a lane,
                  <br />
                  <span
                    className="italic font-medium"
                    style={{
                      fontFamily: "ui-serif, Georgia, Cambria, serif",
                      background: "linear-gradient(110deg,#c4b5fd,#22d3ee)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    wander through.
                  </span>
                </>
              }
              subtitle="University coursework, essays, hobby research, little experiments. Filter by category. Every link opens in a new tab."
            />
            <div className="mt-12">
              <ProjectCarousel
                items={funProjects}
                categories={FUN_CATEGORIES}
              />
            </div>
          </div>
        </section>

        {/* Experiments / robot corner */}
        <SectionFade className="section-violet relative py-40" as="section">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1fr_1fr] md:items-center">
            <div>
              <NumberedHeading
                num="03"
                label="Experiments"
                title={
                  <>
                    Small things,
                    <br />
                    <span
                      className="italic font-medium text-[color:var(--muted)]"
                      style={{ fontFamily: "ui-serif, Georgia, Cambria, serif" }}
                    >
                      made for fun.
                    </span>
                  </>
                }
                subtitle="Not everything has to be serious. Some of the best things I&apos;ve learned came from messing around with ideas that weren&apos;t going anywhere. I&apos;ll park more of those here over time."
              />
            </div>

            <div
              className="relative aspect-square w-full max-w-[420px] mx-auto md:mx-0"
              aria-hidden
            >
              <SplineRobot className="absolute inset-0" />
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl"
                style={{
                  boxShadow: "inset 0 0 80px rgba(124,58,237,0.25)",
                }}
              />
            </div>
          </div>
        </SectionFade>

        {/* Archive pointer */}
        <SectionFade className="relative py-32" as="section">
          <div className="mx-auto max-w-6xl px-6">
            <div className="card-surface rounded-3xl p-10 sm:p-14">
              <div className="flex flex-wrap items-end justify-between gap-6">
                <NumberedHeading
                  num="04"
                  label="Archive"
                  title={
                    <>
                      Older things,
                      <br />
                      <span
                        className="italic font-medium text-[color:var(--muted)]"
                        style={{ fontFamily: "ui-serif, Georgia, Cambria, serif" }}
                      >
                        kept for posterity.
                      </span>
                    </>
                  }
                  subtitle="Earlier coursework. Preserved so links don&apos;t die — not representative of current work."
                />
                <Link
                  href="/archive/"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm hover:border-white/40 transition-colors"
                >
                  Enter /archive →
                </Link>
              </div>
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
            <Link href="/" className="hover:text-[color:var(--foreground)]">
              /
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
