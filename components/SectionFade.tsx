"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "section" | "div" | "article";
};

export default function SectionFade({ children, className, delay = 0, as = "section" }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    let cancelled = false;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      const el = ref.current;
      if (!el) return;

      const ctx = gsap.context(() => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            delay,
            ease: "expo.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }, el);

      cleanup = () => ctx.revert();
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [delay]);

  const style = { opacity: 0 };

  if (as === "div") {
    return (
      <div
        ref={(node) => {
          ref.current = node;
        }}
        className={className}
        style={style}
      >
        {children}
      </div>
    );
  }
  if (as === "article") {
    return (
      <article
        ref={(node) => {
          ref.current = node;
        }}
        className={className}
        style={style}
      >
        {children}
      </article>
    );
  }
  return (
    <section
      ref={(node) => {
        ref.current = node;
      }}
      className={className}
      style={style}
    >
      {children}
    </section>
  );
}
