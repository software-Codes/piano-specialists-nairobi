import { SectionHeader } from "@/components/shared/SectionHeader";

export function HeroSection() {
  return (
    <section className="section-space">
      <div className="page-shell">
        <SectionHeader
          eyebrow="Home"
          title="Homepage scaffold"
          description="Minimal hero section placeholder for the home route."
        />
      </div>
    </section>
  );
}
