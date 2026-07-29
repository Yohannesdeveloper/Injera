import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function SteamParticles({ count = 120, position = [0, 0, 0] }) {
  const pointsRef = useRef();

  const [positions, scales, opacities, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sca = new Float32Array(count);
    const opa = new Float32Array(count);
    const spd = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // Radius around 0,0
      const radius = Math.random() * 2.8;
      const angle = Math.random() * Math.PI * 2;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = Math.random() * 1.5;
      pos[i * 3 + 2] = Math.sin(angle) * radius;

      sca[i] = Math.random() * 0.4 + 0.2;
      opa[i] = Math.random() * 0.5 + 0.2;
      spd[i] = Math.random() * 0.015 + 0.008;
    }
    return [pos, sca, opa, spd];
  }, [count]);

  useFrame(() => {
    if (!pointsRef.current) return;
    const geo = pointsRef.current.geometry;
    const posAttr = geo.attributes.position;

    for (let i = 0; i < count; i++) {
      let y = posAttr.getY(i);
      y += speeds[i];
      if (y > 3.0) {
        y = 0;
        const radius = Math.random() * 2.5;
        const angle = Math.random() * Math.PI * 2;
        posAttr.setX(i, Math.cos(angle) * radius);
        posAttr.setZ(i, Math.sin(angle) * radius);
      }
      posAttr.setY(i, y);
    }
    posAttr.needsUpdate = true;
  });

  return (
    <group position={position}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.35}
          color="#FAF5E4"
          transparent
          opacity={0.35}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  );
}
