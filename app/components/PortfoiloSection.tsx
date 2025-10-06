import React from "react";
import Image from 'next/image';
import { ExternalLink } from "lucide-react";
import { href } from "react-router-dom";

export default function PortfolioSection() {
  const projects = [
    {
      title: "Globe Telecom",
      category: "Digital Campaign",
      description: "Multi-channel awareness campaign reaching 5M+ users",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: "300% ROI",
    },
    {
      title: "Arena Plus",
      category: "Brand Launch",
      description: "Complete brand identity and go-to-market strategy",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: "1M+ Downloads",
    },
    {
      title: "Sports Plus",
      category: "Content Strategy",
      description: "Social media content strategy and community growth",
      image: "https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: "500K Followers",
    },
    {
      title: "RC Cola",
      category: "Influencer Campaign",
      description: "Youth-focused influencer marketing campaign",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: "10M+ Reach",
    },
  ];
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped leading brands achieve remarkable results through innovative campaigns and strategic thinking.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                  <span className="bg-gradient-to-r from-[#8E0E00] to-[#FF6B00] px-3 py-1 rounded-full text-xs font-bold">
                    {project.stats}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/90 mb-4">{project.description}</p>
                <button className="flex items-center gap-2 text-white hover:text-white/80 transition-colors font-medium">
                  View Case Study
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
