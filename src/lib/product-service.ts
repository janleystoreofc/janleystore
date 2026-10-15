import { useEffect, useState } from "react";
import { products, type Product } from "@/data/products";
import { buscarProdutos } from "@/lib/supabase/produtos";

let cache: Promise<Product[]> | null = null;

/** Carrega o catálogo completo (locais + base de dados) uma única vez e guarda em memória. */
export function loadAllProducts(): Promise<Product[]> {
  if (!cache) {
    cache = buscarProdutos()
      .then((rows) => {
        const extra: Product[] = (rows ?? []).map((p) => ({
          id: `supabase-${p.id}`,
          name: p.nome ?? "",
          category: p.categoria ?? "Casa",
          price: Number(p.preco ?? 0),
          color: p.cor ?? "Não especificada",
          material: "",
          image: p.imagem_url ?? "",
          desc: p.descricao ?? "",
        }));
        return [...products, ...extra];
      })
      .catch(() => products);
  }
  return cache;
}

/** Todos os produtos disponíveis para a pesquisa e para o catálogo. */
export function useAllProducts() {
  const [items, setItems] = useState<Product[]>(products);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let alive = true;
    loadAllProducts().then((data) => {
      if (!alive) return;
      setItems(data);
      setLoaded(true);
    });
    return () => {
      alive = false;
    };
  }, []);

  return { items, loaded };
}
