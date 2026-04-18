"use client";

import initGSAP from "@/animations/gsapSetup";
import NavigationTabs from "@/components/orion1/NavigationTabs";
import { useLayoutEffect } from "react";


export default function Home() {
  
  useLayoutEffect(() => {
    initGSAP();
  }, []);
  
  
  return (
    <div className="h-full font-sans bg-neutral-900 rounded-4xl overflow-hidden">
      <div className="w-full h-full flex items-center justify-center">
        <NavigationTabs />
      </div>
    </div>
  )
}