import { useEffect, useState } from "react";

import { Product } from "@/types/product";

interface UseProductsProps {
  productList: Product[];
}

export function useProducts({ productList }: UseProductsProps) {
  const [products, setProducts] = useState<Product[]>([]);

  function handleIsFavorite(id: string): void {
    setProducts((products) =>
      products.map((product) => {
        if (product.id === id) {
          return { ...product, isFavorite: !product.isFavorite };
        }
        return product;
      })
    );
  }

  useEffect(() => {
    setProducts(productList);
  }, [productList]);

  return { products, setProducts, handleIsFavorite };
}
