/**
 * ASTHETIK DENTAL — Trust Badges + Google Reviews
 * Design: Row of circular badge icons + Google Reviews widget with testimonials
 */
import { Star, ExternalLink } from "lucide-react";

const badges = [
  {
    icon: "🔬",
    label: "Evidence-Based Treatment",
  },
  {
    icon: "🩺",
    label: "Advanced Diagnostics",
  },
  {
    icon: "💉",
    label: "Painless Procedures",
  },
  {
    icon: "🌍",
    label: "Internationally Trained Doctors",
  },
  {
    icon: "🏅",
    label: "Internationally Certified",
  },
  {
    icon: "😊",
    label: "Patient-First Approach",
  },
];

const reviews = [
  {
    name: "Ayesha M.",
    rating: 5,
    text: "Absolutely painless experience! The team at Asthetik Dental made me feel completely at ease. My implant procedure was smooth and the results are stunning.",
    date: "2 weeks ago",
  },
  {
    name: "Bilal K.",
    rating: 5,
    text: "Best dental clinic in DHA, Karachi. The doctors are highly professional and use the latest technology. My Invisalign treatment has transformed my smile.",
    date: "1 month ago",
  },
  {
    name: "Sana R.",
    rating: 5,
    text: "Brought my daughter for her first dental visit and she wasn't scared at all! The staff are so gentle and patient with children. Highly recommend.",
    date: "3 weeks ago",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill="#C9A84C" stroke="none" />
      ))}
    </div>
  );
}

export default function TrustSection() {
  return (
    <>
      {/* Trust Badges Bar */}
      <section
        id="trust-badges"
        className="py-12"
        style={{ backgroundColor: "#F8F6F0" }}
      >
        <div className="container">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {badges.map((badge) => (
              <div
                key={badge.label}
                className="flex flex-col items-center text-center gap-3"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-md border-2"
                  style={{
                    backgroundColor: "#0B1F3A",
                    borderColor: "#C9A84C",
                  }}
                >
                  {badge.icon}
                </div>
                <span
                  className="text-xs font-medium leading-tight"
                  style={{
                    color: "#0B1F3A",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="gold-divider" />

      {/* Google Reviews Section */}
      <section id="reviews" className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Google Rating Widget */}
            <div>
              <div
                className="inline-block text-xs font-semibold tracking-widest uppercase mb-3"
                style={{ color: "#C9A84C", fontFamily: "'Poppins', sans-serif" }}
              >
                Google Reviews
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: "#0B1F3A", fontFamily: "'Playfair Display', serif" }}
              >
                What Our Patients Say
              </h2>
              <div
                className="flex items-center gap-4 p-6 rounded-2xl shadow-lg border mb-6"
                style={{ borderColor: "#e8e0d0" }}
              >
                <div className="text-center">
                  <div
                    className="text-5xl font-bold"
                    style={{ color: "#0B1F3A", fontFamily: "'Playfair Display', serif" }}
                  >
                    4.9
                  </div>
                  <StarRating count={5} />
                  <div
                    className="text-xs text-gray-500 mt-1"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Based on Google Reviews
                  </div>
                </div>
                <div className="flex-1 pl-4 border-l" style={{ borderColor: "#e8e0d0" }}>
                  <div
                    className="font-semibold text-sm mb-1"
                    style={{ color: "#0B1F3A", fontFamily: "'Poppins', sans-serif" }}
                  >
                    Asthetik Dental and Implant Centre
                  </div>
                  <div
                    className="text-xs text-gray-500 mb-3"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    DHA Chapter, Karachi
                  </div>
                  <a
                    href="https://share.google/sSrL2D6kPBB5QOMoN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full transition-all hover:opacity-90"
                    style={{
                      backgroundColor: "#0B1F3A",
                      color: "#C9A84C",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    See All Reviews on Google
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Review Cards */}
            <div className="flex flex-col gap-4">
              {reviews.map((review) => (
                <div
                  key={review.name}
                  className="p-5 rounded-xl border shadow-sm hover:shadow-md transition-shadow"
                  style={{ borderColor: "#e8e0d0" }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div
                        className="font-semibold text-sm"
                        style={{ color: "#0B1F3A", fontFamily: "'Poppins', sans-serif" }}
                      >
                        {review.name}
                      </div>
                      <div
                        className="text-xs text-gray-400"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {review.date}
                      </div>
                    </div>
                    <StarRating count={review.rating} />
                  </div>
                  <p
                    className="text-sm text-gray-600 leading-relaxed"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    "{review.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
