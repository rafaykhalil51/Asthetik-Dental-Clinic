import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Sarah K.", review: "Absolutely amazing experience! My teeth have never looked better.", rating: 5 },
  { name: "Omar F.", review: "Dr. Zaheer is incredibly skilled. Pain-free procedure, stunning results.", rating: 5 },
  { name: "Amna R.", review: "Best dental clinic in Karachi. Premium service and genuine care.", rating: 5 },
  { name: "Ali H.", review: "My smile makeover exceeded every expectation. World-class team.", rating: 5 },
  { name: "Zara M.", review: "Gentle, professional, and thorough. I drive 2 hours just to come here.", rating: 5 },
  { name: "Bilal S.", review: "Incredibly modern equipment and the staff made me feel so comfortable.", rating: 5 },
];

// Duplicate for infinite loop
const marqueeItems = [...reviews, ...reviews];

export default function TrustMarquee() {
  return (
    <section className="relative py-16 bg-white border-y border-gray-100 overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, white, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, white, transparent)" }} />

      {/* Header pill */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-center mb-10"
      >
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-100 bg-gray-50 text-[11px] font-bold uppercase tracking-widest text-navy/50">
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(i => <Star key={i} size={10} className="fill-yellow-400 text-yellow-400" />)}
          </div>
          4.9 · Trusted by 5,000+ Patients · Karachi's #1 Dental Studio
        </div>
      </motion.div>

      {/* Scrolling row */}
      <div className="relative flex gap-6 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-6 flex-shrink-0"
        >
          {marqueeItems.map((r, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[320px] bg-white border border-gray-100 rounded-[1.5rem] px-7 py-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex gap-0.5 mb-4">
                {[1,2,3,4,5].map(s => (
                  <Star key={s} size={12} className={s <= r.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"} />
                ))}
              </div>
              <p className="text-navy/70 text-sm leading-relaxed mb-5 italic">"{r.review}"</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ background: "linear-gradient(135deg, #0EA5E9, #6366F1)" }}>
                  {r.name.charAt(0)}
                </div>
                <div className="text-xs font-bold text-navy">{r.name}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
