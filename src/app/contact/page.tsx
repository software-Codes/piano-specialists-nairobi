import { ContactPageSection } from "@/components/sections/contact/ContactPageSection";
import { PageHero } from "@/components/shared/PageHero";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact page scaffold"
        description="Default route scaffold for the form, business details, and map embed."
      />
      <ContactPageSection />
    </>
  );
}
