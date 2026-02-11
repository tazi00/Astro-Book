"use client";

import Link from "next/link";
import React from "react";

function ConfirmedPage() {
  return (
    <div className="  mt-8 max-w-[1050px] w-full mx-auto shadow-lg rounded-xl  ">
      <div className="bg-white max-w-[800px] w-full mx-auto p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl font-bold">
            ✓
          </div>

          <h2 className="mt-4 text-3xl font-medium text-gray-400">
            Your order has been confirmed
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Section */}
          <div className="space-y-4">
            <div className="h-[50px]">
              <p>
                Booking ID:{" "}
                <span className="font-normal text-tertiary">AB548652</span>
              </p>
              <p>
                Transaction ID:{" "}
                <span className="font-normal text-tertiary">694754758654</span>
              </p>
            </div>

            {/* Customer Details */}
            <div className="shadow rounded-lg p-4">
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
            <div className="shadow rounded-lg p-4">
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
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-4 ">
            <div className="h-[50px]">
              <p>
                Order placed on
                <span className="font-normal text-tertiary ms-2">
                  8th Dec 2025
                </span>
              </p>
            </div>

            <div className="shadow rounded-lg ">
              {[1, 2, 3].map((item) => (
                <div key={item} className=" p-4 flex gap-4 items-center">
                  <img
                    src="https://images.unsplash.com/photo-1602524208751-0b4f5b2fdf6f"
                    className="w-24 h-24 rounded-md object-cover"
                  />

                  <div className="flex-1">
                    <h4 className="font-normal text-lg text-secondary">
                      Couples Harmony
                    </h4>

                    <p className="text-sm font-normal text-tertiary">
                      by Astro Book |{" "}
                      <span className="text-primary">Consultation</span>
                    </p>

                    <div className="mt-2 flex flex-col justify-between text-sm">
                      <p className="font-semibold text-tertiary text-xl">
                        ₹ 4000
                      </p>

                      <p className="text-tertiary">
                        Qty: 1 · 9th Dec 2025, Tue
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div>
          <ul>
            <li>
              <Link href="/cart" className="text-xl text-tertiary">
                Return to cart
              </Link>
            </li>
            <li>
              <Link href="/orders" className="bg-primary text-white px-3 py-2 ">
                My bookings {">"}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ConfirmedPage;
