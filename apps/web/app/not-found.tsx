import AppHeader from "@/components/app-header";
import Footer from "@/components/footer";
import React from "react";

function NotfoundPage() {
  return (
    <div className="lg:overflow-y-hidden grid  grid-rows-[auto_1fr_auto] h-screen">
      <AppHeader />
      <div className="flex flex-col items-center justify-center text-center bg-white px-4">
        {/* Illustration */}
        <img src="/404-illustration.png" alt="404" className="w-72 mb-6" />

        {/* Main Text */}
        <h2 className="text-primary font-semibold text-lg leading-[22px] ">
          This content isn't available at the moment
        </h2>

        <p className="text-secondary font-semibold max-w-[520px] mb-6 text-lg leading-[22px]">
          When this happens, it's usually because the owner only shared it with
          a small group of people or changed who can see it, or it's been
          deleted.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center gap-2">
          <a
            href="/"
            className="bg-primary text-white px-8 py-3 text-xl font-semibold hover:bg-primary transition"
          >
            Go to home
          </a>

          <button className="text-secondary font-semibold text-xl hover:underline">
            Go back
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NotfoundPage;
