"use client";

import * as T from "three";
import initGSAP from "@/animations/gsapSetup";
import { useLayoutEffect } from "react";
import ThreeScene from "@/components/orion2/ThreeScene";
import LightDirectionController from "@/components/orion2/ui/LightDirectionController";

export default function ThreeJS() {
  useLayoutEffect(() => {
    initGSAP();
  }, []);
  
  return (
    <div className="h-full font-sans bg-neutral-900 flex items-end justify-center rounded-4xl overflow-hidden p-4">
      {/* This is the ThreeJs scene now that is is absolutely positioned it won't take part in the ui*/}
      <div className="w-screen h-screen absolute flex justify-center items-center pointer-events-none">
        <ThreeScene />
      </div>
      <div className="flex">
        <LightDirectionController />
      </div>
    </div>
  );  
}