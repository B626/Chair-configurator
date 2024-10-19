import {
  Center,
  MeshReflectorMaterial,
  PresentationControls,
} from "@react-three/drei";

import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import Chair from "./Chair";

export const Experience = () => {
  return (
    <PresentationControls
      speed={1.5}
      global
      zoom={0.7}
      polar={[-0.2, Math.PI / 4]}
    >
      <Center
        adjustCamera
        environment={"city"}
        intensity={0.6}
        contactShadow={false}
      >
        <Suspense fallback={null}>
          <Chair />
        </Suspense>
      </Center>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[170, 170]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={40}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#2a2a2a"
          metalness={0.5}
        />
      </mesh>
    </PresentationControls>
  );
};
