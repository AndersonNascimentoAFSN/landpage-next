import { Product, ProductData } from "@/types/product";
import { formatCurrency } from "./formatCurrency";

export function serializedProducts(product: ProductData): Product {
  return {
    id: product.id,
    name: product.name,
    imageURL: product.imageURL,
    listPrice: formatCurrency(product.listPrice),
    salePrice: formatCurrency(product.salePrice),
    isFavorite: product.isFavorite,
  };
}
