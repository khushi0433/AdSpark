import React from "react";
import { Star, Quote } from "lucide-react";
import Image from 'next/image';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria Santos",
      role: "Marketing Director",
      company: "Globe Telecom",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
      text: "AdSpark transformed our digital presence completely. Their strategic approach and creative execution exceeded all our expectations. The results speak for themselves—300% ROI in just 6 months.",
      rating: 5,
    },
    {
      name: "James Rodriguez",
      role: "CEO",
      company: "Arena Plus",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100",
      text: "Working with AdSpark was a game-changer for our brand launch. Their MADTECH expertise and data-driven insights helped us achieve 1M+ downloads within the first quarter.",
      rating: 5,
    },
    {
      name: "Sarah Chen",
      role: "Brand Manager",
      company: "RC Cola",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
      text: "The team at AdSpark doesn't just execute campaigns—they become true partners in your success. Their creative storytelling and influencer strategy helped us reach 10M+ people.",
      rating: 5,
    },
  ];
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it—hear from the brands we've helped transform.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <Quote className="w-10 h-10 text-[#FF6B00] mb-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-8 bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center border-r border-gray-200 pr-8">
              <p className="text-4xl font-bold text-[#8E0E00] mb-1">500+</p>
              <p className="text-gray-600 font-medium">Projects Completed</p>
            </div>
            <div className="text-center border-r border-gray-200 pr-8">
              <p className="text-4xl font-bold text-[#8E0E00] mb-1">200+</p>
              <p className="text-gray-600 font-medium">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#8E0E00] mb-1">98%</p>
              <p className="text-gray-600 font-medium">Client Retention</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}