import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import {
  BrandsSection,
  CaseStudiesSection,
  ServicesSection,
  WhyUsSection,
  ViralMemesSection,
  TestimonialsSection,
  AudienceSection,
  AboutSection,
  ProcessSection,
} from "@/components/BrandSections";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import FloatingEmojis from "@/components/FloatingEmojis";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingEmojis />
      <Navbar />
      <HeroSection />
      <StatsSection />
      <BrandsSection />
      <CaseStudiesSection />
      <ServicesSection />
      <WhyUsSection />
      <ViralMemesSection />
      <TestimonialsSection />
      <AudienceSection />
      <AboutSection />
      <ProcessSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
