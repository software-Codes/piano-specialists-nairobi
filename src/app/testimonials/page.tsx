import { TestimonialsPageSection } from "@/components/sections/testimonials/TestimonialsPageSection";
import { PageHero } from "@/components/shared/PageHero";

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Testimonials page scaffold"
        description="Default route scaffold for client reviews, case studies, and credibility content."
      />
      <TestimonialsPageSection />
    </>
  );
}
