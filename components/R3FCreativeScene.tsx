"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Icosahedron, Float } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import type { Mesh, Group } from "three";

function DistortBlob() {
  const mesh = useRef<Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const { x, y } = state.pointer;
    if (mesh.current) {
      mesh.current.rotation.x = t * 0.1 + y * 0.3;
      mesh.current.rotation.y = t * 0.15 + x * 0.4;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.6}>
      <Icosahedron ref={mesh} args={[1.4, 6]}>
        <MeshDistortMaterial
          color="#7c3aed"
          emissive="#3b0a8f"
          emissiveIntensity={0.45}
          roughness={0.25}
          metalness={0.55}
          distort={0.42}
          speed={1.6}
        />
      </Icosahedron>
    </Float>
  );
}

function OrbitRings() {
  const group = useRef<Group>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (group.current) {
      group.current.rotation.z = t * 0.08;
      group.current.rotation.x = Math.sin(t * 0.2) * 0.15;
    }
  });

  return (
    <group ref={group}>
      <mesh rotation={[Math.PI / 2.2, 0, 0]}>
        <torusGeometry args={[2.4, 0.006, 16, 220]} />
        <meshBasicMaterial color="#0ea5e9" transparent opacity={0.7} />
      </mesh>
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[2.9, 0.005, 16, 220]} />
        <meshBasicMaterial color="#ec4899" transparent opacity={0.55} />
      </mesh>
      <mesh rotation={[0, Math.PI / 5, Math.PI / 3]}>
        <torusGeometry args={[3.3, 0.004, 16, 220]} />
        <meshBasicMaterial color="#22c55e" transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

export default function R3FCreativeScene() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 4.4], fov: 50 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.25} />
      <directionalLight position={[3, 4, 4]} intensity={1.4} color="#c4b5fd" />
      <directionalLight position={[-3, -2, -2]} intensity={0.9} color="#f472b6" />
      <pointLight position={[0, 0, 3]} intensity={0.6} color="#22d3ee" />
      <DistortBlob />
      <OrbitRings />
    </Canvas>
  );
}
