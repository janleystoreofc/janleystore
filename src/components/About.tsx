import { Award, Cpu, Sparkles, ShieldCheck } from "lucide-react";

const items = [
  { icon: Cpu, title: "Tecnologia Avançada", desc: "Impressoras FDM e Resina de última geração." },
  { icon: Sparkles, title: "Acabamento Premium", desc: "Revisão e finalização cuidadosa em cada peça." },
  { icon: Award, title: "Projetos Exclusivos", desc: "Catálogo próprio e desenvolvimento sob medida." },
  { icon: ShieldCheck, title: "Confiança", desc: "Envio seguro para todo o território nacional e garantia de qualidade." },
];

export function About() {
  return (
    <section id="sobre" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-primary mb-3 sm:mb-5">— Sobre Nós</div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-5 sm:mb-8">
              Precisão. <span className="text-gradient-gold italic">Inovação.</span><br />
              Qualidade.
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Cada peça é cuidadosamente impressa, revisada e finalizada — porque acreditamos que
              detalhe é o que separa o comum do extraordinário.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {items.map((it) => (
              <div
                key={it.title}
                className="glass rounded-xl p-5 sm:p-7 hover:border-primary/40 transition-all hover:-translate-y-1 group"
              >
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-[image:var(--gradient-gold)] flex items-center justify-center mb-3 sm:mb-5 shadow-[var(--shadow-gold)] group-hover:scale-110 transition-transform">
                  <it.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg sm:text-xl mb-1 sm:mb-2">{it.title}</h3>
                <p className="text-sm text-muted-foreground">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
