import { defineMcp } from "@lovable.dev/mcp-js";
import listProducts from "./tools/list-products";
import storeInfo from "./tools/store-info";

export default defineMcp({
  name: "site-janley-store",
  title: "Site Janley Store",
  version: "0.1.0",
  instructions:
    "Public catalog of JANLEY 3D, a 3D printing store in Portugal. Use `list_products` to browse products and `get_store_info` for contacts and ordering.",
  tools: [listProducts, storeInfo],
});
