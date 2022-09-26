import type { GetStaticProps } from "next";

import { ProductCard } from "@/components/ProductCard";
import { getProducts } from "@/services/products";
import { useProducts } from "@/hooks/useProducts";
import { serializedProducts } from "@/utils/serializedProducts";

import { Product } from "@/types/product";

import styles from "./Home.module.scss";

interface HomeProps {
  productList: Product[];
}

const Home = ({ productList }: HomeProps) => {
  const { products, handleIsFavorite } = useProducts({ productList });

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
  const seconds: number = 30;
  const data = await getProducts();

  return {
    props: {
      productList: data?.map(serializedProducts),
    },
    revalidate: seconds,
  };
};

export default Home;
