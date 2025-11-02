import { Link } from "react-router-dom";
import { Star, ArrowRight } from "lucide-react";

export default function Clients() {
  const clients = [
    { name: "TechCorp", initials: "TC", industry: "Technology" },
    { name: "InnovateLabs", initials: "IL", industry: "Research" },
    { name: "FutureSoft", initials: "FS", industry: "Software" },
    { name: "CloudFirst", initials: "CF", industry: "Cloud Services" },
    { name: "DataVision", initials: "DV", industry: "Analytics" },
    { name: "NexGen", initials: "NG", industry: "Consulting" },
    { name: "ProDesign", initials: "PD", industry: "Design Studio" },
    { name: "BuildCorp", initials: "BC", industry: "Construction" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CTO at TechCorp",
      content: "Gorangi provided exactly what we needed - quality hardware at competitive prices. Their customer service is exceptional.",
      rating: 5,
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      title: "Operations Manager",
      content: "The delivery was fast and the setup was seamless. Our team is very happy with the performance and quality of the equipment.",
      rating: 5,
      avatar: "MC",
    },
    {
      name: "Emily Rodriguez",
      title: "HR Director",
      content: "As a corporate gifting solution, Gorangi helped us strengthen employee satisfaction. Great quality and professional service!",
      rating: 5,
      avatar: "ER",
    },
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "10,000+", label: "Devices Delivered" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <div className="min-h-screen overflow-hidden pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden px-4 py-20">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 animate-slide-in-up">
            <span className="gradient-text">Trusted by Industry Leaders</span>
          </h1>
          <p className="text-lg md:text-xl text-purple-200 max-w-2xl mx-auto animate-slide-in-up" style={{ animationDelay: "100ms" }}>
            Join hundreds of companies worldwide that trust Gorangi for their enterprise hardware needs.
          </p>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center animate-slide-in-up">
            <h2 className="text-4xl font-bold mb-2 gradient-text">Our Clients</h2>
            <p className="text-purple-300">Leading companies across various industries</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((client, i) => (
              <div
                key={i}
                className="group cursor-pointer animate-slide-in-up"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="glow-border glass-effect h-32 rounded-2xl flex flex-col items-center justify-center hover:glow-border transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold text-xs">{client.initials}</span>
                    </div>
                    <p className="text-sm font-medium text-white">{client.name}</p>
                    <p className="text-xs text-purple-400 mt-1">{client.industry}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="relative py-32 px-4 border-y border-purple-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center animate-slide-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.number}
                </p>
                <p className="text-purple-300 font-medium text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 animate-slide-in-up text-center">
            <h2 className="text-4xl font-bold mb-2">
              <span className="gradient-text">What Our Clients Say</span>
            </h2>
            <p className="text-purple-300">Real feedback from our satisfied customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="glow-border glass-effect rounded-2xl p-8 animate-slide-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-purple-200 mb-6 italic text-sm">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{testimonial.name}</p>
                    <p className="text-purple-400 text-xs">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glow-border glass-effect rounded-2xl p-12 md:p-16 text-center animate-slide-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Ready to Join Our Client Family?</span>
            </h2>
            <p className="text-purple-300 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how Gorangi can support your organization.
            </p>
            <Link
              to="/contact"
              className="cta-button inline-flex items-center justify-center gap-2 group"
            >
              Get in Touch
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
              <p className="text-purple-400 text-sm">Premium hardware solutions for modern teams.</p>
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
              © 2025 Gorangi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
