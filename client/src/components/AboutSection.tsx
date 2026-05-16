/**
 * ASTHETIK DENTAL — About / Lead Doctor Section
 * Design: Split layout doctor profile with credentials
 */
import { CheckCircle } from "lucide-react";

const DOCTOR_IMG = "/doctor.png";

const doctorCredentials = [
  "BDS, Specialist in Implantology & Oral Surgery",
  "Advanced Cosmetic & Restorative Procedures",
  "International Training & Accreditation",
  "Trusted by Thousands of Patients in DHA",
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
                Under the expert leadership of Dr. Zaheer Hussain, Asthetik Dental and Implant Centre combines advanced dental knowledge with compassionate care. Our clinical team is dedicated to outlining treatment options, monitoring patient health, and maintaining the highest standards of clinical dental practice.
              </p>

              {/* Doctor Card */}
              <div
                className="flex gap-5 p-6 rounded-2xl border mb-8"
                style={{ borderColor: "#e8e0d0", backgroundColor: "#F8F6F0" }}
              >
                <img
                  src={DOCTOR_IMG}
                  alt="Dr. Zaheer Hussain"
                  className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                />
                <div>
                  <div
                    className="font-bold text-base mb-0.5"
                    style={{ color: "#0B1F3A", fontFamily: "'Playfair Display', serif" }}
                  >
                    Dr. Zaheer Hussain
                  </div>
                  <div
                    className="text-xs mb-3"
                    style={{ color: "#C9A84C", fontFamily: "'Poppins', sans-serif" }}
                  >
                    CEO & Clinical Director
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


    </>
  );
}
