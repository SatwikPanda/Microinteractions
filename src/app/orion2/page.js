"use client";

import * as T from "three";
import initGSAP from "@/animations/gsapSetup";
import { useLayoutEffect } from "react";
import ThreeScene from "@/components/orion2/ThreeScene";

export default function ThreeJS() {
  useLayoutEffect(() => {
    initGSAP();
  }, []);
  
  return (
    <div className="h-full font-sans bg-neutral-900 rounded-4xl overflow-hidden p-4">
      <div className="w-full h-full flex justify-center items-center">
        <ThreeScene />
      </div>
    </div>
  );  
}