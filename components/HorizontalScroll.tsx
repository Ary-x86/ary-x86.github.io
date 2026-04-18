"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  label?: string;
};

export default function HorizontalScroll({ children, className, label }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    let cancelled = false;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      const wrap = wrapRef.current;
      const track = trackRef.current;
      if (!wrap || !track) return;

      const ctx = gsap.context(() => {
        const total = () => track.scrollWidth - window.innerWidth;
        gsap.to(track, {
          x: () => -total(),
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            pin: true,
            scrub: 0.6,
            start: "top top",
            end: () => `+=${total()}`,
            invalidateOnRefresh: true,
          },
        });
      }, wrap);

      cleanup = () => ctx.revert();
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return (
    <section ref={wrapRef} className={`relative overflow-hidden ${className ?? ""}`}>
      {label && (
        <p className="label absolute top-8 left-6 z-10 sm:left-10">{label}</p>
      )}
      <div
        ref={trackRef}
        className="flex h-screen items-center gap-8 px-6 sm:gap-12 sm:px-10 will-change-transform"
      >
        {children}
      </div>
    </section>
  );
}
