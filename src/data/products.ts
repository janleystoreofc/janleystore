import catDecor from "@/assets/cat-decor.jpg";
import catOrg from "@/assets/cat-org.jpg";
import catCustom from "@/assets/cat-custom.jpg";
import catGaming from "@/assets/cat-gaming.jpg";
import catOffice from "@/assets/cat-office.jpg";
import catHome from "@/assets/cat-home.jpg";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  color: string;
  material: string;
  image: string;
  desc: string;
};

export const categories = [
  "Todos",
  "Organização",
  "Decoração",
  "Casa",
  "Escritório",
  "Gaming",
  "Personalizados",
] as const;

export const colors = ["Todos", "Preto", "Branco", "Cinza", "Dourado", "Cobre"];
export const materials = ["Todos", "PLA", "PETG", "ABS", "Resina"];

export const products: Product[] = [
  { id: "p1", name: "Organizador de Secretária Premium", category: "Organização", price: 24, color: "Preto", material: "PETG", image: catOrg, desc: "Organizador modular em PETG com acabamento mate." },
  { id: "p2", name: "Suporte Telemóvel Geométrico", category: "Organização", price: 14, color: "Preto", material: "PLA", image: catOrg, desc: "Suporte minimalista para mesa." },
  { id: "p3", name: "Organizador de Cabos", category: "Organização", price: 9, color: "Cinza", material: "PLA", image: catOrg, desc: "Mantém os cabos arrumados com elegância." },
  { id: "p4", name: "Vaso Facetado Onyx", category: "Decoração", price: 32, color: "Preto", material: "PLA", image: catDecor, desc: "Vaso geométrico de design exclusivo." },
  { id: "p5", name: "Luminária Lithophane", category: "Decoração", price: 45, color: "Branco", material: "PLA", image: catDecor, desc: "Luminária com efeito de luz suave." },
  { id: "p6", name: "Escultura Wave", category: "Decoração", price: 38, color: "Dourado", material: "PLA", image: catDecor, desc: "Peça escultural contemporânea." },
  { id: "p7", name: "Ganchos Modulares (x3)", category: "Casa", price: 12, color: "Preto", material: "PETG", image: catHome, desc: "Set de 3 ganchos premium." },
  { id: "p8", name: "Porta-chaves Personalizado", category: "Casa", price: 8, color: "Preto", material: "PLA", image: catHome, desc: "Personalizável com nome ou logótipo." },
  { id: "p9", name: "Suporte Laptop Inclinado", category: "Escritório", price: 35, color: "Preto", material: "PETG", image: catOffice, desc: "Ergonomia e estilo premium." },
  { id: "p10", name: "Organizador de Secretária Pro", category: "Escritório", price: 28, color: "Cinza", material: "PETG", image: catOffice, desc: "Solução completa para a sua mesa." },
  { id: "p11", name: "Suporte Headset", category: "Gaming", price: 22, color: "Preto", material: "PLA", image: catGaming, desc: "Suporte vertical para headset." },
  { id: "p12", name: "Expositor de Comandos", category: "Gaming", price: 26, color: "Preto", material: "PLA", image: catGaming, desc: "Display elegante para até 2 comandos." },
  { id: "p13", name: "Nome em 3D Premium", category: "Personalizados", price: 30, color: "Dourado", material: "PLA", image: catCustom, desc: "Nome ou palavra em 3D com acabamento metálico." },
  { id: "p14", name: "Logótipo Empresarial", category: "Personalizados", price: 60, color: "Cobre", material: "PLA", image: catCustom, desc: "Logo da sua empresa em alta definição." },
  { id: "p15", name: "Brinde Corporativo", category: "Personalizados", price: 18, color: "Preto", material: "PLA", image: catCustom, desc: "Brindes personalizados em quantidade." },
];
