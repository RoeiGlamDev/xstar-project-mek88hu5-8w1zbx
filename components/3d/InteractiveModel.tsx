'use client';

import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const InteractiveModel: React.FC = () => {
  const modelRef = useRef<THREE.Group>(null);
  const gltfLoader = new GLTFLoader();

  useEffect(() => {
    gltfLoader.load('/path/to/your/model.glb', (gltf) => {
      if (modelRef.current) {
        modelRef.current.add(gltf.scene);
      }
    });
  }, [gltfLoader]);

  return (
    <Canvas style={{ height: '500px', background: 'white' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <group ref={modelRef} />
      <OrbitControls />
    </Canvas>
  );
};

export default InteractiveModel;