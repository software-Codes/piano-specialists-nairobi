import { AboutSnippet } from "@/components/sections/home/AboutSnippet";
import { BuyingGuidanceHighlight } from "@/components/sections/home/BuyingGuidanceHighlight";
import { ContactCTABanner } from "@/components/sections/home/ContactCTABanner";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { ServicesOverview } from "@/components/sections/home/ServicesOverview";
import { TestimonialsSnippet } from "@/components/sections/home/TestimonialsSnippet";
import { WhyChooseUs } from "@/components/sections/home/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <AboutSnippet />
      <WhyChooseUs />
      <BuyingGuidanceHighlight />
      <TestimonialsSnippet />
      <ContactCTABanner />
    </>
  );
}
