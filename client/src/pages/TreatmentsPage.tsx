import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const mainTreatments = [
  {
    title: "Dental Implants",
    category: "Restorative Mastery",
    description: "Replace missing teeth with biocompatible titanium implants that look, feel, and function like natural teeth.",
    features: ["3D Guided Surgery", "Same-Day Restorations", "Lifetime Durability"],
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=85&w=900"
  },
  {
    title: "Smile Makeovers",
    category: "Cosmetic Artistry",
    description: "A complete transformation of your smile using porcelain veneers, crowns, and advanced bonding techniques.",
    features: ["Digital Smile Design", "Ultra-Thin Veneers", "Facial Symmetry Analysis"],
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=85&w=900"
  },
  {
    title: "Orthodontics",
    category: "Precision Alignment",
    description: "Correct misaligned teeth and bite issues using modern clear aligner systems or high-precision braces.",
    features: ["Clear Aligners", "Invisible Braces", "Accelerated Treatment"],
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=85&w=900"
  }
];

const secondaryTreatments = [
  "General Dentistry",
  "Teeth Whitening",
  "Root Canal Therapy",
  "Gum Treatment",
  "Wisdom Tooth Surgery",
  "Paediatric Dentistry",
  "Emergency Dental Care",
  "Full Mouth Reconstruction"
];

export default function TreatmentsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy/5 border border-navy/10 text-navy text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
          >
            Dental Treatments in DHA Karachi
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold text-navy mb-8 tracking-tighter"
          >
            Comprehensive <br />
            <span className="text-sky font-normal italic">Dental Treatments.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-navy/60 text-lg max-w-2xl mx-auto font-light leading-relaxed"
          >
            From dental implants and smile makeovers to orthodontics and pediatric dentistry, Asthetik Dental offers a full range of treatments for patients in DHA Karachi. All procedures are performed by qualified specialists using the latest technology.
          </motion.p>
        </div>
      </section>

      {/* Main Treatments Showcase */}
      <section className="py-32">
        <div className="container space-y-32">
          {mainTreatments.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-20 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="text-sky text-sm font-bold uppercase tracking-widest mb-4">{t.category}</div>
                <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">{t.title}</h2>
                <p className="text-navy/60 text-lg font-light leading-relaxed mb-10">
                  {t.description}
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {t.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-navy/80 font-medium">
                      <CheckCircle2 size={18} className="text-sky" />
                      {f}
                    </div>
                  ))}
                </div>
                <button className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-navy text-white font-bold text-xs uppercase tracking-widest hover:bg-sky transition-all group">
                  Learn More 
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
              <div className={`relative ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <img 
                    src={t.image} 
                    alt={t.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -inset-4 bg-sky/5 blur-3xl -z-10 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Full Services Grid */}
      <section className="py-32 bg-navy relative overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Comprehensive Care</h2>
            <p className="text-white/40 text-lg font-light">Explore our full range of clinical services.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {secondaryTreatments.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-sky/30 transition-all group cursor-pointer"
              >
                <h3 className="text-white/80 font-bold group-hover:text-sky transition-colors">{s}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
