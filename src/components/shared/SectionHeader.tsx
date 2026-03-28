import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  centered?: boolean;
};

export function SectionHeader({
  title,
  description,
  eyebrow,
  centered,
}: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl space-y-3", centered && "mx-auto text-center")}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-base text-muted-foreground md:text-lg">{description}</p>
      )}
    </div>
  );
}
