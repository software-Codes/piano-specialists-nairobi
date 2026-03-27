import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "dark" | "light" | "auto";
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: {
    mark: "h-8 w-8",
    title: "text-sm",
    city: "text-[10px]",
    line: "w-8",
  },
  md: {
    mark: "h-10 w-10",
    title: "text-base",
    city: "text-[11px]",
    line: "w-10",
  },
  lg: {
    mark: "h-12 w-12",
    title: "text-lg",
    city: "text-xs",
    line: "w-12",
  },
};

export function Logo({ variant = "auto", size = "md" }: LogoProps) {
  const palette =
    variant === "light"
      ? "text-background"
      : variant === "dark"
        ? "text-foreground"
        : "text-foreground";
  const currentSize = sizeClasses[size];

  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-3", palette)}
      aria-label="The Piano Specialists Nairobi"
    >
      <svg
        viewBox="0 0 64 64"
        aria-hidden="true"
        className={cn("shrink-0", currentSize.mark)}
      >
        <rect
          x="6"
          y="10"
          width="52"
          height="44"
          rx="10"
          className="fill-current"
          opacity="0.08"
        />
        <rect
          x="11"
          y="14"
          width="42"
          height="36"
          rx="6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M18 14v36M26 14v36M34 14v36M42 14v36"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M22 14v20M30 14v20M46 14v20"
          stroke="hsl(var(--accent))"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
      <span className="flex flex-col">
        <span
          className={cn(
            "font-heading font-semibold leading-tight",
            currentSize.title,
          )}
        >
          The Piano Specialists
        </span>
        <span className="mt-0.5 flex items-center gap-2">
          <span
            className={cn(
              "font-medium uppercase tracking-[0.28em] text-muted-foreground",
              currentSize.city,
            )}
          >
            Nairobi
          </span>
          <span
            className={cn("h-px bg-accent", currentSize.line)}
            aria-hidden="true"
          />
        </span>
      </span>
    </Link>
  );
}
