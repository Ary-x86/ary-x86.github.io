"use client";

import dynamic from "next/dynamic";

const R3FProAccent = dynamic(() => import("./R3FProAccent"), {
  ssr: false,
  loading: () => null,
});

export default function ProAccentLoader() {
  return <R3FProAccent />;
}
