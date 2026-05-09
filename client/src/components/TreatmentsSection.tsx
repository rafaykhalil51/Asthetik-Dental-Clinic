/**
 * ASTHETIK DENTAL — Treatments / Services Section
 * Design: Navy background with 4-column card grid, gold accents
 */

const treatments = [
  {
    icon: "🦷",
    title: "General Dentistry",
    description:
      "Comprehensive check-ups, fillings, and preventive care to maintain your oral health and catch issues early.",
    href: "#booking",
  },
  {
    icon: "🔩",
    title: "Dental Implants",
    description:
      "Permanent, natural-looking tooth replacements that restore function and aesthetics with long-lasting results.",
    href: "#booking",
  },
  {
    icon: "😁",
    title: "Orthodontics / Braces",
    description:
      "Correct crooked teeth and improve your bite with traditional braces or modern clear aligner systems.",
    href: "#booking",
  },
  {
    icon: "✨",
    title: "Teeth Whitening",
    description:
      "Professional-grade whitening treatments that deliver dramatic, safe results for a brighter, more confident smile.",
    href: "#booking",
  },
  {
    icon: "🪥",
    title: "Scaling & Polishing",
    description:
      "Remove plaque, calculus, and surface stains to keep your teeth and gums healthy and looking their best.",
    href: "#booking",
  },
  {
    icon: "🔧",
    title: "Wisdom Tooth Extraction",
    description:
      "Safe, comfortable removal of problematic wisdom teeth to prevent infection, crowding, and future complications.",
    href: "#booking",
  },
  {
    icon: "👶",
    title: "Paediatric Dentistry",
    description:
      "Gentle, child-friendly dental care that builds positive habits and healthy smiles from an early age.",
    href: "#booking",
  },
  {
    icon: "💎",
    title: "Cosmetic / Smile Makeover",
    description:
      "Transform your smile with veneers, bonding, and comprehensive cosmetic treatments tailored to your goals.",
    href: "#booking",
  },
];

export default function TreatmentsSection() {
  const scrollToBooking = () => {
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="treatments"
      className="py-20"
      style={{ backgroundColor: "#0B1F3A" }}
    >
      <div className="container">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-12">
          <div>
            <div
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: "#C9A84C", fontFamily: "'Poppins', sans-serif" }}
            >
              Treatments
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Care Tailored to
              <br />
              <span style={{ color: "#C9A84C" }}>Your Needs</span>
            </h2>
          </div>
          <div>
            <p
              className="text-white/60 text-sm leading-relaxed mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              From general check-ups to cosmetic and specialist dental services, we truly master techniques, including for On-Time/ASAP appointments and ensuring optimal dental care.
            </p>
            <button
              onClick={scrollToBooking}
              className="px-6 py-3 text-sm font-semibold rounded-full border-2 text-white transition-all hover:bg-white/10"
              style={{
                borderColor: "#C9A84C",
                color: "#C9A84C",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              View All Treatments
            </button>
          </div>
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {treatments.map((treatment) => (
            <button
              key={treatment.title}
              onClick={scrollToBooking}
              className="text-left p-6 rounded-2xl border transition-all duration-300 group hover:scale-[1.02]"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                borderColor: "rgba(201,168,76,0.15)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "rgba(201,168,76,0.08)";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(201,168,76,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "rgba(255,255,255,0.04)";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(201,168,76,0.15)";
              }}
            >
              <div className="text-3xl mb-4">{treatment.icon}</div>
              <h3
                className="font-semibold text-sm text-white mb-2 group-hover:text-yellow-300 transition-colors"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {treatment.title}
              </h3>
              <p
                className="text-xs text-white/50 leading-relaxed"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {treatment.description}
              </p>
              <div
                className="mt-4 text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
                style={{ color: "#C9A84C" }}
              >
                Learn More →
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
