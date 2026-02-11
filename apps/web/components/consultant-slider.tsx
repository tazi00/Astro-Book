"use client";

import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface SliderConfig {
  responsive?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  gap?: number;
  showScrollbar?: boolean;
  showArrows?: boolean;
  autoScroll?: boolean;
  autoScrollInterval?: number;
}

interface ConsultantSliderProps<T> {
  items: T[];
  config?: SliderConfig;
  children: (item: T, index: number) => React.ReactNode;
}

export function ConsultantSlider<T extends { id: string | number }>({
  items,
  config = {},
  children,
}: ConsultantSliderProps<T>) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [isClient, setIsClient] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const {
    responsive = { mobile: 1.5, tablet: 2.5, desktop: 4 },
    gap = 16,
    showScrollbar = true,
    showArrows = true,
    autoScroll = false,
    autoScrollInterval = 5000,
  } = config;

  // Set client flag and determine items per view based on screen size
  useEffect(() => {
    setIsClient(true);

    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(responsive.mobile ?? 1.5);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(responsive.tablet ?? 2.5);
      } else {
        setItemsPerView(responsive.desktop ?? 4);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, [responsive]);

  // Handle scroll position
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      return () => container.removeEventListener("scroll", checkScroll);
    }
  }, []);

  // Auto scroll functionality
  useEffect(() => {
    if (!autoScroll) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          scrollContainerRef.current;

        if (scrollLeft < scrollWidth - clientWidth - 10) {
          scrollContainerRef.current.scrollBy({
            left: (scrollContainerRef.current.clientWidth / itemsPerView) * 0.8,
            behavior: "smooth",
          });
        } else {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [autoScroll, autoScrollInterval, itemsPerView]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount =
        (scrollContainerRef.current.clientWidth / itemsPerView) * 0.9;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const itemWidth = 90 / itemsPerView;

  return (
    <>
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-visible::-webkit-scrollbar {
          height: 8px;
        }
        .scrollbar-visible::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .scrollbar-visible::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }
        .scrollbar-visible::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
        .slider-grab {
          cursor: grab;
        }
        .slider-grab.dragging {
          cursor: grabbing;
        }
      `}</style>
      <div className="w-full relative group">
        {/* Left Arrow */}
        {showArrows && (
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 -translate-x-4"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-gray-800" />
          </button>
        )}

        {/* Scroll Container */}
        <div
          ref={scrollContainerRef}
          className={`flex overflow-x-auto scroll-smooth slider-grab ${
            isDragging ? "dragging" : ""
          } ${showScrollbar ? "scrollbar-visible" : "scrollbar-hide"}`}
          style={{
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
            gap: `${gap}px`,
            paddingLeft: showArrows ? "20px" : "0",
            paddingRight: showArrows ? "20px" : "0",
          }}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
        >
          {items.map((item, index) => (
            <div
              key={item.id}
              className="flex-shrink-0"
              style={{
                width: `${itemWidth}%`,
                minWidth: `${itemWidth}%`,
                scrollSnapAlign: "start",
              }}
            >
              {children(item, index)}
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        {showArrows && (
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 translate-x-4"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-gray-800" />
          </button>
        )}
      </div>
    </>
  );
}
