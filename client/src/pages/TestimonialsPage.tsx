import { motion } from "framer-motion";
import { Star, Quote, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AmbientBackground from "@/components/AmbientBackground";

const testimonials = [
  {
    name: "Areeba Khan",
    role: "Dental Implant Patient",
    location: "DHA Karachi",
    rating: 5,
    text: "I had been hiding my smile for years due to a missing front tooth. Dr. Zaheer gave me a perfect implant that looks completely natural. The clinic is world-class — nothing like I've ever experienced in Pakistan.",
    treatment: "Dental Implants",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Bilal Rashid",
    role: "Smile Makeover Patient",
    location: "Clifton Karachi",
    rating: 5,
    text: "The smile makeover transformed not just my teeth but my confidence. My veneers look so real that even my family didn't realise I had work done. Worth every penny.",
    treatment: "Smile Makeover",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Nadia Siddiqui",
    role: "Invisalign Patient",
    location: "Defence Karachi",
    rating: 5,
    text: "Invisalign at Asthetik Dental was one of the best decisions of my life. 14 months later and I have perfectly straight teeth. The team's professionalism and clinic environment are unmatched in Karachi.",
    treatment: "Invisalign",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Omar Farooq",
    role: "Teeth Whitening Patient",
    location: "Gulshan Karachi",
    rating: 5,
    text: "I went 8 shades brighter in one session. The process was completely painless and the result was incredible. Highly recommend Asthetik Dental for whitening — professional and fast.",
    treatment: "Teeth Whitening",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Fatima Zahra",
    role: "General Dentistry Patient",
    location: "DHA Phase 6",
    rating: 5,
    text: "I used to have severe dental anxiety. Asthetik Dental changed everything. The team is so patient, the environment so calming. It's the first clinic I've actually looked forward to visiting.",
    treatment: "General Dentistry",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Hassan Ali",
    role: "Wisdom Tooth Patient",
    location: "Bahria Town Karachi",
    rating: 5,
    text: "Had all four wisdom teeth removed in two sessions. Minimal pain, fast recovery, and the team was incredibly professional. The clinic felt more like a luxury spa than a dental office.",
    treatment: "Oral Surgery",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Mariam Sheikh",
    role: "Paediatric Patient (Mother)",
    location: "DHA Karachi",
    rating: 5,
    text: "My son was terrified of dentists. Dr. Zaheer's team made him feel completely at ease. Now he actually asks when we can go back! The paediatric care here is exceptional.",
    treatment: "Children Dentistry",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Usman Malik",
    role: "Crown Patient",
    location: "PECHS Karachi",
    rating: 5,
    text: "Got a same-day ceramic crown using their CEREC technology. Fit perfectly, looks exactly like my real tooth. I was in and out in 3 hours. This is the future of dentistry.",
    treatment: "Dental Crown",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Sana Baig",
    role: "Composite Bonding Patient",
    location: "Karachi",
    rating: 5,
    text: "My chipped front teeth were fixed beautifully. The composite bonding is seamless — you genuinely cannot tell the difference. And the price was so reasonable. Highly recommend.",
    treatment: "Cosmetic Bonding",
    image: "https://images.unsplash.com/photo-1542206395-9eb3d22d2d5d?auto=format&fit=crop&q=80&w=200",
  },
];

const stats = [
  { value: "5,000+", label: "Happy Patients" },
  { value: "4.9★", label: "Google Rating" },
  { value: "10+", label: "Years of Excellence" },
  { value: "98%", label: "Patient Satisfaction" },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } };

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 bg-[#0C1B2E] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 60% 0%, rgba(14,165,233,0.12) 0%, transparent 70%)" }} />
        <div className="container relative z-10 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-[10px] font-bold tracking-widest uppercase mb-6">
              <Star size={12} className="text-yellow-400 fill-yellow-400" />
              Real Patient Stories
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] mb-5" style={{ letterSpacing: "-0.04em" }}>
              Smiles That{" "}
              <span style={{ backgroundImage: "linear-gradient(135deg, #38BDF8, #0EA5E9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Speak
              </span>
              <br />
              for Themselves
            </h1>
            <p className="text-white/50 text-lg leading-relaxed">
              Over 5,000 patients have experienced the Asthetik difference. Here are their stories, in their own words.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 pt-10 border-t border-white/10">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.08 }}>
                <div className="text-3xl font-black text-white mb-1">{s.value}</div>
                <div className="text-white/35 text-xs uppercase tracking-widest font-semibold">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials Grid ── */}
      <section className="relative py-24 overflow-hidden">
        <AmbientBackground variant="light" />
        <div className="container">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6"
          >
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={item} className="break-inside-avoid mb-6">
                <div className="p-8 rounded-[2rem] bg-white border border-[#E8E5DF] hover:border-sky-200 hover:shadow-xl hover:shadow-navy/6 transition-all duration-500 hover:-translate-y-1">
                  <Quote size={24} className="text-sky-200 mb-4" />
                  <p className="text-navy/65 leading-relaxed text-[15px] mb-6 italic" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "17px" }}>
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-1 mb-5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-3 pt-5 border-t border-[#E8E5DF]">
                    <img src={t.image} alt={t.name} className="w-11 h-11 rounded-full object-cover" />
                    <div>
                      <p className="font-bold text-navy text-sm">{t.name}</p>
                      <p className="text-navy/40 text-xs">{t.treatment} · {t.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-[#0C1B2E] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(14,165,233,0.08) 0%, transparent 70%)" }} />
        <div className="container relative z-10 text-center max-w-xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="text-4xl font-extrabold text-white mb-4" style={{ letterSpacing: "-0.03em" }}>
              Your Success Story<br />
              <span style={{ backgroundImage: "linear-gradient(135deg, #38BDF8, #0EA5E9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Starts Here.
              </span>
            </h2>
            <p className="text-white/40 text-base leading-relaxed mb-8">Join thousands of patients who chose Asthetik Dental for their smile transformation.</p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-navy font-bold text-sm uppercase tracking-wider shadow-2xl"
              >
                Book Your Consultation <ChevronRight size={16} />
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
