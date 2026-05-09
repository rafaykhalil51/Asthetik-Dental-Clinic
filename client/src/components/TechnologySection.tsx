/**
 * ASTHETIK DENTAL — Smart Technology + Gentle Dentistry
 * Design: White bg tech cards + split-screen gentle dentistry section
 */
import { CheckCircle } from "lucide-react";

const TECH_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663644156437/2qUwipAsjCNzN4DpwqnJiA/dental-technology-4q2coUkpCs3Sq9Dk9gGKds.webp";
const GENTLE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663644156437/2qUwipAsjCNzN4DpwqnJiA/gentle-dentistry-nbm3F2W7qFu4VFv3XaV4gN.webp";

const technologies = [
  {
    icon: "🔭",
    title: "Digital X-Ray & CBCT 3D Imaging",
    description:
      "Full-mouth scans for accurate diagnosis. Our CBCT scanner provides a comprehensive 3D view of your teeth, jaws, and surrounding structures with exceptional clarity beyond traditional imaging.",
  },
  {
    icon: "💉",
    title: "Painless Injection System",
    description:
      "Computer-controlled delivery for zero discomfort. Our ICT system delivers local anaesthetic gently and precisely at a controlled pressure, minimising discomfort during treatment.",
  },
  {
    icon: "📷",
    title: "Intraoral Camera",
    description:
      "Real-time visuals of your teeth and gum health. See exactly what our dentists see — enabling transparent, informed treatment decisions and better patient understanding.",
  },
];

const gentlePoints = [
  "Every patient is treated with comfort and communication as top priorities",
  "Pain-free techniques minimise stress and anxiety",
  "Procedures completed according to patient comfort and needs",
  "Specialised in providing every child dental care",
  "Treatment plans explained clearly before any procedure begins",
];

export default function TechnologySection() {
  return (
    <>
      {/* Smart Technology Section */}
      <section id="technology" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <div
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: "#C9A84C", fontFamily: "'Poppins', sans-serif" }}
            >
              Innovation
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#0B1F3A", fontFamily: "'Playfair Display', serif" }}
            >
              Smart Technology for Precise,
              <br />
              <span style={{ color: "#C9A84C" }}>Comfortable Care</span>
            </h2>
            <p
              className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              We invest in the latest dental technology to ensure every diagnosis is accurate, every procedure is comfortable, and every outcome is predictable.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left: Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={TECH_IMG}
                alt="Dental Technology at Asthetik Dental"
                className="w-full h-72 md:h-96 object-cover"
              />
            </div>

            {/* Right: Tech Cards */}
            <div className="flex flex-col gap-5">
              {technologies.map((tech) => (
                <div
                  key={tech.title}
                  className="flex gap-4 p-5 rounded-xl border card-hover"
                  style={{ borderColor: "#e8e0d0" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ backgroundColor: "#F8F6F0" }}
                  >
                    {tech.icon}
                  </div>
                  <div>
                    <h3
                      className="font-semibold text-sm mb-1"
                      style={{ color: "#0B1F3A", fontFamily: "'Poppins', sans-serif" }}
                    >
                      {tech.title}
                    </h3>
                    <p
                      className="text-xs text-gray-500 leading-relaxed"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {tech.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="gold-divider" />

      {/* Gentle Dentistry Section */}
      <section
        id="gentle-dentistry"
        className="py-20"
        style={{ backgroundColor: "#F8F6F0" }}
      >
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
              <img
                src={GENTLE_IMG}
                alt="Gentle Dentistry for Families"
                className="w-full h-80 md:h-[420px] object-cover"
              />
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2">
              <div
                className="inline-block text-xs font-semibold tracking-widest uppercase mb-3"
                style={{ color: "#C9A84C", fontFamily: "'Poppins', sans-serif" }}
              >
                Patient Comfort
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: "#0B1F3A", fontFamily: "'Playfair Display', serif" }}
              >
                Gentle Dentistry
                <br />
                <span style={{ color: "#C9A84C" }}>for Every Patient</span>
              </h2>
              <p
                className="text-gray-600 mb-8 leading-relaxed text-sm"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Our approach to care prioritises patient comfort, clear communication, and minimally invasive techniques — particularly for anxious patients and children.
              </p>

              <div className="flex flex-col gap-4">
                {gentlePoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle
                      size={16}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "#C9A84C" }}
                    />
                    <span
                      className="text-sm text-gray-700 leading-relaxed"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
