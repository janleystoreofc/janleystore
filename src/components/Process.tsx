import { MousePointerClick, Palette, Cog, Truck } from "lucide-react";

const steps = [
  { icon: MousePointerClick, n: "01", title: "Escolha um produto", d: "Catálogo ou projeto à medida." },
  { icon: Palette, n: "02", title: "Personalize", d: "Cor, material, dimensões e detalhes." },
  { icon: Cog, n: "03", title: "Produção", d: "Impressão e acabamento premium." },
  { icon: Truck, n: "04", title: "Envio", d: "Entrega segura em todo Portugal." },
];

export function Process() {
  return (
    <section id="processo" className="py-16 lg:py-24 relative">
      <div className="container mx-auto px-6">
        <span className="text-xs tracking-[0.3em] uppercase text-primary mb-3 lg:mb-5">— Processo</div>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl">
            Simples. <span className="text-gradient-gold italic">Refinado.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 relative">
          {steps.map((s, i) => (
            <div key={s.n} className="relative group">
              <div className="glass rounded-2xl p-4 lg:p-8 h-full hover:border-primary/50 transition-all hover:-translate-y-2 duration-500">
                <div className="font-display text-4xl lg:text-7xl text-primary/20 leading-none mb-2 lg:mb-4">{s.n}</div>
                <s.icon className="h-5 w-5 lg:h-7 lg:w-7 text-primary mb-2 lg:mb-4" />
                <h3 className="font-display text-lg lg:text-2xl mb-1 lg:mb-2">{s.title}</h3>
                <p className="text-xs lg:text-sm text-muted-foreground">{s.d}</p>
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
