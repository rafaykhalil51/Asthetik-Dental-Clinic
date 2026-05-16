import { useState, useRef } from "react";
import { motion } from "framer-motion";

const cases = [
  {
    image: "/case-1.jpg",
    treatment: "Smile Alignment",
    label: "Veneers & Bonding",
    desc: "Closed diastema and corrected spacing for a balanced, natural smile.",
  },
  {
    image: "/case-2.jpg",
    treatment: "Smile Makeover",
    label: "Composite Bonding",
    desc: "Full smile redesign correcting misalignment and irregular tooth edges.",
  },
  {
    image: "/case-3.jpg",
    treatment: "Gum & Crown Restoration",
    label: "Periodontal + Crowns",
    desc: "Advanced gum disease treated and restored with precision ceramic crowns.",
  },
  {
    image: "/case-4.jpg",
    treatment: "Diastema Closure",
    label: "Porcelain Veneers",
    desc: "Closed central gap and unified arch symmetry with ultra-thin veneers.",
  },
];

function VerticalSliderCard({
  c,
  idx,
}: {
  c: (typeof cases)[0];
  idx: number;
}) {
  const [sliderPos, setSliderPos] = useState(50); // 0=top(before only), 100=bottom(after only)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSlider = (clientY: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pos = ((clientY - rect.top) / rect.height) * 100;
    setSliderPos(Math.min(Math.max(pos, 2), 98));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1, duration: 0.6 }}
      className="flex flex-col rounded-[2rem] overflow-hidden shadow-2xl shadow-navy/10 border border-white/80 bg-white"
    >
      {/* Slider card */}
      <div
        ref={containerRef}
        className="relative aspect-square cursor-ns-resize select-none overflow-hidden"
        onMouseMove={(e) => { if (isDragging) updateSlider(e.clientY); }}
        onMouseDown={(e) => { setIsDragging(true); updateSlider(e.clientY); }}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchMove={(e) => updateSlider(e.touches[0].clientY)}
        onTouchStart={(e) => updateSlider(e.touches[0].clientY)}
      >
        {/* FULL image — "after" (bottom half) — always behind */}
        <div className="absolute inset-0">
          <img
            src={c.image}
            alt={`After — ${c.treatment}`}
            className="w-full h-full object-cover"
            draggable={false}
          />
          {/* After label — bottom */}
          <div
            className="absolute bottom-3 right-3 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-[0.18em] text-white"
            style={{ background: "rgba(14,165,233,0.85)", backdropFilter: "blur(8px)" }}
          >
            After
          </div>
        </div>

        {/* BEFORE layer — clips from BOTTOM (shows top portion = before) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 0 ${100 - sliderPos}% 0)` }}
        >
          <img
            src={c.image}
            alt={`Before — ${c.treatment}`}
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.92) contrast(1.05)" }}
            draggable={false}
          />
          {/* Before label — top */}
          <div
            className="absolute top-3 left-3 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-[0.18em] text-white"
            style={{ background: "rgba(12,27,46,0.75)", backdropFilter: "blur(8px)" }}
          >
            Before
          </div>
        </div>

        {/* Horizontal divider line */}
        <div
          className="absolute left-0 right-0 h-[2px] bg-white z-20 pointer-events-none"
          style={{ top: `${sliderPos}%` }}
        />

        {/* Drag handle */}
        <div
          className="absolute left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ top: `${sliderPos}%` }}
        >
          <div
            className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-xl"
            style={{ border: "2px solid rgba(14,165,233,0.4)" }}
          >
            {/* Up/down arrows */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M5 12l7-7 7 7M5 12l7 7 7-7" stroke="#0C1B2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Drag hint — fades after interaction */}
        <div className="absolute inset-x-0 bottom-10 flex justify-center z-20 pointer-events-none">
          <div
            className="px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-widest text-white/70"
            style={{ background: "rgba(0,0,0,0.25)", backdropFilter: "blur(4px)" }}
          >
            Drag up / down
          </div>
        </div>
      </div>

      {/* Info footer */}
      <div className="px-6 py-5 bg-white border-t border-gray-50">
        <div className="text-sky text-[8px] font-bold uppercase tracking-[0.22em] mb-1">{c.treatment}</div>
        <div className="text-navy font-bold text-[15px] mb-1">{c.label}</div>
        <p className="text-navy/40 text-xs font-light leading-relaxed">{c.desc}</p>
      </div>
    </motion.div>
  );
}

export default function BeforeAfterSection() {
  return (
    <section className="py-28 bg-gray-50/60 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-sky/4 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-navy/4 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky/8 border border-sky/15 text-sky text-[10px] font-bold uppercase tracking-[0.22em] mb-6"
          >
            Real Patient Results
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-navy tracking-tight mb-5"
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
            Real transformations performed by Dr. Zaheer Hussain at Asthetik
            Dental and Implant Centre, DHA Karachi. Drag each card vertically to
            compare.
          </motion.p>
        </div>

        {/* 2×2 card grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {cases.map((c, idx) => (
            <VerticalSliderCard key={idx} c={c} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
