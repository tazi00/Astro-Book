import AstroInput from "@/components/astrov1/astro-input";
import React from "react";

function AstrozoneLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pb-20">
      {/* Header */}
      <div className="max-w-[1020px] mx-auto flex justify-between items-center ">
        <h3 className="text-secondary font-medium text-lg mb-2 mt-5  ">
          AstroZone
        </h3>

        <AstroInput placeholder="Search Products & services" />
      </div>
      <div className="border-b-2 border-gray-500 mb-5"></div>
      {children}
    </div>
  );
}

export default AstrozoneLayout;
