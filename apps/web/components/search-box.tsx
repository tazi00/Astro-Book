import { CiSearch } from "react-icons/ci";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useSearchBoxStore } from "@/store/useSearchBox.store";

function SearchBox() {
  const isOpen = useSearchBoxStore((s) => s.isOpen);
  const close = useSearchBoxStore((s) => s.close);
  const open = useSearchBoxStore((s) => s.open);
  return (
    <div>
      <button onClick={open} className="cursor-pointer">
        <CiSearch strokeWidth={1} className="text-primary text-[30px] -mt-1" />
      </button>
      {isOpen && (
        <div className="fixed w-full h-screen top-0 left-0 z-150 bg-[#F5E5F5]">
          <div className="px-2.5 py-3">
            <div className="flex items-center gap-3">
              <div className="md:hidden block">
                <Menu strokeWidth={3} className="-mt-2 cursor-pointer" />
              </div>

              <Image
                src="/logo.svg"
                alt="Logo"
                width={146}
                height={35}
                className="md:w-[146px] h-[35px] w-[120px]  "
              />

              <button onClick={close} className="ms-auto cursor-pointer">
                <X strokeWidth={3} size={25} className="-mt-2 text-primary " />
              </button>
            </div>
          </div>
          <div className="relative px-3 py-4">
            <input
              type="text"
              placeholder={"Search"}
              className="w-full pl-10 pr-4 py-1 h-[34px] border-2 border-primary rounded-full text-sm focus:outline-none focus:ring focus:ring-primary placeholder:text-primary"
            />
            <CiSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-primary text-xl" />
          </div>

          <div className="px-3">Search Results 0</div>
        </div>
      )}
    </div>
  );
}

export default SearchBox;
