import Footer from "@/components/footer";
import Header from "@/components/header";

function Navbar() {
  return (
    <div className="w-full bg-[#fff1ff] shadow-sm">
      <div className="max-w-[1469px] mx-auto flex items-center justify-between px-6 py-2">
        <img src="/logo.svg" alt="" className="w-[240px] mt-6" />

        <button className="bg-[#9D0399] text-white w-[150px] py-[12px] rounded-[5px] font-bold text-[22px]">
          Login
        </button>
      </div>
    </div>
  );
}

const policyCards = [
  {
    title: "FAQs",
    description: "Take a look at frequently asked questions",
    icon: "qa",
    slug: "faqs",
  },
  {
    title: "Billing",
    description: "Take a look at frequently asked questions",
    icon: "billing",
    slug: "billing",
  },
  {
    title: "Account",
    description: "Take a look at frequently asked questions",
    icon: "account",
    slug: "account",
  },
  {
    title: "FAQs",
    description: "Take a look at frequently asked questions",
    icon: "qa",
    slug: "faqs-2",
  },
  {
    title: "Billing",
    description: "Take a look at frequently asked questions",
    icon: "billing",
    slug: "billing-2",
  },
  {
    title: "Account",
    description: "Take a look at frequently asked questions",
    icon: "account",
    slug: "account-2",
  },
];

export default function PolicyPage() {
  return (
    <div className="bg-white min-h-screen">
      <Header />

      {/* HERO */}
      <section className="relative h-[370px] bg-gradient-to-r from-primary via-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/about-bg.png')] bg-cover opacity-40" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className=" text-white text-[76px] font-bold tracking-wide">
            Help
          </h1>
        </div>
      </section>

      {/* SEARCH BAR */}
      <section className="bg-[#9D0399] pt-5  pb-25 flex justify-center">
        <div className="w-[900px] text-center relative">
          <h3 className="text-[50px] text-white font-bold">
            How can we help you?
          </h3>
          <input
            type="text"
            placeholder="Search For Questions Or Topics"
            className="w-full py-5 px-16 rounded-full text-[26px] outline-none text-white border border-white h-[70px] "
          />
          <span className="absolute left-6 bottom-0 -translate-y-1/2 text-gray-500 text-[24px]">
            🔍
          </span>
        </div>
      </section>

      {/* GRID */}
      <section className="bg-[#f3f6fb] py-14 mt-[-60px] max-w-[900px] mx-auto">
        <div className="max-w-[950px] mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10">
            {/* CARD */}
            {policyCards.map((item, _i) => (
              <div
                key={item.slug}
                className="bg-[#0B1D5B] rounded-[12px] px-8 py-10 flex flex-col items-center text-white shadow-md"
              >
                {/* ICON */}
                <div className="mb-6">
                  <span className="text-[46px] leading-none">📄</span>
                </div>

                {/* TITLE */}
                <h3 className="text-[20px] font-semibold leading-tight text-start w-full">
                  {item.title}
                </h3>

                {/* SUBTEXT */}
                <p className="text-[14px] text-gray-300 mt-0 leading-snug text-start w-full max-w-[140px] me-auto">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef0f6] py-[80px] px-[86px]">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* LEFT IMAGE */}
          <img
            src="/contact-img.jpg"
            alt=""
            className="rounded-[25px] shadow-xl"
          />

          {/* FORM */}
          <div>
            <h2 className="text-[#9D0399] text-[42px] font-normal mb-8 flex items-center gap-3">
              <img src="/msg.svg" alt="" /> Send Us A Message
            </h2>

            <div className="space-y-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-white text-black border border-gray-400 px-5 py-4 text-[20px]"
              />

              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="w-1/2 bg-white text-black border border-gray-400 px-5 py-4 text-[20px]"
                />
                <input
                  type="date"
                  className="w-1/2 bg-white text-black border border-gray-400 px-5 py-4 text-[20px]"
                />
              </div>

              <textarea
                placeholder="Message"
                rows={5}
                className="w-full bg-white text-black border border-gray-400 px-5 py-4 text-[20px]"
              />

              <button className="bg-[#9D0399] text-white text-[22px] px-16 py-3 max-w-max mx-auto block cursor-pointer">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
