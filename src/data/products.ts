import catDecor from "@/assets/cat-decor.jpg";
import catOrg from "@/assets/cat-org.jpg";
import catCustom from "@/assets/cat-custom.jpg";
import catGaming from "@/assets/cat-gaming.jpg";
import catOffice from "@/assets/cat-office.jpg";
import catHome from "@/assets/cat-home.jpg";
import { productData, type ProductData } from "./products-data";

export { categories, colors, materials } from "./products-data";
export type Product = ProductData;
const images: Record<string, string> = { catDecor, catOrg, catCustom, catGaming, catOffice, catHome };
export const products: Product[] = productData.map((p) => ({ ...p, image: images[p.image] ?? p.image }));
