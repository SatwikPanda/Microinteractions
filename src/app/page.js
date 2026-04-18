"use client";
import initGSAP from "@/animations/gsapSetup";
import SideBarIcon from "@/components/sidebar/SideBarIcon";
import { useLayoutEffect } from "react";

export default function Home() {
  useLayoutEffect(() => {
    initGSAP();
  }, []);

  return (
    <div className="h-full font-sans bg-zinc-50 rounded-4xl overflow-hidden">
      
    </div>
  );
}
