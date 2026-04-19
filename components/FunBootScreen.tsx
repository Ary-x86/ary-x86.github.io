"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const KEY = "fun-entered";

const LINES = [
  "> initializing /fun",
  "> loading hobby projects ...",
  "> ready. welcome.",
];

export default function FunBootScreen() {
  const [visible, setVisible] = useState<boolean | null>(null);
  const [typed, setTyped] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [canEnter, setCanEnter] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(KEY) === "1";
    } catch {}
    setVisible(!seen);
  }, []);

  useEffect(() => {
    if (!visible) return;

    document.body.style.overflow = "hidden";
    const timers: number[] = [];

    let i = 0;
    const step = () => {
      if (i >= LINES.length) return;
      setTyped((t) => [...t, LINES[i]]);
      i += 1;
      timers.push(window.setTimeout(step, 520));
    };
    timers.push(window.setTimeout(step, 260));

    const start = Date.now();
    const tick = () => {
      const el = Math.min(1, (Date.now() - start) / 1800);
      setProgress(el);
      if (el < 1) {
        timers.push(window.requestAnimationFrame(tick) as unknown as number);
      } else {
        setCanEnter(true);
      }
    };
    timers.push(window.requestAnimationFrame(tick) as unknown as number);

    return () => {
      document.body.style.overflow = "";
      timers.forEach((t) => {
        window.clearTimeout(t);
        window.cancelAnimationFrame?.(t);
      });
    };
  }, [visible]);

  useEffect(() => {
    if (!canEnter) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        dismiss();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [canEnter]);

  const dismiss = () => {
    try {
      sessionStorage.setItem(KEY, "1");
    } catch {}
    setVisible(false);
  };

  if (visible === null) {
    return null;
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="fun-boot"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="fixed inset-0 z-[150] flex flex-col items-center justify-center"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(22,22,30,1) 0%, rgba(6,6,10,1) 70%)",
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Entering fun"
        >
          <div className="scanlines pointer-events-none absolute inset-0" aria-hidden />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
            className="relative w-[min(92vw,32rem)] px-6"
          >
            <div className="mb-8 flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.3em] text-[color:var(--muted)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7c3aed] animate-pulse" />
              ary-x86 :: /fun
            </div>

            <h2
              className="text-3xl sm:text-4xl leading-tight mb-6"
              style={{ fontFamily: "ui-serif, Georgia, Cambria, serif" }}
            >
              <span
                className="italic"
                style={{
                  background: "linear-gradient(120deg,#c4b5fd,#22d3ee,#f472b6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                welcome.
              </span>
            </h2>

            <pre
              className="text-xs sm:text-sm leading-relaxed text-[#c4b5fd] whitespace-pre-wrap"
              style={{
                fontFamily:
                  "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
              }}
              aria-live="polite"
            >
              {typed.join("\n")}
              {!canEnter && <span className="caret">█</span>}
            </pre>

            <div className="mt-10">
              <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/5">
                <motion.div
                  className="h-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #7c3aed, #0ea5e9, #ec4899)",
                  }}
                  animate={{ width: `${Math.round(progress * 100)}%` }}
                  transition={{ ease: "linear", duration: 0 }}
                />
              </div>
              <div className="mt-2 flex items-center justify-between text-[0.6rem] uppercase tracking-[0.25em] text-[color:var(--muted)]">
                <span>{Math.round(progress * 100).toString().padStart(3, "0")}%</span>
                <span>{canEnter ? "ready" : "loading"}</span>
              </div>
            </div>

            <AnimatePresence>
              {canEnter && (
                <motion.button
                  key="enter"
                  type="button"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: EASE }}
                  onClick={dismiss}
                  className="mt-10 w-full rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm uppercase tracking-[0.3em] hover:border-white/40 hover:bg-white/10 transition-colors"
                >
                  enter /fun →
                </motion.button>
              )}
            </AnimatePresence>

            <p className="mt-6 text-[0.6rem] uppercase tracking-[0.3em] text-[color:var(--muted)]">
              press enter / space to continue
            </p>
          </motion.div>

          <style jsx>{`
            .caret {
              display: inline-block;
              margin-left: 2px;
              animation: blink 1s steps(2, start) infinite;
            }
            @keyframes blink {
              to {
                visibility: hidden;
              }
            }
            .scanlines {
              background: repeating-linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0.025) 0px,
                rgba(255, 255, 255, 0.025) 1px,
                transparent 1px,
                transparent 3px
              );
              mix-blend-mode: overlay;
              opacity: 0.5;
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
