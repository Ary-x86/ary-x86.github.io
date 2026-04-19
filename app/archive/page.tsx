import Link from "next/link";
import RadialGlows from "@/components/RadialGlows";
import SectionFade from "@/components/SectionFade";
import ProjectCard from "@/components/ProjectCard";
import ModeToggle from "@/components/ModeToggle";
import { archiveProjects } from "@/lib/projects";

export const metadata = {
  title: "Archive — Aryan Swami-Persaud",
  description: "Older coursework, kept for posterity.",
};

export default function Archive() {
  return (
    <>
      <RadialGlows />

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 pt-8 sm:pt-10">
        <p className="label">ary-x86 · archive</p>
        <nav className="flex items-center gap-6 text-xs uppercase tracking-widest text-[color:var(--muted)]">
          <Link
            href="/fun/"
            className="hover:text-[color:var(--foreground)] transition-colors"
          >
            ← /fun
          </Link>
          <ModeToggle variant="fun" />
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-20">
        <SectionFade className="mb-16" as="section">
          <div className="flex items-center gap-3 mb-8">
            <span
              className="font-mono text-xs text-[color:var(--muted)]"
              style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}
            >
              07
            </span>
            <span className="h-px w-10 bg-[color:var(--border)]" />
            <span className="label">Archive</span>
          </div>
          <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95]">
            Older
            <br />
            <span
              className="italic font-medium text-[color:var(--muted)]"
              style={{ fontFamily: "ui-serif, Georgia, Cambria, serif" }}
            >
              coursework.
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-[color:var(--muted)] leading-relaxed">
            Kept for posterity rather than promotion. Not actively maintained, not
            representative of current work — just preserved so links don&apos;t die.
          </p>
        </SectionFade>

        <SectionFade as="section">
          <div className="grid gap-5 md:grid-cols-2">
            {archiveProjects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </SectionFade>
      </main>

      <footer className="mx-auto mt-10 max-w-6xl px-6 py-12 text-xs text-[color:var(--muted)]">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[color:var(--border)] pt-8">
          <span>© {new Date().getFullYear()} Aryan Swami-Persaud</span>
          <span className="flex gap-5">
            <Link href="/" className="hover:text-[color:var(--foreground)]">
              /
            </Link>
            <Link href="/fun/" className="hover:text-[color:var(--foreground)]">
              /fun
            </Link>
          </span>
        </div>
      </footer>
    </>
  );
}
