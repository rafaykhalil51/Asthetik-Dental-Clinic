import { useState, useRef } from "react";
import { motion } from "framer-motion";

const combinedCases = [
  {
    image: "/ba-1-before.jpg",
    label: "Smile Alignment",
    treatment: "Orthodontics & Veneers",
    desc: "Corrected misalignment and spacing with porcelain veneers for a symmetrical, confident smile.",
  },
  {
    image: "/ba-2-combined.jpg",
    label: "Full Smile Makeover",
    treatment: "Composite Bonding",
    desc: "Closed diastema and corrected overlapping teeth with precision bonding for a natural result.",
  },
];

export default function BeforeAfterSection() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSlider = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pos = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(pos, 2), 98));
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) updateSlider(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    updateSlider(e.touches[0].clientX);
  };

  return (
    <section className="py-28 bg-white relative overflow-hidden">
      {/* Soft background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sky/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky/8 border border-sky/15 text-sky text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
          >
            Real Patient Results
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-navy tracking-tight mb-6"
          >
            Before &{" "}
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontWeight: 700,
              }}
              className="text-sky"
            >
              After
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-navy/50 text-lg font-light leading-relaxed"
          >
            Every smile tells a story. Here are real transformations achieved by
            Dr. Zaheer Hussain at Asthetik Dental and Implant Centre, DHA Karachi.
          </motion.p>
        </div>

        {/* Combined photo cards (stacked before/after photos) */}
        <div className="grid md:grid-cols-2 gap-8 mb-14">
          {combinedCases.map((c, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group rounded-[2.5rem] overflow-hidden shadow-2xl shadow-navy/10 border border-gray-100 relative"
              style={{ transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)" }}
            >
              <img
                src={c.image}
                alt={c.label}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6"
                style={{ background: "linear-gradient(to top, rgba(5,13,26,0.92) 0%, transparent 100%)" }}>
                <div className="text-sky text-[9px] font-bold uppercase tracking-[0.2em] mb-1">{c.treatment}</div>
                <div className="text-white font-bold text-lg mb-1">{c.label}</div>
                <p className="text-white/60 text-sm font-light leading-snug">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive slider — 3rd case (separate before/after photos) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-6">
            <span className="text-navy/40 text-sm font-light tracking-widest uppercase">
              Drag to compare
            </span>
          </div>

          <div
            ref={containerRef}
            className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden cursor-ew-resize select-none border-[10px] border-white shadow-2xl shadow-navy/15"
            onMouseMove={handleMouseMove}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
          >
            {/* AFTER image (full background) */}
            <div className="absolute inset-0">
              <img
                src="/ba-3-combined.jpg"
                alt="After — full smile restoration at Asthetik Dental Karachi"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-6 right-6 bg-black/40 backdrop-blur-md text-white px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em]">
                After
              </div>
            </div>

            {/* BEFORE image (clipped left portion) */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img
                src="/ba-1-before.jpg"
                alt="Before — dental treatment at Asthetik Dental Karachi"
                className="w-full h-full object-cover object-top grayscale-[20%]"
              />
              <div className="absolute bottom-6 left-6 bg-black/40 backdrop-blur-md text-white px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em]">
                Before
              </div>
            </div>

            {/* Slider divider line */}
            <div
              className="absolute top-0 bottom-0 w-[3px] bg-white z-20 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              {/* Handle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center"
                style={{ border: "2px solid rgba(14,165,233,0.3)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l-6-6 6-6M15 6l6 6-6 6" stroke="#0C1B2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Case info below slider */}
          <div className="mt-6 text-center">
            <div className="text-sky text-[9px] font-bold uppercase tracking-[0.2em] mb-1">Full Arch Implant Restoration</div>
            <p className="text-navy/50 text-sm font-light">
              Complete restoration using implant-supported ceramic bridge — life-changing results in a single clinical phase.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
