import { products, type Product } from "@/data/products";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { useCart } from "./cart/CartContext";
import { useState } from "react";

export function Catalog() {
  const { add } = useCart();
  const order = (p: Product) => add(p, 1);
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const FEATURED = 6;

  // Agrupar produtos por categoria preservando a ordem de aparição
  const grouped = products.reduce<Record<string, Product[]>>((acc, p) => {
    (acc[p.category] ||= []).push(p);
    return acc;
  }, {});
  const categoryOrder = Array.from(new Set(products.map((p) => p.category)));

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

        {/* Seções por categoria */}
        <div className="space-y-16">
          {categoryOrder.map((category) => (
            <div key={category} id={`cat-${category.toLowerCase()}`}>
              <div className="flex items-end justify-between mb-6 border-b border-border/40 pb-3">
                <h3 className="font-display text-2xl md:text-3xl">
                  <span className="text-gradient-gold">{category}</span>
                </h3>
                <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-muted-foreground">
                  {grouped[category].length} peças
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {(open[category] ? grouped[category] : grouped[category].slice(0, FEATURED)).map((p) => (
                  <article
                    key={p.id}
                    className="group glass rounded-lg overflow-hidden hover:border-primary/40 transition-all hover:-translate-y-1"
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
                    </div>
                    <div className="p-2">
                      <h4 className="font-display text-[10px] md:text-xs leading-tight mb-0.5 truncate">{p.name}</h4>
                      <p className="hidden md:block text-[10px] text-muted-foreground mb-1 line-clamp-1">{p.desc}</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-[8px] text-muted-foreground uppercase tracking-wider">
                            Desde
                          </div>
                          <div className="font-display text-sm md:text-base text-gradient-gold">€{p.price}</div>
                        </div>
                        <Button size="icon" variant="hero" className="h-6 w-6 md:h-8 md:w-8" onClick={() => order(p)} title="Encomendar">
                          <Plus className="h-3 w-3 md:h-3.5 md:w-3.5" />
                        </Button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              {grouped[category].length > FEATURED && (
                <div className="text-center mt-6">
                  <Button variant="outline" size="sm" onClick={() => setOpen((o) => ({ ...o, [category]: !o[category] }))}>
                    {open[category] ? "Ver menos" : `Ver mais (${grouped[category].length - FEATURED})`}
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

