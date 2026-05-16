import { motion, useScroll, useTransform } from "framer-motion";
import { Star } from "lucide-react";
import { Link } from "wouter";

// Stats: use colored image/logo badges instead of icons
const stats = [
  {
    visual: (
      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl font-black shadow-lg"
        style={{ background: "linear-gradient(135deg, #F59E0B, #FBBF24)", color: "#fff", boxShadow: "0 4px 20px rgba(245,158,11,0.5)" }}>
        🏆
      </div>
    ),
    value: "10+", label: "Years Mastery"
  },
  {
    visual: (
      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl font-black shadow-lg"
        style={{ background: "linear-gradient(135deg, #0EA5E9, #38BDF8)", color: "#fff", boxShadow: "0 4px 20px rgba(14,165,233,0.5)" }}>
        🦷
      </div>
    ),
    value: "5K+", label: "Smiles Crafted"
  },
  {
    visual: (
      <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center bg-white shadow-lg"
        style={{ boxShadow: "0 4px 20px rgba(66,133,244,0.4)" }}>
        <img
          src="https://www.gstatic.com/images/branding/product/2x/googleg_48dp.png"
          alt="Google"
          className="w-7 h-7 object-contain"
        />
      </div>
    ),
    value: "4.9★", label: "Google Rating"
  },
];

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, 60]);
  const y2 = useTransform(scrollY, [0, 600], [0, 100]);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-32 pb-16 overflow-hidden bg-vibrant-hero"
    >
      {/* ── Animated Background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Ambient glow blobs */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-15%] right-[-10%] w-[65%] h-[80%] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(56,189,248,0.2) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-20%] left-[-10%] w-[55%] h-[65%] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(14,165,233,0.15) 0%, transparent 70%)" }}
        />
        {/* Animated gradient line at top */}
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
          className="absolute top-0 left-0 h-px w-full"
          style={{ background: "linear-gradient(to right, transparent, rgba(56,189,248,0.6), transparent)" }}
        />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── LEFT: Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-[11px] font-bold tracking-widest uppercase w-fit"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sky animate-pulse" />
              Karachi's Premier Dental Studio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.9 }}
              className="display-heading text-5xl md:text-7xl xl:text-[5.5rem] text-white leading-[1.0]"
            >
              Your Smile, <br />
              <span className="italic serif-italic" style={{
                backgroundImage: "linear-gradient(135deg, #ffffff 0%, #7DD3FC 50%, #38BDF8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Perfected.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-white/65 font-normal leading-relaxed max-w-[520px]"
            >
              International-grade implantology, cosmetic artistry, and painless precision.
              One luxury clinic in DHA Karachi, designed entirely around you and led by Dr. Zaheer Hussain.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: "0 20px 40px rgba(255,255,255,0.25)" }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-4 rounded-full bg-white text-navy font-bold text-sm uppercase tracking-wider shadow-2xl"
                >
                  Book Consultation
                </motion.button>
              </Link>
              <Link href="/treatments">
                <motion.button
                  whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.15)" }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-4 rounded-full bg-white/8 backdrop-blur-md border border-white/20 text-white font-bold text-sm uppercase tracking-wider transition-colors"
                >
                  Our Treatments
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.8 }}
              className="flex items-center gap-10 pt-10 border-t border-white/10 mt-4"
            >
              {stats.map(({ visual, value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  {visual}
                  <div>
                    <div className="text-white text-lg font-black leading-none mb-1">{value}</div>
                    <div className="text-white/40 text-[9px] uppercase tracking-widest font-bold">{label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Premium Image Composition ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[580px] hidden lg:block"
          >
            {/* MAIN IMAGE — large dental/smile */}
            <motion.div
              style={{ y: y1, border: "1.5px solid rgba(255,255,255,0.08)" }}
              className="absolute right-0 top-0 bottom-0 w-[88%] rounded-[4rem] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
            >
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=90&w=900"
                alt="Premium Dental Care"
                className="w-full h-full object-cover"
              />
              {/* Dark gradient bottom */}
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,13,26,0.85) 0%, rgba(5,13,26,0.1) 50%, transparent 100%)" }} />

              {/* Animated horizontal scan line */}
              <motion.div
                animate={{ y: [-20, 620] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
                className="absolute left-0 right-0 h-[2px] opacity-30 pointer-events-none"
                style={{ background: "linear-gradient(to right, transparent, rgba(56,189,248,0.8), transparent)" }}
              />

              {/* Corner glow */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-bl-[4rem] opacity-20"
                style={{ background: "radial-gradient(circle at top right, #38BDF8, transparent)" }} />
            </motion.div>

            {/* SECONDARY IMAGE — doctor portrait */}
            <motion.div
              style={{ y: y2 }}
              initial={{ opacity: 0, x: -30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="absolute left-0 bottom-10 w-[42%] rounded-[2.5rem] overflow-hidden z-20 shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
              style={{ border: "3px solid rgba(255,255,255,0.12)" }}
            >
              <img
                src="/doctor.png"
                alt="Dr. Zaheer Hussain"
                className="w-full aspect-[3/4] object-cover object-top"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,13,26,0.9) 0%, transparent 50%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-bold text-sm">Dr. Zaheer Hussain</p>
                <p className="text-sky text-[10px] font-bold uppercase tracking-widest mt-0.5">CEO & Clinical Director</p>
              </div>
            </motion.div>

            {/* Floating badge: Rating */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-[-1rem] top-16 z-30 glass-dark px-5 py-4 rounded-2xl shadow-2xl"
            >
              <div className="text-sky text-[9px] font-bold uppercase tracking-widest mb-1.5">Google Rating</div>
              <div className="text-white font-black text-2xl leading-none">4.9</div>
              <div className="flex gap-0.5 mt-1.5">
                {[1,2,3,4,5].map(i => <Star key={i} size={8} className="fill-yellow-400 text-yellow-400" />)}
              </div>
            </motion.div>

            {/* Floating badge: Patients */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute left-[38%] top-8 z-30 glass-dark px-5 py-4 rounded-2xl shadow-2xl"
            >
              <div className="text-sky text-[9px] font-bold uppercase tracking-widest mb-1">Happy Patients</div>
              <div className="text-white font-black text-2xl leading-none">5,000+</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
