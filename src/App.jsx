import React from "react";
import HeroSection from "./Hero/HeroSection";
import FeatureSection from "./Feature/FeatureSection";
import ServiceSection from "./Service/ServiceSection";
import ClientTestimonial from "./Clienttestimony/ClientTestimonial";
import PricingSection from "./Pricing/PricingSection";
import TestimonialSection from "./Testimonial/Testimonial";
import CtaSection from "./Action/ActionSection";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <ServiceSection />
      <ClientTestimonial />
      <PricingSection />
      <TestimonialSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

export default App;
