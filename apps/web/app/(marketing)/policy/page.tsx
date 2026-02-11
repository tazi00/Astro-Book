import Footer from "@/components/footer";
import Header from "@/components/header";

function Navbar() {
  return (
    <div className="w-full bg-[#fff1ff] shadow-sm">
      <div className="max-w-[1469px] mx-auto flex items-center justify-between px-6 py-2">
        <img src="/logo.svg" alt="" className="w-[240px] mt-6" />

        <button className="bg-primary text-white w-[150px] py-[12px] rounded-[5px] font-bold text-[22px]">
          Login
        </button>
      </div>
    </div>
  );
}

const policies = [
  "Privacy Policy",
  "Terms & Conditions",
  "Payment & Billing Policy",
  "Refund & Cancellation Policy",
  "Shipping & Delivery Policy",
  "Cookie Policy",
  "Disclaimer",
  "Content & Community Guidelines",
  "Astrologer Code of Conduct",
];

export default function PolicyPage() {
  return (
    <div className="bg-white min-h-screen">
      <Header />

      {/* HERO */}
      <section className="relative h-[370px] bg-gradient-to-r from-primary via-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/about-bg.png')] bg-cover opacity-40" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-[76px] font-bold tracking-wide">Policy Guideline</h1>
        </div>
      </section>

      {/* SEARCH BAR */}
      <section className="bg-[#9D0399] pt-20  pb-25 flex justify-center">
        <div className="w-[900px] relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full py-5 px-16 rounded-full text-[26px] outline-none border border-white h-[70px] "
          />
          <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 text-[24px]">
            🔍
          </span>
        </div>
      </section>

      {/* GRID */}
      <section className="max-w-[950px] mx-auto py-20 px-10 bg-[#f3f3f3] mt-[-50px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {policies.map((title, i) => (
            <div
              key={i}
              className="bg-[#0B1D5B] text-white rounded-[20px] p-10 flex flex-col items-center justify-center gap-6 shadow-lg hover:scale-105 transition "
            >
              <div className="text-[50px]">📄</div>
              <h3 className="text-center text-[20px] font-semibold">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
