import { HeroSection } from "../components/sections/hero-section";
import { ServicesSection } from "../components/sections/services-section";
import { FeaturedAircraftSection } from "../components/sections/featured-aircraft-section";
import { TrustSection } from "../components/sections/trust-section";
import { CTASection } from "../components/sections/cta-section";
import { useEffect } from "react";

export function HomePage() {
  useEffect(() => {
    document.title = "Demirag Aviation Website";
  }, []);

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturedAircraftSection />
      <TrustSection />
      <CTASection />
    </>
  );
}