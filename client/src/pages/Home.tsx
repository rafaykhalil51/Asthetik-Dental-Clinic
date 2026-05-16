import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustMarquee from "@/components/TrustMarquee";
import StepsSection from "@/components/StepsSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import AboutSection from "@/components/AboutSection";
import TechnologySection from "@/components/TechnologySection";
import StandardsSection from "@/components/StandardsSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
      <Navbar />

      {/* 1. Vibrant Hero Section */}
      <HeroSection />

      {/* 2. Trust Marquee with Ratings */}
      <TrustMarquee />

      {/* 3. Steps to Care */}
      <StepsSection />

      {/* 4. Comprehensive Treatments */}
      <TreatmentsSection />

      {/* 5. Results (Before/After) */}
      <BeforeAfterSection />

      {/* 6. Specialist Team */}
      <AboutSection />

      {/* 7. Smart Technology Showcase */}
      <TechnologySection />

      {/* 8. Clinical Standards */}
      <StandardsSection />

      {/* 9. Location & Directions */}
      <LocationSection />

      {/* 10. Luxury Footer */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
}
