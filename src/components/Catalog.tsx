import { products, type Product } from "@/data/products";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

const WA = "351900000000";

export function Catalog() {
  const filtered = products;

  const order = (p: Product) => {
    const text = encodeURIComponent(
      `Olá JANLEY 3D! Tenho interesse em encomendar: ${p.name} (${p.color}, ${p.material}) — €${p.price}`,
    );
    window.open(`https://wa.me/${WA}?text=${text}`, "_blank");
  };

  return (
    <section id="catalogo" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs tracking-[0.3em] uppercase text-primary mb-5">— Catálogo</div>
          <h2 className="font-display text-4xl md:text-5xl mb-4">
            Coleção&nbsp;<span className="text-gradient-gold">Disponível</span>
          </h2>
          <p className="text-muted-foreground">
            Peças impressas com precisão milimétrica, prontas a encomendar.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="group glass rounded-xl overflow-hidden hover:border-primary/40 transition-all hover:-translate-y-1"
            >
              <div className="relative aspect-square overflow-hidden bg-secondary/40">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 glass px-3 py-1 rounded-full text-[10px] tracking-widest uppercase text-primary">
                  {p.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-sm md:text-base leading-tight mb-1">{p.name}</h3>
                <p className="text-xs text-muted-foreground mb-4 line-clamp-2">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                      Desde
                    </div>
                    <div className="font-display text-2xl text-gradient-gold">€{p.price}</div>
                  </div>
                  <Button size="icon" variant="hero" onClick={() => order(p)} title="Encomendar">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            Nenhuma peça encontrada com estes filtros.
          </div>
        )}
      </div>
    </section>
  );
}

