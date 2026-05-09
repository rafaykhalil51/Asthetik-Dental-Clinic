/**
 * ASTHETIK DENTAL — Home Page
 * Assembles all 15 sections in order
 * Design: Clinical Luxury — Navy/Gold/White palette, Playfair Display + Poppins
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import WhyTrustSection from "@/components/WhyTrustSection";
import TechnologySection from "@/components/TechnologySection";
import TreatmentsSection from "@/components/TreatmentsSection";
import AboutSection from "@/components/AboutSection";
import StandardsSection from "@/components/StandardsSection";
import LocationSection from "@/components/LocationSection";
import BrandsStrip from "@/components/BrandsStrip";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Sticky Navigation */}
      <Navbar />

      {/* 1. Hero / Banner Section */}
      <HeroSection />

      {/* 2. Trust Badges + 3. Google Reviews */}
      <TrustSection />

      {/* 4. Why Patients Trust Us + Brand Logos */}
      <WhyTrustSection />

      {/* 5. Smart Technology + 6. Gentle Dentistry */}
      <TechnologySection />

      {/* 7. Services / Treatments */}
      <TreatmentsSection />

      {/* 8. About / Lead Doctor + 9. Doctor Team */}
      <AboutSection />

      {/* 10. Clinical Standards + 11. Testimonials */}
      <StandardsSection />

      {/* 12. Location + 13. Book Consultation CTA + Booking Form */}
      <LocationSection />

      {/* 14. Partner Brands Strip */}
      <BrandsStrip />

      {/* 15. Footer */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
}
