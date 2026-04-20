import * as T from "three"
import createGlowMaterial from "./components/GlowMaterial";
import createLightInteractiveMaterial from "./components/LightInteractiveMaterial";

export default function createCube() {
  const geometry = new T.BoxGeometry();
  const material = createLightInteractiveMaterial();
  
  const cube = new T.Mesh(geometry, material);
  
  cube.userData.update = () => {
    cube.rotation.x += 0.001
    cube.rotation.y += 0.001
  }
  
  return cube;
}