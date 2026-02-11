import React from "react";
import { AstrologerCard } from "../explore/page";

function AstroogersPage() {
  return (
    <div className="">
      {/* Header */}
      <h3 className="text-gray-400 text-lg mb-3 mt-5 max-w-[1020px] mx-auto  ">
        Astrologers you are following
      </h3>
      <div className="border-b-2 border-gray-500 mb-5"></div>

      <div className="">
        <div className="lg:px-10 md:px-5 px-2 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6 md:gap-4 gap-2 py-2">
          <AstrologerCard />
          <AstrologerCard />
          <AstrologerCard />
          <AstrologerCard />
          <AstrologerCard />
          <AstrologerCard />
        </div>
      </div>

      <h3 className="text-gray-400 text-lg mb-3 mt-5 max-w-[1020px] mx-auto  ">
        Recommended astrologers for you
      </h3>
      <div className="border-b-2 border-gray-500 mb-5"></div>

      <div className="">
        <div className="lg:px-10 md:px-5 px-2 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6 md:gap-4 gap-2 py-2">
          <AstrologerCard />
          <AstrologerCard />
          <AstrologerCard />
          <AstrologerCard />
          <AstrologerCard />
          <AstrologerCard />
          <AstrologerCard />
          <AstrologerCard />
          <AstrologerCard />
          <AstrologerCard />
          <AstrologerCard />
          <AstrologerCard />
        </div>
      </div>
    </div>
  );
}

export default AstroogersPage;
