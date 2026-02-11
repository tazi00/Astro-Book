"use client";

import { useState } from "react";
import { ChevronDown, Search, SlidersHorizontal } from "lucide-react";


  export const renderPattern = (pattern: string, light = false) => {
    switch (pattern) {
      case "numbers":
        return (
          <div className="absolute inset-0 overflow-hidden opacity-30">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute text-white/40 font-bold"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  fontSize: `${12 + Math.random() * 16}px`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              >
                {Math.floor(Math.random() * 10)}
              </div>
            ))}
          </div>
        );
      case "vastu":
        return (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-24 h-24 opacity-40">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#92400e"
                strokeWidth="1"
              />
              <line
                x1="50"
                y1="10"
                x2="50"
                y2="90"
                stroke="#92400e"
                strokeWidth="1"
              />
              <line
                x1="10"
                y1="50"
                x2="90"
                y2="50"
                stroke="#92400e"
                strokeWidth="1"
              />
              <text
                x="50"
                y="25"
                fontSize="8"
                fill="#92400e"
                textAnchor="middle"
              >
                N
              </text>
              <text
                x="50"
                y="80"
                fontSize="8"
                fill="#92400e"
                textAnchor="middle"
              >
                S
              </text>
              <text
                x="20"
                y="53"
                fontSize="8"
                fill="#92400e"
                textAnchor="middle"
              >
                W
              </text>
              <text
                x="80"
                y="53"
                fontSize="8"
                fill="#92400e"
                textAnchor="middle"
              >
                E
              </text>
            </svg>
          </div>
        );
      case "vedic":
        return (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-20 h-20">
              <polygon
                points="50,10 90,50 50,90 10,50"
                fill="none"
                stroke="#1e3a8a"
                strokeWidth="2"
              />
              <polygon
                points="50,20 80,50 50,80 20,50"
                fill="none"
                stroke="#1e3a8a"
                strokeWidth="1.5"
              />
              {[...Array(8)].map((_, i) => (
                <line
                  key={i}
                  x1="50"
                  y1="50"
                  x2={50 + 40 * Math.cos((i * Math.PI) / 4)}
                  y2={50 + 40 * Math.sin((i * Math.PI) / 4)}
                  stroke="#1e3a8a"
                  strokeWidth="2"
                />
              ))}
            </svg>
          </div>
        );
      case "reki":
        return (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-28 h-28 opacity-60">
              <circle
                cx="50"
                cy="50"
                r="35"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30 - 90) * (Math.PI / 180);
                return (
                  <g key={i}>
                    <line
                      x1="50"
                      y1="50"
                      x2={50 + 35 * Math.cos(angle)}
                      y2={50 + 35 * Math.sin(angle)}
                      stroke="white"
                      strokeWidth="0.5"
                    />
                    <text
                      x={50 + 28 * Math.cos(angle)}
                      y={50 + 28 * Math.sin(angle)}
                      fontSize="6"
                      fill="white"
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      {
                        [
                          "♈",
                          "♉",
                          "♊",
                          "♋",
                          "♌",
                          "♍",
                          "♎",
                          "♏",
                          "♐",
                          "♑",
                          "♒",
                          "♓",
                        ][i]
                      }
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        );
      case "kp":
        return (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-24 h-24">
              <circle
                cx="50"
                cy="50"
                r="35"
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
              <circle cx="50" cy="50" r="15" fill="white" opacity="0.3" />
              <polygon points="50,20 60,45 50,35 40,45" fill="white" />
            </svg>
          </div>
        );
      case "tarot":
        return (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-20 h-20">
              <circle
                cx="50"
                cy="50"
                r="35"
                fill="none"
                stroke="#fbbf24"
                strokeWidth="2"
              />
              <path
                d="M 30,50 Q 50,30 70,50 Q 50,70 30,50"
                fill="#fbbf24"
                opacity="0.6"
              />
            </svg>
          </div>
        );
      case "pastlife":
        return (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-32 h-32 opacity-50">
              <circle cx="30" cy="70" r="3" fill="white" />
              <circle cx="50" cy="60" r="2.5" fill="white" />
              <circle cx="70" cy="65" r="3.5" fill="white" />
              <circle cx="40" cy="50" r="2" fill="white" />
              <path
                d="M 50,80 Q 50,60 50,40 Q 50,30 55,25"
                stroke="white"
                fill="none"
                strokeWidth="2"
              />
              <circle cx="55" cy="22" r="5" fill="white" />
            </svg>
          </div>
        );
      case "palmistry":
        return (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-24 h-24">
              <path
                d="M 30,80 L 30,40 L 35,20 M 40,20 L 40,35 M 50,18 L 50,40 M 60,20 L 60,38 M 68,25 L 68,40 L 65,60 L 50,75 L 30,80"
                stroke="white"
                fill="none"
                strokeWidth="2"
              />
              <path
                d="M 30,50 Q 40,45 50,50"
                stroke="white"
                fill="none"
                strokeWidth="1"
              />
              <path
                d="M 30,60 Q 45,58 55,62"
                stroke="white"
                fill="none"
                strokeWidth="1"
              />
            </svg>
          </div>
        );
      case "kundali":
        return (
          <div className="absolute inset-0 flex items-center justify-center p-3">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <rect
                x="10"
                y="10"
                width="80"
                height="80"
                fill="none"
                stroke="#78350f"
                strokeWidth="2"
              />
              <line
                x1="10"
                y1="50"
                x2="90"
                y2="50"
                stroke="#78350f"
                strokeWidth="2"
              />
              <line
                x1="50"
                y1="10"
                x2="50"
                y2="90"
                stroke="#78350f"
                strokeWidth="2"
              />
              <line
                x1="10"
                y1="10"
                x2="90"
                y2="90"
                stroke="#78350f"
                strokeWidth="2"
              />
              <line
                x1="90"
                y1="10"
                x2="10"
                y2="90"
                stroke="#78350f"
                strokeWidth="2"
              />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  
function CattegoryPage() {
  const [active, setActive] = useState("All");
  const categories = [
    { name: "All", icon: null },
    { name: "Love", icon: null },
    { name: "Education", icon: null },
    { name: "Marriage", icon: null },
    { name: "Health", icon: null },
    { name: "Legal", icon: null },
    { name: "Finance", icon: null },
    { name: "Remedies", icon: null },
  ];

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
      <div className="grid grid-cols-3 lg:gap-[20px_40px] gap-[10px_20px] ">
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

      {/* Scroll Down Indicator */}
      <div className="flex justify-center mt-6">
        <div className="w-8 h-8 rounded-full border-2 border-gray-400 flex items-center justify-center animate-bounce">
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
}

export default CattegoryPage;
