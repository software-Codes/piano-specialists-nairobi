import { SectionHeader } from "@/components/shared/SectionHeader";

export function AboutSnippet() {
  return (
    <section className="section-space border-t border-border bg-muted/30">
      <div className="page-shell">
        <SectionHeader
          eyebrow="About"
          title="About snippet scaffold"
          description="Placeholder section for a short business introduction on the homepage."
        />
      </div>
    </section>
  );
}
