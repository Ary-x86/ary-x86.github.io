"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  variant?: "pro" | "creative";
};

export default function ModeToggle({ variant }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [transitioning, setTransitioning] = useState(false);

  const onCreative = variant === "creative" || pathname?.startsWith("/creative");
  const target = onCreative ? "/" : "/creative/";
  const label = onCreative ? "Pro" : "Creative";
  const arrow = onCreative ? "←" : "→";

  const bg = onCreative
    ? "rgb(11, 11, 15)"
    : "linear-gradient(135deg, #0ea5e9, #7c3aed 50%, #ec4899)";

  const handleClick = () => {
    if (transitioning) return;
    setTransitioning(true);
    try {
      sessionStorage.setItem("modeTransition", "1");
    } catch {}
    window.setTimeout(() => router.push(target), 600);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        aria-label={`Switch to ${label} mode`}
        className="group flex items-center gap-3 rounded-full border border-[color:var(--border)] px-3 py-1.5 text-xs uppercase tracking-widest text-[color:var(--foreground)] hover:border-[color:var(--accent)] transition-colors"
      >
        <span className="cube-wrap" aria-hidden>
          <span className="cube">
            <span className="face f1" />
            <span className="face f2" />
            <span className="face f3" />
            <span className="face f4" />
            <span className="face f5" />
            <span className="face f6" />
          </span>
        </span>
        <span>{label}</span>
        <span aria-hidden className="text-[color:var(--muted)] transition-transform group-hover:translate-x-0.5">
          {arrow}
        </span>
      </button>

      <AnimatePresence>
        {transitioning && (
          <motion.div
            key="mode-overlay"
            initial={{ clipPath: "circle(0% at calc(100% - 3rem) 3rem)" }}
            animate={{ clipPath: "circle(160% at calc(100% - 3rem) 3rem)" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.72, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] pointer-events-none"
            style={{ background: bg }}
          />
        )}
      </AnimatePresence>

      <style jsx>{`
        .cube-wrap {
          display: inline-block;
          width: 18px;
          height: 18px;
          perspective: 120px;
        }
        .cube {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          animation: cube-spin 9s linear infinite;
          transition: animation-play-state 0.2s;
        }
        .group:hover .cube {
          animation-duration: 3s;
        }
        .face {
          position: absolute;
          width: 18px;
          height: 18px;
          border: 1px solid currentColor;
          opacity: 0.85;
        }
        .f1 { transform: translateZ(9px); }
        .f2 { transform: rotateY(90deg) translateZ(9px); }
        .f3 { transform: rotateY(180deg) translateZ(9px); }
        .f4 { transform: rotateY(-90deg) translateZ(9px); }
        .f5 { transform: rotateX(90deg) translateZ(9px); }
        .f6 { transform: rotateX(-90deg) translateZ(9px); }
        @keyframes cube-spin {
          from { transform: rotateX(0deg) rotateY(0deg); }
          to { transform: rotateX(360deg) rotateY(360deg); }
        }
      `}</style>
    </>
  );
}
