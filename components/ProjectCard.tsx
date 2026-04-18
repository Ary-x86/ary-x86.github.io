"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

const EASE = [0.22, 1, 0.36, 1] as const;

type Props = {
  project: Project;
  featured?: boolean;
  index?: number;
};

export default function ProjectCard({ project, featured, index = 0 }: Props) {
  return (
    <motion.a
      href={project.href}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.7, ease: EASE, delay: index * 0.06 }}
      whileHover={{ y: -5 }}
      className={`card-surface group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl p-6 sm:p-7 transition-colors hover:border-[color:var(--foreground)]/30 ${
        featured ? "lg:p-10" : ""
      }`}
      style={{ textDecoration: "none" }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-80"
        style={{
          background:
            "radial-gradient(closest-side, rgba(14,165,233,0.6), transparent 70%)",
        }}
      />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex items-baseline gap-3">
          <span
            className="font-mono text-[0.65rem] text-[color:var(--muted)] tracking-widest"
            style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3
            className={`font-bold tracking-tight text-[color:var(--foreground)] ${
              featured ? "text-2xl sm:text-3xl" : "text-xl"
            }`}
          >
            {project.title}
          </h3>
        </div>
        <span
          aria-hidden
          className="mt-1 shrink-0 text-[color:var(--muted)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[color:var(--foreground)]"
        >
          ↗
        </span>
      </div>

      <p
        className={`relative text-sm leading-relaxed text-[color:var(--muted)] ${
          featured ? "sm:text-base max-w-xl" : ""
        }`}
      >
        {project.blurb}
      </p>

      <ul className="relative mt-auto flex flex-wrap gap-1.5 pt-2">
        {project.tags.map((t) => (
          <li
            key={t}
            className="rounded-full border border-[color:var(--border)] px-2.5 py-0.5 text-[0.6rem] uppercase tracking-[0.2em] text-[color:var(--muted)] group-hover:border-[color:var(--foreground)]/30 transition-colors"
          >
            {t}
          </li>
        ))}
      </ul>
    </motion.a>
  );
}
