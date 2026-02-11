"use client";

import { useRef } from "react";

export default function StorySlider() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const mouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;

    isDown = true;
    sliderRef.current.classList.add("cursor-grabbing");

    startX = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };

  const mouseLeave = () => {
    if (!sliderRef.current) return;

    isDown = false;
    sliderRef.current.classList.remove("cursor-grabbing");
  };

  const mouseUp = () => {
    if (!sliderRef.current) return;

    isDown = false;
    sliderRef.current.classList.remove("cursor-grabbing");
  };

  const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown || !sliderRef.current) return;

    e.preventDefault();

    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;

    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={sliderRef}
      onMouseDown={mouseDown}
      onMouseLeave={mouseLeave}
      onMouseUp={mouseUp}
      onMouseMove={mouseMove}
      className="
        w-full bg-white p-2
        overflow-x-auto
        flex gap-8
        cursor-grab
        select-none
        scrollbar-hide
      "
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
        <div
          key={item}
          className="
            h-16 w-16 shrink-0
            rounded-full
            bg-primary/20
            border-2 border-primary
          "
        />
      ))}
    </div>
  );
}
