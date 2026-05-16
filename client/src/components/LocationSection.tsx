import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, MessageCircle, CheckCircle2, Navigation, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const treatments = [
  "General Dentistry",
  "Dental Implants",
  "Orthodontics",
  "Teeth Whitening",
  "Scaling & Polishing",
  "Oral Surgery",
  "Paediatric Care",
  "Smile Makeover",
];

export default function LocationSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    treatment: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* ── CTA Strip: Dark Navy with gold gradient ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "#0C1B2E" }}>
        <div className="absolute inset-0 opacity-15"
          style={{ background: "radial-gradient(ellipse at 50% 100%, #0EA5E9 0%, transparent 60%)" }} />
        {/* Gold accent lines */}
        <div className="absolute top-0 left-0 w-full h-px"
          style={{ background: "linear-gradient(to right, transparent, #C9A84C 30%, #C9A84C 70%, transparent)" }} />
        
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="eyebrow justify-center mb-6" style={{ color: "#C9A84C" }}>
              <div className="w-8 h-px" style={{ background: "#C9A84C" }} />
              Start Your Transformation
              <div className="w-8 h-px" style={{ background: "#C9A84C" }} />
            </div>
            <h2 className="display-heading text-4xl md:text-6xl text-white mb-8">
              Designing Your <br />
              <span className="text-sky" style={{ fontStyle: "italic" }}>Perfect Smile.</span>
            </h2>
            <p className="text-white/50 text-lg font-light leading-relaxed mb-12 max-w-2xl mx-auto">
              Book a private consultation with our clinical directors and explore the future of your oral health with no pressure and full transparency.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <button
                onClick={() => document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-gold"
              >
                Request Appointment
              </button>
              <a
                href="https://wa.me/923332130700"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/50 text-[13px] font-semibold uppercase tracking-wider transition-all"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <MessageCircle size={16} />
                WhatsApp Concierge
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Booking & Location: Warm White ── */}
      <section id="booking" className="py-32 relative bg-warm-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            
            {/* Left: Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-14 rounded-[3rem] shadow-[0_8px_60px_rgba(12,27,46,0.08)]"
              style={{ border: "1px solid #E8E5DF" }}
            >
              <div className="mb-10">
                <div className="eyebrow text-sky mb-4">
                  <div className="w-6 h-px bg-sky" />
                  Book a Consultation
                </div>
                <h3 className="display-heading text-3xl text-navy mb-2">Consultation Suite</h3>
                <p className="text-[#64748b] font-light">Secure your preferred time for a clinical assessment.</p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-20 text-center"
                >
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: "rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.2)" }}>
                    <CheckCircle2 size={36} className="text-sky" />
                  </div>
                  <h4 className="display-heading text-2xl text-navy mb-2">Request Sent.</h4>
                  <p className="text-[#64748b] font-light">Thank you, {formData.name}. Our patient coordinator will contact you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-navy/40 ml-1">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-5 py-3.5 rounded-xl text-sm font-light outline-none transition-all"
                        style={{ background: "#F8F7F4", border: "1px solid #E8E5DF", color: "#0C1B2E" }}
                        onFocus={e => { e.target.style.borderColor = "rgba(14,165,233,0.4)"; e.target.style.background = "#fff"; }}
                        onBlur={e => { e.target.style.borderColor = "#E8E5DF"; e.target.style.background = "#F8F7F4"; }}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-navy/40 ml-1">Mobile</label>
                      <input
                        type="tel"
                        required
                        placeholder="+92 XXX XXXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-5 py-3.5 rounded-xl text-sm font-light outline-none transition-all"
                        style={{ background: "#F8F7F4", border: "1px solid #E8E5DF", color: "#0C1B2E" }}
                        onFocus={e => { e.target.style.borderColor = "rgba(14,165,233,0.4)"; e.target.style.background = "#fff"; }}
                        onBlur={e => { e.target.style.borderColor = "#E8E5DF"; e.target.style.background = "#F8F7F4"; }}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-navy/40 ml-1">Preferred Date</label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-5 py-3.5 rounded-xl text-sm font-light outline-none transition-all"
                        style={{ background: "#F8F7F4", border: "1px solid #E8E5DF", color: "#0C1B2E" }}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-navy/40 ml-1">Treatment</label>
                      <select
                        value={formData.treatment}
                        onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                        className="w-full px-5 py-3.5 rounded-xl text-sm font-light outline-none transition-all appearance-none"
                        style={{ background: "#F8F7F4", border: "1px solid #E8E5DF", color: "#0C1B2E" }}
                      >
                        <option value="">Select interest</option>
                        {treatments.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-navy/40 ml-1">Clinical Notes</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your smile goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-xl text-sm font-light outline-none transition-all resize-none"
                      style={{ background: "#F8F7F4", border: "1px solid #E8E5DF", color: "#0C1B2E" }}
                      onFocus={e => { e.target.style.borderColor = "rgba(14,165,233,0.4)"; e.target.style.background = "#fff"; }}
                      onBlur={e => { e.target.style.borderColor = "#E8E5DF"; e.target.style.background = "#F8F7F4"; }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full justify-center py-4 rounded-2xl gap-3 text-sm"
                    style={{ borderRadius: "1rem" }}
                  >
                    Confirm Request <Send size={15} />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Right: Branch Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col h-full"
            >
              <div className="mb-8">
                <div className="eyebrow text-sky mb-4">
                  <div className="w-6 h-px bg-sky" />
                  Elite Branch
                </div>
                <h3 className="display-heading text-3xl text-navy mb-4">Defence 6 Branch</h3>
                <p className="text-[#64748b] font-light leading-relaxed">
                  Located in the heart of Bukhari Commercial, our flagship branch offers an unparalleled medical environment designed for your comfort.
                </p>
              </div>

              <div className="grid gap-5 mb-8">
                <div className="relative group rounded-[2rem] overflow-hidden h-64 shadow-[0_8px_40px_rgba(12,27,46,0.08)]"
                  style={{ border: "1px solid #E8E5DF" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.57!2d67.06!3d24.81!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33c66f7f6368d%3A0xc3c5f590a996f9a0!2sBukhari%20Commercial%20Area%20Phase%206%20Defence%20Housing%20Authority%2C%20Karachi!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                    className="w-full h-full grayscale-[50%] group-hover:grayscale-0 transition-all duration-700"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                
                <div className="relative rounded-[2rem] overflow-hidden shadow-[0_8px_40px_rgba(12,27,46,0.06)] aspect-[16/9]"
                  style={{ border: "1px solid #E8E5DF" }}>
                  <img 
                    src="/reception.jpg" 
                    alt="Clinical Interior" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 right-4 glass px-4 py-2 rounded-full text-[10px] font-bold text-navy uppercase tracking-widest">
                    Flagship Interior
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="card-premium p-6 group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                    style={{ background: "rgba(14,165,233,0.08)", border: "1px solid rgba(14,165,233,0.15)" }}>
                    <MapPin size={18} className="text-sky" />
                  </div>
                  <h4 className="text-sm font-semibold text-navy mb-1">Address</h4>
                  <p className="text-xs text-[#64748b] leading-relaxed font-light">
                    Plot 11-C Lane 4, Bukhari Commercial Area, Phase 6, DHA, Karachi.
                  </p>
                </div>
                <div className="card-premium p-6 group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                    style={{ background: "rgba(14,165,233,0.08)", border: "1px solid rgba(14,165,233,0.15)" }}>
                    <Clock size={18} className="text-sky" />
                  </div>
                  <h4 className="text-sm font-semibold text-navy mb-1">Hours</h4>
                  <p className="text-xs text-[#64748b] leading-relaxed font-light">
                    Mon – Sat: 10AM – 9PM<br />
                    Sunday: Appointment Only
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
