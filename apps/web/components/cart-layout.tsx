"use client";

import Link from "next/link";
import React, { useState } from "react";

type ConsultationItem = {
  id: number;
  title: string;
  author: string;
  type: string;
  price: number;
  rating: number;
  date?: string;
  inStock: boolean;
  image: string;
};

type TabType = "All" | "Consultations" | "Courses" | "Products";

export default function CartLayout() {
  const [activeTab, setActiveTab] = useState<TabType>("Consultations");
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const consultations: ConsultationItem[] = [
    {
      id: 1,
      title: "Couples Harmony",
      author: "Astro Book",
      type: "Consultation",
      price: 4000,
      rating: 5,
      date: "30 Dec 2025, Tue",
      inStock: true,
      image: "/api/placeholder/80/80",
    },
    {
      id: 2,
      title: "Couples Harmony",
      author: "Astro Book",
      type: "Consultation",
      price: 4000,
      rating: 5,
      inStock: false,
      image: "/api/placeholder/80/80",
    },
    {
      id: 3,
      title: "Couples Harmony",
      author: "Astro Book",
      type: "Consultation",
      price: 4000,
      rating: 5,
      date: "30 Dec 2025, Tue",
      inStock: true,
      image: "/api/placeholder/80/80",
    },
    {
      id: 4,
      title: "Couples Harmony",
      author: "Astro Book",
      type: "Consultation",
      price: 4000,
      rating: 5,
      inStock: false,
      image: "/api/placeholder/80/80",
    },
    {
      id: 5,
      title: "Couples Harmony",
      author: "Astro Book",
      type: "Consultation",
      price: 4000,
      rating: 5,
      date: "30 Dec 2025, Tue",
      inStock: true,
      image: "/api/placeholder/80/80",
    },
    {
      id: 6,
      title: "Couples Harmony",
      author: "Astro Book",
      type: "Consultation",
      price: 4000,
      rating: 5,
      inStock: false,
      image: "/api/placeholder/80/80",
    },
  ];

  const toggleItemSelection = (id: number) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const tabs: TabType[] = ["All", "Consultations", "Courses", "Products"];

  const totalPrice = 12000;
  const discount = 2000;
  const platformFee = 20;
  const shipping = 100;
  const totalAmount = totalPrice - discount + platformFee + shipping;

  return (
    <div className="mt-8 mb-20">
      <div className="mx-auto max-w-[1050px] w-full ">
        {/* Tabs */}

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px]">
          {/* Left Panel - Consultations List */}
          <div className="">
            <div className="flex border-b-2 bg-primary/5 shadow border-gray-200 mb-5 justify-between">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-12 py-2 text-[15px] transition-colors ${
                    activeTab === tab
                      ? "font-medium text-primary"
                      : "text-tertiary  font-medium hover:text-gray-900"
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-purple-800" />
                  )}
                </button>
              ))}
            </div>

            <div className="shadow-sm bg-primary/5 ">
              {consultations.map((item) => (
                <div
                  key={item.id}
                  className="mb-4 flex gap-4 rounded-lg items-center  p-4 "
                >
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => toggleItemSelection(item.id)}
                    className="mt-1 h-[15px] w-[15px] border border-tertiary cursor-pointer"
                  />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-25 w-25 rounded-lg object-cover border"
                  />
                  <div className="flex items-center">
                    <div className="flex-1">
                      <h3 className="text-xl font-normal text-secondary">
                        {item.title}
                      </h3>
                      <p className="mb-2 text-[12px] text-tertiary">
                        by <span className="text-tertiary">{item.author}</span>{" "}
                        | <span className="text-primary">{item.type}</span>
                      </p>

                      {item.inStock ? (
                        <>
                          <div className=" mb-1 text-xl font-semibold text-tertiary">
                            ₹ {item.price.toLocaleString()}
                          </div>
                          <div className="flex justify-between max-w-[150px]">
                            <div className="mb-2 text-[10px] flex  items-center">
                              <button className="px-2 border border-tertiary">
                                +
                              </button>
                              <h6 className="px-3 border border-tertiary">1</h6>
                              <button className="px-2 border border-tertiary">
                                -
                              </button>
                            </div>
                            <div>
                              <a
                                href="#"
                                className="text-[13px] text-purple-800 hover:underline"
                              >
                                Rebook 🔄
                              </a>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="text-[16px] font-medium text-tertiary   ">
                            Out Of Stock
                          </div>
                          <div className="flex justify-between max-w-[200px]">
                            <div className="text-xs text-gray-600">
                              Notify when available ●
                            </div>
                            <a
                              href="#"
                              className="text-[13px] text-purple-800 hover:underline"
                            >
                              Rebook 🔄
                            </a>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="ms-20">
                      {item.inStock && (
                        <h5 className="text-tertiary text-xs">
                          9th Dec 2025, Tue
                        </h5>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel - Customer Details */}
          <div className="bg-transparent px-5">
            {/* Customer Info */}
            <div className="shadow bg-primary/5 rounded-lg p-4">
              <h4 className="text-gray-400 font-medium text-sm mb-2">
                Customer details:
              </h4>

              <div className="text-sm  px-3 text-tertiary">
                <p>
                  <span className="font-normal">Name :</span> Ankush Sarkar
                </p>
                <p>
                  <span className="font-normal">Phone Number :</span> +91 99968
                  47146
                </p>
                <p>
                  <span className="font-normal">Email :</span>{" "}
                  ankush256@gmail.com
                </p>
                <p className="text-start flex">
                  <span className="font-normal text-start ">Address:</span>
                  Champadali More, Barasat, North 24 Parganas, WB - 700125
                </p>
              </div>
            </div>

            {/* Price Details */}
            <div className="shadow bg-primary/5 rounded-lg p-4 mt-5">
              <h4 className="text-gray-400 font-medium text-sm mb-2">
                Price details:
              </h4>
              <div className="text-sm space-y-1 px-3 text-tertiary">
                <div className="flex justify-between">
                  <span>Price (3 items)</span>
                  <span>₹ 12,000</span>
                </div>

                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="text-red-500">- ₹ 2,000</span>
                </div>

                <div className="flex justify-between">
                  <span>Platform Fee</span>
                  <span>₹ 20</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>₹ 100</span>
                </div>

                <hr className="my-3 border-gray-300" />

                <div className="flex justify-between font-normal">
                  <span>Total Amount</span>
                  <span>₹ 10,120</span>
                </div>

                <hr className="my-3 border-gray-300" />

                <p className="text-primary text-sm">
                  You will save ₹2,000 on this order
                </p>
              </div>
            </div>
            <div className="flex justify-end mt-5">
              <Link href="/orders" className="bg-primary text-white px-3 py-2 ">
                Make Payment {">"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
