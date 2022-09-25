import { useEffect, useState } from "react";
import type { GetStaticProps } from "next";

import { ProductCard } from "../components/ProductCard";

import styles from "@styles/Home.module.scss";

interface Product {
  id: string;
  name: string;
  imageURL: string;
  listPrice: string;
  salePrice: string;
  isFavorite: boolean;
}

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
  const seconds = 30

  const data = [
    {
      id: "1",
      name: "Camisa preta manga curta",
      imageURL:
        "https://images.tcdn.com.br/img/img_prod/737444/camiseta_gospel_religiosa_catolica_frases_biblia_masculina_24835885_1_20200427181259.jpg",
      listPrice: "R$ 100,00",
      salePrice: "R$ 100,00",
      isFavorite: true,
    },
    {
      id: "2",
      name: "Camisa preta manga curta",
      imageURL:
        "https://images.tcdn.com.br/img/img_prod/737444/camiseta_gospel_religiosa_catolica_frases_biblia_masculina_24835885_1_20200427181259.jpg",
      listPrice: "R$ 100,00",
      salePrice: "R$ 100,00",
      isFavorite: false,
    },
    {
      id: "3",
      name: "Camisa preta manga curta",
      imageURL:
        "https://images.tcdn.com.br/img/img_prod/737444/camiseta_gospel_religiosa_catolica_frases_biblia_masculina_24835885_1_20200427181259.jpg",
      listPrice: "R$ 100,00",
      salePrice: "R$ 100,00",
      isFavorite: false,
    },
    {
      id: "4",
      name: "Camisa preta manga curta",
      imageURL:
        "https://images.tcdn.com.br/img/img_prod/737444/camiseta_gospel_religiosa_catolica_frases_biblia_masculina_24835885_1_20200427181259.jpg",
      listPrice: "R$ 100,00",
      salePrice: "R$ 100,00",
      isFavorite: false,
    },
    {
      id: "5",
      name: "Camisa preta manga curta",
      imageURL:
        "https://images.tcdn.com.br/img/img_prod/737444/camiseta_gospel_religiosa_catolica_frases_biblia_masculina_24835885_1_20200427181259.jpg",
      listPrice: "R$ 100,00",
      salePrice: "R$ 100,00",
      isFavorite: false,
    },
  ];
  
  return {
    props: {
      productList: data,
    },
    revalidate: seconds,
  };
};

export default Home;
