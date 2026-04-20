import * as T from "three";

export default function createLightInteractiveMaterial() {
  const material = new T.MeshStandardMaterial({
    color: 0xeaddc7,
    roughness: 0.2,
    metalness: 0.1,
  })
  
  return material;
}