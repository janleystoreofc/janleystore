import { MousePointerClick, Palette, Cog, Truck } from "lucide-react";

const steps = [
  { icon: MousePointerClick, n: "01", title: "Escolha um produto", d: "Catálogo ou projeto à medida." },
  { icon: Palette, n: "02", title: "Personalize", d: "Cor, material, dimensões e detalhes." },
  { icon: Cog, n: "03", title: "Produção", d: "Impressão e acabamento premium." },
  { icon: Truck, n: "04", title: "Envio", d: "Entrega segura em todo Portugal." },
];

export function Process() {
  return (
    <section id="processo" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="text-xs tracking-[0.3em] uppercase text-primary mb-5">— Processo</div>
          <h2 className="font-display text-5xl md:text-6xl">
            Simples. <span className="text-gradient-gold italic">Refinado.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((s, i) => (
            <div key={s.n} className="relative group">
              <div className="glass rounded-2xl p-8 h-full hover:border-primary/50 transition-all hover:-translate-y-2 duration-500">
                <div className="font-display text-7xl text-primary/20 leading-none mb-4">{s.n}</div>
                <s.icon className="h-7 w-7 text-primary mb-4" />
                <h3 className="font-display text-2xl mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.d}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-primary/40 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
