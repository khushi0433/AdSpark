"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-transparent" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 md:px-10">
        <Link href="/">
          <img src="/adSparkLogo.png" alt="AdSpark Logo" className="h-12 w-auto" />
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/about"
            className={`text-white hover:text-white/80 transition-colors text-sm font-medium ${
              pathname === "/about" ? "text-[#FF6B00]" : ""
            }`}
          >
            Who We Are
          </Link>
          <Link
            href="/services"
            className={`text-white hover:text-white/80 transition-colors text-sm font-medium ${
              pathname === "/services" ? "text-[#FF6B00]" : ""
            }`}
          >
            The Spark
          </Link>
          <Link
            href="/contact"
            className="bg-white text-black hover:bg-white/90 rounded-full px-6 py-2.5 text-sm font-semibold transition-all hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>
        <button
          key={isMenuOpen ? 'x' : 'menu'}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white hover:text-white/80 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-br from-[#8E0E00]/80 to-[#FF6B00]/80 backdrop-blur-md border-t border-white/10">
          <div className="flex flex-col gap-4 px-6 py-6">
            <Link
            href="/"
            className="text-white hover:text-white/80 transition-colors font-medium py-2"
            onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-white/80 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Who We Are
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-white/80 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              The Spark
            </Link>
            <Link
              href="/contact"
              className="bg-white text-black hover:bg-white/90 rounded-full px-6 py-2.5 font-semibold text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
