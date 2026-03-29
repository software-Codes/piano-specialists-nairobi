"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  consultationFormSchema,
  type ConsultationFormData,
} from "@/types/forms";
import { sendConsultationEmail } from "@/lib/emailjs";

const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function ConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const form = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      budget: "",
      space: "",
      pianoType: "",
      experience: "",
      primaryUse: "",
      additionalNotes: "",
    },
  });

  const onSubmit = async (data: ConsultationFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await sendConsultationEmail(data);
      setSubmitStatus("success");
      form.reset();
    } catch (error) {
      console.error("Consultation form error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      variants={fadeLeft}
      initial="hidden"
      animate="visible"
    >
      <Card className="p-8">
        <div className="mb-6">
          <h2 className="font-heading text-2xl font-bold text-card-foreground">
            Piano Buying Consultation
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Tell us about your needs and we'll provide personalized piano recommendations.
          </p>
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="cons-name">Name *</Label>
              <Input
                id="cons-name"
                placeholder="Your full name"
                {...form.register("name")}
                className={form.formState.errors.name ? "border-destructive" : ""}
              />
              {form.formState.errors.name && (
                <p className="text-xs text-destructive">
                  {form.formState.errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="cons-email">Email *</Label>
              <Input
                id="cons-email"
                type="email"
                placeholder="your@email.com"
                {...form.register("email")}
                className={form.formState.errors.email ? "border-destructive" : ""}
              />
              {form.formState.errors.email && (
                <p className="text-xs text-destructive">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cons-phone">Phone *</Label>
            <Input
              id="cons-phone"
              type="tel"
              placeholder="+254 700 000 000"
              {...form.register("phone")}
              className={form.formState.errors.phone ? "border-destructive" : ""}
            />
            {form.formState.errors.phone && (
              <p className="text-xs text-destructive">
                {form.formState.errors.phone.message}
              </p>
            )}
          </div>

          <Separator />

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="budget">Budget Range *</Label>
              <select
                id="budget"
                {...form.register("budget")}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Select budget...</option>
                <option value="under-100k">Under KES 100,000</option>
                <option value="100k-200k">KES 100,000 - 200,000</option>
                <option value="200k-500k">KES 200,000 - 500,000</option>
                <option value="500k-1m">KES 500,000 - 1,000,000</option>
                <option value="over-1m">Over KES 1,000,000</option>
                <option value="not-sure">Not sure / Need guidance</option>
              </select>
              {form.formState.errors.budget && (
                <p className="text-xs text-destructive">
                  {form.formState.errors.budget.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="space">Available Space *</Label>
              <select
                id="space"
                {...form.register("space")}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Select space...</option>
                <option value="small-room">Small room / Apartment</option>
                <option value="medium-room">Medium room / Living room</option>
                <option value="large-room">Large room / Studio</option>
                <option value="hall">Hall / Performance space</option>
                <option value="not-sure">Not sure</option>
              </select>
              {form.formState.errors.space && (
                <p className="text-xs text-destructive">
                  {form.formState.errors.space.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="pianoType">Piano Type Preference *</Label>
              <select
                id="pianoType"
                {...form.register("pianoType")}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Select type...</option>
                <option value="grand">Grand Piano</option>
                <option value="upright">Upright Piano</option>
                <option value="digital">Digital Piano</option>
                <option value="not-sure">Not sure / Need advice</option>
              </select>
              {form.formState.errors.pianoType && (
                <p className="text-xs text-destructive">
                  {form.formState.errors.pianoType.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Experience Level *</Label>
              <select
                id="experience"
                {...form.register("experience")}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Select level...</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                <option value="professional">Professional</option>
                <option value="for-child">For a child learning</option>
              </select>
              {form.formState.errors.experience && (
                <p className="text-xs text-destructive">
                  {form.formState.errors.experience.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="primaryUse">Primary Use *</Label>
            <select
              id="primaryUse"
              {...form.register("primaryUse")}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="">Select use...</option>
              <option value="home-practice">Home practice</option>
              <option value="teaching">Teaching</option>
              <option value="performance">Performance / Gigging</option>
              <option value="church">Church / Worship</option>
              <option value="school">School / Institution</option>
              <option value="recording">Recording / Studio</option>
            </select>
            {form.formState.errors.primaryUse && (
              <p className="text-xs text-destructive">
                {form.formState.errors.primaryUse.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="additionalNotes">Additional Notes (Optional)</Label>
            <Textarea
              id="additionalNotes"
              placeholder="Any specific requirements, brands you're interested in, or questions..."
              rows={4}
              {...form.register("additionalNotes")}
            />
          </div>

          {submitStatus === "success" && (
            <div className="flex items-center gap-2 rounded-lg bg-accent/10 p-4 text-sm text-accent">
              <CheckCircle2 className="h-5 w-5" />
              <p>Consultation request sent! We'll respond with personalized recommendations within 24 hours.</p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="flex items-center gap-2 rounded-lg bg-destructive/10 p-4 text-sm text-destructive">
              <AlertCircle className="h-5 w-5" />
              <p>Failed to send request. Please try again or contact us directly.</p>
            </div>
          )}

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full bg-accent text-accent-foreground hover:bg-accent-light sm:w-auto"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Request Consultation
              </>
            )}
          </Button>
        </form>
      </Card>
    </motion.div>
  );
}
