import emailjs from "@emailjs/browser";

import type { ContactFormData } from "@/types/forms";

export function sendEmail(formData: ContactFormData) {
  return emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
    {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    },
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
  );
}
