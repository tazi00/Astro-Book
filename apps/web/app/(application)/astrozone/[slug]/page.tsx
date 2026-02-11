"use client";

import { ConsultantSlider } from "@/components/consultant-slider";
import { AstrologerCard } from "../../explore/page";
import { CircleChevronDown } from "lucide-react";

interface ConsultationItem {
  id: string | number;
  title: string;
  price: number;
  image: string;
}

function AstrozoneSlugPage() {
  const consultationData: ConsultationItem[] = [
    {
      id: 1,
      title: "Couples Harmony",
      price: 4000,
      image: "/images/image.png",
    },
    {
      id: 2,
      title: "Love Healing",
      price: 1000,
      image: "/images/image.png",
    },
    {
      id: 3,
      title: "Career Healing",
      price: 3000,
      image: "/images/image.png",
    },
    {
      id: 4,
      title: "Medical Healing",
      price: 999,
      image: "/images/image.png",
    },
    {
      id: 5,
      title: "Financial Guidance",
      price: 2500,
      image: "/images/image.png",
    },
    {
      id: 6,
      title: "Spiritual Growth",
      price: 1500,
      image: "/images/image.png",
    },
  ];

  return (
    <div>
      <div className="max-w-[1000px] mx-auto mt-4">
        <h3 className="text-4xl capitalize font-semibold text-primary">
          GEMSTONE CONSULTATION
        </h3>
        <p className="text-[15px] text-black font-normal leading-[15px]">
          A gemstone consultation involves an expert analyzing your personal
          details, often a birth chart based on your date, time, and place of
          birth, to recommend specific gemstones that may align with your energy
          and goals. These consultations are available through various online
          services.{" "}
        </p>
        <h6 className=" text-2xl font-semibold text-secondary">
          Starting from <span className="text-primary">₹1100</span>{" "}
        </h6>

        <div className="mt-3">
          <ConsultantSlider
            items={consultationData}
            config={{
              responsive: {
                mobile: 2,
                tablet: 3,
                desktop: 4,
              },
              gap: 40,
              showScrollbar: true,
              showArrows: true,
              autoScroll: false,
            }}
          >
            {(item) => (
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 flex flex-col h-ful w-fulll">
                <div className="relative overflow-hidden bg-gray-200 rounded-2xl ">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full lg:h-[200px] h-[150px] object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="px-4 py-2 flex flex-col grow">
                  <h4 className="font-medium lg:text-base text-lg text-black mb-2">
                    {item.title}
                  </h4>
                  <div className="flex items-center justify-between">
                    <p className="text-secondary font-bold text-lg">
                      ₹{item.price.toLocaleString()}
                    </p>
                    <button className=" text-xs  bg-primary text-white hover:bg-primary/80 transition max-w-[76px] w-full h-[30px] min-h-[30px] flex items-center justify-center">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            )}
          </ConsultantSlider>

          <div className="text-center py-1 mt-8">
            <button className="">
              <CircleChevronDown size={40} className="text-primary" />
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <div>
          <div className="border-b-2 border-gray-500 mb-5"></div>

          <div className="max-w-[1020px] mx-auto ">
            <h3 className="text-gray-400 text-2xl mb-3 mt-5  ">
              Top Astrologers for Gemstone Consultation
            </h3>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6 md:gap-4 gap-2 py-2">
              <AstrologerCard />
              <AstrologerCard />
              <AstrologerCard />
              <AstrologerCard />
              <AstrologerCard />
              <AstrologerCard />
            </div>

            <div className="text-center py-1 mt-8">
              <button className="">
                <CircleChevronDown size={40} className="text-primary" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AstrozoneSlugPage;
