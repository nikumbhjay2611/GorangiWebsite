import { useState } from "react";
import Footer from "./Footer";

const logos = import.meta.glob('../assets/partnerlogosforwebsite/*', { eager: true });

const partnerLogos = Object.values(logos).map((mod) => mod.default);

import { Link } from "react-router-dom";
import {
  ArrowRight,
  Monitor,
  Package,
  Cloud,
  Shield,
  Gift,
  Laptop,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Products() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const offerings = [
    {
      id: 1,
      name: "End-User Computing",
      description:
        "Laptops, desktops, and tablets from leading global brands — optimized for enterprise productivity.",
      icon: Laptop,
      gradient: "from-blue-500 to-purple-500",
    },
    {
      id: 2,
      name: "IT Accessories",
      description:
        "From keyboards to docking stations and monitors — complete peripheral solutions for every workspace.",
      icon: Package,
      gradient: "from-green-500 to-teal-500",
    },
    {
      id: 3,
      name: "IT Infrastructure & Cloud",
      description:
        "Scalable servers, storage, and cloud solutions to power your business backbone.",
      icon: Cloud,
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      id: 4,
      name: "Software & Security",
      description:
        "Licensing, compliance, and managed software solutions for enterprise ecosystems.",
      icon: Monitor,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      id: 5,
      name: "Cybersecurity Solutions",
      description:
        "End-to-end protection including VAPT, PCI DSS, ISO 27001, and governance frameworks.",
      icon: Shield,
      gradient: "from-red-500 to-pink-500",
    },
    {
      id: 6,
      name: "Corporate Gifting Solutions",
      description:
        "Curated, tech-inspired corporate gifts for employee engagement and client retention.",
      icon: Gift,
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  const serviceDetails = [
    {
      id: 1,
      title: "End-User Computing",
      icon: Laptop,
      imagePosition: "left",
      description:
        "We deliver modern computing devices designed for reliability and scalability. From ultra-portable laptops to high-performance desktops, our solutions are tailored to enterprise workloads.",
    },
    {
      id: 2,
      title: "IT Accessories",
      icon: Package,
      imagePosition: "right",
      description:
        "Enhance productivity with high-quality peripherals — monitors, docking stations, keyboards, and more — all from trusted global brands.",
    },
  ];

 

  return (
    <div className="min-h-screen overflow-hidden pt-24">

      {/* CTA BUTTON FIX (INLINE TAILWIND) */}
      {/* NEW class: flex items-center gap-2 + group-hover translate without size shift */}

      {/* Section 1: Hero */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-24">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-80 h-80 text-gradient rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold leading-tight mb-6 gradient-text"
          >
            Comprehensive IT Solutions for Modern Enterprises
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl text-purple-200 mb-10"
          >
            Explore Gorangi’s full suite of products and services — designed to
            enhance efficiency, security, and innovation across your business operations.
          </motion.p>

          
        </div>
      </section>

      {/* Section 2: Core Offerings */}
      <section id="offerings" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text leading-normal md:leading-snug"
          >
            Our Core Offerings
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {offerings.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                onMouseEnter={() => setHoveredProduct(item.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col items-center text-center"
              >
                <div className="glow-border glass-effect p-8 h-full rounded-2xl relative overflow-hidden w-full max-w-sm transition-all duration-300 hover:scale-[1.02]">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>

                  <div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${item.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {item.name}
                  </h3>
                  <p className="text-purple-200 text-sm md:text-base leading-relaxed mb-6">
                    {item.description}
                  </p>

                 
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Section 3: Service Detail Blocks */}
      {/* <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-24">
          {serviceDetails.map((service, index) => {
            const Icon = service.icon;
            const isLeft = service.imagePosition === "left";
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row ${
                  !isLeft ? "md:flex-row-reverse" : ""
                } items-center gap-10`}
              >
                <div className="w-full md:w-1/2 h-64 glass-effect rounded-2xl flex items-center justify-center text-white opacity-80">
                  <Icon className="w-20 h-20 text-purple-300" />
                </div>

                <div className="w-full md:w-1/2 text-center md:text-left">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-purple-200 text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section> */}

       {/* Section 5: Logo Rail Animation */}
      <section className="relative py-24 px-6 text-center">
  <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text leading-normal md:leading-snug">
    Trusted by Global Technology Leaders
  </h2>

  <p className="text-purple-200 text-lg mb-12">
    Our partnerships with world-class brands ensure quality, reliability,
    and innovation in every solution we deliver.
  </p>

  {/* Responsive Logo Grid */}
  <div className="grid 
      grid-cols-2 
      sm:grid-cols-3 
      md:grid-cols-4 
      lg:grid-cols-5 
      xl:grid-cols-6 
      gap-10 
      place-items-center px-6">

    {partnerLogos.map((logo, index) => (
      <img
        key={index}
        src={logo}
        alt="Client Logo"
        className="h-14 w-auto object-contain opacity-80 hover:opacity-100 transition"
      />
    ))}

  </div>
</section>


      {/* Section 4: Consulting CTA */}
      <section className="relative py-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Strategic IT Guidance for Long-Term Growth
          </h2>
          <p className="text-purple-200 text-lg mb-10">
            Beyond products, Gorangi’s consulting team helps organizations align
            IT investments with business goals. We offer technology assessments,
            digital transformation planning, and infrastructure scalability roadmaps.
          </p>

          <Link
            to="/contact"
                         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}

            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white bg-gradient-to-r from-purple-600 to-indigo-600 font-semibold transition-all"
          >
            Consult Our Experts
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>

      

      {/* Section 6: Final CTA */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glow-border glass-effect rounded-2xl p-12 md:p-16 text-center animate-slide-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">
                Ready to Upgrade Your IT Ecosystem?
              </span>
            </h2>
            <p className="text-purple-300 text-lg mb-8 max-w-2xl mx-auto">
              Connect with Gorangi to explore tailored IT solutions that power
              your business.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}

                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white bg-gradient-to-r from-purple-600 to-indigo-600 font-semibold transition-all"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>

              

              
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


