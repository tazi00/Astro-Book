"use client";

import React, { useState } from "react";

export default function EditProfile() {
  const [phoneNumber, setPhoneNumber] = useState("+91 79552 69647");
  const [email, setEmail] = useState("asyi@gmail.com");
  const [dateOfBirth, setDateOfBirth] = useState("01 / 02 / 2003");
  const [gender, setGender] = useState("Male");
  const [about, setAbout] = useState(
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
  );
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingDob, setIsEditingDob] = useState(false);
  const [isEditingGender, setIsEditingGender] = useState(false);
  const [isEditingAbout, setIsEditingAbout] = useState(false);

  return (
    <div className="px-10">
      {/* Header */}
      <div className="mb-2 ">
        <h2 className="text-base font-medium text-primary">Edit Profile</h2>
      </div>

      {/* Profile Photo */}
      <div className="mb-6 flex items-center gap-4 bg-primary/5 p-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 border border-primary">
          <span className="text-2xl h-12 w-12 grid place-content-center font-semibold text-primary">
            S
          </span>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="mb-1 flex items-center gap-2">
            <span className="text-base font-semibold text-tertiary">
              Supro Karmakar
            </span>
            <span className="text-xs text-primary">Edit</span>
          </div>
          <button className=" bg-primary px-2 py-1.5 text-xs font-medium text-white transition-colors hover:bg-primary/80">
            Change photo
          </button>
        </div>
      </div>

      {/* Phone Number */}
      <div className="mb-5">
        <label className="mb-2 block text-sm font-medium text-purple-800">
          Phone Number
        </label>
        <div className="flex items-center gap-2 relative">
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="000000000000"
            className="flex-1 rounded-lg border border-gray-300 px-4  h-[50px] text-sm text-gray-900 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 disabled:bg-gray-50"
          />
          <button
            onClick={() => setIsEditingPhone(!isEditingPhone)}
            className=" bg-primary px-2 py-1 text-xs font-medium text-white transition-colors hover:bg-primary/80 absolute right-12 top-2/4 -translate-y-1/2 "
          >
            {isEditingPhone ? "Save" : "Change"}
          </button>
        </div>
      </div>

      {/* E-mail */}
      <div className="mb-5">
        <label className="mb-2 block text-sm font-medium text-purple-800">
          E-mail
        </label>
        <div className="flex items-center gap-2 w-full">
          <div className="flex items-center gap-2 relative w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-lg border border-gray-300 px-4  h-[50px] text-sm text-gray-900 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 disabled:bg-gray-50 w-full"
            />
            {!isEditingEmail && (
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                ----
              </span>
            )}
            <button
              onClick={() => setIsEditingEmail(!isEditingEmail)}
              className=" bg-primary px-2 py-1 text-xs font-medium text-white transition-colors hover:bg-primary/80 absolute right-12 top-2/4 -translate-y-1/2 "
            >
              {isEditingEmail ? "Save" : "Change"}
            </button>
          </div>
        </div>
      </div>

      {/* Date of birth */}
      <div className="mb-5">
        <label className="mb-2 block text-sm font-medium text-purple-800">
          Date of birth
        </label>
        <div className="flex items-center gap-2 relative">
          <input
            type="text"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            placeholder="DD / MM / YYYY"
            className="flex-1 rounded-lg border border-gray-300 px-4  h-[50px] text-sm text-gray-900 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 disabled:bg-gray-50"
          />
          <button
            onClick={() => setIsEditingDob(!isEditingDob)}
            className="bg-primary px-2 py-1 text-xs font-medium text-white transition-colors hover:bg-primary/80 absolute right-12 top-2/4 -translate-y-1/2 "
          >
            {isEditingDob ? "Save" : "Change"}
          </button>
        </div>
      </div>

      {/* Gender */}
      <div className="mb-5">
        <label className="mb-2 block text-sm font-medium text-purple-800">
          Gender
        </label>
        <div className="flex items-center gap-2 ">
          <div className="relative flex-1">
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="flex-1 rounded-lg border border-gray-300 px-4  h-[50px] text-sm text-gray-900 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 disabled:bg-gray-50 w-full"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
              <svg
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <rect
                  x="4"
                  y="8"
                  width="12"
                  height="4"
                  rx="2"
                  className="fill-purple-800"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium text-purple-800">
          About
        </label>
        <div className="relative">
          <textarea
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            disabled={!isEditingAbout}
            rows={5}
            className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 disabled:bg-gray-50"
          />
          {!isEditingAbout && (
            <button
              onClick={() => setIsEditingAbout(true)}
              className="absolute bottom-3 right-3 rounded-md bg-purple-100 px-3 py-1 text-xs font-medium text-purple-800 transition-colors hover:bg-purple-200"
            >
              Change
            </button>
          )}
          {isEditingAbout && (
            <button
              onClick={() => setIsEditingAbout(false)}
              className="absolute bottom-3 right-3 rounded-md bg-purple-800 px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-purple-900"
            >
              Save
            </button>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button className="rounded-md bg-purple-800 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-purple-900">
          Submit
        </button>
      </div>
    </div>
  );
}
