"use client";

import { useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project, Category } from "@/lib/projects";

const EASE = [0.22, 1, 0.36, 1] as const;

type Props = {
  items: Project[];
  categories: { key: Category; label: string; description: string }[];
  initialCategory?: Category;
};

export default function ProjectCarousel({
  items,
  categories,
  initialCategory,
}: Props) {
  const [active, setActive] = useState<Category>(
    initialCategory ?? categories[0].key,
  );
  const scroller = useRef<HTMLDivElement | null>(null);

  const filtered = useMemo(
    () => items.filter((p) => p.category === active),
    [items, active],
  );

  const currentMeta = categories.find((c) => c.key === active);

  const scroll = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    const step = Math.round(el.clientWidth * 0.8);
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Category pills */}
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((c) => {
          const isActive = c.key === active;
          return (
            <button
              key={c.key}
              type="button"
              onClick={() => setActive(c.key)}
              className={`rounded-full border px-4 py-1.5 text-xs uppercase tracking-[0.2em] transition-colors ${
                isActive
                  ? "border-white/60 bg-white/10 text-[color:var(--foreground)]"
                  : "border-white/10 text-[color:var(--muted)] hover:border-white/30 hover:text-[color:var(--foreground)]"
              }`}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      {currentMeta && (
        <AnimatePresence mode="wait">
          <motion.p
            key={currentMeta.key}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="mb-6 max-w-2xl text-sm text-[color:var(--muted)]"
          >
            {currentMeta.description}
          </motion.p>
        </AnimatePresence>
      )}

      {/* Carousel */}
      <div className="relative">
        {filtered.length > 0 && (
          <div className="pointer-events-none absolute -top-12 right-0 flex gap-2 sm:top-0 sm:-translate-y-[calc(100%+0.5rem)]">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Scroll left"
              className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-[color:var(--muted)] hover:border-white/40 hover:text-[color:var(--foreground)] transition-colors"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Scroll right"
              className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-[color:var(--muted)] hover:border-white/40 hover:text-[color:var(--foreground)] transition-colors"
            >
              →
            </button>
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: EASE }}
            ref={scroller}
            className="scroll-row relative flex gap-5 overflow-x-auto pb-6 pt-4 snap-x snap-mandatory"
            style={{ perspective: "1400px" }}
          >
            {filtered.length === 0 && (
              <div className="w-full rounded-2xl border border-dashed border-white/10 p-10 text-sm text-[color:var(--muted)]">
                Nothing here yet — I&apos;ll be filling this bucket in over time.
              </div>
            )}
            {filtered.map((p, i) => (
              <CarouselCard key={p.id} project={p} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <style jsx>{`
        .scroll-row {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.18) transparent;
        }
        .scroll-row::-webkit-scrollbar {
          height: 6px;
        }
        .scroll-row::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.18);
          border-radius: 999px;
        }
      `}</style>
    </div>
  );
}

function CarouselCard({ project, index }: { project: Project; index: number }) {
  const isExternal = project.external || project.href.startsWith("http");
  const newTab = isExternal
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  const gradients = [
    "linear-gradient(135deg,#7c3aed,#0ea5e9)",
    "linear-gradient(135deg,#ec4899,#7c3aed)",
    "linear-gradient(135deg,#0ea5e9,#22d3ee)",
    "linear-gradient(135deg,#22c55e,#0ea5e9)",
    "linear-gradient(135deg,#f472b6,#c084fc)",
  ];

  return (
    <motion.a
      href={project.href}
      {...newTab}
      whileHover={{ y: -6, rotateY: -4, rotateX: 2 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="group relative flex w-[20rem] shrink-0 snap-center flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm sm:w-[24rem]"
      style={{ transformStyle: "preserve-3d", textDecoration: "none" }}
    >
      <div
        className="relative aspect-[16/10] w-full overflow-hidden"
        style={{
          background: project.thumbnail
            ? undefined
            : gradients[index % gradients.length],
        }}
      >
        {project.thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.thumbnail}
            alt=""
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
            <span
              className="text-lg font-semibold leading-tight"
              style={{ color: "rgba(255,255,255,0.88)" }}
            >
              {project.title}
            </span>
          </div>
        )}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(11,11,15,0.92) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold leading-snug text-[color:var(--foreground)]">
            {project.title}
          </h3>
          <span
            aria-hidden
            className="mt-0.5 shrink-0 text-[color:var(--muted)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[color:var(--foreground)]"
          >
            ↗
          </span>
        </div>
        <p className="text-xs leading-relaxed text-[color:var(--muted)]">
          {project.blurb}
        </p>
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.tags.slice(0, 3).map((t) => (
            <li
              key={t}
              className="rounded-full border border-white/10 px-2 py-0.5 text-[0.55rem] uppercase tracking-[0.2em] text-[color:var(--muted)]"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </motion.a>
  );
}
