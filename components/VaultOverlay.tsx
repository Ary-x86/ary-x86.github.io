"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { vaultProjects } from "@/lib/projects";

type Props = {
  open: boolean;
  onClose: () => void;
};

const BOOT_LINES = [
  "> booting vault...",
  "> bypassing pro/creative separation",
  "> ACCESS GRANTED — VAULT OPEN",
];

export default function VaultOverlay({ open, onClose }: Props) {
  const [phase, setPhase] = useState<"boot" | "grid">("boot");
  const [typed, setTyped] = useState<string[]>([]);

  useEffect(() => {
    if (!open) return;
    setPhase("boot");
    setTyped([]);

    let idx = 0;
    const timers: number[] = [];
    const step = () => {
      if (idx >= BOOT_LINES.length) {
        timers.push(window.setTimeout(() => setPhase("grid"), 600));
        return;
      }
      const line = BOOT_LINES[idx];
      setTyped((t) => [...t, line]);
      idx += 1;
      timers.push(window.setTimeout(step, 450));
    };
    timers.push(window.setTimeout(step, 200));

    return () => {
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="vault"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] flex flex-col bg-black text-[#7cff9a]"
          style={{
            fontFamily:
              "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Vault"
        >
          <div className="scanlines pointer-events-none absolute inset-0" aria-hidden />

          <div className="relative flex items-center justify-between border-b border-[#1f3a24] px-6 py-4 text-xs uppercase tracking-widest">
            <span className="text-[#7cff9a]">ary-x86 :: vault</span>
            <button
              type="button"
              onClick={onClose}
              className="text-[#7cff9a]/70 hover:text-[#7cff9a] transition-colors"
              aria-label="Close vault"
            >
              [ esc / close ]
            </button>
          </div>

          <div className="relative flex-1 overflow-y-auto px-6 py-10 sm:px-10 sm:py-14">
            <pre
              className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap"
              aria-live="polite"
            >
              {typed.join("\n")}
              <span className="caret">█</span>
            </pre>

            <AnimatePresence>
              {phase === "grid" && (
                <motion.div
                  key="grid"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, delay: 0.1 }}
                  className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {vaultProjects.map((p) => (
                    <a
                      key={p.id}
                      href={p.href}
                      className="group border border-[#1f3a24] bg-[#041a0c] p-5 transition-colors hover:border-[#7cff9a] hover:bg-[#072912]"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-lg font-bold text-[#c3ffce]">
                          {p.title}
                        </h3>
                        <span
                          aria-hidden
                          className="text-[#7cff9a]/70 transition-transform group-hover:translate-x-1"
                        >
                          &gt;
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-[#7cff9a]/80">{p.blurb}</p>
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative border-t border-[#1f3a24] px-6 py-3 text-[0.65rem] uppercase tracking-widest text-[#7cff9a]/60">
            <span>typed phrase accepted · session-only · nothing persisted</span>
          </div>

          <style jsx>{`
            .caret {
              display: inline-block;
              margin-left: 2px;
              animation: blink 1s steps(2, start) infinite;
            }
            @keyframes blink {
              to { visibility: hidden; }
            }
            .scanlines {
              background: repeating-linear-gradient(
                to bottom,
                rgba(124, 255, 154, 0.04) 0px,
                rgba(124, 255, 154, 0.04) 1px,
                transparent 1px,
                transparent 3px
              );
              mix-blend-mode: overlay;
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
