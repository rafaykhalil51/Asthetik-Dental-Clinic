import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { Shield, Award, Users, Heart } from "lucide-react";

const values = [
  {
    icon: <Shield className="text-sky" />,
    title: "Clinical Excellence",
    description: "We follow the highest international standards in dental diagnostics, treatment planning, and patient safety at every step."
  },
  {
    icon: <Award className="text-sky" />,
    title: "Master Craftsmanship",
    description: "Every smile we create is uniquely designed using digital facial analysis and aesthetic dentistry principles tailored to you."
  },
  {
    icon: <Users className="text-sky" />,
    title: "Patient-Centered Care",
    description: "Your comfort and long-term oral health guide everything we do, from your first consultation through your final result."
  },
  {
    icon: <Heart className="text-sky" />,
    title: "Ethical and Transparent",
    description: "We provide clear, evidence-based treatment options with honest pricing so you can make fully informed decisions."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent)]" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sky text-xs font-bold uppercase tracking-[0.2em] mb-8"
          >
            About Asthetik Dental
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight"
          >
            Redefining the <br />
            <span className="text-sky font-normal italic">Dental Experience.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl mx-auto font-light leading-relaxed"
          >
            Asthetik Dental and Implant Centre in DHA Karachi is where advanced clinical precision meets a truly patient-focused experience. Led by Dr. Zaheer Hussain with over 10 years of expertise, we are Karachi's trusted choice for implants, smile makeovers, orthodontics, and comprehensive dental care.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-8 tracking-tight">
                A Vision for <br />
                <span className="text-sky">Modern Dentistry.</span>
              </h2>
              <div className="space-y-6 text-navy/70 text-lg font-light leading-relaxed">
                <p>
                  Founded with a clear vision to elevate dental care in Pakistan, Asthetik Dental and Implant Centre has become the benchmark for clinical excellence in Karachi. Our clinic serves patients from across DHA, Clifton, and beyond, offering world-class treatments in a premium environment.
                </p>
                <p>
                  We believe dental care should be precise, painless, and deeply personalized. By integrating advanced digital workflows, 3D imaging, and laser dentistry with a highly trained specialist team, we achieve results that are both functionally superior and aesthetically beautiful.
                </p>
                <p>
                  Whether you need a routine checkup, a full smile makeover, or complex dental implants, Asthetik Dental delivers the right treatment with the care and attention you deserve.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=85&w=800"
                  alt="Asthetik Dental Clinic Interior DHA Karachi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-sky/10 blur-3xl -z-10 rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-32 bg-navy relative overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Asthetik Dental</h2>
            <p className="text-white/40 text-lg font-light max-w-2xl mx-auto">The core principles behind every treatment we provide to patients in DHA Karachi and beyond.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-sky/50 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{v.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed font-light">{v.description}</p>
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
