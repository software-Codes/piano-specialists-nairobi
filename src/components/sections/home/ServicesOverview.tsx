"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export function ServicesOverview() {
  return (
    <section className="section-space">
      <div className="page-shell space-y-12">
        <SectionHeader
          eyebrow="What We Do"
          title="Our Services"
          description="From precision tuning to expert buying advice — we cover every aspect of piano care."
          centered
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const href =
              service.id === "buying-guidance"
                ? "/buying-guide"
                : `/services#${service.id}`;

            return (
              <motion.div
                key={service.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-gold"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-card-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {service.tagline}
                </p>
                <Link
                  href={href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-light"
                >
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Button asChild variant="outline">
            <Link href="/services" className="inline-flex items-center gap-2">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
