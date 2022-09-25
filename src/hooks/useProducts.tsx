import { useEffect, useState } from "react";

import { Product } from "src/types/product";

interface UseProductsProps {
  productList: Product[];
}

export function useProducts({ productList }: UseProductsProps) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(productList);
  }, [productList]);

  return { products, setProducts };
}
