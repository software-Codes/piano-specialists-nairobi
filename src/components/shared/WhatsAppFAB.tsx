import Link from "next/link";

export function WhatsAppFAB() {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "254700000000";

  return (
    <Link
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noreferrer"
      className="fixed right-4 bottom-4 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground shadow-lg"
    >
      WhatsApp
    </Link>
  );
}
