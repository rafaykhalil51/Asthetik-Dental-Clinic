import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight, CheckCircle2, Clock, Star, Sparkles,
  Shield, Zap, Heart, Smile, Activity, BadgeCheck, ChevronRight
} from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AmbientBackground from "@/components/AmbientBackground";

// ── Featured (hero alternating) treatments ──────────────────────────────────
const featured = [
  {
    title: "Dental Implants",
    category: "Restorative Mastery",
    description: "Replace missing teeth permanently with biocompatible titanium implants fused to your jawbone — indistinguishable from natural teeth in look, feel, and function.",
    features: ["3D Guided Surgery", "Same-Day Restorations", "Lifetime Durability"],
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=85&w=900",
    accent: "#0EA5E9",
  },
  {
    title: "Smile Makeovers",
    category: "Cosmetic Artistry",
    description: "A complete smile transformation through porcelain veneers, crowns, whitening, and bonding — engineered around your facial geometry and aesthetic goals.",
    features: ["Digital Smile Design", "Ultra-Thin Veneers", "Facial Symmetry Analysis"],
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=85&w=900",
    accent: "#C9A84C",
  },
  {
    title: "Orthodontics",
    category: "Precision Alignment",
    description: "Correct misaligned teeth and bite irregularities with Invisalign clear aligners or precision ceramic braces — discreetly and effectively.",
    features: ["Invisalign Certified", "Invisible Braces", "Accelerated Treatment"],
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=85&w=900",
    accent: "#6366F1",
  },
];

// ── Treatment cards grid ─────────────────────────────────────────────────────
const treatments = [
  {
    title: "Dental Implant with Zirconia Crown",
    description: "Premium titanium implant topped with a full-contour zirconia crown — zero metal, maximum strength, and a flawlessly natural appearance.",
    icon: Shield,
    accent: "#0EA5E9",
    glow: "rgba(14,165,233,0.15)",
    badge: "Most Popular",
    duration: "2–3 visits",
    tag: "Permanent Solution",
  },
  {
    title: "Scaling, Polishing & General Checkup",
    description: "A comprehensive preventive session: professional ultrasonic scaling, polished enamel, and a thorough clinical examination to protect your oral health.",
    icon: Activity,
    accent: "#10B981",
    glow: "rgba(16,185,129,0.13)",
    badge: null,
    duration: "60 min",
    tag: "Preventive Care",
  },
  {
    title: "Tooth-Colored Filling",
    description: "Composite resin restorations that match your natural tooth shade perfectly — strong, mercury-free, and invisible to the eye.",
    icon: Sparkles,
    accent: "#8B5CF6",
    glow: "rgba(139,92,246,0.13)",
    badge: null,
    duration: "45–60 min",
    tag: "Aesthetic Restoration",
  },
  {
    title: "Root Canal Treatment",
    description: "Pain-free endodontic therapy using rotary instrumentation and apex locators — saving your natural tooth while eliminating infection at its source.",
    icon: Heart,
    accent: "#F59E0B",
    glow: "rgba(245,158,11,0.13)",
    badge: null,
    duration: "1–2 visits",
    tag: "Pain Relief",
  },
  {
    title: "PFM CAD/CAM Crown",
    description: "Porcelain-fused-to-metal crowns milled with digital CAD/CAM precision for a superior fit, outstanding durability, and a natural lifelike finish.",
    icon: Zap,
    accent: "#0EA5E9",
    glow: "rgba(14,165,233,0.13)",
    badge: null,
    duration: "2 visits",
    tag: "Digital Precision",
  },
  {
    title: "Zirconia Crown Package",
    description: "Full-contour monolithic zirconia crowns — the pinnacle of dental restorations. Metal-free, chip-resistant, and designed to last decades.",
    icon: BadgeCheck,
    accent: "#C9A84C",
    glow: "rgba(201,168,76,0.15)",
    badge: "Premium",
    duration: "2 visits",
    tag: "Luxury Restoration",
  },
  {
    title: "Teeth Whitening & Scaling Combo",
    description: "Professional LED-activated whitening combined with ultrasonic scaling — achieving up to 10 shades brighter with a clean, healthy foundation.",
    icon: Smile,
    accent: "#06B6D4",
    glow: "rgba(6,182,212,0.13)",
    badge: "Best Value",
    duration: "90 min",
    tag: "Smile Brightening",
  },
  {
    title: "Ceramic Veneer Package",
    description: "Hand-crafted feldspathic or pressable ceramic veneers bonded to your teeth — delivering Hollywood-level aesthetics with a translucency that mirrors natural enamel.",
    icon: Sparkles,
    accent: "#EC4899",
    glow: "rgba(236,72,153,0.12)",
    badge: "Signature",
    duration: "2–3 visits",
    tag: "Smile Transformation",
  },
  {
    title: "Braces (Orthodontic) Treatment Package",
    description: "Full orthodontic realignment with metal or ceramic braces — a comprehensive package including records, monthly adjustments, and retainers.",
    icon: Star,
    accent: "#6366F1",
    glow: "rgba(99,102,241,0.13)",
    badge: null,
    duration: "12–24 months",
    tag: "Complete Alignment",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

// ── Card component ────────────────────────────────────────────────────────────
function TreatmentCard({ t, i }: { t: typeof treatments[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = t.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: EASE, delay: (i % 3) * 0.12 }}
      whileHover={{ y: -8, transition: { duration: 0.35, ease: EASE } }}
      className="group relative rounded-[2rem] p-7 cursor-default overflow-hidden flex flex-col"
      style={{
        background: "rgba(255,255,255,0.78)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.9)",
        boxShadow: "0 4px 28px rgba(12,27,46,0.07)",
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1.5px ${t.accent}50, 0 0 60px ${t.glow}` }}
      />
      {/* Top accent line */}
      <div
        className="absolute top-0 left-6 right-6 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(to right, transparent, ${t.accent}, transparent)` }}
      />
      {/* Corner ambient glow */}
      <div
        className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${t.glow} 0%, transparent 70%)`, transform: "translate(30%,-30%)" }}
      />

      {/* Header row */}
      <div className="flex items-start justify-between mb-6">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
          style={{ background: `${t.accent}18`, border: `1.5px solid ${t.accent}35` }}
        >
          <Icon size={24} style={{ color: t.accent }} />
        </div>
        {t.badge && (
          <span
            className="px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest"
            style={{ background: `${t.accent}18`, border: `1px solid ${t.accent}35`, color: t.accent }}
          >
            {t.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex-1">
        {/* Tag */}
        <p className="text-[9px] font-bold uppercase tracking-[0.18em] mb-2" style={{ color: `${t.accent}cc` }}>
          {t.tag}
        </p>
        {/* Animated underline */}
        <div
          className="h-px mb-3 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
          style={{ background: `linear-gradient(to right, ${t.accent}, transparent)` }}
        />
        <h3 className="font-black text-navy text-[1.05rem] leading-snug mb-3" style={{ letterSpacing: "-0.02em" }}>
          {t.title}
        </h3>
        <p className="text-navy/50 text-sm leading-relaxed">{t.description}</p>
      </div>

      {/* Footer row */}
      <div className="flex items-center justify-between mt-6 pt-5 border-t border-navy/6">
        <div className="flex items-center gap-1.5 text-navy/35">
          <Clock size={11} />
          <span className="text-[10px] font-semibold uppercase tracking-wider">{t.duration}</span>
        </div>
        <Link href="/contact">
          <motion.button
            whileHover={{ x: 3 }}
            className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest"
            style={{ color: t.accent }}
          >
            Book Now <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function TreatmentsPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-36 pb-24 bg-[#0C1B2E] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 80% 60% at 65% 0%, rgba(14,165,233,0.13) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 10% 100%, rgba(99,102,241,0.08) 0%, transparent 70%)"
        }} />
        {/* Floating dots */}
        {[{ top:"18%",left:"7%",s:4,d:0 },{ top:"70%",left:"4%",s:3,d:1.5 },{ top:"25%",right:"5%",s:5,d:0.8 }].map((dot,i) => (
          <motion.div key={i} animate={{ y:[0,-10,0], opacity:[0.2,0.5,0.2] }}
            transition={{ duration:4+i*0.8, repeat:Infinity, ease:"easeInOut", delay:dot.d }}
            className="absolute rounded-full bg-sky-400"
            style={{ top:dot.top, left:(dot as any).left, right:(dot as any).right, width:dot.s, height:dot.s }}
          />
        ))}
        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-[10px] font-bold tracking-widest uppercase mb-6">
              <Sparkles size={11} className="text-sky-400" />
              Advanced Dental Treatments · DHA Karachi
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.04] mb-6" style={{ letterSpacing:"-0.04em" }}>
              Advanced Dental Treatments{" "}
              <span className="block" style={{
                backgroundImage:"linear-gradient(135deg, #ffffff 0%, #7DD3FC 50%, #38BDF8 100%)",
                WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text"
              }}>
                Designed Around Your Smile
              </span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Precision-driven dentistry combining advanced technology, aesthetics, and patient-first care — all under one roof in DHA Karachi.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <motion.button whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}
                  className="px-8 py-4 rounded-full bg-white text-navy font-bold text-sm uppercase tracking-wider shadow-2xl">
                  Book Consultation
                </motion.button>
              </Link>
              <motion.a href="#treatments-grid" whileHover={{ scale:1.04 }}
                className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-sm uppercase tracking-wider">
                View All Treatments
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Featured Alternating Section ── */}
      <section className="relative py-28 overflow-hidden">
        <AmbientBackground variant="light" />
        <div className="container space-y-28">
          {featured.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity:0, y:40 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true, margin:"-80px" }}
              transition={{ duration:0.85, ease:EASE }}
              className={`grid lg:grid-cols-2 gap-16 xl:gap-24 items-center`}
            >
              {/* Text */}
              <div className={idx % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] mb-4" style={{ color:t.accent }}>{t.category}</div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-5 leading-tight" style={{ letterSpacing:"-0.03em" }}>{t.title}</h2>
                <p className="text-navy/55 text-lg font-light leading-relaxed mb-8">{t.description}</p>
                <div className="space-y-3 mb-10">
                  {t.features.map((f,i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={16} style={{ color:t.accent }} className="flex-shrink-0" />
                      <span className="text-navy/70 font-medium text-sm">{f}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact">
                  <motion.button whileHover={{ scale:1.04, x:4 }} whileTap={{ scale:0.97 }}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-bold text-xs uppercase tracking-widest shadow-xl"
                    style={{ background:`linear-gradient(135deg, #0C1B2E, ${t.accent})` }}>
                    Book Consultation <ArrowRight size={14} />
                  </motion.button>
                </Link>
              </div>
              {/* Image */}
              <div className={`relative ${idx % 2 !== 0 ? "lg:order-1" : ""}`}>
                <motion.div
                  whileHover={{ scale:1.02 }}
                  transition={{ duration:0.5, ease:EASE }}
                  className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl"
                  style={{ boxShadow:`0 32px 80px ${t.accent}25` }}
                >
                  <img src={t.image} alt={t.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background:"linear-gradient(to top, rgba(12,27,46,0.3) 0%, transparent 50%)" }} />
                </motion.div>
                <div className="absolute -inset-8 -z-10 rounded-full blur-3xl opacity-20" style={{ background:t.accent }} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── All Treatments Grid ── */}
      <section
        id="treatments-grid"
        className="relative py-28 overflow-hidden"
        style={{ background:"linear-gradient(180deg, #F0EEE8 0%, #FAFAF8 100%)" }}
      >
        {/* Ambient blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div animate={{ scale:[1,1.1,1], opacity:[0.06,0.12,0.06] }} transition={{ duration:9, repeat:Infinity, ease:"easeInOut" }}
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
            style={{ background:"radial-gradient(circle, #0EA5E9 0%, transparent 70%)" }} />
          <motion.div animate={{ scale:[1,1.08,1], opacity:[0.04,0.08,0.04] }} transition={{ duration:12, repeat:Infinity, ease:"easeInOut", delay:3 }}
            className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full"
            style={{ background:"radial-gradient(circle, #C9A84C 0%, transparent 70%)" }} />
        </div>

        <div className="container relative z-10">
          {/* Header */}
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            transition={{ duration:0.75, ease:EASE }} className="text-center mb-16">
            <div className="eyebrow text-sky mb-5 justify-center">
              <div className="w-6 h-px bg-sky" />
              Our Treatments
              <div className="w-6 h-px bg-sky" />
            </div>
            <h2 className="display-heading text-4xl md:text-5xl text-navy mb-5" style={{ letterSpacing:"-0.03em" }}>
              Comprehensive{" "}
              <span className="serif-italic" style={{
                backgroundImage:"linear-gradient(135deg, #0C1B2E 0%, #0C3460 50%, #0EA5E9 100%)",
                WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text"
              }}>Care Menu</span>
            </h2>
            <p className="text-navy/45 text-lg max-w-xl mx-auto">
              Every treatment is performed by qualified specialists using international-grade technology.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-6">
            {treatments.map((t, i) => <TreatmentCard key={t.title} t={t} i={i} />)}
          </div>
        </div>
      </section>

      {/* ── Trust Strip ── */}
      <section className="relative py-16 border-t border-[#E8E5DF] overflow-hidden">
        <AmbientBackground variant="light" orbs={false} />
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value:"5,000+", label:"Patients Treated" },
              { value:"10+",    label:"Years of Excellence" },
              { value:"4.9★",  label:"Google Rating" },
              { value:"100%",  label:"Sterilised Environment" },
            ].map((s,i) => (
              <motion.div key={i} initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ delay:i*0.1, duration:0.6, ease:EASE }}>
                <div className="text-3xl font-black text-navy mb-1">{s.value}</div>
                <div className="text-xs text-navy/40 font-semibold uppercase tracking-widest">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-[#0C1B2E] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background:"radial-gradient(ellipse 60% 80% at 80% 50%, rgba(14,165,233,0.08) 0%, transparent 70%)"
        }} />
        <div className="container relative z-10 text-center max-w-xl mx-auto">
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}>
            <h2 className="text-4xl font-extrabold text-white mb-4" style={{ letterSpacing:"-0.03em" }}>
              Not Sure Which Treatment{" "}
              <span style={{
                backgroundImage:"linear-gradient(135deg, #38BDF8, #0EA5E9)",
                WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text"
              }}>Is Right for You?</span>
            </h2>
            <p className="text-white/40 text-base leading-relaxed mb-8">
              Book a free consultation and let our specialists design a personalised treatment plan for your smile.
            </p>
            <Link href="/contact">
              <motion.button whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-sky-500 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-sky-500/25">
                Book Free Consultation <ChevronRight size={16} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
