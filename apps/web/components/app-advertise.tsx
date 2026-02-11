"use client";

import { Search } from "lucide-react";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";

const AppAdvertise = () => {
  return (
    <aside className="hidden md:flex flex-col   items-end overflow-y-scroll h-screen">
      <TopAstrologersSidebar />
      <div className="lg:w-[310px] p-4 mb-30">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-base font-medium text-gray-400">
            Recommended for you
          </h3>

          <div className=" ">
            <ul className="flex items-center gap-4">
              <li>
                <button className="">
                  <Search size={20} className="mt-2 text-primary" />
                </button>
              </li>
              <li>
                <button className="">
                  <BsThreeDots size={20} className="mt-2" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Grid */}

        <div className="grid grid-cols-2 gap-4">
          <RecommendCard
            title="Gemstone Consultation"
            img="/images/gemstone.jpg"
          />
          <RecommendCard title="Bracelets" img="/images/bracelet.jpg" />
          <RecommendCard title="Reiki healing" img="/images/reiki.jpg" />
          <RecommendCard title="Palmistry" img="/images/palmistry.jpg" />
        </div>
      </div>
    </aside>
  );
};

export default AppAdvertise;

function TopAstrologersSidebar() {
  const astrologers = Array.from({ length: 5 });

  return (
    <div className="lg:w-[310px]  rounded-xl p-4">
      {/* Header */}
      <div className="mb-0 flex items-center justify-between">
        <h3 className="text-base font-medium text-gray-400">
          Top Astrologers for you
        </h3>

        <div className=" ">
          <ul className="flex items-center gap-4">
            <li>
              <button className="">
                <Search size={20} className="mt-2 text-primary" />
              </button>
            </li>
            <li>
              <button className="">
                <BsThreeDots size={20} className="mt-2" />
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* List */}
      <div className="">
        <div className="flex items-center justify-end">
          <button className="text-secondary text-xs font-light">See All</button>
        </div>

        {astrologers.map((_, i) => (
          <div key={i}>
            <div className="flex items-center justify-between gap-3 rounded-lg py-2 hover:bg-gray-50">
              {/* Left */}
              <div className="flex items-center gap-3">
                <Image
                  src="/sidebar-icons/profile-icon.png"
                  width={40}
                  height={40}
                  alt="profile-icon"
                />

                <div className="leading-tight">
                  <p className="text-sm font-medium text-tertiary">
                    Suprio Karmakar
                  </p>
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-xs text-gray-500">Vedic</p>
                    <p className="text-[10px] text-primary">Following</p>
                  </div>
                </div>
              </div>

              {/* Action */}
              <button className="rounded bg-primary flex items-center justify-center h-[25px] w-[80px] text-[10px] font-medium text-white hover:bg-primary/80">
                Book Now
              </button>
            </div>
            <div
              className="top-0 left-0 w-full h-[2px] 
bg-[linear-gradient(to_right,white_0%,white_20%,gray_50%,white_80%,white_100%)]"
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

const RecommendCard = ({ img, title }: any) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-full aspect-square rounded-2xl overflow-hidden bg-gray-100">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover bg-red-50"
        />
      </div>
      <p className="text-xs font-medium text-primary text-center">{title}</p>
    </div>
  );
};
