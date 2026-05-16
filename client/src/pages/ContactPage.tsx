import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Clock, Navigation } from "lucide-react";

export default function ContactPage() {
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
            Book a Dental Appointment in DHA Karachi
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold text-navy mb-8 tracking-tighter"
          >
            Contact Asthetik <br />
            <span className="text-sky font-normal italic">Dental Karachi.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-navy/60 text-lg max-w-2xl mx-auto font-light leading-relaxed"
          >
            Call us, WhatsApp us, or fill out the form below and our patient care team will confirm your appointment. We are located in Bukhari Commercial, Phase 6 DHA Karachi.
          </motion.p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Left: Contact Info */}
            <div>
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl font-bold text-navy mb-8">Clinical HQ</h2>
                  <div className="space-y-6">
                    <div className="flex gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-navy/5 flex items-center justify-center text-sky flex-shrink-0">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-navy mb-2">Location</h4>
                        <p className="text-navy/50 font-light leading-relaxed">
                          Plot 11-C Lane 4, Bukhari Commercial Area, <br />
                          Phase 6, DHA, Karachi, Pakistan.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-navy/5 flex items-center justify-center text-sky flex-shrink-0">
                        <Phone size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-navy mb-2">Direct Line</h4>
                        <p className="text-navy/50 font-light leading-relaxed">+92 333 2130700</p>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-navy/5 flex items-center justify-center text-sky flex-shrink-0">
                        <MessageCircle size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-navy mb-2">Concierge WhatsApp</h4>
                        <p className="text-navy/50 font-light leading-relaxed">Chat with our patient care team.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-navy mb-8">Clinical Hours</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-navy/5">
                      <span className="text-navy/50 font-light">Monday – Saturday</span>
                      <span className="text-navy font-bold">10:00 AM – 09:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-navy/5">
                      <span className="text-navy/50 font-light">Sunday</span>
                      <span className="text-sky font-bold">By Appointment Only</span>
                    </div>
                  </div>
                </div>

                <button className="w-full py-5 rounded-2xl bg-navy text-white font-bold uppercase tracking-widest hover:bg-sky transition-all flex items-center justify-center gap-3">
                  <Navigation size={18} />
                  Get Directions
                </button>
              </div>
            </div>

            {/* Right: Modern Form */}
            <div className="p-12 rounded-[3rem] bg-white shadow-2xl shadow-navy/5 border border-navy/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky/5 rounded-full -mr-16 -mt-16 blur-3xl" />
              <h2 className="text-3xl font-bold text-navy mb-8">Inquiry Form</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-navy/40 tracking-widest ml-4">Full Name</label>
                    <input type="text" className="w-full px-6 py-4 rounded-2xl bg-navy/5 border border-transparent focus:border-sky/30 focus:bg-white outline-none transition-all font-light" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-navy/40 tracking-widest ml-4">Phone Number</label>
                    <input type="tel" className="w-full px-6 py-4 rounded-2xl bg-navy/5 border border-transparent focus:border-sky/30 focus:bg-white outline-none transition-all font-light" placeholder="+92 XXX XXXXXXX" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-navy/40 tracking-widest ml-4">Interest</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-navy/5 border border-transparent focus:border-sky/30 focus:bg-white outline-none transition-all font-light appearance-none">
                    <option>Dental Implants</option>
                    <option>Smile Makeover</option>
                    <option>Orthodontics</option>
                    <option>General Checkup</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-navy/40 tracking-widest ml-4">Message</label>
                  <textarea rows={4} className="w-full px-6 py-4 rounded-2xl bg-navy/5 border border-transparent focus:border-sky/30 focus:bg-white outline-none transition-all font-light" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full py-5 rounded-2xl bg-sky text-white font-bold uppercase tracking-widest hover:bg-navy transition-all shadow-lg shadow-sky/20">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
