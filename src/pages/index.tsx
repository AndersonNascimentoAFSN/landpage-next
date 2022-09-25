import { useEffect, useState } from "react";
import type { GetStaticProps } from "next";

import { ProductCard } from "../components/ProductCard";

import styles from "@styles/Home.module.scss";
import { getProducts } from "src/lib/products";
import { formatCurrency } from "src/utils/formatCurrency";

interface Product {
  id: string;
  name: string;
  imageURL: string;
  listPrice: string;
  salePrice: string;
  isFavorite: boolean;
}

type ProductData = Omit<Product, "listPrice" | "salePrice"> & {
  listPrice: number;
  salePrice: number;
};

interface HomeProps {
  productList: Product[];
}

const Home = ({ productList }: HomeProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  function handleIsFavorite(id: string) {
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

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Destaques</h1>

        <div className={styles.productsCards}>
          {products.map(
            ({ id, name, imageURL, isFavorite, listPrice, salePrice }) => (
              <ProductCard
                key={id}
                id={id}
                name={name}
                imageURL={imageURL}
                isFavorite={isFavorite}
                listPrice={listPrice}
                salePrice={salePrice}
                onClick={handleIsFavorite}
              />
            )
          )}
        </div>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const seconds = 30;

  const data = await getProducts();

  return { 
    props: {
      productList: data?.data.map((product: ProductData) => ({
        id: product.id,
        name: product.name,
        imageURL: product.imageURL,
        listPrice: formatCurrency(product.listPrice),
        salePrice: formatCurrency(product.salePrice),
        isFavorite: product.isFavorite,
      })),
    },
    revalidate: seconds,
  };
};

export default Home;
