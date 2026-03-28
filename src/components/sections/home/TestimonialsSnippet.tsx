"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { testimonials } from "@/data/testimonials";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-accent text-accent" : "text-border"}`}
        />
      ))}
    </div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" as const },
  }),
};

export function TestimonialsSnippet() {
  return (
    <section className="section-space">
      <div className="page-shell space-y-12">
        <SectionHeader
          eyebrow="Testimonials"
          title="What Our Clients Say"
          description="Don't just take our word for it — hear from the piano owners we've helped across Nairobi."
          centered
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.slice(0, 3).map((item, i) => (
            <motion.blockquote
              key={item.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col rounded-xl border border-border bg-card p-6"
            >
              <StarRating rating={item.rating} />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-4 border-t border-border pt-4">
                <p className="text-sm font-semibold text-card-foreground">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-light"
          >
            Read More Reviews
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
