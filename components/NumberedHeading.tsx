"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  num: string;
  label: string;
  title: ReactNode;
  subtitle?: ReactNode;
};

const EASE = [0.22, 1, 0.36, 1] as const;

export default function NumberedHeading({ num, label, title, subtitle }: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-[auto_1fr] md:gap-10 items-start">
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7, ease: EASE }}
        className="flex items-baseline gap-3"
      >
        <span
          className="font-mono text-xs text-[color:var(--muted)]"
          style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}
        >
          {num}
        </span>
        <span className="h-px w-10 bg-[color:var(--border)]" aria-hidden />
        <span className="label">{label}</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.08 }}
      >
        <h2 className="text-3xl sm:text-5xl tracking-tight">{title}</h2>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-[color:var(--muted)] leading-relaxed">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}
