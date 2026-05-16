import { motion } from "framer-motion";
import { Star, Quote, ShieldCheck, Zap, FileText } from "lucide-react";

const clinicalStandards = [
  {
    icon: FileText,
    title: "Precision Diagnostics",
    detail: "Every treatment starts with a digital workflow and CBCT 3D planning.",
  },
  {
    icon: ShieldCheck,
    title: "Sterilization Mastery",
    detail: "International-grade infection control protocols beyond standard requirements.",
  },
  {
    icon: Zap,
    title: "Minimally Invasive",
    detail: "Preserving natural tooth structure using advanced laser and ultrasonic tools.",
  },
];

const testimonials = [
  {
    name: "Fatima A.",
    rating: 5,
    text: "The clinical precision here is unmatched. My smile makeover was completely digital, and the results are perfectly natural.",
    treatment: "Full Smile Design",
    initials: "FA",
  },
  {
    name: "Hassan Z.",
    rating: 5,
    text: "Zero-discomfort implants. The technology they use for planning makes the actual surgery feel effortless.",
    treatment: "Digital Implants",
    initials: "HZ",
  },
  {
    name: "Maryam S.",
    rating: 5,
    text: "They transformed my dental anxiety into a relaxing experience. The best clinical team in Karachi.",
    treatment: "Cosmetic Care",
    initials: "MS",
  },
];

export default function StandardsSection() {
  return (
    <div>
      {/* ── Clinical Standards: White ── */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="eyebrow text-sky mb-5">
                <div className="w-6 h-px bg-sky" />
                Clinical Integrity
              </div>
              <h2 className="display-heading text-4xl md:text-5xl text-navy mb-4">
                World-Class
              </h2>
              <h2 className="display-heading text-4xl md:text-5xl mb-8 text-sky" style={{ fontStyle: "italic" }}>
                Clinical Standards.
              </h2>
              <div className="divider-gold mb-8" />
              <p className="text-[#64748b] text-lg font-light leading-relaxed mb-12 max-w-lg">
                We operate under strict international protocols to ensure every clinical outcome is 
                a masterpiece of health and aesthetics.
              </p>

              <div className="space-y-4">
                {clinicalStandards.map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={idx}
                      className="card-premium flex gap-5 p-6 group hover:border-sky/30"
                    >
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                        style={{ background: "rgba(14,165,233,0.08)", border: "1px solid rgba(14,165,233,0.15)" }}
                      >
                        <Icon size={18} className="text-sky" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-navy mb-1" style={{ fontFamily: "'DM Serif Display', serif" }}>
                          {s.title}
                        </h4>
                        <p className="text-sm text-[#64748b] font-light">{s.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right: Stats panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Background glow */}
              <div className="absolute -inset-4 rounded-[3rem]"
                style={{ background: "radial-gradient(circle at 40% 40%, rgba(14,165,233,0.07), transparent 70%)" }} />

              <div
                className="relative rounded-[2.5rem] overflow-hidden shadow-[0_24px_80px_rgba(12,27,46,0.1)] p-14 flex flex-col justify-between min-h-[460px]"
                style={{ background: "#0C1B2E", border: "1px solid rgba(255,255,255,0.05)" }}
              >
                <div className="absolute inset-0 opacity-10"
                  style={{ background: "radial-gradient(circle at 30% 30%, #0EA5E9, transparent 60%), radial-gradient(circle at 70% 70%, #C9A84C, transparent 60%)" }} />

                <div className="relative z-10">
                  <div
                    className="text-6xl font-bold mb-2"
                    style={{ color: "#0EA5E9", fontFamily: "'DM Serif Display', serif" }}
                  >
                    99.8%
                  </div>
                  <div className="text-white/35 text-[10px] uppercase tracking-[0.2em] font-bold">
                    Successful Clinical Outcomes
                  </div>
                </div>

                <div className="relative z-10 grid grid-cols-2 gap-8 mt-12">
                  {[
                    { val: "15k+", label: "Smiles Designed" },
                    { val: "10+", label: "Years of Mastery" },
                    { val: "100%", label: "Digital Workflow" },
                    { val: "Intl.", label: "Protocols Met" },
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="text-white text-3xl font-bold mb-1" style={{ fontFamily: "'DM Serif Display', serif" }}>
                        {stat.val}
                      </div>
                      <div className="text-white/30 text-[9px] uppercase font-bold tracking-widest">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-full h-1"
                  style={{ background: "linear-gradient(to right, #0EA5E9, #C9A84C)" }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Testimonials: Warm Muted ── */}
      <section id="testimonials" className="py-32 bg-warm-muted overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px" style={{ background: "linear-gradient(to right, transparent, #D0CCC3, transparent)" }} />
        <div className="container">
          <div className="text-center mb-20">
            <div className="eyebrow justify-center text-sky mb-5">
              <div className="w-6 h-px bg-sky" />
              Patient Stories
              <div className="w-6 h-px bg-sky" />
            </div>
            <h3 className="display-heading text-4xl md:text-5xl text-navy">
              Clinical Trust.{" "}
              <span className="text-sky" style={{ fontStyle: "italic" }}>Real Stories.</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                whileHover={{ y: -8 }}
                className="card-premium p-10 relative group"
                style={{ background: "#FFFFFF" }}
              >
                <Quote
                  size={36}
                  className="absolute top-8 right-8 transition-colors duration-300 group-hover:opacity-100"
                  style={{ color: "rgba(201,168,76,0.2)" }}
                />

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={13} fill="#C9A84C" stroke="none" />
                  ))}
                </div>

                <p className="text-navy/65 text-base font-light leading-relaxed mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  "{t.text}"
                </p>

                <div className="flex items-center gap-4 pt-6" style={{ borderTop: "1px solid #E8E5DF" }}>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #0EA5E9, #0C1B2E)" }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-navy">{t.name}</h5>
                    <p className="text-[10px] text-sky uppercase tracking-widest font-bold">{t.treatment}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
