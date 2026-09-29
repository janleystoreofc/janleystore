import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { productData } from "@/data/products-data";

export default defineTool({
  name: "list_products",
  title: "List products",
  description: "List JANLEY 3D catalog products, optionally filtered by category, search text or max price.",
  inputSchema: {
    category: z.string().optional().describe("Category name, e.g. Decoração, Gaming."),
    search: z.string().optional().describe("Text to search in name or description."),
    maxPrice: z.number().optional().describe("Maximum price in EUR."),
    limit: z.number().int().min(1).max(100).optional().describe("Max results (default 20)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category, search, maxPrice, limit }) => {
    const q = search?.toLowerCase();
    const items = productData
      .filter((p) => !category || p.category.toLowerCase() === category.toLowerCase())
      .filter((p) => !q || p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q))
      .filter((p) => maxPrice === undefined || p.price <= maxPrice)
      .slice(0, limit ?? 20)
      .map(({ id, name, category, price, color, material, desc }) => ({ id, name, category, price, color, material, desc }));
    return { content: [{ type: "text", text: JSON.stringify(items) }], structuredContent: { products: items } };
  },
});
