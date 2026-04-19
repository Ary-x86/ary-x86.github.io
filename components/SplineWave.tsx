"use client";

import dynamic from "next/dynamic";

const SplineScene = dynamic(() => import("./SplineScene"), { ssr: false });

const WAVE_URL = "https://prod.spline.design/4tiRM6YdM9jY0lRm/scene.splinecode";

type Props = {
  className?: string;
};

export default function SplineWave({ className }: Props) {
  return (
    <SplineScene
      scene={WAVE_URL}
      className={className ?? "absolute inset-0 pointer-events-none"}
      fallback={
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60rem 12rem at 50% 50%, rgba(124,58,237,0.45), transparent 70%)",
            filter: "blur(24px)",
          }}
        />
      }
    />
  );
}
