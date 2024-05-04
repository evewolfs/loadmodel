
import { useGLTF } from "@react-three/drei";
const Model = () => {
    const model = useGLTF("./model/dog.glb");
    console.log(model);
   return       <primitive position-y={0.5} object={model.scene} />
}
export default Model;