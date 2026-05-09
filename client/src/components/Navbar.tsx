/**
 * ASTHETIK DENTAL — Navbar Component
 * Design: Sticky top nav, deep navy bg, gold CTA button
 * Smooth scroll to sections, mobile hamburger menu
 */
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Treatments", href: "#treatments" },
  { label: "Technology", href: "#technology" },
  { label: "Team", href: "#team" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "nav-scrolled" : ""
      }`}
      style={{ backgroundColor: "#0B1F3A" }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-3 group"
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg"
              style={{ backgroundColor: "#C9A84C" }}
            >
              A
            </div>
            <div className="text-left">
              <div
                className="font-bold text-sm md:text-base leading-tight"
                style={{ fontFamily: "'Playfair Display', serif", color: "white" }}
              >
                Asthetik Dental
              </div>
              <div className="text-xs" style={{ color: "#C9A84C" }}>
                &amp; Implant Centre
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 relative group"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: "#C9A84C" }}
                />
              </button>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+92-XXX-XXXXXXX"
              className="hidden md:flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              <Phone size={14} />
              <span style={{ fontFamily: "'Poppins', sans-serif" }}>Call Us</span>
            </a>
            <button
              onClick={() => handleNavClick("#booking")}
              className="hidden md:block px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "#C9A84C",
                color: "#0B1F3A",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Book Appointment
            </button>
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t"
          style={{ backgroundColor: "#0B1F3A", borderColor: "#1a3a5c" }}
        >
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left py-3 px-4 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-sm font-medium"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#booking")}
              className="mt-3 py-3 text-sm font-semibold rounded-full transition-all"
              style={{
                backgroundColor: "#C9A84C",
                color: "#0B1F3A",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
