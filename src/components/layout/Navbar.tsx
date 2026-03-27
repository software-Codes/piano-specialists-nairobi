import Link from "next/link";

import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Logo } from "@/components/shared/Logo";
import { navigationItems } from "@/data/navigation";

export function Navbar() {
  return (
    <div className="border-b border-border bg-background/95 backdrop-blur">
      <div className="page-shell flex h-16 items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="text-sm font-medium text-accent hover:text-foreground"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
