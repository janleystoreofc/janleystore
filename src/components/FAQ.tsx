import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  { q: "Quanto tempo demora uma encomenda?", a: "Em média 3 a 7 dias úteis, dependendo da complexidade e quantidade. Para peças personalizadas, indicamos o prazo no orçamento." },
  { q: "Que materiais utilizam?", a: "Trabalhamos com PLA, PETG, TPU em diversas cores e acabamentos." },
  { q: "Fazem projetos personalizados?", a: "Sim. Aceitamos ficheiros STL, OBJ e STEP, ou desenvolvemos o seu projeto de raiz a partir de uma ideia." },
  { q: "Enviam para todo Portugal?", a: "Sim, fazemos envios para Portugal continental e ilhas através de transportadoras de confiança." },
  { q: "Como funciona o orçamento?", a: "Envie-nos os detalhes ou ficheiros pelo formulário ou WhatsApp. Respondemos em até 48h com proposta detalhada." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-16 lg:py-24 relative">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-8 lg:mb-16">
          <div className="text-xs tracking-[0.3em] uppercase text-primary mb-3 lg:mb-5 font-bold">— FAQ</div>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl">
            Perguntas <span className="text-gradient-gold italic">frequentes</span>
          </h2>
        </div>

        <div className="space-y-2 lg:space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="glass rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-4 lg:p-6 text-left hover:bg-primary/5 transition-colors"
              >
                <span className="font-display text-base lg:text-lg pr-4">{f.q}</span>
                <span className="icon-gradient">
                  <Plus
                    className={`h-5 w-5 text-primary shrink-0 transition-transform ${
                      open === i ? "rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
              <div
                className={`grid transition-all duration-500 ${
                  open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-4 pb-4 lg:px-6 lg:pb-6 text-muted-foreground leading-relaxed text-sm lg:text-base">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
