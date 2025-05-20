import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, OrbitControls } from '@react-three/drei';
import { Mesh } from 'three';

// Simple 3D representation of Italian flag colors
const ItalianFlag = () => {
  const boxRef = useRef<Mesh>(null);
  
  useFrame(() => {
    if (boxRef.current) {
      boxRef.current.rotation.y += 0.005;
    }
  });
  
  return (
    <Box ref={boxRef} args={[3, 2, 0.2]} position={[0, 0, 0]}>
      {/* Green side */}
      <meshStandardMaterial attach="material-0" color="#009246" />
      {/* White side */}
      <meshStandardMaterial attach="material-1" color="#ffffff" />
      {/* Red side */}
      <meshStandardMaterial attach="material-2" color="#ce2b37" />
      {/* White side */}
      <meshStandardMaterial attach="material-3" color="#ffffff" />
      {/* Green front */}
      <meshStandardMaterial attach="material-4" color="#009246" />
      {/* Red back */}
      <meshStandardMaterial attach="material-5" color="#ce2b37" />
    </Box>
  );
};

const FlagModel: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <ItalianFlag />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          rotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};

export default FlagModel;