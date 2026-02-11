import Footer from "@/components/footer";
import Header from "@/components/header";

export default function AboutPage() {
  return (
    <div className="w-full bg-[#0b1b3f] text-white">
      <Header />

      {/* HERO */}
      <section className="relative h-[370px] bg-gradient-to-r from-primary via-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/about-bg.png')] bg-cover opacity-40" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className=" text-[76px] font-bold tracking-wide">About Us</h1>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-white text-gray-800 py-5 ">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center">
            <h3 className="text-primary font-bold text-[32px] mb-3">
              WHO WE ARE
            </h3>
            <p className="text-[18px] ">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi.{" "}
              <span className="block mt-2">
                Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet dolore magna aliquam erat volutpat.
                consequat.
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className="py-[34px] p-30 bg-[#e4e7f0]">
        <div className="max-w-[1400px] mx-auto">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-12">
            <img src="/about_img1.jpg" alt="" className="rounded-[30px]" />
            <div>
              <h2 className="text-primary font-bold text-[32px] mb-3">
                What We Do
              </h2>
              <p className="text-[16px] text-black ">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit praesent luptatum zzril
                delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum
                dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                commodo consequat. Duis autem vel eum iriure dolor in hendrerit
                in vulputate velit esse molestie consequat,{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="bg-white py-16 px-40">
        <div className="max-w-[1400px] mx-auto">
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 text-gray-800 text-center">
            <div>
              <h3 className="text-primary font-bold text-[32px] mb-3">
                MISSION
              </h3>
              <p className="text-[18px] ">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat,
              </p>
            </div>
            <div>
              <h3 className="text-primary font-bold text-[32px] mb-3">
                VISION
              </h3>
              <p className="text-[18px] ">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat,
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER */}
      <section className=" bg-primary py-[40px] ">
        <div className=" max-w-[1400px] mx-auto text-center">
          <h2 className="text-[50px] text-white font-bold flex gap-[50px] items-center justify-center ">
            <span>ASTROLOGY </span>
            <span className="h-[140px] w-[5px] bg-white"></span>
            <span> MYTHOLOGY</span>
            <span className="h-[140px] w-[5px] bg-white"></span>
            <span>SPIRITUALITY</span>
          </h2>
        </div>
      </section>

      <section className=" bg-white py-[37px] px-[86px] text-black">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[18px] text-center">
            Login About Us WHO WE ARE Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
            dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
            quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
            aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in
            hendrerit in vulputate velit esse molestie consequat, vel illum
            dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto
            odio dignissim qui blandit praesent luptatum zzril delenit augue
            duis dolore te feugait nulla facilisi.
            <span className="block">
              Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed
              diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
              exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
              commodo consequat.
            </span>
            <span className="block">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. consequat. What We Do Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit,
            </span>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
