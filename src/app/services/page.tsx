import { ServicesPageSection } from "@/components/sections/services/ServicesPageSection";
import { PageHero } from "@/components/shared/PageHero";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Services page scaffold"
        description="Default route scaffold for piano tuning, servicing, repairs, and guidance."
      />
      <ServicesPageSection />
    </>
  );
}
