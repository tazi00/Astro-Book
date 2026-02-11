import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-tertiary py-10 text-center text-sm text-gray-300">
      <div className="flex justify-center gap-3 flex-wrap">
        <Link href="/about" className="hover:text-white transition">
          About Us
        </Link>
        <span>|</span>
        <Link href="/contact" className="hover:text-white transition">
          Contact Us
        </Link>
        <span>|</span>
        <Link href="/policy" className="hover:text-white transition">
          Policy
        </Link>
        <span>|</span>
        <Link href="/blog" className="hover:text-white transition">
          Blog
        </Link>
        <span>|</span>
        <Link href="/help" className="hover:text-white transition">
          Help
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
