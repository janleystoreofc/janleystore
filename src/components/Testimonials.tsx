import { Star } from "lucide-react";

const t = [
  { name: "Mariana S.", role: "Designer de Interiores", text: "Acabamento impecável. As peças decorativas elevaram completamente o ambiente do meu projeto." },
  { name: "Rui Oliveira", role: "CEO, NorthLabs", text: "Encomendámos brindes corporativos. Profissionalismo do primeiro contacto à entrega — recomendo." },
  { name: "Inês Costa", role: "Gamer / Streamer", text: "O suporte de headset ficou brutal. Qualidade premium e enviado super rápido." },
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="text-xs tracking-[0.3em] uppercase text-primary mb-3 sm:mb-5">— Testemunhos</div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Quem confiou, <span className="text-gradient-gold italic">recomenda</span>
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-6">
          {t.map((x) => (
            <div key={x.name} className="glass rounded-2xl p-3 sm:p-6 lg:p-8 hover:border-primary/40 transition-all hover:-translate-y-1">
              <div className="flex gap-0.5 mb-2 sm:mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span className="icon-gradient" key={i}>
                    <Star className="h-2 w-2 sm:h-4 sm:w-4 fill-primary text-primary" />
                  </span>
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-3 sm:mb-5 italic font-display text-xs sm:text-base lg:text-lg">
                "{x.text}"
              </p>
              <div className="border-t border-border/40 pt-2 sm:pt-4">
                <div className="font-medium text-xs sm:text-sm lg:text-base">{x.name}</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground">{x.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
