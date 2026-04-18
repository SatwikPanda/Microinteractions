import { useEffect, useRef } from "react"
import * as T from "three";
import { append } from "three/tsl";
import createCube from "./cube/cube";


export default function ThreeScene() {
  const containerRef = useRef(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const container = containerRef.current;
      
      const width = container.clientWidth;
      const height = container.clientHeight;
      const aspect = width / height;
      
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
      renderer.setSize(width, height);
      container.appendChild(renderer.domElement);
      
      const cube = createCube();
      scene.add(cube);
      
      const objects = [cube];
      
      const animate = () => {
        requestAnimationFrame(animate);
        
        objects.forEach(obj => {
          obj.userData.update?.()
        })
        
        renderer.render(scene, camera);
      }
      
      animate();
      
      return () => {
        container.removeChild(renderer.domElement);
        geometry.dispose();
        material.dispose();
        renderer.dispose();
      }
    }
  },[])
  
  
  return <div ref={containerRef} className="w-screen h-screen" />
}