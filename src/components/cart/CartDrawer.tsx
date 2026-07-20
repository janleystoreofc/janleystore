import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Minus, Plus, Trash2, MessageCircle, ShoppingBag } from "lucide-react";
import { useCart } from "./CartContext";

const WA = "351900000000";

export function CartDrawer() {
  const { items, open, setOpen, setQty, remove, total, clear, count } = useCart();

  const checkout = () => {
    if (!items.length) return;
    const lines = items
      .map(
        (it) =>
          `• ${it.qty}x ${it.product.name} (${it.product.color}) — €${(it.qty * it.product.price).toFixed(2)}`,
      )
      .join("\n");
    const text = encodeURIComponent(
      `Olá JANLEY 3D! Gostaria de encomendar:\n\n${lines}\n\nTotal: €${total.toFixed(2)}`,
    );
    window.open(`https://wa.me/${WA}?text=${text}`, "_blank");
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="right" className="w-full sm:max-w-md flex flex-col p-0">
        <SheetHeader className="p-6 border-b border-border/40">
          <SheetTitle className="font-display text-2xl flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" /> Carrinho
            {count > 0 && <span className="text-sm text-muted-foreground">({count})</span>}
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <p className="text-center text-muted-foreground py-16">
              O seu carrinho está vazio.
            </p>
          ) : (
            items.map((it) => (
              <div key={it.product.id} className="flex gap-3 glass rounded-lg p-3">
                <img
                  src={it.product.image}
                  alt={it.product.name}
                  className="h-16 w-16 rounded object-cover"
                />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">{it.product.name}</div>
                  <div className="text-xs text-muted-foreground">€{it.product.price} · {it.product.color}</div>
                  <div className="flex items-center gap-2 mt-2">
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-7 w-7"
                      onClick={() => setQty(it.product.id, it.qty - 1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-6 text-center text-sm">{it.qty}</span>
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-7 w-7"
                      onClick={() => setQty(it.product.id, it.qty + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-7 w-7 ml-auto text-muted-foreground hover:text-destructive"
                      onClick={() => remove(it.product.id)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <div className="text-sm font-display text-gradient-gold whitespace-nowrap">
                  €{(it.qty * it.product.price).toFixed(2)}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border-t border-border/40 p-6 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Total</span>
            <span className="font-display text-2xl text-gradient-gold">€{total.toFixed(2)}</span>
          </div>
          <Button
            variant="hero"
            size="lg"
            className="w-full"
            disabled={!items.length}
            onClick={checkout}
          >
            <MessageCircle className="h-4 w-4" /> Fechar pedido no WhatsApp
          </Button>
          {items.length > 0 && (
            <button
              className="text-xs text-muted-foreground hover:text-foreground w-full text-center"
              onClick={clear}
            >
              Esvaziar carrinho
            </button>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
