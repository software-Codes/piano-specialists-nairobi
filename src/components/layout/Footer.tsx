import { Logo } from "@/components/shared/Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="page-shell py-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <Logo />
          <p className="text-sm text-muted-foreground">
            Project scaffold for The Piano Specialists Nairobi.
          </p>
        </div>
      </div>
    </footer>
  );
}
