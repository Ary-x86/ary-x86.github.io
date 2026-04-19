"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function ModeReveal() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);

  useEffect(() => {
    let flag: string | null = null;
    try {
      flag = sessionStorage.getItem("modeTransition");
    } catch {}
    if (flag !== "1") return;
    try {
      sessionStorage.removeItem("modeTransition");
    } catch {}

    setActive(true);
    const t = window.setTimeout(() => setActive(false), 750);
    return () => window.clearTimeout(t);
  }, [pathname]);

  const onFun = pathname?.startsWith("/fun") || pathname?.startsWith("/archive");
  const bg = onFun
    ? "linear-gradient(135deg, #0ea5e9, #7c3aed 50%, #ec4899)"
    : "rgb(11, 11, 15)";

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="mode-reveal"
          initial={{ clipPath: "circle(160% at calc(100% - 3rem) 3rem)" }}
          animate={{ clipPath: "circle(0% at calc(100% - 3rem) 3rem)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] pointer-events-none"
          style={{ background: bg }}
        />
      )}
    </AnimatePresence>
  );
}
