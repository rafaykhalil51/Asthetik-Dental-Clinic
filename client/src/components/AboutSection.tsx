/**
 * ASTHETIK DENTAL — About / Lead Doctor + Team Section
 * Design: Split layout doctor profile + 4-card team grid
 */
import { CheckCircle } from "lucide-react";

const DOCTOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663644156437/2qUwipAsjCNzN4DpwqnJiA/doctor-profile-6a3ZSRWzsqUWB99wLdBXhv.webp";

const doctorCredentials = [
  "Specialist in Implantology & Oral Surgery",
  "Advanced Cosmetic Procedures",
  "International Training & Accreditation",
  "Trusted by Thousands of Patients",
];

const teamMembers = [
  {
    name: "Dr. [Name]",
    specialty: "General Dentist",
    initials: "GD",
    description: "BDS — Comprehensive dental care and preventive treatments",
  },
  {
    name: "Dr. [Name]",
    specialty: "Implantologist",
    initials: "IM",
    description: "Specialist in dental implants and oral surgery procedures",
  },
  {
    name: "Dr. [Name]",
    specialty: "Orthodontist",
    initials: "OR",
    description: "Specialist in braces, aligners, and bite correction",
  },
  {
    name: "Dr. [Name]",
    specialty: "Cosmetic Dentist",
    initials: "CD",
    description: "Expert in smile makeovers, veneers, and aesthetic dentistry",
  },
];

export default function AboutSection() {
  return (
    <>
      {/* Lead Doctor / About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left: Content */}
            <div>
              <div
                className="inline-block text-xs font-semibold tracking-widest uppercase mb-3"
                style={{ color: "#C9A84C", fontFamily: "'Poppins', sans-serif" }}
              >
                Our Leadership
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-5"
                style={{ color: "#0B1F3A", fontFamily: "'Playfair Display', serif" }}
              >
                Providing Comprehensive
                <br />
                <span style={{ color: "#C9A84C" }}>Dental Solutions</span>
              </h2>
              <p
                className="text-gray-600 mb-8 leading-relaxed text-sm"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Under expert leadership, Asthetik Dental and Implant Centre combines advanced dental knowledge with compassionate care. Our clinical team is dedicated to outlining treatment options, monitoring patient health, and maintaining the highest standards of clinical dental practice.
              </p>

              {/* Doctor Card */}
              <div
                className="flex gap-5 p-6 rounded-2xl border mb-8"
                style={{ borderColor: "#e8e0d0", backgroundColor: "#F8F6F0" }}
              >
                <img
                  src={DOCTOR_IMG}
                  alt="Lead Dentist at Asthetik Dental"
                  className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                />
                <div>
                  <div
                    className="font-bold text-base mb-0.5"
                    style={{ color: "#0B1F3A", fontFamily: "'Playfair Display', serif" }}
                  >
                    Dr. [Lead Dentist Name]
                  </div>
                  <div
                    className="text-xs mb-3"
                    style={{ color: "#C9A84C", fontFamily: "'Poppins', sans-serif" }}
                  >
                    BDS, FCPS — Clinical Director
                  </div>
                  <div className="flex flex-col gap-2">
                    {doctorCredentials.map((cred) => (
                      <div key={cred} className="flex items-center gap-2">
                        <CheckCircle
                          size={13}
                          style={{ color: "#C9A84C" }}
                          className="flex-shrink-0"
                        />
                        <span
                          className="text-xs text-gray-600"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          {cred}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={DOCTOR_IMG}
                  alt="Asthetik Dental Lead Doctor"
                  className="w-full h-[500px] object-cover object-top"
                />
              </div>
              {/* Gold accent badge */}
              <div
                className="absolute -bottom-5 -left-5 p-5 rounded-2xl shadow-xl"
                style={{ backgroundColor: "#0B1F3A" }}
              >
                <div
                  className="text-2xl font-bold"
                  style={{ color: "#C9A84C", fontFamily: "'Playfair Display', serif" }}
                >
                  10+
                </div>
                <div
                  className="text-xs text-white/70"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Years of Excellence
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="gold-divider" />

      {/* Doctor Team Section */}
      <section
        id="team"
        className="py-20"
        style={{ backgroundColor: "#F8F6F0" }}
      >
        <div className="container">
          <div className="text-center mb-12">
            <div
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: "#C9A84C", fontFamily: "'Poppins', sans-serif" }}
            >
              Our Team
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: "#0B1F3A", fontFamily: "'Playfair Display', serif" }}
            >
              Meet Our Dental Specialists
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.specialty}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-lg transition-shadow"
                style={{ borderColor: "#e8e0d0" }}
              >
                {/* Placeholder photo area */}
                <div
                  className="h-48 flex items-center justify-center"
                  style={{ backgroundColor: "#0B1F3A" }}
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold border-2"
                    style={{
                      backgroundColor: "rgba(201,168,76,0.15)",
                      borderColor: "#C9A84C",
                      color: "#C9A84C",
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    {member.initials}
                  </div>
                </div>
                <div className="p-5">
                  <div
                    className="font-bold text-sm mb-0.5"
                    style={{ color: "#0B1F3A", fontFamily: "'Poppins', sans-serif" }}
                  >
                    {member.name}
                  </div>
                  <div
                    className="text-xs font-semibold mb-2"
                    style={{ color: "#C9A84C", fontFamily: "'Poppins', sans-serif" }}
                  >
                    {member.specialty}
                  </div>
                  <p
                    className="text-xs text-gray-500 leading-relaxed"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
