import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Environment, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import SteamParticles from './SteamParticles';

// 3D Teff Crop Field Scene
function TeffField({ active }) {
  const groupRef = useRef();

  const stalks = useMemo(() => {
    const items = [];
    for (let i = 0; i < 160; i++) {
      const x = (Math.random() - 0.5) * 14;
      const z = (Math.random() - 0.5) * 14;
      const height = 1.2 + Math.random() * 0.8;
      const rot = Math.random() * Math.PI;
      items.push({ position: [x, 0, z], height, rot });
    }
    return items;
  }, []);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.children.forEach((child, idx) => {
      child.rotation.z = Math.sin(t * 1.5 + idx) * 0.08;
    });
  });

  return (
    <group ref={groupRef} position={[0, -2, 0]} visible={active}>
      {stalks.map((s, i) => (
        <group key={i} position={s.position} rotation={[0, s.rot, 0]}>
          <mesh position={[0, s.height / 2, 0]}>
            <cylinderGeometry args={[0.02, 0.04, s.height, 6]} />
            <meshStandardMaterial color="#D4AF37" roughness={0.4} metalness={0.2} />
          </mesh>
          <mesh position={[0, s.height + 0.2, 0]}>
            <coneGeometry args={[0.15, 0.5, 6]} />
            <meshStandardMaterial color="#F4C430" roughness={0.3} metalness={0.3} />
          </mesh>
        </group>
      ))}

      <mesh position={[0, -0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#2A1B0E" roughness={0.9} />
      </mesh>
    </group>
  );
}

// 3D Fermentation Tank (Ersho)
function FermentationRoom({ active }) {
  return (
    <group position={[0, -1, 0]} visible={active}>
      <mesh position={[-1.8, 1, 0]}>
        <cylinderGeometry args={[1.2, 1.2, 2.8, 32]} />
        <meshStandardMaterial color="#CBD5E1" metalness={0.9} roughness={0.15} />
      </mesh>
      <mesh position={[-1.8, 2.5, 0]}>
        <sphereGeometry args={[1.2, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#94A3B8" metalness={0.95} roughness={0.1} />
      </mesh>
      <mesh position={[-1.8, 1.8, 1.25]}>
        <cylinderGeometry args={[0.2, 0.2, 0.1, 16]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="#D4AF37" metalness={0.8} />
      </mesh>

      <mesh position={[1.8, 1, -1]}>
        <cylinderGeometry args={[1.2, 1.2, 2.8, 32]} />
        <meshStandardMaterial color="#CBD5E1" metalness={0.9} roughness={0.15} />
      </mesh>
      <mesh position={[1.8, 2.5, -1]}>
        <sphereGeometry args={[1.2, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#94A3B8" metalness={0.95} roughness={0.1} />
      </mesh>

      <mesh position={[0, -0.4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[16, 16]} />
        <meshStandardMaterial color="#0F172A" metalness={0.4} roughness={0.2} />
      </mesh>
    </group>
  );
}

// 3D Photorealistic Injera & Modern Mitad Griddle with Texture
function InjeraBakingScene({ active }) {
  const injeraRef = useRef();
  const injeraTexture = useTexture('/images/injera_texture.jpg');

  useFrame(({ clock }) => {
    if (injeraRef.current) {
      injeraRef.current.rotation.z = clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <group position={[0, 0, 0]} visible={active}>
      {/* Modern Mitad Heating Griddle Base */}
      <mesh position={[0, -0.4, 0]}>
        <cylinderGeometry args={[3.2, 3.4, 0.3, 64]} />
        <meshStandardMaterial color="#1E293B" metalness={0.85} roughness={0.3} />
      </mesh>
      {/* Heating Element Glow Rim */}
      <mesh position={[0, -0.24, 0]}>
        <ringGeometry args={[3.0, 3.15, 64]} rotation={[-Math.PI / 2, 0, 0]} />
        <meshBasicMaterial color="#E65100" />
      </mesh>

      {/* Giant Rotating Injera Disc with Photorealistic Surface Texture */}
      <group ref={injeraRef} position={[0, -0.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh>
          <cylinderGeometry args={[2.9, 2.9, 0.08, 64]} />
          <meshStandardMaterial
            map={injeraTexture}
            bumpMap={injeraTexture}
            bumpScale={0.12}
            roughness={0.9}
            metalness={0.05}
          />
        </mesh>
      </group>

      {/* Rising Steam */}
      <SteamParticles count={140} position={[0, 0.1, 0]} />
    </group>
  );
}

// 3D Vacuum Package & Export Carton Scene
function PackagingScene({ active }) {
  const packRef = useRef();

  useFrame(({ clock }) => {
    if (packRef.current) {
      packRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.8) * 0.25;
      packRef.current.position.y = Math.sin(clock.getElapsedTime() * 1.5) * 0.1;
    }
  });

  return (
    <group position={[0, 0, 0]} visible={active}>
      <group ref={packRef}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3.2, 2.2, 0.35]} />
          <meshPhysicalMaterial
            color="#0F172A"
            roughness={0.15}
            metalness={0.1}
            transmission={0.6}
            thickness={0.5}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>
        <mesh position={[0, 0, 0.19]}>
          <planeGeometry args={[2.8, 1.8]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.7} roughness={0.3} />
        </mesh>
      </group>

      <group position={[-3, -1.2, -2]}>
        <mesh>
          <boxGeometry args={[1.8, 1.2, 1.4]} />
          <meshStandardMaterial color="#94A3B8" roughness={0.6} />
        </mesh>
      </group>
      <group position={[3, -1.2, -2]}>
        <mesh>
          <boxGeometry args={[1.8, 1.2, 1.4]} />
          <meshStandardMaterial color="#94A3B8" roughness={0.6} />
        </mesh>
      </group>
    </group>
  );
}

// 3D Interactive Global Trade Routes Globe
function GlobalGlobeScene({ active }) {
  const globeRef = useRef();
  const routesRef = useRef();

  useFrame(({ clock }) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
    if (routesRef.current) {
      routesRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  const routeArcs = useMemo(() => {
    const addis = new THREE.Vector3(1.8, 0.6, 1.5).normalize().multiplyScalar(2.05);
    const destinations = [
      new THREE.Vector3(-1.2, 1.5, 1.0).normalize().multiplyScalar(2.05),
      new THREE.Vector3(-1.8, 1.2, -0.8).normalize().multiplyScalar(2.05),
      new THREE.Vector3(1.2, 0.8, 1.6).normalize().multiplyScalar(2.05),
      new THREE.Vector3(0.5, 1.8, -1.2).normalize().multiplyScalar(2.05),
      new THREE.Vector3(1.9, 0.4, -0.9).normalize().multiplyScalar(2.05),
    ];

    return destinations.map((dest) => {
      const mid = addis.clone().add(dest).multiplyScalar(0.7);
      const curve = new THREE.QuadraticBezierCurve3(addis, mid, dest);
      const points = curve.getPoints(30);
      return new THREE.BufferGeometry().setFromPoints(points);
    });
  }, []);

  return (
    <group position={[0, 0, 0]} visible={active}>
      <group ref={globeRef}>
        <mesh>
          <sphereGeometry args={[2.0, 36, 36]} />
          <meshStandardMaterial color="#0B291E" roughness={0.6} metalness={0.4} wireframe />
        </mesh>
        <mesh>
          <sphereGeometry args={[1.98, 36, 36]} />
          <meshStandardMaterial color="#07080B" roughness={0.9} />
        </mesh>
      </group>

      <group ref={routesRef}>
        {routeArcs.map((geo, idx) => (
          <line key={idx} geometry={geo}>
            <lineBasicMaterial color="#F4C430" linewidth={2} />
          </line>
        ))}
      </group>
    </group>
  );
}

// Scene Orchestrator driven by scroll
export default function InjeraHeroCanvas({ scrollProgress = 0 }) {
  const sceneIdx = useMemo(() => {
    if (scrollProgress < 0.15) return 0;
    if (scrollProgress < 0.32) return 1;
    if (scrollProgress < 0.52) return 2;
    if (scrollProgress < 0.72) return 3;
    if (scrollProgress < 0.88) return 4;
    return 2;
  }, [scrollProgress]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 1.5, 6]} fov={45} />

        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 15, 10]} intensity={1.5} color="#F4C430" />
        <pointLight position={[-8, 5, -5]} intensity={0.9} color="#E65100" />
        <spotLight position={[0, 10, 0]} intensity={1.2} angle={0.6} penumbra={0.5} color="#FFFFFF" />

        <TeffField active={sceneIdx === 0} />
        <FermentationRoom active={sceneIdx === 1} />
        <React.Suspense fallback={null}>
          <InjeraBakingScene active={sceneIdx === 2} />
        </React.Suspense>
        <PackagingScene active={sceneIdx === 3} />
        <GlobalGlobeScene active={sceneIdx === 4} />

        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
}
