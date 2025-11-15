import { Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const gorangilogo = new URL("../assets/Gorangi Logo Nov 2025.png", import.meta.url).href;
const brochurePDF = new URL("../assets/brochure.pdf", import.meta.url).href;

export default function Footer() {
  return (
    <footer className="relative border-t border-blue-500/10 py-16 px-6 bg-black">
      <div className="max-w-7xl mx-auto">

        {/* Centered Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-12 text-center justify-items-center">

          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
                <img
                  src={gorangilogo}
                  alt="Gorangi Logo"
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="font-semibold text-white text-xl tracking-wide">
                Gorangi
              </span>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-5 mt-4">
              <a
                href="mailto:marketing@gorangi.com"
                className="text-blue-400 hover:text-blue-300 transition-colors"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>

              <a
                href="https://www.linkedin.com/company/gorangi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-lg">Company</h3>
            <ul className="space-y-2 text-center">
              <li>
                <Link
                  to="/"
                   onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-blue-400 hover:text-blue-200 transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-blue-400 hover:text-blue-200 transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-blue-400 hover:text-blue-200 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4 text-center">
            <h3 className="font-semibold text-white text-lg">Support</h3>
            <ul className="space-y-2">

              {/* Download Brochure */}
              <li>
                <a
                  href={brochurePDF}
                  download
                  className="text-blue-400 hover:text-blue-200 transition-colors text-sm cursor-pointer"
                >
                  Docs
                </a>
              </li>

              {/* Contact Page */}
              <li>
                <Link
                  to="/contact"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-blue-400 hover:text-blue-200 transition-colors text-sm cursor-pointer"
                >
                  Contact
                </Link>
              </li>

              {/* FAQ Section */}
              <li>
                <Link
                  to="/contact#faq"
                  className="text-blue-400 hover:text-blue-200 transition-colors text-sm cursor-pointer"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-blue-500/10 pt-8">
          <p className="text-center text-blue-400 text-sm tracking-wide">
            © 2025 Gorangi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
