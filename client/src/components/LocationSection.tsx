/**
 * ASTHETIK DENTAL — Location + Booking Form + CTA Strip
 * Design: Embedded map, location card, appointment form
 */
import { useState } from "react";
import { MapPin, Clock, Phone, MessageCircle, CheckCircle } from "lucide-react";

const treatments = [
  "General Dentistry",
  "Dental Implants",
  "Orthodontics / Braces",
  "Teeth Whitening",
  "Scaling & Polishing",
  "Wisdom Tooth Extraction",
  "Paediatric Dentistry",
  "Cosmetic / Smile Makeover",
  "Other",
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
    <>
      {/* CTA Strip */}
      <section
        className="py-16"
        style={{
          background: "linear-gradient(135deg, #0B1F3A 0%, #1a3a5c 100%)",
        }}
      >
        <div className="container text-center">
          <div
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#C9A84C", fontFamily: "'Poppins', sans-serif" }}
          >
            Ready to Begin?
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Schedule a Consultation
            <br />
            <span style={{ color: "#C9A84C" }}>with Our Dental Team</span>
          </h2>
          <p
            className="text-white/60 mb-8 max-w-lg mx-auto text-sm"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Take the first step towards your best smile. Our team is ready to guide you through your options with no pressure and full transparency.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 text-sm font-semibold rounded-full transition-all hover:scale-105"
              style={{
                backgroundColor: "#C9A84C",
                color: "#0B1F3A",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Book an Appointment
            </button>
            <a
              href="https://wa.me/92XXXXXXXXXX?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Asthetik%20Dental"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-sm font-semibold rounded-full border-2 text-white transition-all hover:bg-white/10 flex items-center gap-2"
              style={{
                borderColor: "rgba(255,255,255,0.3)",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Form */}
            <div>
              <div
                className="inline-block text-xs font-semibold tracking-widest uppercase mb-3"
                style={{ color: "#C9A84C", fontFamily: "'Poppins', sans-serif" }}
              >
                Appointment
              </div>
              <h2
                className="text-3xl font-bold mb-2"
                style={{ color: "#0B1F3A", fontFamily: "'Playfair Display', serif" }}
              >
                Book Your Consultation
              </h2>
              <p
                className="text-gray-500 text-sm mb-8"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Fill in the form below and our team will contact you to confirm your appointment.
              </p>

              {submitted ? (
                <div
                  className="p-8 rounded-2xl text-center border"
                  style={{ borderColor: "#C9A84C", backgroundColor: "#F8F6F0" }}
                >
                  <CheckCircle
                    size={48}
                    className="mx-auto mb-4"
                    style={{ color: "#C9A84C" }}
                  />
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: "#0B1F3A", fontFamily: "'Playfair Display', serif" }}
                  >
                    Request Received!
                  </h3>
                  <p
                    className="text-sm text-gray-600"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Thank you, {formData.name}! Our team will reach out to confirm your appointment shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: "#0B1F3A", fontFamily: "'Poppins', sans-serif" }}
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-xl border outline-none focus:border-yellow-500 transition-colors"
                        style={{
                          borderColor: "#d0c8b8",
                          fontFamily: "'Poppins', sans-serif",
                          color: "#0B1F3A",
                        }}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: "#0B1F3A", fontFamily: "'Poppins', sans-serif" }}
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+92 XXX XXXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-xl border outline-none focus:border-yellow-500 transition-colors"
                        style={{
                          borderColor: "#d0c8b8",
                          fontFamily: "'Poppins', sans-serif",
                          color: "#0B1F3A",
                        }}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: "#0B1F3A", fontFamily: "'Poppins', sans-serif" }}
                      >
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-xl border outline-none focus:border-yellow-500 transition-colors"
                        style={{
                          borderColor: "#d0c8b8",
                          fontFamily: "'Poppins', sans-serif",
                          color: "#0B1F3A",
                        }}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: "#0B1F3A", fontFamily: "'Poppins', sans-serif" }}
                      >
                        Treatment Interest
                      </label>
                      <select
                        value={formData.treatment}
                        onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-xl border outline-none focus:border-yellow-500 transition-colors"
                        style={{
                          borderColor: "#d0c8b8",
                          fontFamily: "'Poppins', sans-serif",
                          color: formData.treatment ? "#0B1F3A" : "#9ca3af",
                        }}
                      >
                        <option value="">Select treatment</option>
                        {treatments.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-xs font-semibold mb-1.5"
                      style={{ color: "#0B1F3A", fontFamily: "'Poppins', sans-serif" }}
                    >
                      Additional Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Any specific concerns or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-xl border outline-none focus:border-yellow-500 transition-colors resize-none"
                      style={{
                        borderColor: "#d0c8b8",
                        fontFamily: "'Poppins', sans-serif",
                        color: "#0B1F3A",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 text-sm font-semibold rounded-xl transition-all hover:opacity-90 hover:scale-[1.01]"
                    style={{
                      backgroundColor: "#0B1F3A",
                      color: "#C9A84C",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    Submit Appointment Request
                  </button>
                </form>
              )}
            </div>

            {/* Right: Location Info */}
            <div>
              <div
                className="inline-block text-xs font-semibold tracking-widest uppercase mb-3"
                style={{ color: "#C9A84C", fontFamily: "'Poppins', sans-serif" }}
              >
                Find Us
              </div>
              <h2
                className="text-3xl font-bold mb-6"
                style={{ color: "#0B1F3A", fontFamily: "'Playfair Display', serif" }}
              >
                Find Asthetik Dental
                <br />Near You
              </h2>

              {/* Map Embed */}
              <div className="rounded-2xl overflow-hidden shadow-lg mb-6 border" style={{ borderColor: "#e8e0d0" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.57!2d67.06!3d24.81!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33c66f7f6368d%3A0xc3c5f590a996f9a0!2sBukhari%20Commercial%20Area%20Phase%206%20Defence%20Housing%20Authority%2C%20Karachi!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Asthetik Dental Location - Bukhari Commercial DHA Phase 6"
                />
              </div>

              {/* Location Photo */}
              <div className="rounded-2xl overflow-hidden shadow-md mb-6 border aspect-[3/4]" style={{ borderColor: "#e8e0d0" }}>
                <img 
                  src="/reception.jpg" 
                  alt="Asthetik Dental Clinic Reception" 
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Location Details */}
              <div
                className="p-6 rounded-2xl border"
                style={{ borderColor: "#e8e0d0", backgroundColor: "#F8F6F0" }}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={18}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "#C9A84C" }}
                    />
                    <div>
                      <div
                        className="font-semibold text-sm"
                        style={{ color: "#0B1F3A", fontFamily: "'Poppins', sans-serif" }}
                      >
                        Asthetik Dental and Implant Centre
                      </div>
                      <div
                        className="text-xs text-gray-500 mt-0.5 leading-relaxed"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        Plot 11-C Lane 4, Bukhari Commercial Area
                        <br />
                        Phase 6, DHA, Karachi, 75500, Pakistan
                        <br />
                        <span className="text-[10px] opacity-70">Q3V8+GC2 DHA Phase 6</span>
                      </div>
                      <a
                        href="https://maps.google.com/?q=Asthetik+Dental+Bukhari+Commercial+Phase+6+DHA+Karachi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold mt-1 inline-block"
                        style={{ color: "#C9A84C", fontFamily: "'Poppins', sans-serif" }}
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock
                      size={18}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "#C9A84C" }}
                    />
                    <div>
                      <div
                        className="font-semibold text-sm mb-1"
                        style={{ color: "#0B1F3A", fontFamily: "'Poppins', sans-serif" }}
                      >
                        Operating Hours
                      </div>
                      <div
                        className="text-xs text-gray-500"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        Mon – Sat: 10:00 AM – 9:00 PM
                        <br />
                        Sunday: By Appointment Only
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone
                      size={18}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "#C9A84C" }}
                    />
                    <div>
                      <div
                        className="font-semibold text-sm"
                        style={{ color: "#0B1F3A", fontFamily: "'Poppins', sans-serif" }}
                      >
                        Contact
                      </div>
                      <div
                        className="text-xs text-gray-500 mt-0.5"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        Phone: +92-XXX-XXXXXXX
                        <br />
                        WhatsApp available
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
