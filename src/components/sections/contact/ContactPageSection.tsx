"use client";

import { Suspense } from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { FormToggle } from "@/components/forms/FormToggle";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+254 115 671 073",
    href: "tel:+254115671073",
    description: "Call us during business hours",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+254 115 671 073",
    href: "https://wa.me/254115671073",
    description: "Quick response via WhatsApp",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@pianospecialists.co.ke",
    href: "mailto:info@pianospecialists.co.ke",
    description: "Send us an email anytime",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lavington, Nairobi",
    href: "#map",
    description: "Serving all of Nairobi",
  },
];

function ContactContent() {
  const searchParams = useSearchParams();
  const formType = searchParams.get("type");
  const [isConsultation, setIsConsultation] = useState(formType === "consultation");

  useEffect(() => {
    setIsConsultation(formType === "consultation");
  }, [formType]);

  return (
    <>
      {/* Contact Info Cards */}
      <section className="section-space">
        <div className="page-shell space-y-12">
          <SectionHeader
            eyebrow="Get In Touch"
            title="We're Here to Help"
            description="Reach out via your preferred method. We typically respond within 24 hours."
            centered
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="group h-full p-6 text-center transition-shadow hover:shadow-gold">
                  <Link
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noreferrer" : undefined}
                    className="block"
                  >
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 transition-colors group-hover:bg-accent/20">
                      <info.icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-card-foreground">
                      {info.label}
                    </h3>
                    <p className="mt-2 font-medium text-accent">{info.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {info.description}
                    </p>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section id="map" className="section-space bg-muted/30">
        <div className="page-shell space-y-8">
          <SectionHeader
            eyebrow="Find Us"
            title="Our Location"
            description="We serve clients across Nairobi and surrounding areas."
            centered
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl border border-border"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.29948865242!2d36.77125001388833!3d-1.2786235269064647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f19f7e205e1d1%3A0x8ec37f283d52eb04!2sLavington%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1774790424634!5m2!1sen!2ske"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-space bg-muted/30">
        <div className="page-shell">
          <div className="mx-auto max-w-4xl">
            <FormToggle 
              isConsultation={isConsultation} 
              onToggle={setIsConsultation} 
            />
            
            {!isConsultation ? <ContactForm /> : <ConsultationForm />}
          </div>
        </div>
      </section>
    </>
  );
}

export function ContactPageSection() {
  return (
    <Suspense fallback={<div className="section-space"><div className="page-shell text-center">Loading...</div></div>}>
      <ContactContent />
    </Suspense>
  );
}
