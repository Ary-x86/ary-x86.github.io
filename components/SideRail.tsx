"use client";

import { useEffect, useState } from "react";

type Item = { id: string; label: string };

type Props = {
  items: Item[];
};

export default function SideRail({ items }: Props) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    items.forEach((it) => {
      const el = document.getElementById(it.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(it.id);
          });
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [items]);

  return (
    <nav
      aria-label="Section index"
      className="fixed left-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-4 lg:flex"
    >
      {items.map((it, i) => {
        const isActive = it.id === active;
        return (
          <a
            key={it.id}
            href={`#${it.id}`}
            className="group flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.3em] text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors"
          >
            <span
              className="font-mono"
              style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}
            >
              0{i + 1}
            </span>
            <span
              className={`h-px transition-all duration-500 ${
                isActive ? "w-10 bg-[color:var(--foreground)]" : "w-5 bg-[color:var(--border)]"
              }`}
              aria-hidden
            />
            <span
              className={`transition-opacity ${
                isActive ? "opacity-100 text-[color:var(--foreground)]" : "opacity-60"
              }`}
            >
              {it.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
