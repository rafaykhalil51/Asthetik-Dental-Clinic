/**
 * ASTHETIK DENTAL — Footer
 * Design: Deep navy bg, gold accents, links, social icons, copyright
 */
import { MapPin, Phone, MessageCircle, Facebook, Instagram } from "lucide-react";

const footerLinks = {
  clinic: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#team" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Find Us", href: "#contact" },
  ],
  treatments: [
    { label: "General Dentistry", href: "#treatments" },
    { label: "Dental Implants", href: "#treatments" },
    { label: "Orthodontics / Braces", href: "#treatments" },
    { label: "Teeth Whitening", href: "#treatments" },
    { label: "Cosmetic Dentistry", href: "#treatments" },
    { label: "Paediatric Dentistry", href: "#treatments" },
  ],
};

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ backgroundColor: "#060f1e" }}>
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-5">
              <div>
                <div
                  className="font-bold text-xl text-white leading-none mb-1"
                  style={{ 
                    fontFamily: "'Playfair Display', serif", 
                    letterSpacing: "1px",
                    background: "linear-gradient(to right, #C9A84C, #ffffff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "0 2px 10px rgba(201,168,76,0.3)"
                  }}
                >
                  Asthetik Dental
                </div>
                <div
                  className="text-[10px] uppercase font-bold tracking-[4px]"
                  style={{ color: "#C9A84C", opacity: 0.9, fontFamily: "'Poppins', sans-serif" }}
                >
                  and Implant Centre
                </div>
              </div>
              <img 
                src="/logo.png" 
                alt="Asthetik Dental" 
                className="h-12 w-auto object-contain bg-white rounded-lg p-1.5 shadow-lg shadow-white/5"
              />
            </div>
            <p
              className="text-xs text-white/50 leading-relaxed mb-5"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Excellence in Contemporary Dental Practice. Serving DHA, Karachi with world-class dental care.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center border transition-all hover:border-yellow-400 hover:text-yellow-400"
                style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)" }}
                aria-label="Facebook"
              >
                <Facebook size={15} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center border transition-all hover:border-yellow-400 hover:text-yellow-400"
                style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)" }}
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://wa.me/92XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center border transition-all hover:border-green-400 hover:text-green-400"
                style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)" }}
                aria-label="WhatsApp"
              >
                <MessageCircle size={15} />
              </a>
            </div>
          </div>

          {/* Clinic Links */}
          <div>
            <h4
              className="text-sm font-semibold text-white mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Clinic
            </h4>
            <div className="flex flex-col gap-2">
              {footerLinks.clinic.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-xs text-white/50 hover:text-white transition-colors"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Treatments Links */}
          <div>
            <h4
              className="text-sm font-semibold text-white mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Treatments
            </h4>
            <div className="flex flex-col gap-2">
              {footerLinks.treatments.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-xs text-white/50 hover:text-white transition-colors"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-sm font-semibold text-white mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: "#C9A84C" }} />
                <span
                  className="text-xs text-white/50 leading-relaxed"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Plot 11-C Lane 4, Bukhari Commercial Area, Phase 6, DHA, Karachi, Pakistan
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="flex-shrink-0" style={{ color: "#C9A84C" }} />
                <span
                  className="text-xs text-white/50"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  +92-XXX-XXXXXXX
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle size={14} className="flex-shrink-0" style={{ color: "#C9A84C" }} />
                <a
                  href="https://wa.me/92XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs hover:text-white transition-colors"
                  style={{ color: "#C9A84C", fontFamily: "'Poppins', sans-serif" }}
                >
                  WhatsApp Us
                </a>
              </div>
              <div
                className="text-xs text-white/40 leading-relaxed"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Mon–Sat: 10:00 AM – 9:00 PM
                <br />
                Sunday: By Appointment
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gold Divider */}
      <div className="gold-divider opacity-30" />

      {/* Copyright Bar */}
      <div className="container py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-xs text-white/30"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            © 2025 Asthetik Dental and Implant Centre. All Rights Reserved.
          </p>
          <div className="flex gap-5">
            <button
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Privacy Policy
            </button>
            <button
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
