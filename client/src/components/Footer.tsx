import { MapPin, Phone, MessageCircle, Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const footerLinks = {
  clinic: [
    { label: "Home", href: "/" },
    { label: "Our Story", href: "/about" },
    { label: "Treatments", href: "/treatments" },
    { label: "Innovation", href: "/technology" },
    { label: "Contact Us", href: "/contact" },
  ],
  treatments: [
    { label: "Dental Implants", href: "/treatments" },
    { label: "Smile Makeover", href: "/treatments" },
    { label: "Orthodontics", href: "/treatments" },
    { label: "Teeth Whitening", href: "/treatments" },
    { label: "Laser Dentistry", href: "/technology" },
    { label: "Paediatric Care", href: "/treatments" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white" style={{ borderTop: "1px solid #E8E5DF" }}>
      {/* Main footer body */}
      <div className="container py-20">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link href="/">
              <div className="mb-8 cursor-pointer group w-fit">
                <img
                  src="/logo.png"
                  alt="Asthetik Dental and Implant Logo"
                  className="h-16 w-auto group-hover:opacity-80 transition-all mb-3"
                />
                <div style={{ marginTop: "4px" }}>
                  {/* Headline in Playfair Display — Canela-style */}
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: "italic",
                      fontWeight: 900,
                      fontSize: "24px",
                      lineHeight: 1.05,
                      backgroundImage: "linear-gradient(135deg, #0C1B2E 0%, #0C3460 45%, #0EA5E9 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Asthetik Dental
                  </div>
                  {/* Sub label */}
                  <div
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700,
                      fontSize: "8px",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      color: "#0EA5E9",
                      marginTop: "4px",
                    }}
                  >
                    and Implant Centre
                  </div>
                  {/* Location tag */}
                  <div
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 500,
                      fontSize: "7.5px",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#94A3B8",
                      marginTop: "6px",
                    }}
                  >
                    DHA Karachi · Est. 2014
                  </div>
                </div>
              </div>
            </Link>

            <p className="text-[#64748b] text-base font-light leading-relaxed mb-8 max-w-xs">
              Crafting world-class smiles through cinematic precision and contemporary clinical mastery in DHA Karachi.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: MessageCircle, href: "https://wa.me/923332130700" },
              ].map(({ Icon, href }, idx) => (
                <motion.a
                  key={idx}
                  href={href}
                  whileHover={{ y: -3, borderColor: "rgba(14,165,233,0.5)" }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
                  style={{
                    border: "1px solid #E8E5DF",
                    color: "#94A3B8",
                    background: "#FAFAF8",
                  }}
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Clinic Nav */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy mb-6">Clinic</h4>
            <ul className="space-y-3">
              {footerLinks.clinic.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <button className="text-sm text-[#64748b] hover:text-sky transition-colors font-light">
                      {link.label}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy mb-6">Specialties</h4>
            <ul className="space-y-3">
              {footerLinks.treatments.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <button className="text-sm text-[#64748b] hover:text-sky transition-colors font-light text-left">
                      {link.label}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy mb-6">Clinical HQ</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(14,165,233,0.08)", border: "1px solid rgba(14,165,233,0.15)" }}
                >
                  <MapPin size={15} className="text-sky" />
                </div>
                <p className="text-sm text-[#64748b] font-light leading-relaxed">
                  Plot 11-C Lane 4, Bukhari Commercial Area,<br />Phase 6, DHA, Karachi.
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(14,165,233,0.08)", border: "1px solid rgba(14,165,233,0.15)" }}
                >
                  <Phone size={15} className="text-sky" />
                </div>
                <div>
                  <p className="text-sm text-[#64748b] font-light">+92 333 2130700</p>
                  <p className="text-[10px] text-sky font-bold uppercase tracking-widest mt-0.5">Available 24/7</p>
                </div>
              </div>
            </div>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary mt-8 text-xs"
              >
                Book Consultation
              </motion.button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "#E8E5DF" }}>
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-[#94A3B8] uppercase tracking-widest font-medium">
            © 2026 Asthetik Dental and Implant. Precision Clinical Care.
          </p>
          <div className="flex gap-8 text-[11px] text-[#94A3B8] uppercase tracking-widest font-medium">
            <Link href="/privacy"><span className="hover:text-navy transition-colors cursor-pointer">Privacy</span></Link>
            <Link href="/terms"><span className="hover:text-navy transition-colors cursor-pointer">Terms</span></Link>
            <Link href="/accessibility"><span className="hover:text-navy transition-colors cursor-pointer">Accessibility</span></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
