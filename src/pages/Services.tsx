import { Megaphone, BarChart3, Palette, Code, Video, Globe, ArrowLeft, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

export default function Services() {
  const services = [
    {
      icon: Megaphone,
      title: "Digital Advertising",
      description: "Multi-channel campaigns across social media, search, display, and video that maximize reach and engagement.",
      gradient: "from-orange-500 to-red-600",
      features: [
        "Social Media Advertising (Meta, TikTok, LinkedIn)",
        "Google Ads & PPC Campaigns",
        "Programmatic Display Advertising",
        "Video Advertising & YouTube Marketing",
        "Retargeting & Remarketing Strategies",
      ],
    },
    {
      icon: BarChart3,
      title: "Marketing Analytics",
      description: "Advanced data analytics and insights that drive informed decision-making and optimize campaign performance.",
      gradient: "from-red-600 to-pink-600",
      features: [
        "Campaign Performance Tracking",
        "Customer Journey Analytics",
        "Attribution Modeling",
        "Predictive Analytics & Forecasting",
        "Custom Dashboard Development",
      ],
    },
    {
      icon: Palette,
      title: "Brand Strategy",
      description: "Comprehensive brand development, positioning, and creative storytelling that resonates with your audience.",
      gradient: "from-pink-600 to-purple-600",
      features: [
        "Brand Identity Development",
        "Market Research & Positioning",
        "Messaging & Voice Guidelines",
        "Visual Identity Systems",
        "Brand Launch Campaigns",
      ],
    },
    {
      icon: Code,
      title: "Marketing Technology",
      description: "Custom MADTECH solutions, automation platforms, and integrations that streamline your marketing operations.",
      gradient: "from-purple-600 to-indigo-600",
      features: [
        "Marketing Automation Setup",
        "CRM Integration & Optimization",
        "Custom API Development",
        "Landing Page & Funnel Builder",
        "MarTech Stack Consulting",
      ],
    },
    {
      icon: Video,
      title: "Content Production",
      description: "High-quality video, photography, and multimedia content that captures attention and tells your story.",
      gradient: "from-indigo-600 to-blue-600",
      features: [
        "Video Production & Editing",
        "Photography & Photo Editing",
        "Motion Graphics & Animation",
        "Podcast Production",
        "Live Streaming Services",
      ],
    },
    {
      icon: Globe,
      title: "Social Media Management",
      description: "End-to-end social media strategy, content creation, and community management across all platforms.",
      gradient: "from-blue-600 to-cyan-600",
      features: [
        "Content Strategy & Planning",
        "Daily Content Creation & Posting",
        "Community Management",
        "Influencer Partnership Management",
        "Social Listening & Monitoring",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-24 pb-12 bg-gradient-to-br from-[#8E0E00] to-[#FF6B00]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            The Spark
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Comprehensive services designed to ignite your brand's potential
          </p>
        </div>
      </div>

      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className={`bg-gradient-to-br ${service.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mb-6`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#8E0E00] flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <img
                    src={`https://images.pexels.com/photos/${
                      [3184292, 3183197, 3184325, 3183165, 3184291, 3183153][index]
                    }/pexels-photo-${
                      [3184292, 3183197, 3184325, 3183165, 3184291, 3183153][index]
                    }.jpeg?auto=compress&cs=tinysrgb&w=800`}
                    alt={service.title}
                    className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-gradient-to-br from-[#8E0E00] to-[#FF6B00] rounded-3xl p-12 md:p-16 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Ignite Your Brand?
            </h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Let's create something extraordinary together. Our team is ready to bring your vision to life.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-[#8E0E00] hover:bg-gray-100 rounded-full px-10 py-4 font-bold text-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
