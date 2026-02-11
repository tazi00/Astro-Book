import AppAdvertise from "@/components/app-advertise";
import AppHeader from "@/components/app-header";
import AppSidebar from "@/components/app-sidebar";
import React from "react";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="lg:overflow-y-hidden h-screen">
      <AppHeader />
      
      <main className=" max-w-[1400px] mx-auto grid lg:grid-cols-[1fr_520px_1fr] md:grid-cols-[220px_1fr_220px] grid-cols-1 md:px-[24px] px-[5px] h-screen items-start ">
        <AppSidebar />
        {children}
        <AppAdvertise />
      </main>
    </div>
  );
}

export default HomeLayout;
