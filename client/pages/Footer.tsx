import { Linkedin, Mail } from "lucide-react";

const gorangilogo = new URL("../assets/Gorangi Logo Nov 2025.png", import.meta.url).href;

export default function Footer() {
  return (
    <footer className="relative border-t border-purple-500/10 py-16 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-12">

          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
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
            <div className="flex gap-5 mt-4 mx-3">
              <a
                href="mailto:marketing@gorangi.com"
                className="text-purple-400 hover:text-purple-300 transition-colors"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>

              <a
                href="https://www.linkedin.com/company/gorangi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-lg">Company</h3>
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

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-lg">Support</h3>
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

        {/* Footer Bottom */}
        <div className="border-t border-purple-500/10 pt-8">
          <p className="text-center text-purple-400 text-sm tracking-wide">
            © 2025 Gorangi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
