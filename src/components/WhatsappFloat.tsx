import { MessageCircle } from "lucide-react";
const WA = "351900000000";
export function WhatsappFloat() {
  return (
    <a
      href={`https://wa.me/${WA}`}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-[image:var(--gradient-gold)] flex items-center justify-center shadow-[var(--shadow-gold)] hover:scale-110 transition-transform"
    >
      <MessageCircle className="h-6 w-6 text-primary-foreground" />
      <span className="absolute inset-0 rounded-full animate-ping bg-primary/30" />
    </a>
  );
}
