"use client";

import { useIsDesktop } from "@/hooks/useMedia";
import { useMounted } from "@/hooks/useMounted";
import { CiSearch } from "react-icons/ci";

export function AstroInput({ placeholder }: { placeholder: string }) {
  const mounted = useMounted();
  const isDesktop = useIsDesktop();

  if (!mounted) return null;
  if (!isDesktop) return null;

  return (
    <div className="relative ml-[8px] lg:block hidden">
      <input
        type="text"
        placeholder={placeholder}
        className="max-w-[210px] w-full pl-10 pr-4 py-1 h-[34px] border-2 border-primary rounded-full text-sm focus:outline-none focus:ring focus:ring-primary placeholder:text-primary"
      />
      <CiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-primary text-xl" />
    </div>
  );
}

export default AstroInput;
