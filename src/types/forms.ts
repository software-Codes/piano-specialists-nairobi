import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required."),
  email: z.email("Enter a valid email address."),
  phone: z.string().min(7, "Phone number is required."),
  subject: z.string().min(2, "Subject is required."),
  message: z.string().min(10, "Message is too short."),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
