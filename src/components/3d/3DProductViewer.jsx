import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Html } from '@react-three/drei';
import * as THREE from 'three';

function InteractiveProductModel({ productType }) {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  if (productType === 'vacuum') {
    return (
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
        <group ref={meshRef}>
          <mesh>
            <boxGeometry args={[3.2, 2.2, 0.4]} />
            <meshPhysicalMaterial
              color="#0F172A"
              roughness={0.15}
              metalness={0.2}
              transmission={0.5}
              thickness={0.6}
              clearcoat={1}
            />
          </mesh>
          <mesh position={[0, 0, 0.21]}>
            <planeGeometry args={[2.8, 1.8]} />
            <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} />
          </mesh>
        </group>
      </Float>
    );
  }

  if (productType === 'fresh') {
    return (
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.2}>
        <group ref={meshRef}>
          <mesh rotation={[-Math.PI / 3, 0, 0]}>
            <cylinderGeometry args={[2.2, 2.2, 0.08, 64]} />
            <meshStandardMaterial color="#EAE0D5" roughness={0.9} metalness={0.05} />
          </mesh>
        </group>
      </Float>
    );
  }

  // Default Frozen Bulk Box
  return (
    <Float speed={2} rotationIntensity={0.25} floatIntensity={0.3}>
      <group ref={meshRef}>
        <mesh>
          <boxGeometry args={[2.8, 2.0, 2.2]} />
          <meshStandardMaterial color="#1E293B" roughness={0.4} metalness={0.6} />
        </mesh>
        <mesh position={[0, 0, 1.11]}>
          <planeGeometry args={[2.2, 1.4]} />
          <meshStandardMaterial color="#F4C430" metalness={0.7} roughness={0.3} />
        </mesh>
      </group>
    </Float>
  );
}

export default function ProductViewer3D({ productType = 'vacuum' }) {
  return (
    <div className="w-full h-80 relative rounded-2xl overflow-hidden glass-panel border border-gold-500/20">
      <div className="absolute top-4 left-4 z-10 bg-dark-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-gold-500/30 text-xs font-semibold text-gold-400 flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        360° Interactive 3D Model — Drag to Rotate
      </div>
      <Canvas gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} color="#F4C430" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#E65100" />
        <InteractiveProductModel productType={productType} />
        <OrbitControls enableZoom={true} maxDistance={8} minDistance={3} autoRotate={false} />
      </Canvas>
    </div>
  );
}
