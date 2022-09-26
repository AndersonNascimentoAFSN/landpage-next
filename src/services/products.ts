import { api } from "../services/api";

import { ProductData } from "@/types/product";

export async function getProducts() {
  const { data } = await api.get<ProductData[]>("/products");
  return data;
}
