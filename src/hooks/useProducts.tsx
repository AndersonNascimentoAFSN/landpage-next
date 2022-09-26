import { useEffect, useState } from "react";

import { Product } from "@/types/product";

interface UseProductsProps {
  productList: Product[];
}

export function setProductAsFavorite(product: Product, id: string): Product {
  if (product.id === id) {
    return { ...product, isFavorite: !product.isFavorite };
  }
  return product;
}

export function useProducts({ productList }: UseProductsProps) {
  const [products, setProducts] = useState<Product[]>([]);

  function handleIsFavorite(id: string): void {
    setProducts((products) =>
      products.map((product) => setProductAsFavorite(product, id))
    );
  }

  useEffect(() => {
    setProducts(productList);
  }, [productList]);

  return { products, setProducts, handleIsFavorite };
}
