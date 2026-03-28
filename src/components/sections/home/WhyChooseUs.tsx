"use client";

import { motion } from "framer-motion";
import { Award, MapPin, Shield, Users } from "lucide-react";

import { SectionHeader } from "@/components/shared/SectionHeader";

const pillars = [
  {
    icon: Award,
    title: "Expert Technicians",
    description:
      "Our team brings years of hands-on experience with all piano types — acoustic, digital, grand, and upright.",
  },
  {
    icon: MapPin,
    title: "Nairobi-Based",
    description:
      "We're local, accessible, and committed to serving piano owners across Nairobi and surrounding areas.",
  },
  {
    icon: Shield,
    title: "Trusted & Reliable",
    description:
      "We take pride in punctuality, transparency, and delivering results that exceed expectations every time.",
  },
  {
    icon: Users,
    title: "Schools & Churches",
    description:
      "Trusted by schools, churches, and professional musicians for consistent, high-quality piano care.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export function WhyChooseUs() {
  return (
    <section className="section-space">
      <div className="page-shell space-y-12">
        <SectionHeader
          eyebrow="Why Us"
          title="Why Choose The Piano Specialists"
          description="We combine deep expertise with genuine passion to deliver piano services you can trust."
          centered
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-xl border border-border bg-card p-6 text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <pillar.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-card-foreground">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
