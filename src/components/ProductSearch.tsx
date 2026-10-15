import { useEffect, useMemo, useRef, useState } from "react";
import { Search, ShoppingBag } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useAllProducts } from "@/lib/product-service";
import { ProductDialog } from "./ProductDialog";
import type { Product } from "@/data/products";

const MAX_RESULTS = 12;

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function ProductSearch({ className = "" }: { className?: string }) {
  const { items, loaded } = useAllProducts();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState<Product | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const suggestions = useMemo(() => items.slice(0, MAX_RESULTS), [items]);

  const results = useMemo(() => {
    const term = normalize(q.trim());
    if (!term) return [];
    const words = term.split(/\s+/);
    return items
      .filter((p) => {
        const hay = normalize(`${p.name} ${p.desc} ${p.category} ${p.color} ${p.material}`);
        return words.every((w) => hay.includes(w));
      })
      .slice(0, MAX_RESULTS);
  }, [q, items]);

  useEffect(() => {
    if (open) {
      const t = window.setTimeout(() => inputRef.current?.focus(), 60);
      return () => window.clearTimeout(t);
    }
    setQ("");
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "/" || open) return;
      const el = e.target as HTMLElement | null;
      const tag = el?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || el?.isContentEditable) return;
      e.preventDefault();
      setOpen(true);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const shown = q.trim() ? results : suggestions;

  const pick = (p: Product) => {
    setOpen(false);
    setSelected(p);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Pesquisar produtos"
        className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/50 bg-secondary/30 text-accent transition-colors hover:border-primary/50 hover:text-primary ${className}`}
      >
        <Search className="h-4 w-4" />
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-xl gap-0 overflow-hidden p-0">
          <DialogTitle className="sr-only">Pesquisar produtos</DialogTitle>
          <DialogDescription className="sr-only">
            Escreva para procurar produtos por nome, categoria, cor ou material.
          </DialogDescription>

          <div className="border-b border-border/40 px-4 pt-4 pb-3">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                ref={inputRef}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Pesquisar produtos..."
                aria-label="Pesquisar produtos"
                className="h-11 rounded-lg border-border/50 bg-secondary/30 pl-9"
              />
            </div>
            <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {q.trim()
                ? `${results.length} ${results.length === 1 ? "resultado" : "resultados"}`
                : loaded
                  ? `${items.length} produtos disponíveis`
                  : "A carregar catálogo..."}
            </p>
          </div>

          <div className="max-h-[55vh] overflow-y-auto p-2">
            {shown.length === 0 ? (
              <p className="px-3 py-8 text-center text-sm text-muted-foreground">
                {loaded
                  ? "Nenhum produto encontrado. Tente outra palavra."
                  : "A carregar produtos..."}
              </p>
            ) : (
              <ul className="space-y-1">
                {!q.trim() && (
                  <li className="px-3 pb-1 pt-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Sugestões
                  </li>
                )}
                {shown.map((p) => (
                  <li key={p.id}>
                    <div className="group flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-secondary/50">
                      <button
                        type="button"
                        onClick={() => pick(p)}
                        className="flex min-w-0 flex-1 cursor-pointer items-center gap-3 text-left"
                      >
                        <img
                          src={p.image}
                          alt=""
                          width={44}
                          height={44}
                          loading="lazy"
                          className="h-11 w-11 shrink-0 rounded-md object-cover"
                        />
                        <span className="min-w-0 flex-1">
                          <span className="block truncate font-display text-sm">{p.name}</span>
                          <span className="block truncate text-[11px] text-muted-foreground">
                            {p.category}
                            {p.color ? ` · ${p.color}` : ""}
                          </span>
                        </span>
                        <span className="shrink-0 font-display text-sm text-gradient-gold">
                          €{p.price}
                        </span>
                      </button>
                      <Button
                        size="icon"
                        variant="hero"
                        className="h-7 w-7 shrink-0"
                        title="Adicionar ao carrinho"
                        onClick={() => pick(p)}
                      >
                        <ShoppingBag className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <ProductDialog product={selected} onClose={() => setSelected(null)} />
    </>
  );
}
