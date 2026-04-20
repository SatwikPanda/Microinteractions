import * as T from "three";

export default function createAmbientLight() {
  const ambient = new T.AmbientLight(0xffffff, 0.3);
  
  return ambient
}