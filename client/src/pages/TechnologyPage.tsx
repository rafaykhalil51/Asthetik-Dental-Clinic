import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { Cpu, Microscope, Zap, Database, Layers, Binary } from "lucide-react";

const techs = [
  {
    icon: <Cpu className="text-sky" />,
    title: "Full Digital Workflow",
    description: "From intraoral scanning to 3D printing, our entire clinical process is digitized for unmatched accuracy, speed, and predictability in every procedure."
  },
  {
    icon: <Microscope className="text-sky" />,
    title: "CBCT 3D Imaging",
    description: "High-resolution 3D cone-beam CT imaging for precise bone and tissue analysis, enabling safer implant placements and complex surgical planning."
  },
  {
    icon: <Zap className="text-sky" />,
    title: "Laser Dentistry",
    description: "Minimally invasive soft-tissue procedures using dental lasers, resulting in faster healing, reduced discomfort, and no need for traditional surgical cuts."
  },
  {
    icon: <Database className="text-sky" />,
    title: "Digital Smile Design",
    description: "Visualize your final smile result in 3D before any treatment begins, using advanced facial mapping and digital design tools for a truly personalized outcome."
  },
  {
    icon: <Layers className="text-sky" />,
    title: "In-House CAD/CAM Studio",
    description: "We design and fabricate ceramic crowns, veneers, and bridges in-house using CAD/CAM technology for a perfect fit and natural aesthetic, often same-day."
  },
  {
    icon: <Binary className="text-sky" />,
    title: "AI-Assisted Diagnostics",
    description: "AI-powered X-ray and scan analysis helps our team detect cavities, bone loss, and other issues at the earliest stages for more proactive, effective care."
  }
];

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-40 bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(56,189,248,0.15),transparent_70%)]" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sky text-xs font-bold uppercase tracking-[0.2em] mb-8"
          >
            Dental Technology in DHA Karachi
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter"
          >
            Advanced Dental <br />
            <span className="text-sky font-normal italic">Technology.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-lg max-w-2xl mx-auto font-light leading-relaxed"
          >
            Asthetik Dental invests in the most advanced dental technology available so every patient in Karachi benefits from faster, safer, and more precise treatment outcomes. From CBCT 3D imaging to AI diagnostics, our equipment sets a new standard for dental care in Pakistan.
          </motion.p>
        </div>
      </section>

      {/* Tech Grid */}
      <section className="py-32 -mt-20 relative z-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techs.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-12 rounded-[3rem] bg-white border border-navy/5 shadow-2xl shadow-navy/5 hover:shadow-sky/10 transition-all group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-navy/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-sky/10 transition-all duration-500">
                  {t.icon}
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">{t.title}</h3>
                <p className="text-navy/60 text-base font-light leading-relaxed">{t.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-navy relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight">
              Why Technology Matters in Modern Dentistry
            </h2>
            <div className="w-20 h-1 bg-sky mx-auto mb-12" />
            <p className="text-white/50 text-xl font-light leading-relaxed mb-8">
              At Asthetik Dental, we don't adopt technology for novelty. Every piece of equipment we use is selected specifically because it improves treatment accuracy, reduces patient discomfort, and extends the long-term durability of your dental results.
            </p>
            <p className="text-white/40 text-lg font-light leading-relaxed">
              Patients searching for the best dental technology in Karachi, DHA, or Phase 6 will find that our clinic operates at a standard comparable to internationally accredited dental facilities.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
