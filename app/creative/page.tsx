import Link from "next/link";
import CreativeHero from "@/components/CreativeHero";
import SectionFade from "@/components/SectionFade";
import ProjectCard from "@/components/ProjectCard";
import HorizontalScroll from "@/components/HorizontalScroll";
import ModeToggle from "@/components/ModeToggle";
import { uniProjects, essayProjects, projects } from "@/lib/projects";

export const metadata = {
  title: "Aryan Swami-Persaud — Creative",
  description:
    "Math + CS visualisers, systems-thinking essays, fun research, stray art.",
};

export default function Creative() {
  const agriResearch = projects.filter((p) =>
    ["agriai-dros", "dros-research"].includes(p.id),
  );

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-20 mx-auto flex max-w-6xl items-center justify-between px-6 pt-8 sm:pt-10">
        <p className="label">ary-x86 · creative</p>
        <nav className="flex items-center gap-6 text-xs uppercase tracking-widest text-[color:var(--muted)]">
          <ModeToggle variant="creative" />
        </nav>
      </header>

      <CreativeHero />

      <main>
        {/* University Goodies — horizontal scroll */}
        <HorizontalScroll label="University goodies" className="bg-[color:var(--background)]">
          <div className="flex w-[calc(100vw-3rem)] shrink-0 flex-col justify-center sm:w-[38rem]">
            <p className="label mb-4">Math + CS, visualised</p>
            <h2 className="text-4xl sm:text-6xl">
              Interactive<br />explainers<br />
              <span className="italic font-medium text-[color:var(--accent)]">of the math I love.</span>
            </h2>
            <p className="mt-6 max-w-md text-[color:var(--muted)]">
              Built during coursework, kept public because they stayed useful to me and
              maybe someone else.
            </p>
          </div>
          {uniProjects.map((p) => (
            <div key={p.id} className="w-[22rem] shrink-0 sm:w-[26rem]">
              <ProjectCard project={p} />
            </div>
          ))}
        </HorizontalScroll>

        {/* Essays */}
        <SectionFade className="mx-auto max-w-6xl px-6 py-32" as="section">
          <div id="essays" className="grid gap-10 md:grid-cols-3">
            <div className="md:col-span-1">
              <p className="label mb-3">Essays</p>
              <h2 className="text-3xl sm:text-5xl">Systems, thinking, politics.</h2>
              <p className="mt-5 text-[color:var(--muted)]">
                Slower-burn writing. Treat social questions like dynamical ones.
              </p>
            </div>
            <div className="md:col-span-2 grid gap-5 sm:grid-cols-2">
              {essayProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </SectionFade>

        {/* Fun research */}
        <SectionFade className="mx-auto max-w-6xl px-6 py-32" as="section">
          <div id="research" className="space-y-10">
            <div className="flex items-end justify-between">
              <div>
                <p className="label mb-3">Fun research</p>
                <h2 className="text-3xl sm:text-5xl">AgriAI + DROS.</h2>
              </div>
            </div>
            <p className="max-w-2xl text-[color:var(--muted)]">
              The Leafshift work also sits here — it&apos;s research as much as it is product.
              Re-contextualised here for the curious rather than the serious.
            </p>
            <div className="grid gap-5 md:grid-cols-2">
              {agriResearch.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </SectionFade>

        {/* Art / project goodies — placeholder */}
        <SectionFade className="mx-auto max-w-6xl px-6 py-32" as="section">
          <div id="art" className="card-surface rounded-2xl p-10 sm:p-14">
            <p className="label mb-3">Art · Project goodies</p>
            <h2 className="text-3xl sm:text-5xl max-w-3xl">
              Sketchbook slot — filling in soon.
            </h2>
            <p className="mt-6 max-w-2xl text-[color:var(--muted)]">
              Reserved for experiments, generative bits, and side projects that don&apos;t
              fit a clean category. Check back, or poke the easter egg.
            </p>
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
