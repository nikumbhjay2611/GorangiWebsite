import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/Go PNG Logo.png";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Clients", href: "/clients" },
    { label: "About", href: "/about" },
  ];

  // 🕒 Auto-hide navbar after 5s of inactivity
  useEffect(() => {
    let timeout;
    let isHovered = false;

    const showNavbar = () => {
      if (!isHovered) {
        setVisible(true);
        resetTimer();
      }
    };

    const resetTimer = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (!isHovered) {
          setVisible(false);
        }
      }, 5000);
    };

    // Handle mouse movement and interaction events
    window.addEventListener("mousemove", showNavbar);
    window.addEventListener("click", showNavbar);
    window.addEventListener("touchstart", showNavbar);
    window.addEventListener("keydown", showNavbar);
    
    // Show navbar initially and start timer
    setVisible(true);
    resetTimer();

    return () => {
      window.removeEventListener("mousemove", showNavbar);
      window.removeEventListener("click", showNavbar);
      window.removeEventListener("touchstart", showNavbar);
      window.removeEventListener("keydown", showNavbar);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <nav
      className={`fixed top-6 left-0 w-full z-50 flex justify-center transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`}
    >
      <div
        className="flex items-center justify-between px-8 py-4 rounded-full 
                   backdrop-blur-md bg-black/30  border-blue-400 
                   shadow-[0_0_15px_rgba(34,197,94,0.3)] 
                   max-w-2xl w-[90%] transition-all duration-500"
      >
        {/* Logo */}
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 group">
          <div className="flex items-center justify-center">
            <img
              src={logo}
              alt="Gorangi Logo"
              className="w-9 h-9 md:w-10 md:h-10 object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <span className="hidden md:block font-semibold text-white text-lg leading-tight">
            Gorangi.
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-gray-200 hover:text-blue-300 font-medium text-base transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-blue-500/10 rounded-lg transition-colors"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-blue-400" />
          ) : (
            <Menu className="w-6 h-6 text-blue-400" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-20 w-[90%] max-w-4xl bg-black/60 backdrop-blur-md rounded-xl border border-blue-400 p-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => {
                  setIsOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-4 py-2 text-blue-200 hover:text-blue-300 font-medium text-sm rounded-lg hover:bg-blue-500/10 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
