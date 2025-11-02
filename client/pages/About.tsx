import { Link } from "react-router-dom";
import { ArrowRight, Target, Award, Users } from "lucide-react";

const aboutImg = new URL("../assets/aboutus.jpg", import.meta.url).href;
const laptopBG = new URL("../assets/andras-vas-Bd7gNnWJBkU-unsplash.jpg", import.meta.url).href;
const goPngLogo = new URL("../assets/", import.meta.url).href;

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide enterprise-grade hardware solutions that empower businesses to achieve their goals with cutting-edge technology.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      title: "Our Vision",
      description: "To be the most trusted partner for corporate hardware gifting, known for quality, reliability, and exceptional customer service.",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      icon: Users,
      title: "Our Values",
      description: "We believe in integrity, innovation, and putting our customers first in everything we do.",
      gradient: "from-pink-500 to-orange-500",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden px-4 py-20">

        <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
          <div className="space-y-3">
            {/* Title (line 1) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold gradient-text">About Us</h1>

            {/* Subtitle (line 2) */}
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white/95">
              Learn about our mission, vision, and the values that drive us forward.
            </h2>

            {/* Sub-subtitle (line 3) */}
            <p className="text-sm sm:text-base md:text-lg text-purple-200 max-w-3xl mx-auto">
              We build enterprise hardware solutions for modern teams — crafted with quality and backed by support.
            </p>
          </div>

          {/* Image below the text (reduced size, responsive) */}
          <div className="mt-6 flex justify-center">
            <img src={aboutImg} alt="About us - Gorangi team and workspace" className="w-full max-w-lg rounded-2xl shadow-2xl object-cover" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                  <div
                    key={index}
                    className="group cursor-pointer animate-slide-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="glow-border glass-effect p-8 h-full rounded-2xl relative overflow-hidden transition-all duration-300 flex flex-col items-center text-center">                      {aboutImg && (
                        <div
                          className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                          style={{ backgroundImage: `url(${aboutImg})` }}
                          aria-hidden
                        />
                      )}

                      <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                      <div className="relative z-10 w-full">
                        <div className={`inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-br ${value.gradient} mb-6 w-12 h-12 mx-auto`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4">
                          {value.title}
                        </h3>
                        <p className="text-purple-300">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glow-border glass-effect rounded-2xl p-12 md:p-16 text-center animate-slide-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Ready to Partner with Us?</span>
            </h2>
            <p className="text-purple-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how Gorangi can help your business thrive with premium hardware solutions.
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
