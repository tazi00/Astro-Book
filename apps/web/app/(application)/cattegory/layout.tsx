"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

function CattegoryLayoutPage({ children }: { children: React.ReactNode }) {
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

  return (
    <div className="bg-white">
      {/* Scrollable Category Bar */}
      <div className=" flex items-center justify-start border-b border-secondary lg:py-2 py-1 mt-[60px] md:mt-0 px-4">
        {/* Left Section */}
        <div className="flex items-center  lg:gap-9 md:gap-5  gap-3 overflow-x-auto no-scrollbar md:w-max w-[330px]">
          {/* Filter Button */}
          <button className="flex items-center gap-2 px-2 py-1 rounded-full border border-gray-300 text-[12px] font-medium hover:bg-gray-50 transition lg:ms-8 md:ms-5 ms-5">
            <SlidersHorizontal className="text-secondary" size={16} />
            Filter
          </button>

          {/* Category Pills */}
          {categories.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.name;

            return (
              <button
                key={item.name}
                onClick={() => setActive(item.name)}
                className={`flex items-center gap-2 px-2 py-1 rounded-full text-[12px] font-medium border transition whitespace-nowrap
                ${
                  isActive
                    ? "bg-primary text-white border-primary"
                    : "border-gray-300 text-secondary hover:bg-gray-50"
                }`}
              >
                {/* {Icon !== null && <Icon className="text-secondary" size={16} />} */}
                {item.name}
              </button>
            );
          })}
        </div>

        {/* Right Section */}
        <button className="ms-auto p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition">
          <Search size={18} />
        </button>
      </div>
      {/* Cards Grid */}
      {children}
    </div>
  );
}

export default CattegoryLayoutPage;
