import { Award, Cpu, Sparkles, ShieldCheck } from "lucide-react";

const items = [
  { icon: Cpu, title: "Tecnologia Avançada", desc: "Impressoras FDM e Resina de última geração." },
  { icon: Sparkles, title: "Acabamento Premium", desc: "Revisão e finalização cuidadosa em cada peça." },
  { icon: Award, title: "Projetos Exclusivos", desc: "Catálogo próprio e desenvolvimento sob medida." },
  { icon: ShieldCheck, title: "Confiança", desc: "Envio seguro para todo o território nacional e garantia de qualidade." },
];

export function About() {
  return (
    <section id="sobre" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-primary mb-5">— Sobre Nós</div>
            <h2 className="font-display text-5xl md:text-6xl leading-[1.05] mb-8">
              Precisão. <span className="text-gradient-gold italic">Inovação.</span><br />
              Qualidade.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Na <span className="text-foreground">JANLEY 3D</span> produzimos peças exclusivas
              através de tecnologia de impressão 3D de alta qualidade. Trabalhamos com projetos
              personalizados e catálogo próprio, oferecendo envios para todo Portugal.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Cada peça é cuidadosamente impressa, revisada e finalizada — porque acreditamos que
              detalhe é o que separa o comum do extraordinário.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {items.map((it) => (
              <div
                key={it.title}
                className="glass rounded-xl p-7 hover:border-primary/40 transition-all hover:-translate-y-1 group"
              >
                <div className="h-12 w-12 rounded-lg bg-[image:var(--gradient-gold)] flex items-center justify-center mb-5 shadow-[var(--shadow-gold)] group-hover:scale-110 transition-transform">
                  <it.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl mb-2">{it.title}</h3>
                <p className="text-sm text-muted-foreground">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
