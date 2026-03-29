"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { aboutImages } from "@/data/images";
import {
  ourStory,
  ourValues,
  expertise,
  clientTypes,
  stats,
} from "@/data/about";

/* ── Animation variants ─────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function AboutPageSection() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "254700000000";

  return (
    <>
      {/* ── Our Story Section ─────────────────────────────────────── */}
      <section className="section-space">
        <div className="page-shell">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Text */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                  Our Story
                </p>
                <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-foreground md:text-4xl">
                  {ourStory.headline}
                </h2>
              </div>

              <div className="space-y-4">
                {ourStory.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <Separator className="bg-border" />

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <p className="font-heading text-3xl font-bold text-accent">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src={aboutImages.story.src}
                alt={aboutImages.story.alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gold corner accent */}
              <div className="absolute left-4 top-4 h-12 w-1 rounded-full bg-accent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Our Values Section ────────────────────────────────────── */}
      <section className="section-space bg-muted/30">
        <div className="page-shell space-y-12">
          <SectionHeader
            eyebrow="Our Values"
            title="What Drives Us"
            description="The principles that guide every service we provide and every relationship we build."
            centered
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ourValues.map((value, i) => (
              <motion.div
                key={value.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="group h-full p-6 transition-shadow hover:shadow-gold">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 transition-colors group-hover:bg-accent/20">
                    <value.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-card-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Expertise Section ─────────────────────────────────────── */}
      <section className="section-space">
        <div className="page-shell">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:order-1"
            >
              <Image
                src={aboutImages.technician.src}
                alt={aboutImages.technician.alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gold corner accent */}
              <div className="absolute right-4 top-4 h-12 w-1 rounded-full bg-accent" />
            </motion.div>

            {/* Text */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6 lg:order-2"
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                  Our Expertise
                </p>
                <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-foreground md:text-4xl">
                  {expertise.headline}
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {expertise.description}
                </p>
              </div>

              <Separator className="bg-border" />

              <ul className="space-y-3">
                {expertise.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="leading-relaxed text-muted-foreground">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <Button
                  asChild
                  className="bg-accent text-accent-foreground hover:bg-accent-light"
                >
                  <Link href="/services">
                    View Our Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Who We Serve Section ──────────────────────────────────── */}
      <section className="section-space bg-muted/30">
        <div className="page-shell space-y-12">
          <SectionHeader
            eyebrow="Who We Serve"
            title="Trusted Across Nairobi's Music Community"
            description="From homes to concert halls, we're proud to serve diverse clients who share a love for piano music."
            centered
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {clientTypes.map((client, i) => (
              <motion.div
                key={client.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="group h-full p-6 text-center transition-shadow hover:shadow-gold">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 transition-colors group-hover:bg-accent/20">
                    <client.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-card-foreground">
                    {client.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {client.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ───────────────────────────────────────────── */}
      <section className="section-space">
        <div className="page-shell">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl rounded-2xl border border-accent/20 bg-accent/5 px-8 py-12 text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Work With Us
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
              Let&apos;s Care for Your Piano Together
            </h2>
            <p className="mt-4 text-muted-foreground">
              Whether you need a one-time tuning or ongoing maintenance, we're
              here to help. Reach out today for a free consultation.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#25D366] text-white hover:bg-[#20BD5A]"
              >
                <Link
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                >
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
