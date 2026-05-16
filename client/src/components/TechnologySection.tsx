import { motion } from "framer-motion";
import { Scan, Zap, Camera, ShieldCheck, Heart, Link2 } from "lucide-react";
import { Link } from "wouter";

const TECH_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663644156437/2qUwipAsjCNzN4DpwqnJiA/dental-technology-4q2coUkpCs3Sq9Dk9gGKds.webp";
const GENTLE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663644156437/2qUwipAsjCNzN4DpwqnJiA/gentle-dentistry-nbm3F2W7qFu4VFv3XaV4gN.webp";

const technologies = [
  {
    icon: Scan,
    title: "CBCT 3D Imaging",
    description: "High-resolution 3D diagnostics for precise implant placement and complex cases.",
  },
  {
    icon: Zap,
    title: "Painless Anesthesia",
    description: "Computer-controlled local anesthesia systems for a completely discomfort-free experience.",
  },
  {
    icon: Camera,
    title: "Intraoral Scanning",
    description: "Digital impressions without the mess, enabling perfect fit for crowns and aligners.",
  },
];

const gentlePoints = [
  "Advanced stress-reduction protocols",
  "Zero-pressure clinical environment",
  "Minimally invasive surgical techniques",
  "Specialized pediatric care journey",
  "Transparent digital treatment planning",
];

export default function TechnologySection() {
  return (
    <div>
      {/* ── Technology Block: Warm White ── */}
      <section id="technology" className="py-32 relative overflow-hidden bg-warm-white">
        <div className="absolute top-0 left-0 w-full h-px" style={{ background: "linear-gradient(to right, transparent, #E8E5DF, transparent)" }} />
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="eyebrow text-sky mb-5">
                <div className="w-6 h-px bg-sky" />
                Innovation Hub
              </div>
              <h2 className="display-heading text-4xl md:text-5xl text-navy mb-4">
                Smart Tech.
              </h2>
              <h2 className="display-heading text-4xl md:text-5xl mb-8 text-sky" style={{ fontStyle: "italic" }}>
                Precise Results.
              </h2>
              <div className="divider-gold mb-8" />
              <p className="text-[#64748b] text-lg font-light leading-relaxed mb-12 max-w-lg">
                We invest in the pinnacle of dental technology to ensure your journey is predictable, efficient, and exceptionally comfortable.
              </p>

              <div className="space-y-5">
                {technologies.map((tech, idx) => {
                  const Icon = tech.icon;
                  return (
                    <Link key={idx} href="/technology">
                      <motion.div
                        whileHover={{ x: 6 }}
                        className="card-premium flex gap-5 p-6 cursor-pointer"
                      >
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: "rgba(14,165,233,0.08)", border: "1px solid rgba(14,165,233,0.2)" }}
                        >
                          <Icon size={20} className="text-sky" />
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-navy mb-1" style={{ fontFamily: "'DM Serif Display', serif" }}>
                            {tech.title}
                          </h3>
                          <p className="text-sm text-[#64748b] font-light leading-relaxed">{tech.description}</p>
                        </div>
                        <Link2 size={14} className="text-navy/20 ml-auto flex-shrink-0 mt-1" />
                      </motion.div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>

            {/* Right: Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              {/* Glow */}
              <div className="absolute -inset-6 rounded-[3rem] opacity-60"
                style={{ background: "radial-gradient(circle at 50% 50%, rgba(14,165,233,0.12), transparent 70%)" }} />

              <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_24px_80px_rgba(12,27,46,0.12)]"
                style={{ border: "1px solid #E8E5DF" }}>
                <img
                  src={TECH_IMG}
                  alt="Advanced Dental Technology"
                  className="w-full h-[580px] object-cover"
                />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(12,27,46,0.3) 0%, transparent 50%)" }} />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 rounded-2xl px-7 py-5 shadow-[0_8px_40px_rgba(12,27,46,0.15)]"
                style={{ background: "#0C1B2E", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-sky" size={28} />
                  <div>
                    <div className="text-white text-lg font-bold">100%</div>
                    <div className="text-white/40 text-[9px] uppercase tracking-widest font-semibold">Digital Workflow</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Gentle Dentistry Block: Warm Muted ── */}
      <section id="gentle-dentistry" className="py-32 relative overflow-hidden bg-warm-muted">
        <div className="absolute top-0 left-0 w-full h-px" style={{ background: "linear-gradient(to right, transparent, #D0CCC3, transparent)" }} />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 relative"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_24px_80px_rgba(12,27,46,0.12)] group"
                style={{ border: "1px solid rgba(12,27,46,0.06)" }}>
                <img
                  src={GENTLE_IMG}
                  alt="Patient Comfort"
                  className="w-full h-[540px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(12,27,46,0.3) 0%, transparent 50%)" }} />
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="eyebrow text-navy/50 mb-5">
                <div className="w-6 h-px bg-navy/30" />
                Patient Journey
              </div>
              <h2 className="display-heading text-4xl md:text-5xl text-navy mb-4">
                A Gentle
              </h2>
              <h2 className="display-heading text-4xl md:text-5xl mb-8 text-sky" style={{ fontStyle: "italic" }}>
                Perspective.
              </h2>
              <div className="divider-gold mb-8" />
              <p className="text-[#64748b] text-lg font-light leading-relaxed mb-10 max-w-lg">
                Dental visits should be restorative for both your smile and your mind. 
                We've redesigned the clinical experience to be tranquil and anxiety-free.
              </p>

              <div className="space-y-4 mb-12">
                {gentlePoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{ background: "rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.25)" }}
                    >
                      <Heart size={12} className="text-sky" fill="currentColor" />
                    </div>
                    <span className="text-sm font-medium text-navy/65 group-hover:text-navy transition-colors">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-primary"
                >
                  Experience the Difference
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
