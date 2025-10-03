import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Send, ArrowLeft, CheckCircle } from "lucide-react";
import  Link  from "next/link";
import Navigation from "../components/Navigation";
import { supabase } from "../lib/supabase";

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { error: submitError } = await supabase
        .from("contact_submissions")
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company,
            phone: formData.phone,
            service: formData.service,
            message: formData.message,
          },
        ]);

      if (submitError) throw submitError;

      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      });

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError("Failed to submit form. Please try again.");
      console.error("Form submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-24 pb-12 bg-gradient-to-br from-[#8E0E00] to-[#FF6B00]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Ready to spark your brand's potential? Let's start a conversation.
          </p>
        </div>
      </div>

      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Let's Create Something Amazing
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-[#8E0E00] to-[#FF6B00] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Email Us</p>
                    <a href="mailto:hello@adspark.com" className="text-gray-600 hover:text-[#8E0E00] transition-colors">
                      hello@adspark.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-[#8E0E00] to-[#FF6B00] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Call Us</p>
                    <a href="tel:+1234567890" className="text-gray-600 hover:text-[#8E0E00] transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-[#8E0E00] to-[#FF6B00] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Visit Us</p>
                    <p className="text-gray-600">
                      123 Innovation Street<br />
                      Tech District, Manila<br />
                      Philippines
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#8E0E00] to-[#FF6B00] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-3">Business Hours</h3>
                <div className="space-y-2 text-white/90">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div className="mt-8 bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#8E0E00] flex-shrink-0 mt-0.5" />
                    <span>Response within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#8E0E00] flex-shrink-0 mt-0.5" />
                    <span>Free initial consultation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#8E0E00] flex-shrink-0 mt-0.5" />
                    <span>Custom proposal tailored to your needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#8E0E00] flex-shrink-0 mt-0.5" />
                    <span>No obligation or pressure</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              {isSuccess && (
                <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" />
                  <p>Thank you! We'll be in touch soon.</p>
                </div>
              )}

              {error && (
                <div className="mb-6 bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-lg">
                  <p>{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#8E0E00] focus:ring-2 focus:ring-[#8E0E00]/20 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#8E0E00] focus:ring-2 focus:ring-[#8E0E00]/20 outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#8E0E00] focus:ring-2 focus:ring-[#8E0E00]/20 outline-none transition-all"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#8E0E00] focus:ring-2 focus:ring-[#8E0E00]/20 outline-none transition-all"
                      placeholder="+1 (234) 567-890"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#8E0E00] focus:ring-2 focus:ring-[#8E0E00]/20 outline-none transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="Digital Advertising">Digital Advertising</option>
                    <option value="Marketing Analytics">Marketing Analytics</option>
                    <option value="Brand Strategy">Brand Strategy</option>
                    <option value="Marketing Technology">Marketing Technology</option>
                    <option value="Content Production">Content Production</option>
                    <option value="Social Media Management">Social Media Management</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#8E0E00] focus:ring-2 focus:ring-[#8E0E00]/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#8E0E00] to-[#FF6B00] text-white font-bold py-4 rounded-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}{" "}
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
