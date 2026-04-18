"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), { ssr: false });
const R3FCreativeScene = dynamic(() => import("./R3FCreativeScene"), { ssr: false });

type Props = {
  scene?: string;
};

export default function SplineHero({ scene = "/scene.splinecode" }: Props) {
  const [hasScene, setHasScene] = useState<boolean | null>(null);
  const [splineFailed, setSplineFailed] = useState(false);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch(scene, { method: "HEAD" });
        if (!alive) return;
        setHasScene(res.ok);
      } catch {
        if (alive) setHasScene(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, [scene]);

  if (hasScene === null) {
    return <div className="absolute inset-0" aria-hidden />;
  }

  if (hasScene && !splineFailed) {
    return (
      <div className="absolute inset-0">
        <Spline scene={scene} onError={() => setSplineFailed(true)} />
      </div>
    );
  }

  return (
    <div className="absolute inset-0">
      <R3FCreativeScene />
    </div>
  );
}
