import { Link } from "react-router-dom";
import { ArrowRight, Target, Award, Users } from "lucide-react";

const aboutImg = new URL("../assets/aboutus.jpg", import.meta.url).href;

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To provide enterprise-grade hardware solutions that empower businesses to achieve their goals with cutting-edge technology.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      title: "Our Vision",
      description:
        "To be the most trusted partner for corporate hardware gifting, known for quality, reliability, and exceptional customer service.",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      icon: Users,
      title: "Our Values",
      description:
        "We believe in integrity, innovation, and putting our customers first in everything we do.",
      gradient: "from-pink-500 to-orange-500",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden pt-20 sm:pt-24">
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-20 sm:py-28">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold gradient-text tracking-tight leading-tight">
            About Us
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl sm:text-2xl md:text-3xl text-white/90 font-medium leading-relaxed">
            Learn about our mission, vision, and the values that drive us forward.
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-purple-200 leading-relaxed max-w-3xl mx-auto">
            We build enterprise hardware solutions for modern teams — crafted
            with quality, backed by innovation, and supported by people who care.
          </p>

          {/* Image */}
          <div className="mt-10 flex justify-center">
            <img
              src={aboutImg}
              alt="About Gorangi - Team at work"
              className="w-full max-w-3xl rounded-2xl shadow-2xl object-cover border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="relative py-28 px-6 bg-black/40 backdrop-blur-lg border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-4xl sm:text-5xl font-bold text-white mb-16">
            What Drives Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white/5 border border-white/10 rounded-2xl p-10 text-center backdrop-blur-md hover:bg-white/10 transition-all duration-300"
                >
                  <div
                    className={`inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-br ${value.gradient} mb-6`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-purple-300 text-base leading-relaxed">
                    {value.description}
                  </p>

                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-28 px-6">
        <div className="max-w-5xl mx-auto text-center glass-effect glow-border rounded-2xl p-10 sm:p-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Ready to Partner with Us?</span>
          </h2>
          <p className="text-purple-300 text-lg mb-10 max-w-2xl mx-auto">
            Let's discuss how Gorangi can help your business thrive with premium
            hardware solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="cta-button flex items-center justify-center gap-2 group"
            >
              View Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="secondary-cta flex items-center justify-center gap-2"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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
                Premium hardware solutions for modern teams.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Products</h3>
              <ul className="space-y-2">
                {["Laptops", "Desktops", "Bundles"].map((item) => (
                  <li
                    key={item}
                    className="text-purple-400 hover:text-purple-200 transition-colors text-sm cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                {["About", "Blog", "Careers"].map((item) => (
                  <li
                    key={item}
                    className="text-purple-400 hover:text-purple-200 transition-colors text-sm cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-2">
                {["Docs", "Contact", "FAQ"].map((item) => (
                  <li
                    key={item}
                    className="text-purple-400 hover:text-purple-200 transition-colors text-sm cursor-pointer"
                  >
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
