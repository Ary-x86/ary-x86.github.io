import Link from "next/link";
import CreativeHero from "@/components/CreativeHero";
import SectionFade from "@/components/SectionFade";
import ProjectCard from "@/components/ProjectCard";
import HorizontalScroll from "@/components/HorizontalScroll";
import ModeToggle from "@/components/ModeToggle";
import NumberedHeading from "@/components/NumberedHeading";
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
        <Link
          href="/creative/"
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
          <span className="text-[color:var(--muted)]">/ creative</span>
        </Link>
        <nav className="flex items-center gap-6 text-xs uppercase tracking-widest text-[color:var(--muted)]">
          <ModeToggle variant="creative" />
        </nav>
      </header>

      <CreativeHero />

      <main>
        {/* University Goodies — horizontal scroll */}
        <HorizontalScroll label="03 · university goodies" className="bg-[color:var(--background)]">
          <div className="flex w-[calc(100vw-3rem)] shrink-0 flex-col justify-center sm:w-[42rem]">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="font-mono text-xs text-[color:var(--muted)]"
                style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}
              >
                03
              </span>
              <span className="h-px w-10 bg-[color:var(--border)]" />
              <span className="label">Math + CS, visualised</span>
            </div>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] leading-[0.95]">
              Interactive
              <br />
              explainers
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
                of the math I love.
              </span>
            </h2>
            <p className="mt-6 max-w-md text-[color:var(--muted)]">
              Built during coursework, kept public because they stayed useful to me and
              maybe someone else.
            </p>
          </div>
          {uniProjects.map((p, i) => (
            <div key={p.id} className="w-[22rem] shrink-0 sm:w-[26rem]">
              <ProjectCard project={p} index={i} />
            </div>
          ))}
        </HorizontalScroll>

        {/* Essays */}
        <SectionFade className="mx-auto max-w-6xl px-6 py-32" as="section">
          <div id="essays" className="grid gap-10 md:grid-cols-[1fr_1.6fr]">
            <NumberedHeading
              num="04"
              label="Essays"
              title={
                <>
                  Systems,
                  <br />
                  <span
                    className="italic font-medium text-[color:var(--muted)]"
                    style={{ fontFamily: "ui-serif, Georgia, Cambria, serif" }}
                  >
                    thinking, politics.
                  </span>
                </>
              }
              subtitle="Slower-burn writing. Treat social questions like dynamical ones."
            />
            <div className="grid gap-5 sm:grid-cols-2">
              {essayProjects.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </div>
          </div>
        </SectionFade>

        {/* Fun research */}
        <SectionFade className="mx-auto max-w-6xl px-6 py-32" as="section">
          <div id="research" className="space-y-14">
            <NumberedHeading
              num="05"
              label="Fun research"
              title={
                <>
                  AgriAI <span className="text-[color:var(--muted)]">+</span>
                  <br />
                  <span
                    className="italic font-medium text-[color:var(--muted)]"
                    style={{ fontFamily: "ui-serif, Georgia, Cambria, serif" }}
                  >
                    DROS.
                  </span>
                </>
              }
              subtitle="The Leafshift work also sits here — it's research as much as it is product. Re-contextualised for the curious rather than the serious."
            />
            <div className="grid gap-5 md:grid-cols-2">
              {agriResearch.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </div>
          </div>
        </SectionFade>

        {/* Art / project goodies — placeholder */}
        <SectionFade className="mx-auto max-w-6xl px-6 py-32" as="section">
          <div
            id="art"
            className="card-surface relative overflow-hidden rounded-3xl p-10 sm:p-16"
          >
            <div
              aria-hidden
              className="absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full opacity-50 blur-[120px]"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(236,72,153,0.55), transparent 70%)",
              }}
            />
            <NumberedHeading
              num="06"
              label="Art · Project goodies"
              title={
                <>
                  Sketchbook slot —
                  <br />
                  <span
                    className="italic font-medium text-[color:var(--muted)]"
                    style={{ fontFamily: "ui-serif, Georgia, Cambria, serif" }}
                  >
                    filling in soon.
                  </span>
                </>
              }
              subtitle="Reserved for experiments, generative bits, and side projects that don't fit a clean category. Check back, or poke the easter egg."
            />
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
