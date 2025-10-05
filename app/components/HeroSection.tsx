"use client"

import { useState, useEffect } from "react"

interface HeroSectionProps {
  onNavClick: (section: string) => void
}

export default function HeroSection({ onNavClick }: HeroSectionProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (section: string) => {
    onNavClick(section)
    setMobileMenuOpen(false)
  }

  const logos = [
    "/94b1819824f74a5d5c97f693cf2e0218b5035f0a.png",
    "/727c78cd2878d58172050443bfc3c8392ca0629c.png",
    "/2ff828246c1c14c2088781d0d482eaf86a6ca66a.png",
    "/d9b70c12e47653a29ef8ecb461b664704388dbb8.png",
    "/59f6a477f20de03767cd7617c6a64055274d700b.png",
    "/5a011c6fb0f4b203e29953e2f4f035e4ba1d394f.png",
  ]

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full min-h-screen">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/GettyImages-1194277985.mp4" type="video/mp4" />
        </video>

        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/20"></div>

        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : ""
          }`}
        >
          <div className="flex items-center justify-between px-6 py-4 md:px-10">
            <img src="/adSparkLogo.png" alt="AdSpark Logo" className="h-12 w-auto" />
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => onNavClick("about")}
                className="text-white hover:text-white/80 transition-colors text-sm font-medium"
              >
                Who We Are
              </button>
              <button
                onClick={() => onNavClick("services")}
                className="text-white hover:text-white/80 transition-colors text-sm font-medium"
              >
                The Spark
              </button>
              <button
                onClick={() => onNavClick("contact")}
                className="bg-white text-black hover:bg-white/90 rounded-full px-6 py-2.5 text-sm font-semibold transition-all hover:scale-105"
              >
                Get in Touch
              </button>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
              <div className="flex flex-col space-y-4 px-6 py-6">
                <button
                  onClick={() => handleNavClick("about")}
                  className="text-white hover:text-white/80 transition-colors text-base font-medium text-left"
                >
                  Who We Are
                </button>
                <button
                  onClick={() => handleNavClick("services")}
                  className="text-white hover:text-white/80 transition-colors text-base font-medium text-left"
                >
                  The Spark
                </button>
                <button
                  onClick={() => handleNavClick("contact")}
                  className="bg-white text-black hover:bg-white/90 rounded-full px-6 py-3 text-base font-semibold transition-all text-center"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          )}
        </nav>

        <div className="relative z-10 flex flex-col items-start px-6 md:px-10 text-white pt-32 pb-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 tracking-tight">
              REACH.
              <br />
              CAPTIVATE.
              <br />
              INNOVATE.
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mb-10 leading-relaxed text-white/90">
              Leveraging MADTECH (Marketing Advertising Technology) and data-driven storytelling to build meaningful
              connections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavClick("services")}
                className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 font-bold text-base transition-all hover:scale-105 hover:shadow-xl"
              >
                Spark With Us
              </button>
              <button
                onClick={() => onNavClick("contact")}
                className="border-2 border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-4 font-medium text-base transition-all hover:scale-105"
              >
                Talk to an Expert
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20 w-full py-6 overflow-hidden">
          <div className="flex animate-scroll">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 mx-8 flex items-center justify-center">
                <img
                  src={logo || "/placeholder.svg"}
                  alt={`Client ${index}`}
                  className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative w-full h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover object-top">
          <source src="/People_Technology.mp4" type="video/mp4" />
        </video>
        <div className="absolute bottom-8 right-8 z-20">
          <img src="/adSparkLogo.png" alt="AdSpark Logo" className="h-12 w-auto" />
        </div>
      </div>
    </section>
  )
}
