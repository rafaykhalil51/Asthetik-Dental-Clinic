/**
 * ASTHETIK DENTAL — Why Patients Trust Us + Brand Logos
 * Design: Navy background section with bullet points + brand logo strip
 */
import { CheckCircle } from "lucide-react";

const trustPoints = [
  "Evidence-based treatment protocols",
  "Internationally trained dental professionals",
  "Advanced diagnostics & state-of-the-art technology",
  "Philosophically committed to patient comfort",
  "Transparent pricing with no hidden costs",
  "Sterilisation standards meeting international benchmarks",
];

const brands = [
  { name: "Invisalign", abbr: "INV" },
  { name: "Straumann", abbr: "STR" },
  { name: "Dentium", abbr: "DEN" },
  { name: "Colgate", abbr: "COL" },
  { name: "Oral-B", abbr: "ORL" },
  { name: "Sensodyne", abbr: "SEN" },
];

export default function WhyTrustSection() {
  return (
    <>
      {/* Why Trust Section */}
      <section
        id="why-trust"
        className="py-20"
        style={{ backgroundColor: "#0B1F3A" }}
      >
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <div
                className="inline-block text-xs font-semibold tracking-widest uppercase mb-3"
                style={{ color: "#C9A84C", fontFamily: "'Poppins', sans-serif" }}
              >
                Our Standards
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Why Patients Trust
                <br />
                <span style={{ color: "#C9A84C" }}>Asthetik Dental</span>
              </h2>
              <p
                className="text-white/70 mb-8 leading-relaxed"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                We combine international training with compassionate, patient-centred care to deliver outcomes that consistently exceed expectations, every single time.
              </p>

              <div className="flex flex-col gap-4">
                {trustPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "#C9A84C" }}
                    />
                    <span
                      className="text-sm text-white/80 leading-relaxed"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Visual Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "5000+", label: "Patients Treated", icon: "👥" },
                { number: "10+", label: "Years of Excellence", icon: "🏆" },
                { number: "8+", label: "Dental Specialties", icon: "🦷" },
                { number: "4.9★", label: "Google Rating", icon: "⭐" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl text-center border"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderColor: "rgba(201,168,76,0.2)",
                  }}
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div
                    className="text-2xl font-bold mb-1"
                    style={{ color: "#C9A84C", fontFamily: "'Playfair Display', serif" }}
                  >
                    {stat.number}
                  </div>
                  <div
                    className="text-xs text-white/60"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
