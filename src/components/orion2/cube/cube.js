import * as T from "three"

export default function createCube() {
  const geometry = new T.BoxGeometry();
  const material = new T.MeshBasicMaterial({
    color: 0xff0000
  })
  
  const cube = new T.Mesh(geometry, material);
  
  cube.userData.update = () => {
    cube.rotation.x += 0.005
    cube.rotation.y += 0.005
  }
  
  return cube;
}