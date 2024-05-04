import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Model from "./Model";
import Bike from "./Bike";


const Scene = () => {

  return (
    <>
  <ambientLight intensity={2} />
  <directionalLight />
      <OrbitControls />

    
      <Suspense fallback={  <mesh>
        <boxGeometry scale-y={2} />
        <meshBasicMaterial />
      </mesh>}><Model /></Suspense>
      <Bike/>
      

    </>
  );
};

export default Scene;
