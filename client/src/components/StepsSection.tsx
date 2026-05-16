import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { CalendarCheck, ClipboardList, Stethoscope, Smile } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: CalendarCheck,
    title: "Book Your Visit",
    description: "Schedule a consultation online or by phone in just a few minutes.",
    color: "#0EA5E9",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Get Evaluated",
    description: "Our specialists perform a thorough examination and discuss your goals.",
    color: "#6366F1",
  },
  {
    number: "03",
    icon: Stethoscope,
    title: "Receive Treatment",
    description: "Experience precision care using the latest dental technology.",
    color: "#10B981",
  },
  {
    number: "04",
    icon: Smile,
    title: "Love Your Smile",
    description: "Walk out with a confident, radiant smile that transforms your life.",
    color: "#F59E0B",
  },
];

function CountUp({ to, duration = 1600 }: { to: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = to / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, to, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function StepsSection() {
  const containerRef = useRef(null);

  return (
    <section className="py-28 relative overflow-hidden bg-gray-50">
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[50%] h-[80%] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #0EA5E9 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-[-20%] right-[-10%] w-[45%] h-[70%] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #6366F1 0%, transparent 70%)" }}
        />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow justify-center mb-5 text-sky"
          >
            <div className="w-6 h-px bg-sky" />
            Simple & Clear Process
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="display-heading text-4xl md:text-5xl lg:text-[3.5rem] text-navy mb-6"
          >
            4 Simple Steps to{" "}
            <span className="serif-italic italic text-navy">Your New Smile</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-navy/50 text-lg leading-relaxed"
          >
            We've made the journey to a perfect smile simple, transparent, and stress-free.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: idx * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative p-8 rounded-[2rem] bg-white border border-gray-100 group overflow-hidden cursor-pointer"
                style={{ transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)" }}
              >
                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"
                  style={{ background: `radial-gradient(circle at 30% 30%, ${step.color}10 0%, transparent 60%)` }}
                />
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: `linear-gradient(to right, ${step.color}, ${step.color}50, transparent)` }}
                />
                {/* Connector line between steps (except last) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[3.5rem] -right-3 w-6 h-px z-20"
                    style={{ background: `linear-gradient(to right, ${step.color}40, transparent)` }} />
                )}

                {/* Step number */}
                <div
                  className="text-6xl font-black leading-none mb-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300 select-none"
                  style={{ color: step.color }}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `${step.color}15`, color: step.color }}
                >
                  <Icon size={24} />
                </div>

                <h3 className="text-navy font-bold text-xl mb-3 group-hover:translate-x-1 transition-transform duration-300">
                  {step.title}
                </h3>
                <p className="text-navy/50 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 grid grid-cols-3 divide-x divide-gray-100 bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm"
        >
          {[
            { value: 5000, suffix: "+", label: "Patients Treated" },
            { value: 10, suffix: "+ Yrs", label: "Clinical Expertise" },
            { value: 4.9, suffix: "★", label: "Average Rating", isFloat: true },
          ].map((stat, i) => (
            <div key={i} className="py-8 px-6 text-center group hover:bg-gray-50 transition-colors duration-300">
              <div className="text-3xl font-black text-navy mb-2">
                {stat.isFloat ? stat.value : <CountUp to={stat.value} />}
                <span className="text-sky ml-1">{stat.suffix}</span>
              </div>
              <div className="text-navy/40 text-[10px] uppercase tracking-widest font-bold">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
