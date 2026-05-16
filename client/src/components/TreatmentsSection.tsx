import { motion } from "framer-motion";
import { ArrowRight, Shield, Activity, Sparkle, HeartPulse, Stethoscope, CheckCircle } from "lucide-react";
import { Link } from "wouter";

const treatments = [
  {
    title: "General Dentistry",
    description: "Keep your teeth healthy with routine checkups, professional cleanings, and early-stage cavity prevention.",
    icon: Stethoscope,
    accent: "#3B82F6",
    photo: "/reception.jpg",
  },
  {
    title: "Dental Implants",
    description: "Replace missing teeth permanently with titanium implants that look, feel, and function like natural teeth.",
    icon: Activity,
    accent: "#0EA5E9",
    photo: "/dental-implant.jpg",
  },
  {
    title: "Teeth Whitening",
    description: "Professionally whiten your smile by several shades in a single comfortable in-clinic session.",
    icon: Sparkle,
    accent: "#6366F1",
    photo: "/teeth-whitening.jpg",
  },
  {
    title: "Wisdom Tooth Surgery",
    description: "Safe, precise extraction of impacted wisdom teeth with minimal recovery time and post-op care included.",
    icon: HeartPulse,
    accent: "#10B981",
    photo: "/wisdom-tooth.jpg",
  },
];

const features = [
  "International-grade equipment",
  "100% sterilized environment",
  "Painless procedures guaranteed",
  "Transparent treatment pricing",
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function TreatmentsSection() {
  return (
    <section id="treatments" className="py-28 relative overflow-hidden bg-white">
      {/* Subtle animated background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #0EA5E9 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #6366F1 0%, transparent 70%)", transform: "translate(-30%, 30%)" }} />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-20 items-start">

          {/* Left: Sticky heading */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="eyebrow mb-6 text-sky">
                <div className="w-6 h-px bg-sky" />
                Sustainable Services
              </div>
              <h2 className="display-heading text-4xl md:text-5xl lg:text-[3.5rem] text-navy mb-6 leading-[1.08]">
                Comprehensive <br />
                Dental Care for a{" "}
                <span className="serif-italic italic text-navy">Healthier Smile</span>
              </h2>
              <p className="text-navy/50 text-lg leading-relaxed mb-10">
                From preventive checkups to advanced cosmetic treatments, our team provides
                modern dentistry tailored to you.
              </p>

              <div className="space-y-3 mb-12">
                {features.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle size={16} className="text-sky flex-shrink-0" />
                    <span className="text-navy/65 text-sm font-medium">{f}</span>
                  </motion.div>
                ))}
              </div>

              <div className="pt-10 border-t border-gray-100">
                <p className="text-navy/40 text-xs font-bold uppercase tracking-widest mb-4">
                  Modern Care <span className="italic serif-italic normal-case text-base font-normal text-navy/50 ml-1">Solutions</span>
                </p>
                <Link href="/treatments">
                  <motion.button
                    whileHover={{ scale: 1.04, x: 4 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-3 px-7 py-3.5 rounded-full bg-navy text-white text-xs font-bold uppercase tracking-widest shadow-xl shadow-navy/20"
                  >
                    See All Services <ArrowRight size={14} />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right: Cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {treatments.map((t, idx) => {
              const Icon = t.icon;
              return (
                <motion.div
                  key={idx}
                  variants={item}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="rounded-[2rem] border border-gray-100 cursor-pointer group relative overflow-hidden aspect-[4/5]"
                  style={{ transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)", boxShadow: "0 4px 24px rgba(12,27,46,0.08)" }}
                >
                  {/* Photo background with scale-on-hover */}
                  <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
                    <img
                      src={t.photo}
                      alt={t.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Gradient overlay — always dark at bottom, lightens on hover */}
                  <div
                    className="absolute inset-0 rounded-[2rem] transition-all duration-500"
                    style={{
                      background: `linear-gradient(to top, rgba(5,13,26,0.92) 0%, rgba(5,13,26,0.55) 50%, rgba(5,13,26,0.15) 100%)`,
                    }}
                  />

                  {/* Accent glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"
                    style={{ background: `linear-gradient(to top, ${t.accent}40 0%, transparent 60%)` }}
                  />

                  {/* Top accent line on hover */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ background: `linear-gradient(to right, transparent, ${t.accent}, transparent)` }}
                  />

                  {/* Content overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    {/* Top: icon badge */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ background: `${t.accent}30`, color: "#fff", backdropFilter: "blur(8px)", border: `1px solid ${t.accent}50` }}
                    >
                      <Icon size={22} />
                    </div>

                    {/* Bottom: text */}
                    <div>
                      <h3 className="text-white font-bold text-xl mb-2 group-hover:translate-x-1 transition-transform duration-300">
                        {t.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed mb-5">
                        {t.description}
                      </p>
                      <div
                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                        style={{ color: t.accent }}
                      >
                        Learn More <ArrowRight size={12} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
