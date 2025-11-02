import { useState } from "react";
import { Link } from "react-router-dom";

const heroVideo = new URL("../assets/3129671-uhd_3840_2160_30fps.mp4", import.meta.url).href;
const aboutImg = new URL("../assets/aboutus.jpg", import.meta.url).href;
const laptopImage = new URL("../assets/andras-vas-Bd7gNnWJBkU-unsplash.jpg", import.meta.url).href;
const goPngLogo = new URL("../assets/Go PNG Logo.png", import.meta.url).href;
import { ArrowRight, Zap, Shield, Cpu, Box, Users, MessageSquare } from "lucide-react";

interface Testimonial {
  name: string;
  handle: string;
  avatar: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    handle: "@sarahchen_",
    avatar: "SC",
    text: "Gorangi made our enterprise hardware procurement effortless. The quality is outstanding!",
  },
  {
    name: "Michael Rodriguez",
    handle: "@mikerodriguez",
    avatar: "MR",
    text: "Best hardware solutions for corporate gifting. Our team absolutely loves their new equipment!",
  },
  {
    name: "Emily Watson",
    handle: "@emilywatson",
    avatar: "EW",
    text: "The support team is incredible. They helped us customize our entire setup perfectly.",
  },
  {
    name: "David Park",
    handle: "@davidpark_dev",
    avatar: "DP",
    text: "Fast delivery, premium quality, and excellent customer service. Highly recommended!",
  },
  {
    name: "Lisa Anderson",
    handle: "@lisaanderson",
    avatar: "LA",
    text: "Gorangi is our go-to partner for all hardware needs. Consistently excellent!",
  },
  {
    name: "James Thompson",
    handle: "@jamesthompson",
    avatar: "JT",
    text: "The variety of products and customization options is amazing. Worth every penny!",
  },
];

export default function Index() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      id: 1,
      title: "Premium Laptops",
      description: "Professional-grade laptops for your team",
      icon: Cpu,
      stats: "500+",
      statLabel: "Delivered",
      gradient: "from-purple-500 to-pink-500",
      bgImage: aboutImg,
    },
    {
      id: 2,
      title: "Powerful Desktops",
      description: "High-performance workstations",
      icon: Box,
      stats: "10K+",
      statLabel: "Devices",
      gradient: "from-blue-500 to-purple-500",
      bgImage: laptopImage,
    },
    {
      id: 3,
      title: "Custom Bundles",
      description: "Tailored solutions for your business",
      icon: Zap,
      stats: "24/7",
      statLabel: "Support",
      gradient: "from-pink-500 to-orange-500",
      bgImage: goPngLogo,
    },
    {
      id: 4,
      title: "Enterprise Ready",
      description: "Scalable solutions for growth",
      icon: Shield,
      stats: "98%",
      statLabel: "Satisfaction",
      gradient: "from-green-500 to-blue-500",
      bgImage: aboutImg,
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden pt-20">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
  {/* Background video (hero only) */}
  <video className="hero-video absolute inset-0 w-full h-full object-cover" src={heroVideo} autoPlay muted loop playsInline aria-hidden />
  <div className="absolute inset-0 bg-black/50" aria-hidden />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Floating Badge */}
          

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6" style={{ animationDelay: "100ms" }}>
            <h1 className="text-center max-w-4xl mx-auto">
              <span className="gradient-text"> Corporate Gifting & IT  Equipment</span>
              <span className="block text-white text-4xl text-opacity-90 mt-2 ">Solutions for Modern Businesses</span>
            </h1>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-purple-300 mb-12 max-w-2xl mx-auto leading-relaxed" style={{ animationDelay: "200ms" }}>
            Premium laptops, desktops, and custom bundles tailored for your business. Delivered with excellence.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: "300ms" }}>
            <Link
              to="/products"
              className="cta-button flex items-center justify-center gap-2 group"
            >
              Explore Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="secondary-cta flex items-center justify-center gap-2"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Bento Grid Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-white">Why Choose Gorangi?</span>
            </h2>
            <p className="text-gray-300 text-lg">
              Industry-leading quality, support, and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.id}
                  onMouseEnter={() => setHoveredFeature(feature.id)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  className="group cursor-pointer animate-slide-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="glow-border glass-effect p-8 h-full rounded-2xl relative overflow-hidden transition-all duration-300 flex flex-col items-center text-center">
                    {/* Background image (subtle) */}
                    {feature.bgImage && (
                      <div
                        className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                        style={{ backgroundImage: `url(${feature.bgImage})` }}
                        aria-hidden
                      />
                    )}

                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                    <div className="relative z-10 w-full flex flex-col items-center">
                      <div className={`inline-flex items-center justify-center rounded-full bg-gradient-to-br ${feature.gradient} mb-6 w-14 h-14 group-hover:scale-110 transition-transform`}> 
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 mb-6">{feature.description}</p>

                      <div className="flex flex-col items-center gap-1">
                        <span className="text-4xl font-bold gradient-text">
                          {feature.stats}
                        </span>
                        <span className="text-gray-400">{feature.statLabel}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Marquee Section */}
      <section className="relative py-32 px-4 border-y border-gray-700/40">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-gray-900/20"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-white">Loved by Teams Worldwide</span>
            </h2>
            <p className="text-gray-300 text-lg">
              See what our clients are saying
            </p>
          </div>

          {/* Marquee Container */}
          <div className="relative">
            <div className="overflow-hidden">
              <div className="animate-marquee flex gap-6">
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <div
                    key={index}
                    className="glass-effect rounded-xl p-6 min-w-[380px] md:min-w-[420px] hover:glow-border transition-all duration-300"
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center text-white font-semibold flex-shrink-0">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">
                          {testimonial.name}
                        </p>
                        <p className="text-gray-400 text-xs">{testimonial.handle}</p>
                      </div>
                    </div>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Gradient fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Start Exploring CTA Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glow-border glass-effect rounded-2xl p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Ready to Upgrade Your Team?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Discover our complete range of enterprise hardware solutions tailored for your business.
            </p>
            <Link
              to="/products"
              className="cta-button inline-flex items-center justify-center gap-2 group"
            >
              Browse All Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-purple-500/10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">HW</span>
                </div>
                <span className="font-semibold text-white">Gorangi</span>
              </div>
              <p className="text-purple-400 text-sm">
                Premium enterprise hardware solutions for modern teams.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Products</h3>
              <ul className="space-y-2">
                {["Laptops", "Desktops", "Bundles"].map((item) => (
                  <li key={item} className="text-purple-400 hover:text-purple-200 transition-colors text-sm cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                {["About", "Blog", "Careers"].map((item) => (
                  <li key={item} className="text-purple-400 hover:text-purple-200 transition-colors text-sm cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-2">
                {["Docs", "Contact", "FAQ"].map((item) => (
                  <li key={item} className="text-purple-400 hover:text-purple-200 transition-colors text-sm cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-purple-500/10 pt-8">
            <p className="text-center text-purple-400 text-sm">
              © 2025 Gorangi. All rights reserved. | Built with React + Tailwind
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
