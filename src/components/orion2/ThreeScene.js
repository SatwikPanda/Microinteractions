import { useEffect, useRef } from "react"
import * as T from "three";
import createCube from "./cube/cube";
import createAmbientLight from "./lights/ambientlight/ambientLight";
import createDirectionalLight from "./lights/directional/directionalLight";


export default function ThreeScene() {
  const containerRef = useRef(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const container = containerRef.current;
      
      let width = container.clientWidth;
      let height = container.clientHeight;
      let aspect = width / height;
      
      const fov = 75;
      const near = 0.1;
      const far = 10;
      
      const scene = new T.Scene();
      const camera = new T.PerspectiveCamera(fov, aspect, near, far);
      camera.position.z = 5;
      
      const renderer = new T.WebGLRenderer({
        antialias: true,
        alpha: true,
        depth: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);
      container.appendChild(renderer.domElement);
      
      const cube = createCube();
      scene.add(cube);
      
      const ambientLight = createAmbientLight();
      scene.add(ambientLight);
      
      const directionalLight = createDirectionalLight();
      scene.add(directionalLight)
      
      const objects = [cube];
      
      const animate = () => {
        requestAnimationFrame(animate);
        
        objects.forEach(obj => {
          obj.userData.update?.()
        })
        
        renderer.render(scene, camera);
      }
      
      animate();
      
      const handleResize = () => {
        width = container.clientWidth;
        height = container.clientHeight;
        
        renderer.setSize(width, height);
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
      
      window.addEventListener("resize", handleResize);
      
      return () => {
        window.removeEventListener("resize", handleResize);
        container.removeChild(renderer.domElement);
        
        cube.geometry?.dispose?.();
        cube.material?.dispose?.();
        
        renderer.dispose();
      }
    }
  },[])
  
  
  return <div ref={containerRef} className="w-screen h-screen" />
}