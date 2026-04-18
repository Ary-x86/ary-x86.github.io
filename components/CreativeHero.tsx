"use client";

import { motion } from "framer-motion";

export default function CreativeHero() {
  return (
    <section className="relative min-h-[100vh] overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="mesh" />
        <div className="grid-lines" />
      </div>

      <div className="relative mx-auto flex min-h-[100vh] max-w-6xl flex-col justify-center px-6 py-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="label mb-6"
        >
          Creative · Exploration · Goodies
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-5xl sm:text-7xl lg:text-8xl"
        >
          Other side<br />
          <span className="italic font-medium text-[color:var(--accent)]">of the brain.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-8 max-w-xl text-lg text-[color:var(--muted)] leading-relaxed"
        >
          Math + CS visualisers, systems-thinking essays, fun research, stray art.
          Less pitch deck, more sketchbook.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-14 flex flex-col gap-2 text-xs uppercase tracking-widest text-[color:var(--muted)]"
        >
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)] animate-pulse" />
            scroll to explore
          </span>
        </motion.div>
      </div>

      <style jsx>{`
        .mesh {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(60rem 40rem at 12% 18%, rgba(124, 58, 237, 0.55), transparent 60%),
            radial-gradient(50rem 35rem at 88% 8%, rgba(14, 165, 233, 0.5), transparent 60%),
            radial-gradient(55rem 40rem at 50% 95%, rgba(236, 72, 153, 0.45), transparent 60%),
            radial-gradient(40rem 30rem at 15% 90%, rgba(34, 197, 94, 0.35), transparent 60%);
          filter: blur(40px) saturate(1.1);
          animation: drift 22s ease-in-out infinite alternate;
        }
        .grid-lines {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
          background-size: 80px 80px;
          mask-image: radial-gradient(ellipse at center, black 40%, transparent 85%);
          -webkit-mask-image: radial-gradient(ellipse at center, black 40%, transparent 85%);
        }
        @keyframes drift {
          0% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(2%, -1.5%, 0) scale(1.05); }
          100% { transform: translate3d(-1.5%, 2%, 0) scale(1.02); }
        }
      `}</style>
    </section>
  );
}
