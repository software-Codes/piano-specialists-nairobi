import emailjs from "@emailjs/browser";

import type { ContactFormData, ConsultationFormData } from "@/types/forms";

export function sendContactEmail(formData: ContactFormData) {
  return emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
    {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      form_type: "Contact Form",
    },
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
  );
}

export function sendConsultationEmail(formData: ConsultationFormData) {
  return emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
    process.env.NEXT_PUBLIC_EMAILJS_CONSULTATION_TEMPLATE_ID ?? "",
    {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: "Piano Buying Consultation Request",
      message: `
Budget Range: ${formData.budget}
Available Space: ${formData.space}
Piano Type Preference: ${formData.pianoType}
Experience Level: ${formData.experience}
Primary Use: ${formData.primaryUse}

Additional Notes:
${formData.additionalNotes || "None provided"}
      `.trim(),
      form_type: "Consultation Form",
      budget: formData.budget,
      space: formData.space,
      piano_type: formData.pianoType,
      experience: formData.experience,
      primary_use: formData.primaryUse,
      additional_notes: formData.additionalNotes || "None",
    },
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
  );
}
