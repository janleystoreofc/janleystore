import { useMemo, useState } from "react";
import { products, categories, colors, materials, type Product } from "@/data/products";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search, Plus } from "lucide-react";

const WA = "351900000000";

export function Catalog() {
  const [cat, setCat] = useState<string>("Todos");
  const [color, setColor] = useState("Todos");
  const [material, setMaterial] = useState("Todos");
  const [maxPrice, setMaxPrice] = useState(100);
  const [q, setQ] = useState("");

  const filtered = useMemo(
    () =>
      products.filter(
        (p) =>
          (cat === "Todos" || p.category === cat) &&
          (color === "Todos" || p.color === color) &&
          (material === "Todos" || p.material === material) &&
          p.price <= maxPrice &&
          (q.trim() === "" || p.name.toLowerCase().includes(q.toLowerCase())),
      ),
    [cat, color, material, maxPrice, q],
  );

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
          <h2 className="font-display text-5xl md:text-6xl mb-5">
            Coleção&nbsp;<span className="text-gradient-gold">Disponível</span>
          </h2>
          <p className="text-muted-foreground">
            Peças impressas com precisão milimétrica, prontas a encomendar.
          </p>
        </div>

        {/* Filters */}
        <div className="glass rounded-2xl p-6 mb-10">
          <div className="grid lg:grid-cols-[1fr_auto_auto_auto_1fr] gap-4 items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Pesquisar produtos…"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="pl-10 bg-input/40 border-border"
              />
            </div>
            <Select label="Cor" value={color} onChange={setColor} options={colors} />
            <Select label="Material" value={material} onChange={setMaterial} options={materials} />
            <div className="flex items-center gap-3 min-w-[180px]">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Preço</span>
              <input
                type="range"
                min={5}
                max={100}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="flex-1 accent-[oklch(0.78_0.13_75)]"
              />
              <span className="text-sm text-primary w-12 text-right">€{maxPrice}</span>
            </div>
            <div className="text-sm text-muted-foreground text-right">
              {filtered.length} {filtered.length === 1 ? "peça" : "peças"}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-border/40">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-1.5 rounded-full text-xs tracking-wider uppercase transition-all ${
                  cat === c
                    ? "bg-[image:var(--gradient-gold)] text-primary-foreground shadow-[var(--shadow-gold)]"
                    : "border border-border text-muted-foreground hover:text-primary hover:border-primary/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
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
                <h3 className="font-display text-lg leading-tight mb-1">{p.name}</h3>
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

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="flex items-center gap-2 text-sm">
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-input/40 border border-border rounded-md h-10 px-3 text-sm focus:border-primary outline-none"
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-background">
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
