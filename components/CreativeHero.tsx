"use client";

import { motion } from "framer-motion";
import SplineHero from "./SplineHero";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export default function CreativeHero() {
  return (
    <section className="relative min-h-[100vh] overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="mesh" />
        <SplineHero />
        <div className="grid-lines" />
        <div className="vignette" />
      </div>

      <div className="relative mx-auto flex min-h-[100vh] max-w-6xl flex-col justify-end px-6 pb-24 pt-40 sm:pb-32 sm:pt-48">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="label">Creative · 02</span>
          <span className="h-px flex-1 max-w-[8rem] bg-[color:var(--border)]" aria-hidden />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE_OUT, delay: 0.1 }}
          className="text-[clamp(3rem,9vw,8rem)] leading-[0.95]"
        >
          Other side
          <br />
          <span
            className="italic font-medium tracking-tight"
            style={{
              fontFamily: "ui-serif, Georgia, Cambria, serif",
              background: "linear-gradient(120deg,#c4b5fd,#22d3ee,#f472b6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            of the brain.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.3 }}
          className="mt-10 max-w-xl text-base sm:text-lg text-[color:var(--muted)] leading-relaxed"
        >
          Math + CS visualisers, systems-thinking essays, fun research, stray art.
          Less pitch deck, more sketchbook.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: EASE_OUT }}
          className="mt-16 flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.3em] text-[color:var(--muted)]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)] animate-pulse" />
          scroll to explore
        </motion.div>
      </div>

      <style jsx>{`
        .mesh {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(60rem 40rem at 12% 18%, rgba(124, 58, 237, 0.45), transparent 60%),
            radial-gradient(50rem 35rem at 88% 8%, rgba(14, 165, 233, 0.4), transparent 60%),
            radial-gradient(55rem 40rem at 50% 95%, rgba(236, 72, 153, 0.35), transparent 60%),
            radial-gradient(40rem 30rem at 15% 90%, rgba(34, 197, 94, 0.28), transparent 60%);
          filter: blur(46px) saturate(1.1);
          animation: drift 26s ease-in-out infinite alternate;
        }
        .grid-lines {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
          background-size: 96px 96px;
          mask-image: radial-gradient(ellipse at center, black 40%, transparent 85%);
          -webkit-mask-image: radial-gradient(ellipse at center, black 40%, transparent 85%);
        }
        .vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse at center,
            transparent 40%,
            rgba(11, 11, 15, 0.85) 100%
          );
          pointer-events: none;
        }
        @keyframes drift {
          0% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(2%, -1.5%, 0) scale(1.04); }
          100% { transform: translate3d(-1.5%, 2%, 0) scale(1.02); }
        }
      `}</style>
    </section>
  );
}
