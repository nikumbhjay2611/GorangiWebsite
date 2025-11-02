import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen overflow-hidden pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden px-4 py-20">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur-3xl opacity-15" style={{ animationDelay: "1s" }}></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 animate-slide-in-up">
            <span className="gradient-text">Let's Get Started</span>
          </h1>
          <p className="text-lg md:text-xl text-purple-200 max-w-2xl mx-auto animate-slide-in-up" style={{ animationDelay: "100ms" }}>
            Get in touch with our team to discuss your hardware needs and find the perfect solution for your business.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Mail,
                title: "Email",
                content: "sales@Gorangi.com",
                subtext: "Response within 24 hours",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: Phone,
                title: "Phone",
                content: "+1 (555) 123-4567",
                subtext: "Available 24/7",
                gradient: "from-blue-500 to-purple-500",
              },
              {
                icon: MapPin,
                title: "Address",
                content: "123 Tech Street, Silicon Valley, CA",
                subtext: "Visit our office",
                gradient: "from-pink-500 to-orange-500",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group cursor-pointer animate-slide-in-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="glow-border glass-effect p-8 h-full rounded-2xl relative overflow-hidden transition-all duration-300 text-center">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                    <div className="relative z-10">
                      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${item.gradient} mb-6 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white font-medium text-sm mb-2">{item.content}</p>
                      <p className="text-purple-400 text-xs">{item.subtext}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="glow-border glass-effect rounded-2xl p-8 md:p-12 animate-slide-in-up">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Send us a Message
              </h2>

              {submitted ? (
                <div className="py-12 text-center animate-slide-in-up">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Thank you!</h3>
                  <p className="text-purple-300">
                    We've received your message and will get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-purple-900/20 border border-purple-500/30 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white outline-none transition-all placeholder:text-purple-400"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-purple-900/20 border border-purple-500/30 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white outline-none transition-all placeholder:text-purple-400"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-purple-900/20 border border-purple-500/30 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white outline-none transition-all placeholder:text-purple-400"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-purple-900/20 border border-purple-500/30 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white outline-none transition-all placeholder:text-purple-400"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-purple-900/20 border border-purple-500/30 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white outline-none transition-all resize-none placeholder:text-purple-400"
                      placeholder="Tell us about your hardware needs..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="cta-button w-full flex items-center justify-center gap-2 group"
                  >
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-32 px-4 border-t border-purple-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 animate-slide-in-up">
            <h2 className="text-4xl font-bold mb-2">
              <span className="gradient-text">Frequently Asked Questions</span>
            </h2>
            <p className="text-purple-300">Quick answers to common questions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "What is your delivery time?",
                a: "Standard delivery is 5-7 business days. Express delivery options are available for urgent orders.",
              },
              {
                q: "Do you offer bulk discounts?",
                a: "Yes! We offer competitive pricing for bulk orders. Contact our sales team for a custom quote.",
              },
              {
                q: "What warranty do you provide?",
                a: "All products come with a standard 2-year warranty. Extended warranties up to 5 years are available.",
              },
              {
                q: "Do you customize for branding?",
                a: "Absolutely. We offer custom branding and packaging options for corporate gifting.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="glow-border glass-effect rounded-xl p-6 animate-slide-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <h3 className="font-bold text-white mb-3">{item.q}</h3>
                <p className="text-purple-300 text-sm">{item.a}</p>
              </div>
            ))}
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
