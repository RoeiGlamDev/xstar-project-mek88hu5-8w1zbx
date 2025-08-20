import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Scene3D: React.FC = () => {
  return (
    <Canvas style={{ background: 'white' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <OrbitControls />
      {/* Add your 3D models here */}
      {/* Example: <Model /> */}
    </Canvas>
  );
};

export default Scene3D;