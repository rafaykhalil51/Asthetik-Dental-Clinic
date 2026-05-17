import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Globe2, Stethoscope, Award, BadgeCheck, Building2, Sparkles } from "lucide-react";

// ── Cinematic per-card entrance variants ──────────────────────────────────────
// Cubic-bezier: power4.out feel — fast start, luxuriously slow settle
const LUXURY_EASE = [0.22, 1, 0.36, 1] as const;

// LEFT card — drifts in from left with a whisper of 3-D tilt
const leftCardVariant = {
  hidden: {
    opacity: 0,
    x: -90,
    rotateY: 10,
    rotateZ: -1.5,
    scale: 0.93,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    rotateZ: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.5,
      ease: LUXURY_EASE,
      opacity: { duration: 1.1,  ease: "easeOut" },
      filter:  { duration: 1.0,  ease: "easeOut" },
      rotateY: { duration: 1.6,  ease: LUXURY_EASE },
      rotateZ: { duration: 1.6,  ease: LUXURY_EASE },
      scale:   { duration: 1.4,  ease: LUXURY_EASE },
    },
  },
};

// CENTER card — rises gracefully, anchors the composition
const centerCardVariant = {
  hidden: {
    opacity: 0,
    y: 36,
    scale: 0.96,
    filter: "blur(3px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.3,
      ease: LUXURY_EASE,
      delay: 0.2,
      opacity: { duration: 1.0,  ease: "easeOut", delay: 0.2 },
      filter:  { duration: 0.85, ease: "easeOut", delay: 0.2 },
      scale:   { duration: 1.3,  ease: LUXURY_EASE, delay: 0.2 },
    },
  },
};

// RIGHT card — mirrors left, slight timing offset for organic feel
const rightCardVariant = {
  hidden: {
    opacity: 0,
    x: 90,
    rotateY: -10,
    rotateZ: 1.5,
    scale: 0.93,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    rotateZ: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.5,
      ease: LUXURY_EASE,
      delay: 0.08,
      opacity: { duration: 1.1,  ease: "easeOut", delay: 0.08 },
      filter:  { duration: 1.0,  ease: "easeOut", delay: 0.08 },
      rotateY: { duration: 1.6,  ease: LUXURY_EASE, delay: 0.08 },
      rotateZ: { duration: 1.6,  ease: LUXURY_EASE, delay: 0.08 },
      scale:   { duration: 1.4,  ease: LUXURY_EASE, delay: 0.08 },
    },
  },
};

const cardVariants = [leftCardVariant, centerCardVariant, rightCardVariant];

const team = [
  {
    initials: "HS",
    name: "Dr. Hareem Sultan",
    role: "Consultant Orthodontist",
    credentials: ["BDS", "FCPS", "FOrth RCSEd (UK)", "MOrth RCSEd (UK)"],
    badge: { label: "UK Certified", icon: BadgeCheck },
    accentColor: "#0EA5E9",
    glowColor: "rgba(14,165,233,0.18)",
    borderGlow: "rgba(14,165,233,0.35)",
    icon: GraduationCap,
    affiliations: [],
    description:
      "Fellowship & Membership holder of the Royal College of Surgeons Edinburgh. Specialises in advanced orthodontic correction with precision and artistry.",
  },
  {
    initials: "TH",
    name: "Dr. Tahir Hamza",
    role: "General Dentistry · Periodontics · Implantology",
    credentials: [],
    badge: { label: "International Training", icon: Globe2 },
    accentColor: "#C9A84C",
    glowColor: "rgba(201,168,76,0.15)",
    borderGlow: "rgba(201,168,76,0.35)",
    icon: Globe2,
    affiliations: [
      { name: "Altamash Institute of Dental Medicine", icon: Building2 },
      { name: "Tufts School of Dental Medicine", icon: Building2 },
      { name: "Penn Dental Medicine – University of Pennsylvania", icon: Building2 },
    ],
    description:
      "Trained across three internationally ranked dental institutions. Brings a multi-disciplinary approach to implantology and comprehensive oral care.",
  },
  {
    initials: "HR",
    name: "Dr. Hira Sherani",
    role: "Associate Dentist",
    credentials: ["BDS", "FCPS (Resident)"],
    badge: { label: "Specialist in Training", icon: Sparkles },
    accentColor: "#6366F1",
    glowColor: "rgba(99,102,241,0.13)",
    borderGlow: "rgba(99,102,241,0.30)",
    icon: Stethoscope,
    affiliations: [],
    description:
      "Dedicated to patient-first dentistry with a compassionate approach. Currently advancing FCPS qualifications, bringing fresh clinical expertise and meticulous attention to care.",
  },
];

export default function TeamSection() {
  // Single ref triggers all 3 cards at once — cinematic formation reveal
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, margin: "-80px" });

  return (
    <section
      id="team"
      className="relative py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FAFAF8 0%, #F0EEE8 100%)" }}
    >
      {/* ── Ambient background particles ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large radial blobs */}
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, #0EA5E9 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute -bottom-60 -left-40 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, #C9A84C 0%, transparent 70%)" }}
        />
        {/* Floating micro dots */}
        {[
          { top: "15%", left: "8%", size: 4, delay: 0 },
          { top: "72%", left: "5%", size: 3, delay: 1.5 },
          { top: "30%", right: "6%", size: 5, delay: 0.8 },
          { top: "80%", right: "10%", size: 3, delay: 2.2 },
          { top: "50%", left: "50%", size: 2, delay: 1 },
        ].map((dot, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -12, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4 + i * 0.7, repeat: Infinity, ease: "easeInOut", delay: dot.delay }}
            className="absolute rounded-full bg-sky"
            style={{
              top: dot.top,
              left: (dot as any).left,
              right: (dot as any).right,
              width: dot.size,
              height: dot.size,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="eyebrow text-sky mb-5 justify-center">
            <div className="w-6 h-px bg-sky" />
            Our Specialists
            <div className="w-6 h-px bg-sky" />
          </div>

          <h2
            className="display-heading text-4xl md:text-5xl lg:text-[3.75rem] text-navy mb-5 leading-[1.06]"
          >
            Meet Our{" "}
            <span
              className="serif-italic"
              style={{
                backgroundImage: "linear-gradient(135deg, #0C1B2E 0%, #0C3460 50%, #0EA5E9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Specialists
            </span>
          </h2>

          <p className="text-navy/50 text-lg leading-relaxed max-w-2xl mx-auto">
            Internationally trained dental professionals dedicated to precision,
            comfort, and exceptional patient care.
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-sky/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-sky/60" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-sky/40" />
          </div>
        </motion.div>

        {/* ── Team Cards ── */}
        {/* perspective wrapper enables rotateY depth on side cards */}
        <div
          ref={gridRef}
          className="grid md:grid-cols-3 gap-6 xl:gap-8"
          style={{ perspective: "1200px" }}
        >
          {team.map((member, idx) => {
            const BadgeIcon = member.badge.icon;
            const MemberIcon = member.icon;
            const isCenter = idx === 1;
            return (
              <motion.div
                key={member.name}
                variants={cardVariants[idx]}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{
                  y: -10,
                  boxShadow: `0 32px 80px ${member.glowColor}, 0 8px 32px rgba(12,27,46,0.10)`,
                  transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                }}
                className="group relative rounded-[2.5rem] p-8 cursor-default overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.72)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: isCenter
                    ? "1px solid rgba(255,255,255,0.95)"
                    : "1px solid rgba(255,255,255,0.85)",
                  boxShadow: isCenter
                    ? "0 8px 56px rgba(12,27,46,0.11), 0 2px 16px rgba(12,27,46,0.06)"
                    : "0 4px 32px rgba(12,27,46,0.06)",
                  zIndex: isCenter ? 2 : 1,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Hover border glow */}
                <motion.div
                  className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: `inset 0 0 0 1.5px ${member.borderGlow}, 0 0 60px ${member.glowColor}`,
                  }}
                />

                {/* Accent top line */}
                <div
                  className="absolute top-0 left-8 right-8 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(to right, transparent, ${member.accentColor}, transparent)`,
                  }}
                />

                {/* Inner ambient glow */}
                <div
                  className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${member.glowColor} 0%, transparent 70%)`,
                    transform: "translate(30%, -30%)",
                  }}
                />

                {/* ── Initials avatar ── */}
                <div className="flex items-start justify-between mb-7">
                  <div
                    className="relative w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${member.accentColor}22 0%, ${member.accentColor}10 100%)`,
                      border: `1.5px solid ${member.accentColor}40`,
                    }}
                  >
                    {/* Initials */}
                    <span
                      className="text-xl font-black tracking-tight"
                      style={{ color: member.accentColor }}
                    >
                      {member.initials}
                    </span>
                    {/* Subtle shimmer overlay */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-30"
                      style={{
                        background: `linear-gradient(135deg, rgba(255,255,255,0.6) 0%, transparent 60%)`,
                      }}
                    />
                  </div>

                  {/* Badge */}
                  <div
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest"
                    style={{
                      background: `${member.accentColor}15`,
                      border: `1px solid ${member.accentColor}30`,
                      color: member.accentColor,
                    }}
                  >
                    <BadgeIcon size={10} />
                    {member.badge.label}
                  </div>
                </div>

                {/* ── Name & Role ── */}
                <div className="mb-6">
                  <h3
                    className="font-black text-navy text-xl leading-tight mb-2"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {member.name}
                  </h3>

                  {/* Animated underline */}
                  <div
                    className="h-px mb-3 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                    style={{
                      background: `linear-gradient(to right, ${member.accentColor}, transparent)`,
                    }}
                  />

                  <p
                    className="text-[11px] font-bold uppercase tracking-[0.12em]"
                    style={{ color: member.accentColor }}
                  >
                    {member.role}
                  </p>
                </div>

                {/* ── Description ── */}
                <p className="text-navy/55 text-sm leading-relaxed mb-6">
                  {member.description}
                </p>

                {/* ── Credentials ── */}
                {member.credentials.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {member.credentials.map((cred) => (
                      <span
                        key={cred}
                        className="px-3 py-1 rounded-full text-[10px] font-bold"
                        style={{
                          background: "rgba(12,27,46,0.05)",
                          border: "1px solid rgba(12,27,46,0.08)",
                          color: "#0C1B2E",
                        }}
                      >
                        {cred}
                      </span>
                    ))}
                  </div>
                )}

                {/* ── Affiliations ── */}
                {member.affiliations.length > 0 && (
                  <div className="space-y-2.5 pt-5 border-t border-navy/6">
                    <p
                      className="text-[9px] font-bold uppercase tracking-[0.18em] mb-3"
                      style={{ color: "rgba(12,27,46,0.35)" }}
                    >
                      Academic Affiliations
                    </p>
                    {member.affiliations.map((aff) => (
                      <div key={aff.name} className="flex items-start gap-2.5">
                        <div
                          className="w-5 h-5 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{
                            background: `${member.accentColor}15`,
                            border: `1px solid ${member.accentColor}25`,
                          }}
                        >
                          <Building2 size={10} style={{ color: member.accentColor }} />
                        </div>
                        <span className="text-navy/55 text-xs leading-snug">{aff.name}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* ── Bottom icon ── */}
                <div className="absolute bottom-7 right-7 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <MemberIcon size={52} className="text-navy" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Bottom trust strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-12 border-t border-navy/8"
        >
          {[
            { icon: Award, label: "Fellowship — RCSEd UK" },
            { icon: Globe2, label: "3 International Institutions" },
            { icon: GraduationCap, label: "FCPS Certified Specialists" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5 text-navy/40">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(14,165,233,0.08)", border: "1px solid rgba(14,165,233,0.15)" }}
              >
                <Icon size={14} className="text-sky" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
