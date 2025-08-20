import * as THREE from 'three'; // Importing Three.js
import { Canvas } from '@react-three/fiber'; // Importing Canvas from react-three-fiber
import { useEffect, useRef } from 'react'; // Importing hooks from React

const ThreeUtils = () => {
  const meshRef = useRef<THREE.Mesh>(null); // Reference for the mesh

  useEffect(() => {
    const handleResize = () => {
      if (meshRef.current) {
        meshRef.current.scale.set(window.innerWidth / 1000, window.innerHeight / 1000, 1); // Scale based on window size
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
  }, []);

  return (
    <Canvas style={{ background: 'white' }}> {/* Canvas background */}
      <ambientLight intensity={0.5} /> {/* Ambient light for soft illumination */}
      <pointLight position={[10, 10, 10]} intensity={1} /> {/* Point light for highlights */}
      <mesh ref={meshRef}>
        <boxGeometry args={[1, 1, 1]} /> {/* Box geometry for 3D effect */}
        <meshStandardMaterial color={'#ff8c00'} /> {/* Orange color for luxury feel */}
      </mesh>
    </Canvas>
  );
};

export default ThreeUtils; // Default export of the component