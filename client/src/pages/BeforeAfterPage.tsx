import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const cases = [
  {
    id: 1,
    treatment: "Dental Implants",
    before: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=85&w=800",
    after: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=85&w=800",
    description: "Full arch restoration with premium titanium implants",
    duration: "4 months",
    patient: "Male, 42",
  },
  {
    id: 2,
    treatment: "Smile Makeover",
    before: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=85&w=800",
    after: "https://images.unsplash.com/photo-1598256989940-38c0e33b2b23?auto=format&fit=crop&q=85&w=800",
    description: "Porcelain veneers and gum contouring",
    duration: "3 weeks",
    patient: "Female, 28",
  },
  {
    id: 3,
    treatment: "Teeth Whitening",
    before: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=85&w=800",
    after: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=85&w=800",
    description: "Professional in-clinic LED whitening — 8 shades brighter",
    duration: "1 session",
    patient: "Female, 31",
  },
  {
    id: 4,
    treatment: "Invisalign",
    before: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=85&w=800",
    after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=85&w=800",
    description: "Full arch alignment with Invisalign clear aligners",
    duration: "14 months",
    patient: "Male, 26",
  },
  {
    id: 5,
    treatment: "Composite Bonding",
    before: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=85&w=800",
    after: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=85&w=800",
    description: "Composite bonding for chipped and uneven teeth",
    duration: "1 visit",
    patient: "Female, 24",
  },
  {
    id: 6,
    treatment: "Full Mouth Restoration",
    before: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=85&w=800",
    after: "https://images.unsplash.com/photo-1598256989940-38c0e33b2b23?auto=format&fit=crop&q=85&w=800",
    description: "Complete oral rehabilitation — implants, crowns, whitening",
    duration: "6 months",
    patient: "Male, 55",
  },
];

function CompareCard({ caseItem }: { caseItem: typeof cases[0] }) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group rounded-[2rem] overflow-hidden bg-white border border-[#E8E5DF] hover:shadow-2xl hover:shadow-navy/10 transition-all duration-500"
    >
      {/* Image compare area */}
      <div className="relative aspect-[4/3] overflow-hidden cursor-pointer" onClick={() => setShowAfter(!showAfter)}>
        <AnimatePresence mode="wait">
          <motion.img
            key={showAfter ? "after" : "before"}
            src={showAfter ? caseItem.after : caseItem.before}
            alt={showAfter ? "After" : "Before"}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        {/* Label */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${showAfter ? "bg-sky-500 text-white" : "bg-[#0C1B2E]/80 text-white backdrop-blur-sm"}`}>
            {showAfter ? "After" : "Before"}
          </span>
        </div>
        {/* Toggle hint */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-2 rounded-xl bg-white/90 backdrop-blur-md text-navy text-[10px] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all">
          {showAfter ? <><ArrowLeft size={11} /> View Before</> : <>View After <ArrowRight size={11} /></>}
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-sky-500 mb-1">{caseItem.treatment}</p>
            <h3 className="font-bold text-navy text-base">{caseItem.description}</h3>
          </div>
        </div>
        <div className="flex gap-4 pt-4 border-t border-[#E8E5DF]">
          <div>
            <p className="text-[9px] uppercase tracking-widest text-navy/30 font-bold">Duration</p>
            <p className="text-navy font-semibold text-sm">{caseItem.duration}</p>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-widest text-navy/30 font-bold">Patient</p>
            <p className="text-navy font-semibold text-sm">{caseItem.patient}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function BeforeAfterPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 bg-[#0C1B2E] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 70% 0%, rgba(14,165,233,0.12) 0%, transparent 70%)" }} />
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-[10px] font-bold tracking-widest uppercase mb-6">
              Real Results · Real Patients
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] mb-5" style={{ letterSpacing: "-0.04em" }}>
              Before &{" "}
              <span style={{ backgroundImage: "linear-gradient(135deg, #38BDF8, #0EA5E9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                After
              </span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed">
              Tap any case to reveal the transformation. Every result shown is from an actual Asthetik Dental patient.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {cases.map((c) => (
              <CompareCard key={c.id} caseItem={c} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Disclaimer ── */}
      <div className="container pb-8">
        <p className="text-[11px] text-navy/25 text-center">
          * Individual results may vary. All images are of actual Asthetik Dental patients who have given consent to share their results.
        </p>
      </div>

      {/* ── CTA ── */}
      <section className="py-24 bg-white border-t border-[#E8E5DF]">
        <div className="container text-center max-w-xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4" style={{ letterSpacing: "-0.03em" }}>
              Ready for Your Transformation?
            </h2>
            <p className="text-navy/45 text-base leading-relaxed mb-8">
              Book a complimentary consultation and see what's possible for your smile.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0C1B2E] text-white font-bold text-sm uppercase tracking-wider shadow-xl shadow-navy/20"
              >
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
