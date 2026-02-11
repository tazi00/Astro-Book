"use client";

import { AstroPostCard } from "@/app/(feed)/page";
import { ConsultantSlider } from "@/components/consultant-slider";
import React from "react";

interface ConsultationItem {
  id: string | number;
  title: string;
  price: number;
  image: string;
}

function ConsultantPage() {
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
    <>
      <AstroCard />
      <section className="pt-10 pb-10 px-5 lg:px-[40px] md:px-[20px] border-b border-secondary ">
        <div className="">
          <h3 className="text-3xl text-secondary font-medium mb-5">
            Consultations
          </h3>
        </div>
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
                  <p className="text-secondary font-bold text-lg mb-4">
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
      </section>
      <section className="pt-4 pb-10 px-[40px] border-b border-secondary ">
        <div className="">
          <h3 className="text-3xl text-secondary font-medium mb-5">Courses</h3>
        </div>
        <div className="">
          <ConsultantSlider
            items={consultationData}
            config={{
              responsive: {
                mobile: 1.5,
                tablet: 2.5,
                desktop: 4,
              },
              gap: 40,
              showScrollbar: true,
              showArrows: true,
              autoScroll: false,
            }}
          >
            {(item) => (
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 flex flex-col h-full">
                <div className="relative overflow-hidden bg-gray-200 rounded-2xl ">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-[200px] object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="px-4 py-2 flex flex-col grow">
                  <h4 className="font-medium text-base md:text-lg text-black mb-2">
                    {item.title}
                  </h4>
                  <div className="flex items-center justify-between">
                    <p className="text-secondary font-bold text-lg mb-4">
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
          <div className="h-[1px] bg-white py-10">
            <div className="border border-secondary h-[1px]"></div>
          </div>
          <ConsultantSlider
            items={consultationData}
            config={{
              responsive: {
                mobile: 1.5,
                tablet: 2.5,
                desktop: 4,
              },
              gap: 40,
              showScrollbar: true,
              showArrows: true,
              autoScroll: false,
            }}
          >
            {(item) => (
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 flex flex-col h-full">
                <div className="relative overflow-hidden bg-gray-200 rounded-2xl ">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-[200px] object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="px-4 py-2 flex flex-col grow">
                  <h4 className="font-medium text-base md:text-lg text-black mb-2">
                    {item.title}
                  </h4>
                  <div className="flex items-center justify-between">
                    <p className="text-secondary font-bold text-lg mb-4">
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
        </div>

        <div className=" mt-10">
          <h4 className="text-[22px] font-normal   text-tertiary">
            {" "}
            <span className="text-primary"> Posts from</span> Suprio Karmakar
          </h4>

          <div className="grid grid-cols-2 gap-3">
            <div className="mt-5">
              <AstroPostCard post={{}} />
              <AstroPostCard post={{}} />
              <AstroPostCard post={{}} />
            </div>
            <div>
              <RatingReviews />{" "}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ConsultantPage;

export function AstroCard() {
  return (
    <div className=" bg-white rounded-2xl shadow-lg md:p-[40px] p-[20px] grid lg:grid-cols-[2fr_1.5fr] md:grid-cols-1 grid-cols-1 gap-6  lg:mx-[44px] md:mx-[34px] md:my-[16px] mt-[70px] mx-[20px]">
      {/* Left section */}
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex items-start gap-4 ">
          {/* Avatar */}
          <div className="flex flex-col items-center gap-2">
            <div className="lg:w-[232px] lg:h-[232px]  md:w-[150px] md:h-[150px]   w-[120px] h-[120px] rounded-full bg-[#EEC2FF] flex items-center justify-center">
              <div className="lg:w-[232px] lg:h-[232px] md:w-[150px] md:h-[150px] w-[120px] h-[120px] rounded-full bg-primary" />
            </div>
            <button className=" text-primary text-lg font-normal hover:underline mt-1">
              Follow+
            </button>
          </div>

          {/* Info */}
          <div className="flex-1">
            <h2 className="md:text-3xl text-xl font-medium text-secondary">
              Suprio Karmakar
            </h2>
            <p className="md:text-xl text-lg text-secondary mb-1">Vedic</p>
            <p className=" text-sm text-secondary">Bengali, English, Hindi</p>
            <p className="text-sm text-secondary">Exp: 15 Years</p>

            {/* Rating */}
            <div className="flex flex-col items-start  mt-2.5">
              <div className="text-primary text-xl leading-none">★★★★★</div>
              <span className="text-xs text-primary font-normal">
                1031 reviews
              </span>
            </div>

            {/* Buttons */}
            <div className="flex items-center mt-4">
              <button className=" text-xs  text-primary bg-primary/30 transitio max-w-[76px] font-semibold w-full h-[30px] min-h-[30px] flex items-center justify-center">
                ₹199
              </button>
              <button className=" text-xs  bg-primary text-white hover:bg-primary/80 transition max-w-[76px] w-full h-[30px] min-h-[30px] flex items-center justify-center">
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Follow */}

        {/* Description */}
        <p className="text-sm text-black text-justify">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        </p>
      </div>

      {/* Right image section */}
      <div className="w-full  overflow-hidden bg-linear-to-br from-indigo-900 to-purple-900 flex items-center justify-center lg:h-full h-[300px] ">
        <img
          src="/astro-banner.jpg"
          alt="Astro Book"
          className="w-full h-full object-cover opacity-90"
        />
      </div>
    </div>
  );
}

interface Reply {
  id: string;
  author: string;
  date: string;
  content: string;
}

interface Review {
  id: string;
  author: string;
  date: string;
  rating: number;
  content: string;
  reply?: Reply;
}

interface RatingReviewsProps {
  reviews?: Review[];
  averageRating?: number;
  totalReviews?: number;
}

const dummyReviews: Review[] = [
  {
    id: "1",
    author: "Abhirup Ghosh",
    date: "05 Dec, 2025",
    rating: 5,
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
  },
  {
    id: "2",
    author: "Abhirup Ghosh",
    date: "05 Dec, 2025",
    rating: 5,
    content: "",
  },
  {
    id: "3",
    author: "Abhirup Ghosh",
    date: "05 Dec, 2025",
    rating: 5,
    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    reply: {
      id: "r1",
      author: "Suprio Karmakar",
      date: "",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation",
    },
  },
];

const RatingReviews: React.FC<RatingReviewsProps> = ({
  reviews = dummyReviews,
  averageRating = 4.1,
  totalReviews = 1031,
}) => {
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-lg ${
              star <= rating ? "text-primary" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full max-w-2xl p-7 bg-primary/5  border border-gray-200">
      {/* Header */}
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-primary mb-2">
          Rating & Reviews
        </h2>
        <div className="flex items-start gap-2">
          <span className="text-5xl font-bold text-primary">
            {averageRating}
          </span>
          <div className="flex flex-col items-start -mt-1">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`text-2xl ${
                    star <= Math.floor(averageRating)
                      ? "text-primary"
                      : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <p className="text-primary text-sm -mt-1">{totalReviews} reviews</p>
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="  rounded-lg shadow-md p-5 border border-gray-100"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-purple-200 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-xs text-gray-900">
                  {review.author}
                </h3>
                <p className="text-xs text-primary -mt-1">{review.date}</p>
              </div>
            </div>

            {/* Rating Stars */}
            <div className="-mt-1">{renderStars(review.rating)}</div>

            {/* Review Content */}
            {review.content && (
              <p className="text-gray-700 text-xs leading-[15px] -mt-1">
                {review.content}
              </p>
            )}

            {/* Nested Reply */}
            {review.reply && (
              <div className="mt-4 ml-6 bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-xs text-gray-900">
                      {review.reply.author}
                    </h4>
                  </div>
                </div>
                <p className="text-gray-700 text-xs leading-[15px] -mt-1">
                  {review.reply.content}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export { RatingReviews };
