import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { Link, useLocation } from "wouter";

const navLinks = [
  { label: "Our Story", href: "/about" },
  { label: "Treatments", href: "/treatments" },
  { label: "Innovation", href: "/technology" },
  { label: "Results", href: "/before-after" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileOpen(false);
  }, [location]);

  const navBg = "bg-white border-b border-[#E8E5DF] shadow-[0_2px_24px_rgba(12,27,46,0.06)]";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${navBg}`}>
      <div className="container">
        <div className="flex items-center justify-between transition-all duration-500 py-4">
          
          {/* Brand */}
          <Link href="/">
            <div className="flex items-center gap-3 group cursor-pointer">
              <img
                src="/logo.png"
                alt="Asthetik Dental and Implant"
                className="h-14 w-auto transition-all duration-300 group-hover:opacity-80"
              />
              <AnimatePresence>
                {isScrolled && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="hidden sm:block"
                  >
                    {/* Main name — Playfair Display Canela-style */}
                    <div
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontStyle: "italic",
                        fontWeight: 800,
                        fontSize: "18px",
                        lineHeight: 1.1,
                        backgroundImage: "linear-gradient(135deg, #0C1B2E 0%, #0C3460 45%, #0EA5E9 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      Asthetik Dental
                    </div>
                    {/* Sub name */}
                    <div
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 700,
                        fontSize: "7.5px",
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        color: "#0EA5E9",
                        marginTop: "2px",
                      }}
                    >
                      and Implant Centre
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link key={link.href} href={link.href}>
                  <button
                    className={`relative text-[11px] font-semibold uppercase tracking-[0.15em] transition-all duration-300 group ${
                      isActive ? "text-sky" : "text-navy/60 hover:text-navy"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-px bg-sky transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </button>
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+923332130700"
              className="hidden xl:flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em] transition-all text-navy/50 hover:text-navy"
            >
              <Phone size={14} className="text-sky" />
              Direct Line
            </a>

            <Link href="/contact">
              <button
                className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full text-[11px] font-semibold uppercase tracking-[0.1em] transition-all duration-300 bg-navy text-white hover:bg-sky shadow-md shadow-navy/15"
              >
                <Calendar size={13} />
                Book Consult
              </button>
            </Link>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2.5 rounded-xl transition-all bg-navy/5 text-navy"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute top-full left-0 w-full bg-white border-b border-[#E8E5DF] shadow-xl lg:hidden"
          >
            <div className="container py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className={`text-left text-base font-semibold uppercase tracking-wider pb-4 border-b border-navy/5 w-full ${
                      location === link.href ? "text-sky" : "text-navy"
                    }`}
                  >
                    {link.label}
                  </button>
                </Link>
              ))}
              <Link href="/contact">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full justify-center"
                >
                  Book Consultation
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
