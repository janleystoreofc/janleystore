import { ShoppingBag } from "lucide-react";
import { useCart } from "./CartContext";

export function CartFab() {
  const { count, setOpen } = useCart();
  return (
    <button
      onClick={() => setOpen(true)}
      className="fixed bottom-24 right-6 z-40 h-14 w-14 rounded-full bg-gradient-to-br from-orange-500 to-yellow-400 text-white shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
      aria-label="Abrir carrinho"
    >
      <ShoppingBag className="h-6 w-6" />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 min-w-[22px] h-[22px] px-1 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center border-2 border-background">
          {count}
        </span>
      )}
    </button>
  );
}
