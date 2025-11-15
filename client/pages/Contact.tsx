import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

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
    e
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const location = useLocation();

useEffect(() => {
  if (location.hash) {
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}, [location]);


  return (
    <div className="min-h-screen overflow-hidden pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden px-4 py-20">

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold leading-tight mb-6 gradient-text"
          >
            Let's Get Started
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl text-purple-200 max-w-2xl mx-auto"
          >
            Get in touch with our team to discuss your hardware needs and find the perfect solution for your business.
          </motion.p>
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
                content: "marketing@gorangi.com",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: Phone,
                title: "Phone",
                content: "+91 7559358660",
                gradient: "from-blue-500 to-purple-500",
              },
              {
                icon: MapPin,
                title: "Address",
                content: "235, 2nd & 3rd Floor, 13th Cross Rd, Indira Nagar II Stage, Bengaluru, Karnataka",
                gradient: "from-pink-500 to-orange-500",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="glow-border glass-effect p-8 h-full rounded-2xl relative overflow-hidden transition-all duration-300 text-center">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                    <div className="relative z-10">
                      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${item.gradient} mb-6 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-white font-medium text-sm mb-2">{item.content}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="glow-border glass-effect rounded-2xl p-8 md:p-12">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold text-white mb-8 text-center"
              >
                Send us a Message
              </motion.h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Thank you!</h3>
                  <p className="text-purple-300">We've received your message and will get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Full Name *</label>
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
                      <label className="block text-sm font-medium text-white mb-2">Email *</label>
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
                      <label className="block text-sm font-medium text-white mb-2">Phone</label>
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
                      <label className="block text-sm font-medium text-white mb-2">Company</label>
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
                    <label className="block text-sm font-medium text-white mb-2">Message *</label>
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

                  <button type="submit" className="cta-button w-full flex items-center justify-center gap-2 group">
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
      <section id="faq" className="relative py-32 px-4 border-t border-purple-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-2 gradient-text"
            >
              Frequently Asked Questions
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-purple-300"
            >
              Quick answers to common questions
            </motion.p>
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
                a: "Warranty is provided as per the respective brand's standard policy and may vary by product.",
              },
              {
                q: "Do you customize for branding?",
                a: "Absolutely. We offer custom branding and packaging options for corporate gifting.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="glow-border glass-effect rounded-xl p-6"
              >
                <h3 className="font-bold text-white mb-3">{item.q}</h3>
                <p className="text-purple-300 text-sm">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}