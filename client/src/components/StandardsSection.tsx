/**
 * ASTHETIK DENTAL — Clinical Standards Table + Testimonials
 * Design: Clean table on white bg + navy testimonials with star ratings
 */
import { Star, Quote } from "lucide-react";

const clinicalStandards = [
  {
    standard: "Treatment Planning",
    application:
      "Comprehensive personalised planning sessions before every procedure — no surprises, no shortcuts.",
  },
  {
    standard: "Infection Control",
    application:
      "Full sterilisation protocols meeting international standards, with single-use instruments where applicable.",
  },
  {
    standard: "Patient Communication",
    application:
      "Transparent treatment discussion and cost explanation upfront — you always know what to expect.",
  },
  {
    standard: "Evidence-Based Diagnostics",
    application:
      "All diagnoses are supported by clinical evidence and advanced imaging before any treatment begins.",
  },
  {
    standard: "Follow-Up & Continuity",
    application:
      "Scheduled follow-up appointments and ongoing monitoring to ensure optimal long-term outcomes.",
  },
];

const testimonials = [
  {
    name: "Fatima A.",
    rating: 5,
    text: "I had been avoiding the dentist for years due to anxiety. The team at Asthetik Dental completely changed my experience — they were patient, gentle, and explained every step. My smile makeover results are beyond what I imagined.",
    treatment: "Smile Makeover",
  },
  {
    name: "Hassan Z.",
    rating: 5,
    text: "Had two implants done here and the experience was exceptional. The CBCT scan gave me confidence that the planning was precise. Zero pain during the procedure and the healing was smooth.",
    treatment: "Dental Implants",
  },
  {
    name: "Maryam S.",
    rating: 5,
    text: "My daughter was terrified of dentists but the paediatric team here won her over completely. She now looks forward to her check-ups! The clinic is clean, modern, and the staff are incredibly warm.",
    treatment: "Paediatric Dentistry",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill="#C9A84C" stroke="none" />
      ))}
    </div>
  );
}

export default function StandardsSection() {
  return (
    <>
      {/* Clinical Standards Table */}
      <section id="standards" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <div
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: "#C9A84C", fontFamily: "'Poppins', sans-serif" }}
            >
              Clinical Excellence
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: "#0B1F3A", fontFamily: "'Playfair Display', serif" }}
            >
              Our Clinical Standards
            </h2>
            <p
              className="text-gray-500 mt-3 max-w-lg mx-auto text-sm"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Every treatment at Asthetik Dental is guided by clearly defined clinical protocols and evidence-based dentistry.
            </p>
          </div>

          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border shadow-sm" style={{ borderColor: "#e8e0d0" }}>
            {/* Table Header */}
            <div
              className="grid grid-cols-2 px-6 py-4"
              style={{ backgroundColor: "#0B1F3A" }}
            >
              <div
                className="text-sm font-semibold text-white"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Clinical Standard
              </div>
              <div
                className="text-sm font-semibold"
                style={{ color: "#C9A84C", fontFamily: "'Poppins', sans-serif" }}
              >
                How It's Applied at Asthetik Dental
              </div>
            </div>

            {/* Table Rows */}
            {clinicalStandards.map((row, idx) => (
              <div
                key={row.standard}
                className="grid grid-cols-2 px-6 py-4 border-t"
                style={{
                  borderColor: "#e8e0d0",
                  backgroundColor: idx % 2 === 0 ? "white" : "#F8F6F0",
                }}
              >
                <div
                  className="text-sm font-semibold pr-4"
                  style={{ color: "#0B1F3A", fontFamily: "'Poppins', sans-serif" }}
                >
                  {row.standard}
                </div>
                <div
                  className="text-sm text-gray-600 leading-relaxed"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {row.application}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="gold-divider" />

      {/* Patient Testimonials */}
      <section
        id="testimonials"
        className="py-20"
        style={{ backgroundColor: "#0B1F3A" }}
      >
        <div className="container">
          <div className="text-center mb-12">
            <div
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: "#C9A84C", fontFamily: "'Poppins', sans-serif" }}
            >
              Patient Stories
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Patients Trust Us with
              <br />
              <span style={{ color: "#C9A84C" }}>Complex Cases</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={t.name}
                className={`p-7 rounded-2xl border relative ${idx === 1 ? "md:-mt-4 md:mb-4" : ""}`}
                style={{
                  backgroundColor: idx === 1 ? "rgba(201,168,76,0.08)" : "rgba(255,255,255,0.04)",
                  borderColor: idx === 1 ? "rgba(201,168,76,0.4)" : "rgba(255,255,255,0.08)",
                }}
              >
                <Quote
                  size={28}
                  className="mb-4 opacity-30"
                  style={{ color: "#C9A84C" }}
                />
                <p
                  className="text-sm text-white/80 leading-relaxed mb-6"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  "{t.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div
                      className="font-semibold text-sm text-white"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {t.name}
                    </div>
                    <div
                      className="text-xs mt-0.5"
                      style={{ color: "#C9A84C", fontFamily: "'Poppins', sans-serif" }}
                    >
                      {t.treatment}
                    </div>
                  </div>
                  <StarRating count={t.rating} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
