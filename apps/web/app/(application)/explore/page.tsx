"use client";

import {
  SlidersHorizontal,
  Heart,
  GraduationCap,
  HeartHandshake,
  Plus,
  Scale,
  Landmark,
  Sparkles,
  Search,
  Grid,
  Star,
  CircleChevronDown,
} from "lucide-react";
import { useState } from "react";

export default function ExplorePage() {
  const [active, setActive] = useState("All");
  const categories = [
    { name: "All", icon: Grid },
    { name: "Love", icon: Heart },
    { name: "Education", icon: GraduationCap },
    { name: "Marriage", icon: HeartHandshake },
    { name: "Health", icon: Plus },
    { name: "Legal", icon: Scale },
    { name: "Finance", icon: Landmark },
    { name: "Remedies", icon: Sparkles },
  ];

  return (
    <div className="bg-white">
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
                {Icon && <Icon className="text-secondary" size={16} />}
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
      <div className="">
        <div className="lg:px-10 md:px-5 px-2 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6 md:gap-4 gap-2 py-2">
          <AstrologerCard />
          <AstrologerCard />
          <AstrologerCard />
          <AstrologerCard />
          <AstrologerCard />
          <AstrologerCard />
          <AstrologerCard />
        </div>
        <div className="text-center">
          <button className="">
            <CircleChevronDown size={40} className="text-primary" />
          </button>
        </div>
      </div>

      <div className="mt-10 px-4 pb-24">
        <h3 className="md:text-xl text-[26px] leading-7 text-center lg:max-w-full max-w-[360px] mx-auto font-medium  text-primary flex flex-col items-center mb-4">
          How talking to an astrologer can help you?
          <span className=" text-black text-base font-medium">
            24*7 Astrology consultation
          </span>
        </h3>

        <p className="text-lg font-light text-secondary/70 mb-4 text-justify">
          Facing financial uncertainty? Or simply wondering what day to host
          that big-fat, dreamy and maybe sustainable wedding of yours? Well,
          AstroTalk’s astrology consultation services, which connect you with
          over 500 astrologers online, can be your one-stop destination to find
          answers to all such queries.
        </p>
        <p className="text-lg font-light text-secondary/70 mb-4 text-justify">
          Astrology is a predictive science with its own sets of methods, claims
          and findings that have forever inspired and allowed people with
          insights into different aspects of their life. These aspects include
          your love-life, career, business, financial prosperity and so much
          more. All these aspects impact our lives in some way or the other, and
          we usually wish for them to be on the positive track. But surely,
          that’s not invariably possible. Life is all about highs and lows, and
          there would be times when you would find yourself in a plagued stage
          and only wish to come out of it. Well, that is one time when astrology
          and astrologers could be your saviou
        </p>
        <p className="text-lg font-light text-secondary/70 mb-4 text-justify">
          If you ask a Vedic astrologer what prompts all the happenings in our
          life, they will tell you how it all circles around the movement and
          the shifting of planets. These Navgrahas, as we call them in
          astrology, not only shift up above us but also through the houses in
          our kundli. While one day Jupiter is in the second house of your
          Kundli, which is the house of finance, on the other, it might have
          shifted to the seventh, i.e. the house of partnership, relationship
          and such mushy traits. This shifting is what influences the life
          happenings, which is studied by the best astrologers.
        </p>
      </div>
    </div>
  );
}

export function AstrologerCard() {
  return (
    <div className="w-full  bg-white rounded-xl shadow-md hover:shadow-lg transition p-3 flex items-start justify-between">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="w-14 h-14 rounded-full border border-primary flex items-center justify-center ">
          <div className="w-14 h-14 rounded-full bg-primary/20" />
        </div>

        {/* Info */}
        <div>
          <h2 className="text-xs font-semibold text-secondary mb-1">
            Suprio Karmakar
          </h2>

          <p className="text-[10px] text-secondary">Vedic</p>

          <p className="text-[10px] text-secondary">Bengali, English, Hindi</p>

          <p className="text-[10px] text-secondary">Exp: 15 Years</p>

          {/* Rating */}
          <div className="flex flex-col items-start  mt-1">
            <div className="flex">
              {[...Array(4)].map((_, i) => (
                <Star key={i} size={10} className="text-primary fill-primary" />
              ))}
              <Star size={10} className="text-gray-300 fill-gray-300" />
            </div>

            <span className="text-[10px] text-primary ">1031 reviews</span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-between items-end  h-[106px]">
        <button className="text-[12px] text-primary  hover:underline ">
          Follow +
        </button>
        <div className="mt-auto">
          <button className="bg-primary hover:bg-primary/80 text-white text-[10px] px-3 py-1.5  font-medium transition w-full">
            Book Now
          </button>
          <div className="bg-primary/20   w-full text-center text-primary text-[10px] font-semibold px-3 py-1 ">
            ₹ 199
          </div>
        </div>
      </div>
    </div>
  );
}
