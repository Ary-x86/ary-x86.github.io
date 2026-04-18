"use client";

import { useEffect, useState, useCallback } from "react";
import VaultOverlay from "./VaultOverlay";

const TRIGGERS = ["sisi", "meow"];
const BUFFER_LEN = 8;

function isEditable(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return true;
  if (target.isContentEditable) return true;
  return false;
}

export default function EasterEggListener() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    let buffer = "";
    const onKey = (e: KeyboardEvent) => {
      if (open) return;
      if (isEditable(e.target)) return;
      if (e.key.length !== 1) return;
      buffer = (buffer + e.key.toLowerCase()).slice(-BUFFER_LEN);
      for (const t of TRIGGERS) {
        if (buffer.endsWith(t)) {
          buffer = "";
          setOpen(true);
          return;
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return <VaultOverlay open={open} onClose={close} />;
}
