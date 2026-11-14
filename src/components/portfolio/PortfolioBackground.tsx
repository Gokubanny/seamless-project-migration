import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PointMaterial, Points } from "@react-three/drei";
import * as THREE from "three";

const shapePositions = [
  { position: [2, 1, -5] as [number, number, number], scale: 0.5 },
  { position: [-3, -1, -8] as [number, number, number], scale: 0.8 },
  { position: [1, -2, -6] as [number, number, number], scale: 0.6 },
  { position: [-2, 2, -7] as [number, number, number], scale: 0.4 },
  { position: [4, 0, -9] as [number, number, number], scale: 0.7 },
];

function FloatingShape({
  position,
  scale,
  color,
}: {
  position: [number, number, number];
  scale: number;
  color: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    mesh.rotation.x += delta * 0.2;
    mesh.rotation.y += delta * 0.3;
    mesh.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
  });

  return (
    <Float speed={0.8} rotationIntensity={0.7} floatIntensity={0.4}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color={color} transparent opacity={0.45} wireframe emissive={color} emissiveIntensity={0.18} />
      </mesh>
    </Float>
  );
}

function Particles({ color }: { color: string }) {
  const particlesRef = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const values = new Float32Array(1100 * 3);
    for (let index = 0; index < values.length; index += 1) values[index] = (Math.random() - 0.5) * 20;
    return values;
  }, []);

  useFrame((_state, delta) => {
    const points = particlesRef.current;
    if (!points) return;
    points.rotation.x -= delta / 10;
    points.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={particlesRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial transparent color={color} size={0.04} sizeAttenuation depthWrite={false} opacity={0.45} />
      </Points>
    </group>
  );
}

export default function PortfolioBackground() {
  const [palette, setPalette] = useState<{ accent: string; coral: string; lime: string } | null>(null);

  useEffect(() => {
    const styles = getComputedStyle(document.documentElement);
    setPalette({
      accent: styles.getPropertyValue("--portfolio-accent").trim(),
      coral: styles.getPropertyValue("--portfolio-coral").trim(),
      lime: styles.getPropertyValue("--portfolio-lime").trim(),
    });
  }, []);

  if (!palette?.accent || !palette.coral || !palette.lime) return null;

  const shapeColors = [palette.accent, palette.coral, palette.lime, palette.accent, palette.coral];

  return (
    <div className="pointer-events-none fixed inset-0 z-[3] opacity-70" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 1], fov: 75, near: 0.1, far: 1000 }} dpr={[1, 1.35]}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.7} />
        <Particles color={palette.accent} />
        {shapePositions.map((shape, index) => (
          <FloatingShape key={index} position={shape.position} scale={shape.scale} color={shapeColors[index] ?? palette.accent} />
        ))}
      </Canvas>
    </div>
  );
}