"use client"

export default function HeroSection() {

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
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 flex flex-col items-start px-6 md:px-10 text-white pt-32 pb-20">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight mb-6 tracking-tight">
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
                className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 font-bold text-base transition-all hover:scale-105 hover:shadow-xl"
              >
                Spark With Us
              </button>
              <button
                className="border-2 border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-4 font-medium text-base transition-all hover:scale-105"
              >
                Talk to an Expert
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20 w-full py-3 overflow-hidden">
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