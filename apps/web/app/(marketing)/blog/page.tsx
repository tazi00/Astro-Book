import Footer from "@/components/footer";
import Link from "next/link";

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

const blogs = Array.from({ length: 6 }).map((_, i) => ({
  title: "Which zodiac signs are most likely to thrive in 2026",
  date: "24 Nov, 2025",
  excerpt:
    "Astrology in 2026 brings immense potential for growth, balance, and transformation. With Jupiter, Saturn, and major eclipses influencing cosmic energy, signs like Aries, Taurus, Leo, Aquarius, and Pisces are...",
  image: "/contact-img.jpg",
}));

export default function BlogPage() {
  return (
    <div className="w-full bg-white">
      <Navbar />

      {/* HERO */}
      <section className="relative h-[370px] bg-gradient-to-r from-primary via-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/about-bg.png')] bg-cover opacity-40" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-[76px] font-bold tracking-wide">
            Blog
          </h1>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="max-w-[1300px] mx-auto py-16 px-[86px]">
        <h2 className="text-[#9D0399] text-[40px] font-bold mb-10">Blog</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogs.map((blog, idx) => (
            <div key={idx} className="bg-white">
              <img src={blog.image} className="w-full h-[200px] object-cover" />

              <div className=" relative">
                <h3 className="text-[20px] font-bold text-[#0B1D5B] leading-tight absolute left-0 top-[-90px] bg-white w-[72%] text-balace py-2  text-pretty px-[15px] ">
                  {blog.title}
                </h3>

                <div className="flex justify-between text-[14px]  text-[#9D0399] font-normal mt-16 px-[15px]">
                  <span>Admin</span>
                  <span>{blog.date}</span>
                </div>

                <p className="text-[15px] text-gray-600 mt-3 leading-relaxed text-justify">
                  {blog.excerpt}
                </p>

                <Link
                  href="/blog/zodiac"
                  className="mt-5 bg-[#9D0399] text-white px-6 py-2 text-[14px] inline-block "
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
