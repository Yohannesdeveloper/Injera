/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import { useRef, useState, useEffect, memo } from 'react';
import { Canvas, createPortal, useFrame, useThree } from '@react-three/fiber';
import { useFBO, MeshTransmissionMaterial, Environment } from '@react-three/drei';
import { easing } from 'maath';

export default function FluidGlass({ mode = 'lens' }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 15 }}
      gl={{ alpha: true, antialias: true }}
      style={{
        position: 'fixed', inset: 0, pointerEvents: 'none',
        zIndex: 9999, background: 'transparent'
      }}
    >
      <Environment preset="studio" />
      <GlassLens mode={mode} />
    </Canvas>
  );
}

function SceneContent() {
  const mesh = useRef();
  const [hovered, setHovered] = useState(false);
  const [colors] = useState(() => [
    new THREE.Color('#D4AF37'),
    new THREE.Color('#F4C430'),
    new THREE.Color('#C87D32'),
    new THREE.Color('#ffffff'),
  ]);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.pointer.y * 0.3;
    mesh.current.rotation.y = state.pointer.x * 0.3;
  });

  return (
    <group>
      <mesh ref={mesh}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[2, 1, -2]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#F4C430" metalness={1} roughness={0.1} />
      </mesh>
      <mesh position={[-2, -1, -1]}>
        <icosahedronGeometry args={[0.4, 0]} />
        <meshStandardMaterial color="#C87D32" metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh position={[1.5, -1.5, -3]}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <meshStandardMaterial color="#ffffff" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[-1.5, 1.5, -2.5]}>
        <dodecahedronGeometry args={[0.35, 0]} />
        <meshStandardMaterial color="#D4AF37" metalness={0.7} roughness={0.2} />
      </mesh>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-5, -5, 5]} intensity={0.5} color="#D4AF37" />
    </group>
  );
}

const GlassLens = memo(function GlassLens({ mode }) {
  const ref = useRef();
  const buffer = useFBO();
  const { viewport: vp } = useThree();
  const [scene] = useState(() => new THREE.Scene());
  const pointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      pointerRef.current = { x, y };
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const geo = mode === 'lens'
    ? <cylinderGeometry args={[1, 1, 0.3, 64]} />
    : mode === 'cube'
    ? <boxGeometry args={[1, 1, 1]} />
    : <boxGeometry args={[2, 0.4, 0.8]} />;

  useFrame((state, delta) => {
    const { gl, pointer, camera } = state;
    const v = vp.getCurrentViewport(camera, [0, 0, 15]);
    const p = pointerRef.current;

    const destX = (p.x * v.width) / 2;
    const destY = (p.y * v.height) / 2;
    easing.damp3(ref.current.position, [destX, destY, 15], 0.15, delta);

    gl.setRenderTarget(buffer);
    gl.render(scene, camera);
    gl.setRenderTarget(null);
  });

  return (
    <>
      {createPortal(
        <SceneContent />,
        scene
      )}
      <mesh ref={ref} scale={mode === 'bar' ? 1.2 : 0.2} rotation-x={Math.PI / 2}>
        {geo}
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          ior={1.25}
          thickness={2}
          chromaticAberration={0.1}
          anisotropy={0.1}
          distortion={0.3}
          distortionScale={0.5}
          temporalDistortion={0.1}
          clearcoat={1}
          samples={16}
          resolution={256}
          backside
          backsideThickness={2}
        />
      </mesh>
    </>
  );
});
