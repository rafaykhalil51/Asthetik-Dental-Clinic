import { motion } from "framer-motion";
import { Award, GraduationCap, Medal, BadgeCheck, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

const DOCTOR_IMG = "/doctor.png";

const certifications = [
  { icon: Award, label: "Implantology Specialist" },
  { icon: GraduationCap, label: "Oral Surgery Expert" },
  { icon: Medal, label: "Cosmetic Dentist" },
  { icon: BadgeCheck, label: "International Fellow" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT: Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Animated glow ring behind image */}
            <motion.div
              animate={{ scale: [1, 1.04, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-4 rounded-[3.5rem] pointer-events-none"
              style={{ background: "radial-gradient(ellipse at center, rgba(14,165,233,0.12) 0%, transparent 70%)" }}
            />

            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-gray-50 animate-glow-pulse">
              <img
                src={DOCTOR_IMG}
                alt="Dr. Zaheer Hussain"
                className="w-full h-[650px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />

              {/* Animated scan line sweep */}
              <motion.div
                animate={{ y: [-20, 700] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 4 }}
                className="absolute left-0 right-0 h-[2px] opacity-25 pointer-events-none"
                style={{ background: "linear-gradient(to right, transparent, rgba(56,189,248,0.9), transparent)" }}
              />
            </div>

            {/* Experience badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              animate={{ y: [0, -8, 0] }}
              className="absolute -bottom-6 -right-6 z-20 rounded-3xl px-8 py-6 shadow-2xl bg-navy border border-white/10 animate-float"
            >
              <div className="text-4xl font-bold text-sky">10+</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold mt-1">Years of Mastery</div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="eyebrow text-vibrant-orange mb-6">
              <div className="w-2 h-2 rounded-full bg-vibrant-orange" />
              Clinical Excellence
            </div>

            <h2 className="display-heading text-4xl md:text-5xl lg:text-6xl text-navy mb-8">
              Meet Your <br />
              <span className="serif-italic italic text-navy">Specialist.</span>
            </h2>

            <div className="mb-10">
              <div className="text-2xl font-bold text-navy mb-2">
                Dr. Zaheer Hussain
              </div>
              <div className="text-[11px] text-sky uppercase tracking-[0.2em] font-bold">
                CEO & Clinical Director
              </div>
            </div>

            <p className="text-navy/50 text-lg leading-relaxed mb-10 max-w-xl">
              Under the expert leadership of Dr. Zaheer Hussain, Asthetik Dental and Implant Centre
              fuses advanced clinical knowledge with a patient-first approach, setting
              the benchmark for dental excellence in Pakistan.
            </p>

            {/* Certifications */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              {certifications.map(({ icon: Icon, label }, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white shadow-sm border border-gray-100 text-sky">
                    <Icon size={18} />
                  </div>
                  <span className="text-xs font-bold text-navy/70 leading-tight">{label}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-10 border-t border-gray-100">
               <Link href="/about">
                <button className="flex items-center gap-3 px-8 py-4 rounded-full bg-navy text-white text-xs font-bold uppercase tracking-widest hover:bg-sky transition-all shadow-xl shadow-navy/20">
                  Full Profile <ArrowUpRight size={14} />
                </button>
              </Link>
              <div className="text-right">
                <div className="text-[9px] uppercase tracking-[0.2em] text-navy/30 font-bold mb-1">
                  Signature Care
                </div>
                <div className="serif-italic italic text-2xl text-navy/60">
                  Dr. Zaheer Hussain
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
