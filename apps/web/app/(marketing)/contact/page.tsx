import Footer from "@/components/footer";
import Header from "@/components/header";

export default function ContactPage() {
  return (
    <div className="w-full bg-[#0b1b3f] text-white">
      <Header />

      {/* HERO (same as About) */}
      <section className="relative h-[370px] bg-gradient-to-r from-primary via-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/about-bg.png')] bg-cover opacity-40" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className=" text-[76px] font-bold tracking-wide">Contact Us</h1>
        </div>
      </section>

      {/* CONTACT INFO BAR */}
      <section className="bg-white py-10 px-[86px] text-tertiary">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-[20px] ">
          <div className="flex items-center gap-3 px-4">
            <img src="/phone.svg" alt="" className="size-10" />
            <span className="text-[40px] ">
              +91 <strong>90463 20803</strong>{" "}
            </span>
          </div>

          <div className="flex items-center gap-3 px-4">
            <img src="/message.svg" alt="" className="size-10" />{" "}
            <span className="text-[40px] ">team@astrobook.in</span>
          </div>
          <div className="flex items-center gap-3 col-span-3 border-t-2 border-tertiary pt-5 px-4">
            <img src="/gps.svg" alt="" className="size-24" />
            <span className="text-[40px] leading-[20px">
              Barasat, Champadali More, North 24 Parganas, Barasat, India
              700124, West Bengal
            </span>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="bg-[#eef0f6] py-[60px]">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* LEFT IMAGE */}
          <img
            src="/contact-img.jpg"
            alt=""
            className="rounded-[25px] shadow-xl"
          />

          {/* FORM */}
          <div>
            <h2 className="text-primary text-[32px] font-medium mb-5 flex items-center gap-3">
              <img src="/msg.svg" alt="" className="size-10" /> Send Us A
              Message
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-white text-black border-2 border-tertiary px-5 py-3 text-[18px] placeholder:text-gray-300"
              />

              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="w-1/2 bg-white text-black border-2 border-tertiary px-5 py-3 text-[18px] placeholder:text-gray-300"
                />
                <input
                  type="date"
                  className="w-1/2 bg-white text-black border-2 border-tertiary px-5 py-3 text-[18px] placeholder:text-gray-300"
                />
              </div>

              <textarea
                placeholder="Message"
                rows={5}
                className="w-full bg-white text-black border-2 border-tertiary px-5 py-4 text-[20px] placeholder:text-gray-300"
              />

              <button className="bg-primary text-white text-[20px] px-12 py-2 max-w-max mx-auto block cursor-pointer">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER same as About */}
      <Footer />
    </div>
  );
}
