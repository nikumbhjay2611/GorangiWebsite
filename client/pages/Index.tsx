import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import Footer from "./Footer";


const heroVideo = new URL(
  "../assets/3129671-uhd_3840_2160_30fps.mp4",
  import.meta.url
).href;

const endtoendimg = new URL("../assets/computer.png", import.meta.url).href;
const cybersecimg = new URL("../assets/cyber-security.png", import.meta.url).href;
const mouseimg = new URL("../assets/mouse.png", import.meta.url).href;
const cloudimg = new URL("../assets/cloud-computing.png", import.meta.url).href;

export default function Index() {
  return (
    <div className="min-h-screen overflow-hidden font-inter text-gray-200">
      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative min-h-[95vh] flex items-center justify-center overflow-hidden px-4 sm:px-8 md:px-16 pt-24 sm:pt-32"
      >
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-blue-500 tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)] ">
            
            <span className="block text-gradient text-transparent bg-clip-text">
              Empowering Businesses with{" "} Smarter IT Solutions
            </span>
          </h1>

          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            From enterprise hardware to end-to-end cybersecurity — Gorangi is
            your one-stop solution for reliable, innovative, and cost-effective
            IT products and services.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="cta-button">
              Explore Solutions
            </Link>
            <Link to="/contact" className="secondary-cta">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="relative py-24 px-4 border-t border-gray-700/40">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 text-gray-300">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Who We Are
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Gorangi is a leading B2B IT products and solutions company based in
              Bengaluru, India. We specialize in IT hardware, software, and
              consulting services that enable enterprises to enhance performance
              and security.
            </p>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Gorangi
            </h2>
            <p className="text-lg leading-relaxed">
              By combining global partnerships, technical expertise, and a
              customer-first approach, Gorangi ensures innovation, strong
              enterprise support, and technology excellence for every client.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE DELIVER */}
      <section className="relative z-10 bg-black/40 backdrop-blur-lg py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
            What We Deliver
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition duration-300 flex flex-col items-center text-center">
              <img
                src={endtoendimg}
                alt="End User Computing"
                className="w-16 h-16 mb-4 object-contain"
              />
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                End-User Computing
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Laptops, desktops, and enterprise-grade devices that power your
                workforce securely and efficiently.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition duration-300 flex flex-col items-center text-center">
              <img
                src={mouseimg}
                alt="IT Accessories"
                className="w-16 h-16 mb-4 object-contain"
              />
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                IT Accessories
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Smart accessories and peripherals designed to improve
                productivity, reliability, and connectivity.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition duration-300 flex flex-col items-center text-center">
              <img
                src={cloudimg}
                alt="Cloud Computing"
                className="w-16 h-16 mb-4 object-contain"
              />
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                IT Infra & Cloud
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Build scalable, compliant, and secure infrastructure solutions
                on-prem or in the cloud.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition duration-300 flex flex-col items-center text-center">
              <img
                src={cybersecimg}
                alt="Cybersecurity"
                className="w-16 h-16 mb-4 object-contain"
              />
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                Cybersecurity
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Comprehensive enterprise protection from endpoint to cloud —
                securing your data and operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC IT CONSULTING + WHY PARTNER */}
      <section className="relative py-24 px-4 border-t border-gray-700/40">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 text-gray-300">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Strategic IT Consulting
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Our experts help organizations align technology with business
              goals, ensuring agility, compliance, and scalability.
            </p>
            <p className="text-lg leading-relaxed">
              We focus on creating future-ready infrastructure that supports
              sustainable growth and digital transformation.
            </p>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Why Partner with Gorangi
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Let’s empower your business with smarter, faster, and more secure
              IT solutions.
            </p>
            <ul className="space-y-3 text-base">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-purple-400 mt-1" />
                marketing@gorangi.com
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-purple-400 mt-1" /> +91 7559358660
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-purple-400 mt-1" />
                235, 2nd & 3rd Floor, 13th Cross Rd, Indira Nagar II Stage,
                Bengaluru, Karnataka
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 px-4">
        <div className="max-w-5xl mx-auto text-center glass-effect glow-border p-12 rounded-2xl">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Transform Your IT Ecosystem?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Let’s empower your business with smarter, faster, and more secure IT
            solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cta-button">
              Get in Touch
            </Link>
            <Link to="/demo" className="secondary-cta">
              Schedule a Demo
            </Link>
            <Link to="/brochure" className="secondary-cta">
              Download Brochure
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      {/* <footer className="relative border-t border-purple-500/10 py-16 px-4">
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
              © 2025 Gorangi. All rights reserved. | Built with React + Tailwind
            </p>
          </div>
        </div>
      </footer> */}
      <Footer />
    </div>
  );
}
