import { defineTool } from "@lovable.dev/mcp-js";
import { categories } from "@/data/products-data";

export default defineTool({
  name: "get_store_info",
  title: "Store info",
  description: "Get JANLEY 3D contacts, location, product categories and how to order.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      name: "JANLEY 3D",
      location: "Guimarães, Braga - Portugal",
      whatsapp: "+351 910 761 658",
      instagram: "https://instagram.com/janleystoreofc",
      facebook: "https://facebook.com/janleystorebr",
      categories: categories.filter((c) => c !== "Todos"),
      materials: ["PLA", "PETG", "TPU"],
      delivery: "Em média 2 a 7 dias úteis.",
      howToOrder: "Adicione produtos ao carrinho no site e feche o pedido pelo WhatsApp.",
    };
    return { content: [{ type: "text", text: JSON.stringify(info) }], structuredContent: { info } };
  },
});
