/**
 * ASTHETIK DENTAL — Treatments Section
 * Design: Navy bg, 8 treatment cards with images overlaid with text (KL Dental style)
 */

const treatments = [
  {
    title: "General Dentistry",
    description:
      "Comprehensive check-ups, fillings, and preventive care to maintain your oral health and catch issues early.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663644156437/2qUwipAsjCNzN4DpwqnJiA/treatment-general-dentistry-cAUqC33LTHT5FjxzdtEsk4.webp",
    href: "#booking",
  },
  {
    title: "Dental Implants",
    description:
      "Permanent, natural-looking tooth replacements that restore function and aesthetics with long-lasting results.",
    image: "/dental-implant.jpg",
    href: "#booking",
  },
  {
    title: "Orthodontics / Braces",
    description:
      "Correct crooked teeth and improve your bite with traditional braces or modern clear aligner systems.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663644156437/2qUwipAsjCNzN4DpwqnJiA/treatment-orthodontics-BomJZDyXR2i4YDR6n4ZVW3.webp",
    href: "#booking",
  },
  {
    title: "Teeth Whitening",
    description:
      "Professional-grade whitening treatments that deliver dramatic, safe results for a brighter, more confident smile.",
    image: "/teeth-whitening.jpg",
    href: "#booking",
  },
  {
    title: "Scaling & Polishing",
    description:
      "Remove plaque, calculus, and surface stains to keep your teeth and gums healthy and looking their best.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663644156437/2qUwipAsjCNzN4DpwqnJiA/treatment-scaling-polishing-cuXNoZ7XGKWS74iVd9ggCP.webp",
    href: "#booking",
  },
  {
    title: "Wisdom Tooth Extraction",
    description:
      "Safe, comfortable removal of problematic wisdom teeth to prevent infection, crowding, and future complications.",
    image: "/wisdom-tooth.jpg",
    href: "#booking",
  },
  {
    title: "Paediatric Dentistry",
    description:
      "Gentle, child-friendly dental care that builds positive habits and healthy smiles from an early age.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663644156437/2qUwipAsjCNzN4DpwqnJiA/treatment-pediatric-7U7NYKsE2Jg7sjpZpMv98j.webp",
    href: "#booking",
  },
  {
    title: "Cosmetic / Smile Makeover",
    description:
      "Transform your smile with veneers, bonding, and comprehensive cosmetic treatments tailored to your goals.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663644156437/2qUwipAsjCNzN4DpwqnJiA/treatment-cosmetic-smile-eE2VqVVgybcZ8KMx5XiP8E.webp",
    href: "#booking",
  },
];

export default function TreatmentsSection() {
  const scrollToBooking = () => {
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="treatments"
      className="py-20"
      style={{ backgroundColor: "#0B1F3A" }}
    >
      <div className="container">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-12">
          <div>
            <div
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: "#C9A84C", fontFamily: "'Poppins', sans-serif" }}
            >
              Treatments
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Care Tailored to
              <br />
              <span style={{ color: "#C9A84C" }}>Your Needs</span>
            </h2>
          </div>
          <div>
            <p
              className="text-white/60 text-sm leading-relaxed mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              From general check-ups to cosmetic and specialist dental services, we truly master techniques, including for On-Time/ASAP appointments and ensuring optimal dental care.
            </p>
            <button
              onClick={scrollToBooking}
              className="px-6 py-3 text-sm font-semibold rounded-full border-2 text-white transition-all hover:bg-white/10"
              style={{
                borderColor: "#C9A84C",
                color: "#C9A84C",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              View All Treatments
            </button>
          </div>
        </div>

        {/* Treatment Cards Grid with Images */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {treatments.map((treatment) => (
            <button
              key={treatment.title}
              onClick={scrollToBooking}
              className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.02]"
              style={{
                border: "2px dashed rgba(201,168,76,0.3)",
              }}
            >
              {/* Background Image */}
              <img
                src={treatment.image}
                alt={treatment.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Text Content - Positioned at Bottom */}
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <h3
                  className="font-semibold text-sm text-white mb-2 group-hover:text-yellow-300 transition-colors"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {treatment.title}
                </h3>
                <p
                  className="text-xs text-white/80 leading-relaxed line-clamp-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {treatment.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
