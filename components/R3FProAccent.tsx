"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import type { Group, Mesh } from "three";

function Knot() {
  const group = useRef<Group>(null!);
  const inner = useRef<Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (group.current) {
      group.current.rotation.y = t * 0.18;
      group.current.rotation.x = Math.sin(t * 0.22) * 0.12;
    }
    if (inner.current) {
      inner.current.rotation.z = t * 0.3;
    }
  });

  return (
    <group ref={group}>
      <mesh ref={inner}>
        <torusKnotGeometry args={[1.1, 0.14, 220, 24, 2, 3]} />
        <meshBasicMaterial color="#7c3aed" wireframe transparent opacity={0.75} />
      </mesh>
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.7, 0.008, 16, 160]} />
        <meshBasicMaterial color="#0ea5e9" transparent opacity={0.45} />
      </mesh>
      <mesh rotation={[0, Math.PI / 4, Math.PI / 2]}>
        <torusGeometry args={[2.05, 0.006, 16, 160]} />
        <meshBasicMaterial color="#ec4899" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

export default function R3FProAccent() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 4.5], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      style={{ background: "transparent" }}
    >
      <Knot />
    </Canvas>
  );
}
