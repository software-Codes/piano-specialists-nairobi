import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required."),
  email: z.email("Enter a valid email address."),
  phone: z.string().min(7, "Phone number is required."),
  subject: z.string().min(2, "Subject is required."),
  message: z.string().min(10, "Message is too short."),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const consultationFormSchema = z.object({
  name: z.string().min(2, "Name is required."),
  email: z.email("Enter a valid email address."),
  phone: z.string().min(7, "Phone number is required."),
  budget: z.string().min(1, "Please select a budget range."),
  space: z.string().min(1, "Please select available space."),
  pianoType: z.string().min(1, "Please select a piano type preference."),
  experience: z.string().min(1, "Please select your experience level."),
  primaryUse: z.string().min(1, "Please select primary use."),
  additionalNotes: z.string().optional(),
});

export type ConsultationFormData = z.infer<typeof consultationFormSchema>;
