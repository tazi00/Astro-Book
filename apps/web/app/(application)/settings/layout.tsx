"use client";

import React, { useState } from "react";

type SettingsSection =
  | "Edit profile"
  | "Notification"
  | "Privacy"
  | "Address"
  | "Delete account";

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  const [activeSection, setActiveSection] =
    useState<SettingsSection>("Edit profile");

  const sections: SettingsSection[] = [
    "Edit profile",
    "Notification",
    "Privacy",
    "Address",
    "Delete account",
  ];

  return (
    <div className="bg-gray-50 ">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-[250px_1fr] ">
          {/* Left Sidebar Navigation */}
          <div className="rounded-lg bg-transparent pt-3  shadow-sm">
            <h2 className="mb-4 text-lg font-medium text-tertiary px-3 border-b border-tertiary">
              Settings
            </h2>
            <nav className="space-y-1.5">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`w-full rounded-md px-8  text-left text-sm transition-colors ${
                    activeSection === section
                      ? " font-normal text-primary"
                      : "text-tertiary hover:bg-gray-50"
                  }`}
                >
                  {section}
                </button>
              ))}
            </nav>
          </div>

          {/* Right Content Area */}
          <div className="rounded-lg bg-white pt-5 shadow-sm overflow-y-scroll h-[calc(100vh-100px)]">{children}</div>
        </div>
      </div>
    </div>
  );
}
