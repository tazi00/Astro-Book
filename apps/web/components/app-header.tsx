"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import { IoMdHome } from "react-icons/io";
import { useSidebarStore } from "@/store/useSidebar.store";
import { AstroInput } from "./astrov1/astro-input";
import SearchBox from "./search-box";
import Link from "next/link";
import HomeIcon from "../public/app-header-icons/home-icon";
import ExploreIcon from "../public/app-header-icons/explore";
import AstroZonIcon from "../public/app-header-icons/astrozon";
import PodcastIcon from "../public/app-header-icons/podcast";
import AstroIcon from "../public/app-header-icons/astro";
import { usePathname } from "next/navigation";

function AppHeader() {
  const pathname = usePathname();
  const navItems = [
    {
      href: "/",
      icon: HomeIcon,
    },
    {
      href: "/explore",
      icon: ExploreIcon,
    },
    {
      href: "/cattegory",
      icon: PodcastIcon,
    },
    {
      href: "/consultant",
      icon: AstroIcon,
    },
    {
      href: "/astrozone",
      icon: AstroZonIcon,
    },
  ];

  const toggleSidebar = useSidebarStore((s) => s.toggle);

  return (
    <header className="bg-[#FAF3FA] border-b md:static w-full top-0 left-0 fixed border-gray-200 z-50 ">
      <div className="grid grid-cols-2 lg:grid-cols-[1fr_520px_1fr] md:grid-cols-[220px_1fr_220px] items-center md:px-[24px] lg:h-[90px] md:h-[60px] pt-3  pb-1 md:pt-0 md:pb-0 px-[10px]">
        <div className="flex items-center gap-3">
          <div className="md:hidden block">
            <Menu
              strokeWidth={3}
              className="-mt-2 cursor-pointer"
              onClick={toggleSidebar}
            />
          </div>
          <Link href={"/"}>
            <Image
              src="/logo.svg"
              alt="Logo"
              width={146}
              height={35}
              className="md:w-[146px] h-[35px] w-[120px]  "
            />
          </Link>
          <AstroInput placeholder="Search" />
        </div>
        <nav className="justify-center items-center grid md:grid-cols-5 grid-cols-6 md:h-full md:static fixed left-0 bottom-0 w-full md:bg-transparent bg-[#F5E5F5] h-[60px]">
          {navItems.map(({ href, icon: Icon }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                className={`group relative flex items-center justify-center lg:h-[70px] md:h-[60px] cursor-pointer
       ${isActive ? "text-[#9d0399]" : "text-[#18145c] hover:text-[#9d0399]"}
`}
              >
                <Icon className="transition-colors duration-300" />

                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 w-full h-[4px] 
          bg-primary"
                  ></span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="md:flex items-center gap-[18px] justify-end hidden">
          <button className="w-[30px] h-[30px] bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
            <IoMdHome />
          </button>
          <button className="w-[30px] h-[30px] bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
            <IoMdHome />
          </button>
          <button className="w-[30px] h-[30px] bg-purple-700 rounded-full flex items-center justify-center hover:bg-purple-800">
            <IoMdHome />
          </button>
        </div>
        <div className="md:hidden flex items-center justify-end">
          <SearchBox />
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
