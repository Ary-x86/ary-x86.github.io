"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), { ssr: false });

type Props = {
  scene: string;
  className?: string;
  fallback?: React.ReactNode;
};

export default function SplineScene({ scene, className, fallback }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className={className}>{fallback ?? null}</div>;
  }

  return (
    <div className={className}>
      <Spline scene={scene} onError={() => setFailed(true)} />
    </div>
  );
}
