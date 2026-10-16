
import { createContext, useContext, useState, useCallback, useMemo, type ReactNode } from "react";
import type { Product } from "@/data/products";

export type CartItem = {
  product: Product;
  qty: number;
  color: string;
};

type CartCtx = {
  items: CartItem[];
  count: number;
  total: number;
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (p: Product, qty?: number, color?: string) => void;
  remove: (id: string, color?: string) => void;
  setQty: (id: string, qty: number, color?: string) => void;
  clear: () => void;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  const add = useCallback((p: Product, qty = 1, color?: string) => {
    const selectedColor = color ?? p.color ?? "";

    setItems((prev) => {
      const i = prev.findIndex(
        (it) => it.product.id === p.id && it.color === selectedColor
      );

      if (i >= 0) {
        const next = [...prev];
        next[i] = { ...next[i], qty: next[i].qty + qty };
        return next;
      }

      return [...prev, { product: p, qty, color: selectedColor }];
    });

    setOpen(true);
  }, []);

  const remove = useCallback((id: string, color?: string) => {
    setItems((prev) =>
      prev.filter(
        (it) => !(it.product.id === id && (color === undefined || it.color === color))
      )
    );
  }, []);

  const setQty = useCallback((id: string, qty: number, color?: string) => {
    setItems((prev) =>
      prev.flatMap((it) =>
        it.product.id === id && (color === undefined || it.color === color)
          ? qty <= 0 ? [] : [{ ...it, qty }]
          : [it]
      )
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const { count, total } = useMemo(() => {
    let count = 0;
    let total = 0;

    for (const it of items) {
      count += it.qty;
      total += it.qty * it.product.price;
    }

    return { count, total };
  }, [items]);

  return (
    <Ctx.Provider value={{ items, count, total, open, setOpen, add, remove, setQty, clear }}>
      {children}
    </Ctx.Provider>
  );
}

export function useCart() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useCart must be used within CartProvider");
  return v;
}
