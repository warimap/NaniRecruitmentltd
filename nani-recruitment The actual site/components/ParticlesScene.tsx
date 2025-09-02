// components/ParticlesScene.tsx
'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { BufferGeometry, Points as PointsType } from 'three';
import { random } from 'maath';
import Image from 'next/image';

const ParticlesScene = () => {
  const ref = useRef<PointsType<BufferGeometry>>(null);
  
  // Use useMemo to generate the sphere data only once.
  const positions = useMemo(() => {
    // maath's random.inSphere returns a Float64Array by default,
    // which causes a TypeScript error. We need to convert it to Float32Array.
    const sphere = random.inSphere(new Float32Array(5000 * 3), { radius: 1.2 });
    return new Float32Array(sphere);
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export default ParticlesScene;