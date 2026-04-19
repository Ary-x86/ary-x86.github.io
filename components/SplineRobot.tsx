"use client";

import dynamic from "next/dynamic";

const SplineScene = dynamic(() => import("./SplineScene"), { ssr: false });

const ROBOT_URL = "https://prod.spline.design/RYHDa5uf9v6UVf7n/scene.splinecode";

type Props = {
  className?: string;
};

export default function SplineRobot({ className }: Props) {
  return (
    <SplineScene
      scene={ROBOT_URL}
      className={className ?? "absolute inset-0"}
      fallback={null}
    />
  );
}
