import { Linkedin, Twitter, Instagram, Mail } from "lucide-react";

const gorangilogo = new URL("../assets/Gorangi Logo Nov 2025.png", import.meta.url).href;

export default function Footer() {
  return (
    <footer className="relative border-t border-purple-500/10 py-16 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
                <img
                  src={gorangilogo}
                  alt="Gorangi Logo"
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="font-semibold text-white text-lg">Gorangi</span>
            </div>

            <p className="text-purple-400 text-sm mb-4">
              Premium enterprise hardware solutions for modern teams.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              <a
                href="mailto:info@gorangi.com"
                className="text-purple-400 hover:text-purple-200 transition-colors"
                aria-label="Mail"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-200 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-200 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-200 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Products */}
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

          {/* Company */}
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

          {/* Support */}
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

        {/* Footer Bottom */}
        <div className="border-t border-purple-500/10 pt-8">
          <p className="text-center text-purple-400 text-sm">
            © 2025 <span className="text-white font-medium">Gorangi</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
