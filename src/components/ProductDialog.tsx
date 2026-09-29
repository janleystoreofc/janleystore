import { useEffect, useState } from "react";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { useCart } from "./cart/CartContext";
import type { Product } from "@/data/products";

export function ProductDialog({ product, onClose }: { product: Product | null; onClose: () => void }) {
  const { add } = useCart();
  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    setActive(0);
    setQty(1);
  }, [product?.id]);

  const photos = product ? [product.image, ...(product.images ?? [])] : [];

  return (
    <Dialog open={!!product} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-4 md:p-6">
        {product && (
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <div className="aspect-square rounded-lg overflow-hidden bg-secondary/40">
                <img src={photos[active]} alt={product.name} className="w-full h-full object-cover" />
              </div>
              {photos.length > 1 && (
                <div className="grid grid-cols-5 gap-2 mt-2">
                  {photos.map((src, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`aspect-square rounded overflow-hidden border-2 ${i === active ? "border-primary" : "border-transparent opacity-70"}`}
                    >
                      <img src={src} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col">
              <span className="text-[10px] tracking-[0.25em] uppercase text-primary mb-2">{product.category}</span>
              <DialogTitle className="font-display text-2xl mb-2">{product.name}</DialogTitle>
              <div className="font-display text-2xl text-gradient-gold mb-4">€{product.price}</div>
              <DialogDescription className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {product.desc}
              </DialogDescription>
              <dl className="text-sm grid grid-cols-2 gap-y-1 mb-6">
                <dt className="text-muted-foreground">Material</dt>
                <dd>{product.material}</dd>
                <dt className="text-muted-foreground">Cor</dt>
                <dd>{product.color}</dd>
              </dl>

              <div className="mt-auto space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">Quantidade</span>
                  <div className="flex items-center border border-border rounded-md">
                    <Button size="icon" variant="ghost" className="h-8 w-8" onClick={() => setQty((q) => Math.max(1, q - 1))}>
                      <Minus className="h-3.5 w-3.5" />
                    </Button>
                    <span className="w-8 text-center text-sm">{qty}</span>
                    <Button size="icon" variant="ghost" className="h-8 w-8" onClick={() => setQty((q) => q + 1)}>
                      <Plus className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
                <Button
                  variant="hero"
                  className="w-full"
                  onClick={() => {
                    add(product, qty);
                    onClose();
                  }}
                >
                  <ShoppingBag className="h-4 w-4" /> Adicionar ao carrinho
                </Button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
