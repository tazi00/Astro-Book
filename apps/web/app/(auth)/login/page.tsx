import Link from "next/link";

function LoginSlider() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6 p-8">
      {/* Card 1 */}
      <div className="w-[520px] rounded-xl overflow-hidden shadow-lg border-4 border-white">
        <img
          src="/login_img.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Card 2 */}
      <div className="w-[520px] rounded-xl overflow-hidden shadow-lg border-4 border-white">
        <img
          src="/login_img.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* dots */}
      <div className="flex gap-2 mt-3">
        <span className="w-2 h-2 bg-primary rounded-full" />
        <span className="w-2 h-2 bg-gray-300 rounded-full" />
        <span className="w-2 h-2 bg-gray-300 rounded-full" />
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2">
      {/* LEFT SIDE */}
      <div className="hidden lg:flex items-center justify-center bg-[#F6E6F5]">
        <LoginSlider />
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center  bg-[url('/themebg.png')] bg-cover bg-center bg-no-repeat h-screen flex-col relative">
        <div className="w-full max-w-[400px] h-[400px] bg-white rounded-lg shadow-2xl px-[40px] pt-[50px]">
          {/* Logo */}
          <div className="flex justify-center">
            <img src="/logo.svg" alt="" className="w-[280px] mb-3 " />
          </div>

          {/* Input */}
          <input
            type="text"
            placeholder="Phone number, username, or email"
            className="w-full border border-primary rounded-md px-[16px] py-[12px] text-[16px] focus:outline-none focus:ring-2 focus:ring-primary text-[#000] placeholder:text-gray-400 "
          />

          {/* Button */}
          <Link
            href="/verification"
            className="w-full mt-[16px] mb-[32px] py-2 rounded-sm bg-primary text-white font-semibold hover:bg-primary transition block flex justify-center items-center"
          >
            Send OTP
          </Link>

          {/* Remember */}
          <div className="flex items-center mb-[12px] text-[16px] text-gray-600 max-w-max mx-auto">
            <input type="checkbox" className="mr-2 mt-[-3px] accent-primary" />
            Remember Me
          </div>

          {/* Google */}
          <button className="w-full flex justify-center ">
            <img src="/g_login.svg" className="w-[200px]" />
          </button>
        </div>
        {/* Footer links */}

        <div className="text-center text-[16px] text-white  absolute bottom-10 ">
          <Link href="/about" className="mx-5 inline-block">
            About Us
          </Link>
          |
          <Link href="#" className="mx-5 inline-block">
            Contact Us
          </Link>
          |
          <Link href="#" className="mx-5 inline-block">
            Policy
          </Link>
          |
          <Link href="#" className="mx-5 inline-block">
            Blog
          </Link>
          |
          <Link href="#" className="mx-5 inline-block">
            Help
          </Link>
        </div>
      </div>
    </div>
  );
}
