import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const FloatingElement = () => {
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} /> {/* Sphere for floating effect */}
      <meshStandardMaterial color="#FFA500" metalness={0.5} roughness={0.1} /> {/* Orange material */}
    </mesh>
  );
};

const FloatingElements = () => {
  return (
    <Canvas style={{ height: '100vh', background: '#FFFFFF' }}> {/* White background */}
      <ambientLight intensity={0.5} /> {/* Ambient light for soft illumination */}
      <pointLight position={[10, 10, 10]} intensity={1} /> {/* Point light for highlights */}
      <OrbitControls enableZoom={false} /> {/* Controls for orbiting the scene */}
      <FloatingElement />
      <FloatingElement position={[2, 0, 0]} /> {/* Additional floating element */}
      <FloatingElement position={[-2, 0, 0]} /> {/* Additional floating element */}
    </Canvas>
  );
};

export default FloatingElements;