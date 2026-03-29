"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, MessageCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { services } from "@/data/services";

/* ── animation helpers ─────────────────────────────────────────── */
const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

/* ── process steps ─────────────────────────────────────────────── */
const steps = [
  { step: "01", label: "Get in Touch", detail: "Call, WhatsApp, or email us to describe your piano's needs." },
  { step: "02", label: "We Assess", detail: "We evaluate your instrument and recommend the right service." },
  { step: "03", label: "We Service", detail: "Our technician visits and performs the work with precision." },
  { step: "04", label: "You Enjoy", detail: "Your piano sounds and plays exactly as it should." },
];

export function ServicesPageSection() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "254700000000";

  return (
    <>
      {/* ── Individual service sections ─────────────────────────── */}
      {services.map((service, index) => {
        const isEven = index % 2 === 0;
        const href =
          service.id === "buying-guidance" ? "/buying-guide" : `/services#${service.id}`;

        return (
          <section
            key={service.id}
            id={service.id}
            className={`scroll-mt-28 py-12 md:py-16 ${isEven ? "" : "bg-muted/30"}`}
          >
            <div className="page-shell">
              <div
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  isEven ? "" : "lg:[&>*:first-child]:order-2"
                }`}
              >
                {/* Image */}
                <motion.div
                  variants={isEven ? fadeLeft : fadeRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl"
                >
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Gold corner accent */}
                  <div className="absolute left-4 top-4 h-12 w-1 rounded-full bg-accent" />
                </motion.div>

                {/* Text */}
                <motion.div
                  variants={isEven ? fadeRight : fadeLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  {/* Icon + eyebrow */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <service.icon className="h-5 w-5 text-accent" />
                    </div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                      {service.title}
                    </p>
                  </div>

                  <h2 className="font-heading text-3xl font-bold leading-tight text-foreground md:text-4xl">
                    {service.tagline}
                  </h2>

                  <p className="leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  {/* Frequency badge */}
                  {service.frequency && (
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-accent" />
                      <Badge
                        variant="secondary"
                        className="border border-accent/20 bg-accent/10 text-accent"
                      >
                        Recommended: {service.frequency}
                      </Badge>
                    </div>
                  )}

                  <Separator className="bg-border" />

                  {/* Bullets */}
                  <ul className="space-y-2.5">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span className="text-sm leading-relaxed text-muted-foreground">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    <Button
                      asChild
                      className="bg-accent text-accent-foreground hover:bg-accent-light"
                    >
                      <Link href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Book This Service
                      </Link>
                    </Button>
                    {service.id === "buying-guidance" && (
                      <Button asChild variant="outline">
                        <Link href={href}>
                          Buying Guide
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── How It Works ────────────────────────────────────────── */}
      <section className="relative py-12 md:py-16 bg-primary">
        {/* Gold top accent */}
        <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

        <div className="page-shell space-y-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Our Process
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-primary-foreground/70">
              Simple, transparent, and professional — from first contact to a perfectly tuned piano.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6"
              >
                <p className="font-heading text-4xl font-bold text-accent/30">{s.step}</p>
                <h3 className="mt-3 font-heading text-lg font-semibold text-primary-foreground">
                  {s.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/60">
                  {s.detail}
                </p>
                {/* Connector line — desktop only */}
                {i < steps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-accent/30 lg:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ──────────────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="page-shell">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl rounded-2xl border border-accent/20 bg-accent/5 px-8 py-12 text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Ready to Book?
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
              Let&apos;s Take Care of Your Piano
            </h2>
            <p className="mt-4 text-muted-foreground">
              Contact us today for a free consultation. We serve piano owners across Nairobi and surrounding areas.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#25D366] text-white hover:bg-[#20BD5A]"
              >
                <Link href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Us
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">
                  Send a Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
