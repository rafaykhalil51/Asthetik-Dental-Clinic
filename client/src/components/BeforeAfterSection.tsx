import { useState } from "react";
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

function CaseCard({ c, idx }: { c: (typeof cases)[0]; idx: number }) {
  // null = neither, 'before' = top hovered, 'after' = bottom hovered
  const [active, setActive] = useState<"before" | "after" | null>(null);

  const panelBase = "relative overflow-hidden cursor-pointer select-none";
  const imgBase =
    "w-full h-full object-cover transition-all duration-500 ease-out";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1, duration: 0.6 }}
      className="rounded-[2rem] overflow-hidden shadow-2xl shadow-navy/10 border border-white bg-white flex flex-col"
    >
      {/* ── BEFORE panel (top half of image) ── */}
      <div
        className={`${panelBase} h-52`}
        onMouseEnter={() => setActive("before")}
        onMouseLeave={() => setActive(null)}
        onClick={() => setActive(active === "before" ? null : "before")}
      >
        {/* Image — shows top portion */}
        <img
          src={c.image}
          alt={`Before — ${c.treatment}`}
          draggable={false}
          className={imgBase}
          style={{
            objectPosition: "top",
            transform:
              active === "before"
                ? "scale(1.12)"
                : active === "after"
                ? "scale(0.97)"
                : "scale(1)",
            filter:
              active === "after"
                ? "brightness(0.55) grayscale(0.3)"
                : active === "before"
                ? "brightness(1.08) contrast(1.06)"
                : "brightness(1)",
          }}
        />

        {/* BEFORE pill */}
        <div
          className="absolute top-3 left-3 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300"
          style={{
            background:
              active === "before"
                ? "rgba(12,27,46,0.92)"
                : "rgba(12,27,46,0.6)",
            backdropFilter: "blur(8px)",
            transform: active === "before" ? "scale(1.08)" : "scale(1)",
          }}
        >
          Before
        </div>

        {/* Hover glow overlay */}
        {active === "before" && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(12,27,46,0.0) 60%, rgba(12,27,46,0.35) 100%)",
            }}
          />
        )}

        {/* Dim overlay when after is active */}
        <div
          className="absolute inset-0 bg-navy transition-opacity duration-400 pointer-events-none"
          style={{ opacity: active === "after" ? 0.45 : 0 }}
        />
      </div>

      {/* ── Divider line ── */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-sky/40 to-transparent flex-shrink-0" />

      {/* ── AFTER panel (bottom half of image) ── */}
      <div
        className={`${panelBase} h-52`}
        onMouseEnter={() => setActive("after")}
        onMouseLeave={() => setActive(null)}
        onClick={() => setActive(active === "after" ? null : "after")}
      >
        {/* Image — shows bottom portion */}
        <img
          src={c.image}
          alt={`After — ${c.treatment}`}
          draggable={false}
          className={imgBase}
          style={{
            objectPosition: "bottom",
            transform:
              active === "after"
                ? "scale(1.12)"
                : active === "before"
                ? "scale(0.97)"
                : "scale(1)",
            filter:
              active === "before"
                ? "brightness(0.55) grayscale(0.3)"
                : active === "after"
                ? "brightness(1.08) contrast(1.06) saturate(1.1)"
                : "brightness(1)",
          }}
        />

        {/* AFTER pill */}
        <div
          className="absolute bottom-3 right-3 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300"
          style={{
            background:
              active === "after"
                ? "rgba(14,165,233,0.95)"
                : "rgba(14,165,233,0.65)",
            backdropFilter: "blur(8px)",
            transform: active === "after" ? "scale(1.08)" : "scale(1)",
          }}
        >
          After
        </div>

        {/* Glow from bottom on active */}
        {active === "after" && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(14,165,233,0.12) 0%, transparent 70%)",
            }}
          />
        )}

        {/* Dim overlay when before is active */}
        <div
          className="absolute inset-0 bg-navy transition-opacity duration-400 pointer-events-none"
          style={{ opacity: active === "before" ? 0.45 : 0 }}
        />
      </div>

      {/* ── Info footer ── */}
      <div className="px-5 py-4 bg-white border-t border-gray-50 flex-shrink-0">
        <div className="text-sky text-[8px] font-bold uppercase tracking-[0.22em] mb-0.5">
          {c.treatment}
        </div>
        <div className="text-navy font-bold text-[14px] mb-1">{c.label}</div>
        <p className="text-navy/40 text-[11px] font-light leading-relaxed">
          {c.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function BeforeAfterSection() {
  return (
    <section className="py-28 bg-gray-50/60 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-sky/4 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-navy/4 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container relative z-10">
        {/* Header */}
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
            Real transformations by Dr. Zaheer Hussain at Asthetik Dental and
            Implant Centre, DHA Karachi.{" "}
            <span className="text-sky font-medium">
              Hover Before or After to zoom in.
            </span>
          </motion.p>
        </div>

        {/* 2×2 grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {cases.map((c, idx) => (
            <CaseCard key={idx} c={c} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
