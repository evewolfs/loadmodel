import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Model from "./Model";


const Scene = () => {

  return (
    <>
  <ambientLight intensity={2} />
      <OrbitControls />

    
      <Suspense fallback={  <mesh>
        <boxGeometry scale-y={2} />
        <meshBasicMaterial />
      </mesh>}><Model /></Suspense>
      

    </>
  );
};

export default Scene;
