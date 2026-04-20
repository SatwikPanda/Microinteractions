"use client";
import { useLayoutEffect, useRef, useState } from "react";
import { useLightStore } from "../store/LightStore";
import gsap from "gsap";

import { IoSunny } from "react-icons/io5";

/*
Notes on how the animation works so first the element is hidden with opacity - 0 and then the layout calculations are done
Now that Layout calculations are then it is set using gsap and then opacity - 1

Now the main heros for this animations are shrink-0 or flex-none

*/

export default function LightDirectionController() {
  const position = useLightStore((state) => state.position);
  const setPosition = useLightStore((state) => state.setPosition);

  const [open, setOpen] = useState(false);

  const directionalTextRef = useRef(null);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const svgRef = useRef(null);

  const collapsedWidth = useRef(0);
  const expandedWidth = useRef(0);

  const tl = useRef(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const directionalText = directionalTextRef.current;
    const content = contentRef.current;
    const svg = svgRef.current;

    if (!container || !directionalText || !content || !svg) return;

    expandedWidth.current = container.offsetWidth;
    const computedStyles = window.getComputedStyle(container);
    const paddingX =
      parseFloat(computedStyles.paddingLeft) +
      parseFloat(computedStyles.paddingRight);

    const iconWidth = svg.getBoundingClientRect().width;
    const textWidth = directionalText.getBoundingClientRect().width;
    const contentWidth = content.getBoundingClientRect().width;

    collapsedWidth.current = iconWidth + paddingX;

    gsap.set(container, {
      width: collapsedWidth.current,
      opacity: 1,
    });

    gsap.set(directionalText, {
      opacity: 0,
      x: -15,
      filter: "blur(8px)",
    });

    tl.current = gsap.timeline({ paused: true });
    tl.current
      .to(container, {
        width: expandedWidth.current,
        duration: 0.15,
        ease: "spatial-default",
      })
      .to(
        directionalText,
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          duration: 0.2,
          ease: "spatial-default",
        },
        "<",
      );
  }, []);

  const handleOpen = () => {
    if (!tl.current) return;

    if (!open) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }

    setOpen(!open);
  };

  return (
    <div
      ref={containerRef}
      onClick={handleOpen}
      className={`bg-black px-2 py-2 rounded-full overflow-hidden w-[50px]. hover:bg-white/10 transition-all duration-250 hover:text-white cursor-pointer opacity-0
      ${open ? "text-white" : "text-neutral-600"}
      `}
    >
      {/* This is the lightController button's container of somesort*/}
      <div ref={contentRef} className="flex shrink-0 items-center gap-2  ">
        <div ref={svgRef}>
          <IoSunny className="text-xl shrink-0" />
        </div>
        <span ref={directionalTextRef} className="shrink-0">
          Directional Light
        </span>
      </div>
    </div>
  );
}
