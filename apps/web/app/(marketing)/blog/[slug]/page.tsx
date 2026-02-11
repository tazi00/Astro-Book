import Footer from "@/components/footer";

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

export default function BlogDetailPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <section className="max-w-[800px] mx-auto pt-20 px-6 text-center">
        <h1 className="text-[#9D0399] text-[48px] font-bold leading-tight mb-8">
          Which zodiac signs are most likely to thrive in 2026
        </h1>

        <div className="rounded-[30px] overflow-hidden shadow-xl mb-8">
          <img
            src="/contact-img.jpg"
            className="w-full object-cover object-top h-[500px]"
            alt=""
          />
        </div>
      </section>

      <div className="text-[14px] text-black leading-relaxed text-left space-y-6 max-w-[900px] mx-auto pb-8">
        <div className="text-[#9D0399] font-normal mb-2 text-start text-[22px]">
          Admin &nbsp;|&nbsp; 24 Nov, 2025
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        </p>

        <p>
          Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. consequat. Lorem ipsum dolor sit amet,
        </p>

        <p>
          Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. consequat.Lorem ipsum dolor sit amet,
        </p>

        <p>
          Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. consequat
        </p>

        <p>
          consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
          ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
          veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl
          ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in
          hendrerit in vulputate velit esse molestie consequat, vel illum dolore
          eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
          dignissim qui blandit praesent luptatum zzril delenit augue duis
          dolore te feugait nulla facilisi.
        </p>
        <p>
          consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
          ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
          veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl
          ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in
          hendrerit in vulputate velit esse molestie consequat, vel illum dolore
          eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
          dignissim qui blandit praesent luptatum zzril delenit augue duis
          dolore te feugait nulla facilisi.
        </p>
      </div>

      {/* FOOTER */}
     <Footer/>
    </div>
  );
}
