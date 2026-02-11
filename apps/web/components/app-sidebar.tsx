"use client";

import { useSidebarStore } from "@/store/useSidebar.store";
import clsx from "clsx";
import { X } from "lucide-react";
import Image from "next/image";
import { HiOutlineBookmark, HiOutlineCog, HiOutlineUser } from "react-icons/hi";
import { RiFileListLine, RiGroupLine, RiUserStarLine } from "react-icons/ri";
import { MdOutlineExplore, MdOutlinePodcasts } from "react-icons/md";
import { FaRegHandPaper } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import Link from "next/link";
import ExploreIcon from "../public/app-header-icons/explore";
import PodcastIcon from "../public/app-header-icons/podcast";
import AstroIcon from "../public/app-header-icons/astro";
import AstroZonIcon from "../public/app-header-icons/astrozon";
import SaveIcon from "../public/sidebar-icons/save";
import FollowingIcon from "../public/sidebar-icons/following";
import BlogsIcon from "../public/sidebar-icons/blogs";
import SettingsIcon from "../public/sidebar-icons/settings";

const SidebarItem = ({ icon: Icon, label, active, muted, link }: any) => {
  return (
    <Link
      href={`${link}`}
      className={`
        flex items-center gap-3 px-3 py-2 rounded-lg text-lg font-medium
        transition-colors cursor-pointer
        ${
          active
            ? "bg-primary/10 text-primary"
            : muted
              ? "text-gray-400 hover:text-gray-600"
              : "text-secondary hover:bg-primary/10 hover:text-primary"
        }
      `}
    >
      <Icon className="text-lg" />
      <span>{label}</span>
    </Link>
  );
};

function AppSidebar() {
  const isOpen = useSidebarStore((s) => s.isOpen);
  const close = useSidebarStore((s) => s.close);
  return (
    <>
      {isOpen && (
        <div
          onClick={close}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}
      <aside
        className={clsx(
          "z-50 md:bg-transparent bg-[#F5E5F5]",
          "max-w-[300px] w-[300px] h-screen",
          "fixed md:static top-0 left-0",
          "transition-transform duration-300 ease-in-out",
          "md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <nav className="flex flex-col gap-1 lg:w-[250px] md:py-4 ">
          {/* Profile */}

          <div className="md:hidden px-3 py-4">
            <div className="flex items-center gap-3">
              <div className="md:hidden block">
                <button onClick={close}>
                  <X strokeWidth={3} className="-mt-2" />
                </button>
              </div>
              <Image
                src="/logo.svg"
                alt="Logo"
                width={146}
                height={35}
                className="md:w-[146px] h-[35px] w-[120px]  "
              />

              {/* <AstroInput placeholder="Search" /> */}
            </div>
          </div>
          <div className="md:flex hidden items-center gap-3 px-3 py-2 rounded-lg text-primary font-medium text-lg">
            <Image
              src="/sidebar-icons/profile-icon.png"
              width={30}
              height={30}
              alt=""
            />
            <span>Suprio Karmakar</span>
          </div>

          <SidebarItem
            icon={ExploreIcon}
            label="Astrologers"
            link="/astrologers"
          />
          <SidebarItem icon={PodcastIcon} label="Explore" link="/explore" />
          <SidebarItem icon={AstroIcon} label="Podcast" />
          <SidebarItem
            icon={AstroZonIcon}
            label="AstroZone"
            link="/astrozone"
          />
          <SidebarItem icon={SaveIcon} label="Saved" />
          <SidebarItem icon={FollowingIcon} label="Following" />
          <SidebarItem icon={BlogsIcon} label="Blogs" />
          <SidebarItem
            icon={SettingsIcon}
            label="Settings"
            link="/settings/edit-profile"
          />

          <div className="md:flex hidden items-center gap-3 px-3 py-2 rounded-lg text-primary font-medium text-lg">
            <Image
              src="/sidebar-icons/seemore.png"
              width={25}
              height={25}
              alt=""
            />
            <span>See more</span>
          </div>
        </nav>
      </aside>
    </>
  );
}

export default AppSidebar;
