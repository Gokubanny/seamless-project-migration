import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PointMaterial, Points } from "@react-three/drei";
import * as THREE from "three";

const shapes = [
  { position: [2, 1, -5] as [number, number, number], scale: 0.5, color: "#9ECAD6" },
  { position: [-3, -1, -8] as [number, number, number], scale: 0.8, color: "#ABDFE8" },
  { position: [1, -2, -6] as [number, number, number], scale: 0.6, color: "#84D9E4" },
  { position: [-2, 2, -7] as [number, number, number], scale: 0.4, color: "#AADCD4" },
  { position: [4, 0, -9] as [number, number, number], scale: 0.7, color: "#9ECAD6" },
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

function Particles() {
  const particlesRef = useRef<THREE.Points>(null);
  const positions = new Float32Array(1100 * 3);
  for (let index = 0; index < positions.length; index += 1) {
    positions[index] = (Math.random() - 0.5) * 20;
  }

  useFrame((_state, delta) => {
    const points = particlesRef.current;
    if (!points) return;
    points.rotation.x -= delta / 10;
    points.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={particlesRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#B8EEE5" size={0.04} sizeAttenuation depthWrite={false} opacity={0.45} />
      </Points>
    </group>
  );
}

export default function PortfolioBackground() {
  const shouldRenderCanvas = useRef(true);
  useEffect(() => {
    shouldRenderCanvas.current = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  if (!shouldRenderCanvas.current) return null;

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 opacity-70" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 1], fov: 75, near: 0.1, far: 1000 }} dpr={[1, 1.35]}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.7} />
        <Particles />
        {shapes.map((shape, index) => (
          <FloatingShape key={index} position={shape.position} scale={shape.scale} color={shape.color} />
        ))}
      </Canvas>
    </div>
  );
}