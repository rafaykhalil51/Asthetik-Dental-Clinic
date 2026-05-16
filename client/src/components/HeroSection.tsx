/**
 * ASTHETIK DENTAL — Hero Section
 * Design: Full-width hero with clinic name, subheading, CTAs
 * Background: Generated clinic interior image with navy overlay
 */
import { ChevronDown } from "lucide-react";

const HERO_IMG = "/hero-bg.png";

export default function HeroSection() {
  const scrollToTreatments = () => {
    document.querySelector("#treatments")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToBooking = () => {
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMG})` }}
      />
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(11,31,58,0.85) 0%, rgba(11,31,58,0.65) 50%, rgba(11,31,58,0.30) 100%)",
        }}
      />

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
            style={{
              backgroundColor: "rgba(201,168,76,0.15)",
              border: "1px solid rgba(201,168,76,0.4)",
              color: "#C9A84C",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "#C9A84C" }}
            />
            Defence 6 Branch · Karachi, Pakistan
          </div>

          {/* Main Heading */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Asthetik Dental
            <br />
            <span style={{ color: "#C9A84C" }}>and Implant Centre</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-lg md:text-xl text-white/80 mb-3"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Defence 6 Branch, Karachi — Your Smile, Our Passion
          </p>

          {/* Tagline */}
          <p
            className="text-base text-white/60 mb-10 italic"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            "Excellence in Contemporary Dental Practice"
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToBooking}
              className="px-8 py-4 text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: "#C9A84C",
                color: "#0B1F3A",
                fontFamily: "'Poppins', sans-serif",
                boxShadow: "0 4px 20px rgba(201,168,76,0.35)",
              }}
            >
              Book an Appointment
            </button>
            <button
              onClick={scrollToTreatments}
              className="px-8 py-4 text-sm font-semibold rounded-full border-2 text-white transition-all duration-300 hover:bg-white/10"
              style={{
                borderColor: "rgba(255,255,255,0.4)",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              View Our Treatments
            </button>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10">
            {[
              { value: "4.9★", label: "Google Rating" },
              { value: "5000+", label: "Happy Patients" },
              { value: "10+", label: "Years Experience" },
              { value: "8+", label: "Specialties" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-2xl font-bold"
                  style={{ color: "#C9A84C", fontFamily: "'Playfair Display', serif" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs text-white/60 mt-0.5"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => document.querySelector("#trust-badges")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/80 transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
