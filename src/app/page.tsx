import { AboutSnippet } from "@/components/sections/home/AboutSnippet";
import { BuyingGuidanceHighlight } from "@/components/sections/home/BuyingGuidanceHighlight";
import { ContactCTABanner } from "@/components/sections/home/ContactCTABanner";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { ServicesOverview } from "@/components/sections/home/ServicesOverview";
import { TestimonialsSnippet } from "@/components/sections/home/TestimonialsSnippet";
import { WhyChooseUs } from "@/components/sections/home/WhyChooseUs";
import { generateOrganizationSchema } from "@/lib/structured-data";

export const metadata = {
  title: 'Expert Piano Tuning & Services in Nairobi, Kenya',
  description:
    'Professional piano tuning, servicing, regulation, and expert buying guidance in Nairobi. Over 15 years of experience. Trusted by schools, churches, and musicians. Call +254 115 671 073.',
  alternates: {
    canonical: 'https://piano-specialists-nairobi.vercel.app',
  },
};

export default function HomePage() {
  const organizationSchema = generateOrganizationSchema();

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

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
