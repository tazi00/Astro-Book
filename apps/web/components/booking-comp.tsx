"use client";

import React, { useState } from "react";
import {
  Star,
  Upload,
  Calendar,
  MapPin,
  Download,
  ExternalLink,
} from "lucide-react";

interface Booking {
  id: string;
  title: string;
  provider: string;
  image: string;
  date: string;
  time: string;
  location?: string;
  bookingId: string;
  transactionId: string;
  orderDate: string;
  price: string;
  status:
    | "upcoming"
    | "completed"
    | "cancelled"
    | "ongoing"
    | "ordered"
    | "delivered";
}

const BookingManager = () => {
  const [activeTab, setActiveTab] = useState<
    "consultations" | "courses" | "products"
  >("consultations");
  const [noteInputs, setNoteInputs] = useState<{ [key: string]: string }>({});

  // Sample data
  const consultationsData: Booking[] = [
    {
      id: "1",
      title: "Couples Harmony",
      provider: "Astro Book",
      image: "/api/placeholder/100/100",
      date: "9th Dec 2025",
      time: "10:00 A.M",
      location: "Reschedule",
      bookingId: "AB548652",
      transactionId: "694754758654",
      orderDate: "8th Dec 2025",
      price: "₹ 3,373.33",
      status: "upcoming",
    },
    {
      id: "2",
      title: "Couples Harmony",
      provider: "Astro Book",
      image: "/api/placeholder/100/100",
      date: "9th Dec 2025",
      time: "10:00 A.M",
      bookingId: "AB548652",
      transactionId: "694754758654",
      orderDate: "8th Dec 2025",
      price: "₹ 3,373.33",
      status: "completed",
    },
  ];

  const coursesData: Booking[] = [
    {
      id: "3",
      title: "Couples Harmony",
      provider: "Astro Book",
      image: "/api/placeholder/100/100",
      date: "9th Dec 2025",
      time: "10:00 A.M",
      location: "Reschedule",
      bookingId: "AB548652",
      transactionId: "694754758654",
      orderDate: "8th Dec 2025",
      price: "₹ 3,373.33",
      status: "upcoming",
    },
    {
      id: "4",
      title: "Couples Harmony",
      provider: "Astro Book",
      image: "/api/placeholder/100/100",
      date: "9th Dec 2025",
      time: "10:00 A.M",
      bookingId: "AB548652",
      transactionId: "694754758654",
      orderDate: "8th Dec 2025",
      price: "₹ 3,373.33",
      status: "ongoing",
    },
    {
      id: "5",
      title: "Couples Harmony",
      provider: "Astro Book",
      image: "/api/placeholder/100/100",
      date: "9th Dec 2025",
      time: "10:00 A.M",
      bookingId: "AB548652",
      transactionId: "694754758654",
      orderDate: "8th Dec 2025",
      price: "₹ 3,373.33",
      status: "completed",
    },
  ];

  const productsData: Booking[] = [
    {
      id: "6",
      title: "Couples Harmony",
      provider: "Astro Book",
      image: "/api/placeholder/100/100",
      date: "9th Dec 2025",
      time: "Arriving",
      location: "Exchange",
      bookingId: "AB548652",
      transactionId: "694754758654",
      orderDate: "8th Dec 2025",
      price: "₹ 3,373.33",
      status: "ordered",
    },
    {
      id: "7",
      title: "Couples Harmony",
      provider: "Astro Book",
      image: "/api/placeholder/100/100",
      date: "9th Dec 2025",
      time: "Delivered on",
      location: "Return",
      bookingId: "AB548652",
      transactionId: "694754758654",
      orderDate: "8th Dec 2025",
      price: "₹ 3,373.33",
      status: "delivered",
    },
  ];

  const handleNoteChange = (id: string, value: string) => {
    setNoteInputs({ ...noteInputs, [id]: value });
  };

  const handleSave = (id: string) => {
    console.log("Saving note for booking:", id, noteInputs[id]);
  };

  const handleDone = (id: string) => {
    console.log("Marking as done for booking:", id, noteInputs[id]);
  };

  const renderProgressBar = (
    status: string,
    type: "consultations" | "courses" | "products",
  ) => {
    if (type === "consultations") {
      return null;
    }

    const steps =
      type === "courses"
        ? [
            "Booking\nConfirmed",
            "Course\nStarted",
            "Ongoing",
            "Course\nCompleted",
          ]
        : ["Booking\nConfirmed", "Shipped", "On the way", "Delivered"];

    let activeStep = 0;
    if (type === "courses") {
      if (status === "upcoming") activeStep = 1;
      if (status === "ongoing") activeStep = 2;
      if (status === "completed") activeStep = 4;
    } else {
      if (status === "ordered") activeStep = 1;
      if (status === "delivered") activeStep = 4;
    }

    return (
      <div className="flex items-center justify-between py-4">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center">
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                ${index < activeStep ? "bg-purple-600 border-purple-600" : "bg-white border-gray-300"}`}
              >
                {index < activeStep && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              <span className="text-xs text-gray-600 mt-2 text-center whitespace-pre-line">
                {step}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-0.5 mx-2 ${index < activeStep - 1 ? "bg-purple-600" : "bg-gray-300"}`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    );
  };

  const renderBookingCard = (
    booking: Booking,
    type: "consultations" | "courses" | "products",
  ) => {
    const showNote =
      type === "consultations" &&
      (booking.status === "upcoming" || booking.status === "completed");
    const showProgressBar = type !== "consultations";

    return (
      <div
        key={booking.id}
        className="bg-transaprent rounded-lg shadow-sm border border-gray-200 p-6 mb-4"
      >
        <div className="flex gap-3">
          {/* Left: Image and basic info */}
          <div className="flex-shrink-0">
            <img
              src={booking.image}
              alt={booking.title}
              className="w-26 h-26 border rounded-lg object-cover"
            />
          </div>

          {/* Middle: Details - Dynamic grid based on tab type */}
          <div
            className={`flex-1 grid ${type === "products" ? "grid-cols-[120px_1fr]" : "grid-cols-[120px_175px_1fr]"} gap-2`}
          >
            {/* Column 1: Title and Schedule - Always shown for all tabs */}
            <div className="space-y-0.5 border-e border-secondary">
              <h3 className="font-normal text-sm text-black">
                {booking.title}
              </h3>
              <p className="text-xs text-gray-600">by {booking.provider}</p>
              {booking.status === "completed" && type === "consultations" && (
                <p className="text-xs text-gray-600">Completed On</p>
              )}
              {booking.status === "ongoing" && type === "courses" && (
                <p className="text-xs text-gray-600">Ongoing</p>
              )}
              {booking.status === "completed" && type === "courses" && (
                <p className="text-xs text-gray-600">Completed On</p>
              )}
              {booking.status === "delivered" && type === "products" && (
                <p className="text-xs text-gray-600">{booking.time}</p>
              )}
              <p className="text-xs font-medium text-gray-900">
                {booking.time !== "Arriving" && booking.time !== "Delivered on"
                  ? booking.time
                  : ""}
              </p>
              <div className="flex items-center gap-1 text-xs text-gray-600">
                <Calendar size={12} className="" />
                <span>{booking.date}</span>
                {booking.date.includes("Tue") && <span>, Tue</span>}
              </div>
              {booking.location && (
                <button className="text-xs text-primary hover:text-primary/80 ">
                  {booking.location} {booking.location === "Reschedule" && "⟳"}
                </button>
              )}
            </div>

            {/* Column 2: Session Details - For consultations and courses */}
            {type !== "products" && (
              <div className="space-y-0.5 border-e border-secondary">
                {type === "consultations" && booking.status === "upcoming" && (
                  <>
                    <p className="text-xs text-gray-600">
                      Add details before your session
                    </p>
                    <div className="space-y-1">
                      <p className="text-xs">
                        <span className="text-gray-600">Name : </span>
                        <span className="font-medium">Ankush Sarkar</span>
                        <ExternalLink className="w-3 h-3 inline ml-1" />
                      </p>
                      <p className="text-xs text-gray-600">DOB : 12/02/1998</p>
                      <button className="flex items-center gap-1 text-xs text-purple-600 hover:text-purple-700">
                        <Upload className="w-4 h-4" />
                        Upload file
                      </button>
                    </div>
                  </>
                )}
                {type === "consultations" && booking.status === "completed" && (
                  <>
                    <p className="text-xs font-medium text-gray-900">
                      Session Details
                    </p>
                    <div className="space-y-1">
                      <p className="text-xs">
                        <span className="text-gray-600">Name : </span>
                        <span className="font-medium">Ankush Sarkar</span>
                      </p>
                      <p className="text-xs text-gray-600">DOB : 12/02/1998</p>
                      <p className="text-xs text-purple-600">Uploaded</p>
                    </div>
                  </>
                )}
                {type === "courses" && booking.status === "upcoming" && (
                  <>
                    <p className="text-xs text-gray-600">
                      Add details before your session
                    </p>
                    <div className="space-y-1">
                      <p className="text-xs">
                        <span className="text-gray-600">Name : </span>
                        <span className="font-medium">Ankush Sarkar</span>
                        <ExternalLink className="w-3 h-3 inline ml-1" />
                      </p>
                      <p className="text-xs text-gray-600">DOB : 12/02/1998</p>
                      <button className="flex items-center gap-1 text-xs text-purple-600 hover:text-purple-700">
                        <Upload className="w-4 h-4" />
                        Upload file
                      </button>
                    </div>
                  </>
                )}
                {type === "courses" && booking.status === "ongoing" && (
                  <>
                    <p className="text-xs font-medium text-gray-900">
                      Session Details
                    </p>
                    <div className="space-y-1">
                      <p className="text-xs">
                        <span className="text-gray-600">Name : </span>
                        <span className="font-medium">Ankush Sarkar</span>
                      </p>
                      <p className="text-xs text-gray-600">DOB : 12/02/1998</p>
                      <p className="text-xs text-purple-600">Uploaded</p>
                    </div>
                  </>
                )}
                {type === "courses" && booking.status === "completed" && (
                  <>
                    <p className="text-xs font-medium text-gray-900">
                      Session Details
                    </p>
                    <div className="space-y-1">
                      <p className="text-xs">
                        <span className="text-gray-600">Name : </span>
                        <span className="font-medium">Ankush Sarkar</span>
                      </p>
                      <p className="text-xs text-gray-600">DOB : 12/02/1998</p>
                      <p className="text-xs text-purple-600">Uploaded</p>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Column 2 or 3: Notes textarea (consultations) OR Progress Bar (courses/products) */}
            <div className="space-y-2 border-e border-secondary pr-2">
              {/* For Consultations: Show textarea notes */}
              {showNote && (
                <div className="space-y-0">
                  <textarea
                    placeholder={
                      booking.status === "upcoming"
                        ? "Describe your issue with 0/200 words"
                        : "I want to get married."
                    }
                    className="w-full px-2 py-2 border border-gray-900 rounded-sm text-xs resize-none focus:ring-2 focus:ring-primary focus:border-transparent h-[60px] "
                    rows={4}
                    maxLength={200}
                    value={noteInputs[booking.id] || ""}
                    onChange={(e) =>
                      handleNoteChange(booking.id, e.target.value)
                    }
                  />
                  <div className="flex justify-end">
                    {booking.status === "upcoming" ? (
                      <button
                        onClick={() => handleSave(booking.id)}
                        className="text-xs text-primary hover:text-primary font-medium"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => handleDone(booking.id)}
                        className="text-xs text-primary hover:text-primary font-medium"
                      >
                        Done
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* For Courses & Products: Show progress bar */}
              {showProgressBar && (
                <div className="pt-2">
                  {renderProgressBar(booking.status, type)}
                  {booking.status === "completed" && type === "courses" && (
                    <button className="text-xs text-purple-600 hover:text-purple-700 flex items-center gap-1 mt-2">
                      <Download className="w-4 h-4" />
                      Download Certificate
                    </button>
                  )}
                  {booking.status === "delivered" && type === "products" && (
                    <button className="text-sm text-purple-600 hover:text-purple-700 flex items-center gap-1 mt-2">
                      <Download className="w-4 h-4" />
                      Download Invoice
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right: Price and Booking Details */}
          <div className="shrink-0 text-start">
            <p className="text-xs text-gray-600">
              Booking ID: <span className="text-tertiary"> AB548652</span>
            </p>
            <p className="text-xs  text-gray-600">
              Transaction ID:{" "}
              <span className="text-tertiary"> 694754758654</span>
            </p>
            <p className="text-xs  text-gray-600">
              Order placed on:{" "}
              <span className="text-tertiary"> 12/02/1998</span>
            </p>
            <p className="text-xs  text-gray-600 flex justify-between mt-2">
              Price <span className="text-tertiary">₹ 3,373.33</span>
            </p>
            <button className="text-xs text-primary hover:text-primary">
              Customer details →
            </button>
          </div>
        </div>

        {/* Star Rating */}
        <div className=" pt-3  flex items-center justify-center gap-4">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 fill-primary text-primary" />
            ))}
          </div>
          <button className="text-primary hover:text-primary font-normal">
            Write a review
          </button>
        </div>
      </div>
    );
  };

  const renderSection = (
    title: string,
    count: number,
    bookings: Booking[],
    type: "consultations" | "courses" | "products",
  ) => {
    if (count === 0) return null;

    return (
      <div className="mb-3">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-medium text-primary">
            {title} ({count})
          </h2>
          <button className="text-primary hover:text-primary text-sm font-medium">
            See more →
          </button>
        </div>
        {bookings.map((booking) => renderBookingCard(booking, type))}
      </div>
    );
  };

  const getCurrentData = () => {
    switch (activeTab) {
      case "consultations":
        return consultationsData;
      case "courses":
        return coursesData;
      case "products":
        return productsData;
    }
  };

  const currentData = getCurrentData();
  const upcomingBookings = currentData.filter(
    (b) => b.status === "upcoming" || b.status === "ordered",
  );
  const ongoingBookings = currentData.filter((b) => b.status === "ongoing");
  const completedBookings = currentData.filter(
    (b) => b.status === "completed" || b.status === "delivered",
  );
  const cancelledBookings = currentData.filter((b) => b.status === "cancelled");

  return (
    <div className=" ">
      <div className=" mx-auto p-[40px]">
        {/* Header */}
        <div className="mb-6">
          <button className="bg-primary text-white px-8 py-2 rounded-sm font-medium hover:bg-primary">
            My Bookings
          </button>
        </div>

        {/* Tabs */}
        <div className="bg-transparent shadow-xl  ">
          <div className="flex border-b border-gray-200 justify-between max-w-[850px] mx-auto ">
            <button
              onClick={() => setActiveTab("consultations")}
              className={` px-3 py-2 text-lg text-center font-medium transition-colors
                ${
                  activeTab === "consultations"
                    ? "text-primary"
                    : "text-tertiary hover:text-primary"
                }`}
            >
              Consultations
            </button>
            <button
              onClick={() => setActiveTab("courses")}
              className={` px-3 py-2 text-lg text-center font-medium transition-colors
                ${
                  activeTab === "courses"
                    ? "text-primary"
                    : "text-tertiary hover:text-primary"
                }`}
            >
              Courses
            </button>
            <button
              onClick={() => setActiveTab("products")}
              className={` px-3 py-2 text-lg text-center font-medium transition-colors
                ${
                  activeTab === "products"
                    ? "text-primary"
                    : "text-tertiary hover:text-primary"
                }`}
            >
              Products
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="rounded-b-lg   mt-5">
          {activeTab === "consultations" && (
            <>
              {renderSection(
                "Upcoming",
                upcomingBookings.length,
                upcomingBookings,
                "consultations",
              )}
              {renderSection(
                "Completed",
                completedBookings.length,
                completedBookings,
                "consultations",
              )}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-primary">
                  Cancelled (0)
                </h2>
              </div>
            </>
          )}
          {activeTab === "courses" && (
            <>
              {renderSection(
                "Upcoming",
                upcomingBookings.length,
                upcomingBookings,
                "courses",
              )}
              {renderSection(
                "Ongoing",
                ongoingBookings.length,
                ongoingBookings,
                "courses",
              )}
              {renderSection(
                "Completed",
                completedBookings.length,
                completedBookings,
                "courses",
              )}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-primary">
                  Cancelled (0)
                </h2>
              </div>
            </>
          )}
          {activeTab === "products" && (
            <>
              {renderSection(
                "Ordered",
                upcomingBookings.length,
                upcomingBookings,
                "products",
              )}
              {renderSection(
                "Delivered",
                completedBookings.length,
                completedBookings,
                "products",
              )}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-primary">
                  Cancelled (0)
                </h2>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingManager;
