import type { NextPage } from "next";
import Head from "next/head";
import { ProductCard } from "../components/ProductCard";

import styles from "../styles/Home.module.scss";

const products = [
  {
    id: "1",
    name: "Qualquer coisa",
    imageURL:
      "https://images.tcdn.com.br/img/img_prod/737444/camiseta_gospel_religiosa_catolica_frases_biblia_masculina_24835885_1_20200427181259.jpg",
    listPrice: "R$ 100,00",
    salePrice: "R$ 100,00",
    isFavorite: true,
  },
  {
    id: "2",
    name: "Qualquer coisa",
    imageURL:
      "https://images.tcdn.com.br/img/img_prod/737444/camiseta_gospel_religiosa_catolica_frases_biblia_masculina_24835885_1_20200427181259.jpg",
    listPrice: "R$ 100,00",
    salePrice: "R$ 100,00",
    isFavorite: false,
  },
  {
    id: "2",
    name: "Qualquer coisa",
    imageURL:
      "https://images.tcdn.com.br/img/img_prod/737444/camiseta_gospel_religiosa_catolica_frases_biblia_masculina_24835885_1_20200427181259.jpg",
    listPrice: "R$ 100,00",
    salePrice: "R$ 100,00",
    isFavorite: false,
  },
  {
    id: "2",
    name: "Qualquer coisa",
    imageURL:
      "https://images.tcdn.com.br/img/img_prod/737444/camiseta_gospel_religiosa_catolica_frases_biblia_masculina_24835885_1_20200427181259.jpg",
    listPrice: "R$ 100,00",
    salePrice: "R$ 100,00",
    isFavorite: false,
  },
  {
    id: "2",
    name: "Qualquer coisa",
    imageURL:
      "https://images.tcdn.com.br/img/img_prod/737444/camiseta_gospel_religiosa_catolica_frases_biblia_masculina_24835885_1_20200427181259.jpg",
    listPrice: "R$ 100,00",
    salePrice: "R$ 100,00",
    isFavorite: false,
  },
];

const Home: NextPage = () => {
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
              />
            )
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
