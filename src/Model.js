
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";
const Model = () => {
    const model = useGLTF("./model/dog.glb");
    const animations = useAnimations(model.animations, model.scene);
    console.log(model);

    useEffect(() => {
        animations.actions.Pleased.play();
    }, [])
   return       <primitive position-y={0.5} object={model.scene} />
}
export default Model;