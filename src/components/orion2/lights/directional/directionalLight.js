import * as T from "three";

export default function createDirectionalLight(x = 5, y = 5, z = 5) {
  const directional = new T.DirectionalLight(0xffffff, 5);
  directional.position.set(x, y, z);
  
  return directional;
}