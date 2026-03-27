import { AboutPageSection } from "@/components/sections/about/AboutPageSection";
import { PageHero } from "@/components/shared/PageHero";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About page scaffold"
        description="Default route scaffold for the business story, values, and trust signals."
      />
      <AboutPageSection />
    </>
  );
}
