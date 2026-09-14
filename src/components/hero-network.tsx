"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Network() {
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();
  const points = useMemo(
    () =>
      [
        [-2.1, 0.9, -0.2],
        [-1.4, 1.8, 0.2],
        [-0.7, 0.7, 0.7],
        [0, 1.5, 0.1],
        [0.8, 0.7, 0.8],
        [1.7, 1.4, -0.2],
        [2.15, 0.3, 0.3],
        [-1.9, -0.5, 0.4],
        [-0.9, -0.7, -0.1],
        [0, -0.2, 0.9],
        [0.9, -0.8, 0.1],
        [1.8, -0.5, 0.6],
        [-1.3, -1.6, -0.4],
        [0.1, -1.5, 0.3],
        [1.3, -1.6, -0.2],
        [0, 0.5, 0],
      ] as [number, number, number][],
    [],
  );
  const links = useMemo<[number, number][]>(
    () => [
      [0, 1],
      [0, 2],
      [0, 7],
      [1, 3],
      [2, 3],
      [2, 8],
      [2, 9],
      [3, 4],
      [3, 15],
      [4, 5],
      [4, 9],
      [4, 10],
      [5, 6],
      [6, 11],
      [7, 8],
      [7, 12],
      [8, 9],
      [8, 12],
      [9, 10],
      [9, 13],
      [9, 15],
      [10, 11],
      [10, 14],
      [11, 14],
      [12, 13],
      [13, 14],
      [14, 11],
    ],
    [],
  );
  const lineGeometry = useMemo(() => {
    const positions = links.flatMap(([a, b]) => {
      const start = points[a];
      const end = points[b];
      return start && end ? [...start, ...end] : [];
    });
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    return geometry;
  }, [links, points]);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      pointer.x * 0.18,
      3,
      delta,
    );
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      pointer.y * -0.12,
      3,
      delta,
    );
    group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.025;
  });

  return (
    <group ref={group} rotation={[0.18, -0.2, -0.06]}>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#50c9bf" transparent opacity={0.28} />
      </lineSegments>
      {points.map((position, index) => (
        <mesh key={index} position={position}>
          <sphereGeometry args={[index === 15 ? 0.13 : 0.07, 16, 16]} />
          <meshStandardMaterial
            color={index % 3 === 0 ? "#9ce9df" : "#50c9bf"}
            emissive="#2b827c"
            emissiveIntensity={0.55}
          />
        </mesh>
      ))}
      <mesh position={[0, 0.5, -0.1]}>
        <icosahedronGeometry args={[1.05, 1]} />
        <meshBasicMaterial color="#5dd8ce" wireframe transparent opacity={0.12} />
      </mesh>
    </group>
  );
}

export default function HeroNetwork() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.4], fov: 48 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.9} />
      <pointLight position={[3, 4, 5]} intensity={12} color="#73ddd3" />
      <Network />
    </Canvas>
  );
}
