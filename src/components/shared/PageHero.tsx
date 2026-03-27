import { SectionHeader } from "@/components/shared/SectionHeader";

type PageHeroProps = {
  title: string;
  description: string;
  eyebrow?: string;
};

export function PageHero({ title, description, eyebrow }: PageHeroProps) {
  return (
    <section className="section-space border-b border-border bg-muted/30">
      <div className="page-shell">
        <SectionHeader
          title={title}
          description={description}
          eyebrow={eyebrow}
        />
      </div>
    </section>
  );
}
