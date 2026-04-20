import * as T from "three";

export default function createLightInteractiveMaterial() {
  const material = new T.MeshStandardMaterial({
    color: 0xff0000,
    roughness: 0.5,
    metalness: 0.7,
  })
  
  return material;
}