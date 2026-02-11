import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="w-full bg-[#fff1ff] shadow-sm">
      <div className="max-w-[1469px] mx-auto flex items-center justify-between px-6 py-2">
        <Link href={"/about"}>
          {" "}
          <img src="/logo.svg" alt="" className="w-[160px] mt-2" />
        </Link>

        <Link
          href={"/login"}
          className="bg-[#9D0399] text-white w-[120px] py-[8px] rounded-[5px] font-bold text-[18px] flex items-center justify-center"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Header;
