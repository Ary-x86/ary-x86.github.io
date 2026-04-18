"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.a
      href={project.href}
      initial={false}
      whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.18)" }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="card-surface group relative flex flex-col gap-4 rounded-xl p-6 transition-colors"
      style={{ textDecoration: "none" }}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-bold tracking-tight text-[color:var(--foreground)]">
          {project.title}
        </h3>
        <span
          aria-hidden
          className="mt-1 text-[color:var(--muted)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
        >
          ↗
        </span>
      </div>
      <p className="text-sm leading-relaxed text-[color:var(--muted)]">{project.blurb}</p>
      <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
        {project.tags.map((t) => (
          <li
            key={t}
            className="rounded-full border border-[color:var(--border)] px-2.5 py-0.5 text-[0.65rem] uppercase tracking-widest text-[color:var(--muted)]"
          >
            {t}
          </li>
        ))}
      </ul>
    </motion.a>
  );
}
