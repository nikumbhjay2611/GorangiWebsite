import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Monitor, Package, Check } from "lucide-react";

export default function Products() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: "Professional Laptop",
      price: "$1,299",
      description: "High-performance laptops for teams",
      icon: Monitor,
      features: [
        "16GB DDR5 RAM",
        "512GB NVMe SSD",
        "Intel Core i7-13700H",
        "NVIDIA RTX 4060",
        "15.6\" 4K Display",
        "14 Hour Battery Life",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      name: "Workstation Desktop",
      price: "$2,499",
      description: "Powerful desktops for heavy workloads",
      icon: Cpu,
      features: [
        "32GB DDR5 RAM",
        "1TB NVMe SSD",
        "Intel Core i9-13900K",
        "NVIDIA RTX 4090",
        "Dual Monitor Support",
        "Silent Cooling System",
      ],
      gradient: "from-blue-500 to-purple-500",
    },
    {
      id: 3,
      name: "Business Bundle",
      price: "$3,999",
      description: "Complete solutions for enterprises",
      icon: Package,
      features: [
        "2x Professional Laptops",
        "Premium Accessories",
        "Setup & Configuration",
        "3-Year Warranty",
        "Priority Support",
        "Corporate Licensing",
      ],
      gradient: "from-pink-500 to-orange-500",
    },
    {
      id: 4,
      name: "Development Station",
      price: "$1,799",
      description: "Optimized for developers",
      icon: Cpu,
      features: [
        "16GB RAM + NVMe SSD",
        "AMD Ryzen 7 5800X",
        "Professional GPU",
        "Dual Monitors",
        "Linux Pre-configured",
        "Developer Tools Bundle",
      ],
      gradient: "from-green-500 to-blue-500",
    },
    {
      id: 5,
      name: "Gaming Workstation",
      price: "$2,199",
      description: "For creative professionals",
      icon: Monitor,
      features: [
        "32GB RAM",
        "1TB High-Speed SSD",
        "Top-Tier GPU",
        "4K Display Support",
        "Studio Software Bundle",
        "Professional Cooling",
      ],
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 6,
      name: "Compact Business PC",
      price: "$899",
      description: "Space-saving enterprise solution",
      icon: Package,
      features: [
        "8GB RAM",
        "256GB SSD",
        "Intel Core i5",
        "Compact Design",
        "Quiet Operation",
        "5-Year Support",
      ],
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden px-4 py-20">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 animate-slide-in-up">
            <span className="gradient-text">Our Product Line</span>
          </h1>
          <p className="text-lg md:text-xl text-purple-200 max-w-2xl mx-auto animate-slide-in-up" style={{ animationDelay: "100ms" }}>
            Discover our comprehensive range of enterprise-grade hardware solutions designed to meet every business need.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <div
                  key={product.id}
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                  className="group cursor-pointer animate-slide-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="glow-border glass-effect p-8 h-full rounded-2xl relative overflow-hidden transition-all duration-300">
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${product.gradient} group-hover:scale-110 transition-transform`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold gradient-text">{product.price}</span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2">
                        {product.name}
                      </h3>
                      <p className="text-purple-300 text-sm mb-6">{product.description}</p>

                      <div className="space-y-3 mb-8">
                        {product.features.map((feature, j) => (
                          <div key={j} className="flex items-center gap-3 text-purple-200 text-sm">
                            <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <button
                        className={`w-full py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                          hoveredProduct === product.id
                            ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                            : "bg-purple-900/30 text-purple-200 hover:bg-purple-900/50"
                        }`}
                      >
                        View Details
                      </button>
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
              <span className="gradient-text">Can't Find What You Need?</span>
            </h2>
            <p className="text-purple-300 text-lg mb-8 max-w-2xl mx-auto">
              Contact our team for custom solutions and enterprise packages tailored to your specific needs.
            </p>
            <Link
              to="/contact"
              className="cta-button inline-flex items-center justify-center gap-2 group"
            >
              Request Custom Quote
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
