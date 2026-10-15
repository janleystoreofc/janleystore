
import { supabase } from "./client";

export async function buscarProdutos() {
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("produtos")
    .select("*")
    .eq("disponivel", true)
    .order("id", { ascending: false });

  if (error) {
    console.error("Erro ao carregar produtos:", error.message);
    return [];
  }

  return data ?? [];
}
