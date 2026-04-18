"use client";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const SideBarIcon = () => {
  const barRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const tl = new gsap.timeline();

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  useGSAP(
    () => {
      const bar = barRef.current;
      if (!barRef.current) {
        return;
      }

      gsap.to(bar, {
        width: isOpen ? "5px" : "2px",
        duration: 0.3,
        ease: "spatial-default",
      });
    },
    { dependencies: [isOpen] },
  );

  return (
    <div className="flex">
      <div
        onClick={handleOpen}
        className="bg-black text-white p-3 rounded-xl relative"
      >
        <div className="w-4 h-3.5 rounded-sm bg-white/40 px-0.75 py-0.5">
          <div
            ref={barRef}
            className="w-[2px] rounded-[2px] h-full bg-black"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SideBarIcon;
