"use client";

import AstroInput from "@/components/astrov1/astro-input";
import { ChevronDown, CircleChevronDown } from "lucide-react";
import React from "react";
import { renderPattern } from "../cattegory/page";

function AstrozonePage() {
  const cards = [
    {
      title: "Numerology",
      gradient: "from-purple-900 via-purple-800 to-purple-900",
      pattern: "numbers",
    },
    {
      title: "Vastu",
      gradient: "from-amber-50 to-amber-100",
      pattern: "vastu",
      light: true,
    },
    {
      title: "Vedic",
      gradient: "from-yellow-300 via-yellow-400 to-yellow-300",
      pattern: "vedic",
    },
    {
      title: "Reki",
      gradient: "from-purple-600 via-fuchsia-500 to-purple-600",
      pattern: "reki",
    },
    {
      title: "KP Astro",
      gradient: "from-orange-400 via-orange-500 to-orange-600",
      pattern: "kp",
    },
    {
      title: "Tarot",
      gradient: "from-slate-700 via-slate-600 to-slate-700",
      pattern: "tarot",
    },
    {
      title: "Past Life",
      gradient: "from-blue-600 via-cyan-500 to-blue-600",
      pattern: "pastlife",
    },
    {
      title: "Palmistry",
      gradient: "from-gray-900 via-gray-800 to-black",
      pattern: "palmistry",
    },
    {
      title: "Kundali",
      gradient: "from-orange-300 via-orange-400 to-orange-500",
      pattern: "kundali",
    },
  ];

  return (
    <div className="lg:px-10 px-5 lg:py-2 pt-5 pb-30">
      <div className="grid grid-cols-4 lg:gap-[20px_40px] gap-[10px_20px] ">
        {cards.map((card, index) => (
          <div key={index}>
            <div
              className={`relative aspect-square rounded-2xl bg-linear-to-br ${card.gradient} overflow-hidden shadow-lg cursor-pointer transform transition-transform  active:scale-95`}
            >
              {renderPattern(card.pattern, card.light)}
            </div>
            <h4 className="text-center text-[12px] lg:text-[14px] mt-2 text-primary font-bold">
              {card.title}
            </h4>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="">
          <CircleChevronDown size={40} className="text-primary" />
        </button>
      </div>
    </div>
  );
}

export default AstrozonePage;
