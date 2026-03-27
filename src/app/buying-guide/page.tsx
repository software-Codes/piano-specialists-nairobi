import { BuyingGuidePageSection } from "@/components/sections/buying-guide/BuyingGuidePageSection";
import { PageHero } from "@/components/shared/PageHero";

export default function BuyingGuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Buying Guide"
        title="Buying guide page scaffold"
        description="Default route scaffold for piano buying tips, checklists, and FAQs."
      />
      <BuyingGuidePageSection />
    </>
  );
}
