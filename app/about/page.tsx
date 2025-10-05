import { Target, Users, Lightbulb, TrendingUp, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Navigation from "../components/Navigation";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Strategic Approach",
      description: "Data-driven strategies that align with your business goals and deliver measurable results.",
      gradient: "from-orange-500 to-red-600",
    },
    {
      icon: Lightbulb,
      title: "Creative Innovation",
      description: "Bold, creative solutions that capture attention and leave lasting impressions.",
      gradient: "from-red-600 to-pink-600",
    },
    {
      icon: Users,
      title: "Collaborative Partnership",
      description: "We work alongside you as an extension of your team, ensuring seamless collaboration.",
      gradient: "from-pink-600 to-purple-600",
    },
    {
      icon: TrendingUp,
      title: "Results-Driven",
      description: "Every campaign is optimized for performance, ROI, and sustainable growth.",
      gradient: "from-purple-600 to-indigo-600",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "15+ years in digital marketing and advertising technology.",
    },
    {
      name: "Michael Chen",
      role: "Chief Creative Officer",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Award-winning creative director with global campaign experience.",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Strategy",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Data analytics expert specializing in MADTECH solutions.",
    },
    {
      name: "David Kim",
      role: "Technology Director",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Full-stack engineer building scalable marketing platforms.",
    },
  ];

  return (
    <>
      <Navigation />
      <div className="relative pt-24 pb-12 overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/GettyImages-1194277985.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-[#8E0E00]/80 to-[#FF6B00]/80" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Who We Are</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            A next-generation agency combining creativity, data, and technology
          </p>
        </div>
      </div>
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                AdSpark was founded on the belief that marketing should be both an art and a science. We bring together the best of both worlds—creative storytelling that captivates and data-driven strategies that deliver results.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We specialize in MADTECH (Marketing Advertising Technology) solutions that combine marketing automation, advertising expertise, and cutting-edge technology to create campaigns that don't just reach audiences—they resonate with them.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is simple: to ignite meaningful connections between brands and their audiences through innovative storytelling and data-driven strategies that drive sustainable growth.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Creative team at work"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#8E0E00] to-[#FF6B00] text-white p-8 rounded-xl shadow-xl">
                <p className="text-4xl font-bold mb-1">10+</p>
                <p className="text-sm font-medium">Years Experience</p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="bg-gradient-to-br from-[#8E0E00] to-[#FF6B00] w-14 h-14 rounded-lg flex items-center justify-center mb-5">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
              Meet Our Team
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[#8E0E00] font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
