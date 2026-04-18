"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, useEffect, useState } from "react";
import type { Group, Mesh, BufferGeometry } from "three";
import * as THREE from "three";

function Knot() {
  const group = useRef<Group>(null!);
  const inner = useRef<Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const { x, y } = state.pointer;
    if (group.current) {
      group.current.rotation.y = t * 0.08 + x * 0.25;
      group.current.rotation.x = Math.sin(t * 0.12) * 0.15 + y * 0.15;
    }
    if (inner.current) {
      inner.current.rotation.z = t * 0.15;
    }
  });

  return (
    <group ref={group}>
      <mesh ref={inner}>
        <torusKnotGeometry args={[1.4, 0.18, 220, 24, 2, 3]} />
        <meshBasicMaterial color="#7c3aed" wireframe transparent opacity={0.55} />
      </mesh>
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.1, 0.01, 16, 160]} />
        <meshBasicMaterial color="#0ea5e9" transparent opacity={0.35} />
      </mesh>
      <mesh rotation={[0, Math.PI / 4, Math.PI / 2]}>
        <torusGeometry args={[2.6, 0.008, 16, 160]} />
        <meshBasicMaterial color="#ec4899" transparent opacity={0.25} />
      </mesh>
    </group>
  );
}

function StarField() {
  const points = useRef<THREE.Points>(null!);

  const geom = useMemo<BufferGeometry>(() => {
    const g = new THREE.BufferGeometry();
    const count = 900;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 5 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={points} geometry={geom}>
      <pointsMaterial
        color="#ffffff"
        size={0.015}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function R3FProAccent() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      style={{ background: "transparent" }}
    >
      <Knot />
      <StarField />
    </Canvas>
  );
}
