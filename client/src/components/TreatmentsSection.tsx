import { motion } from "framer-motion";
import { ArrowRight, Shield, Activity, Sparkle, HeartPulse, Stethoscope, CheckCircle } from "lucide-react";
import { Link } from "wouter";

const treatments = [
  {
    title: "General Dentistry",
    description: "Keep your teeth healthy with routine checkups and cleanings.",
    icon: Stethoscope,
    color: "from-blue-500/10 to-blue-500/5",
    iconBg: "bg-blue-50 text-blue-600",
    accent: "#3B82F6",
  },
  {
    title: "Restorative Dentistry",
    description: "Repair damaged teeth with crowns, bridges, and implants.",
    icon: Activity,
    color: "from-sky-500/10 to-sky-500/5",
    iconBg: "bg-sky-50 text-sky-600",
    accent: "#0EA5E9",
  },
  {
    title: "Cosmetic Dentistry",
    description: "Enhance your smile with whitening, veneers, and more.",
    icon: Sparkle,
    color: "from-indigo-500/10 to-indigo-500/5",
    iconBg: "bg-indigo-50 text-indigo-600",
    accent: "#6366F1",
  },
  {
    title: "Pediatric Dentistry",
    description: "Specialized care for children's unique dental needs.",
    icon: HeartPulse,
    color: "from-emerald-500/10 to-emerald-500/5",
    iconBg: "bg-emerald-50 text-emerald-600",
    accent: "#10B981",
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
                  className={`p-9 rounded-[2rem] border border-gray-100 bg-gradient-to-br ${t.color} cursor-pointer group relative overflow-hidden`}
                  style={{ transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)" }}
                >
                  {/* Animated glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"
                    style={{ boxShadow: `inset 0 0 40px ${t.accent}15` }}
                  />
                  {/* Animated border top */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(to right, transparent, ${t.accent}, transparent)` }}
                  />

                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-10 ${t.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-navy font-bold text-xl mb-3 group-hover:text-sky transition-colors duration-300">
                    {t.title}
                  </h3>
                  <p className="text-navy/50 text-sm leading-relaxed">
                    {t.description}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                    style={{ color: t.accent }}>
                    Learn More <ArrowRight size={12} />
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
