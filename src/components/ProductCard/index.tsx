import React from "react";
import Image from "next/image";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

import styles from "../../styles/ProductCard.module.scss";

interface ProductCardProps {
  id: string;
  name: string;
  imageURL: string;
  listPrice: string;
  salePrice: string;
  isFavorite: boolean;
}

export function ProductCard({
  id,
  name,
  imageURL,
  listPrice,
  salePrice,
  isFavorite,
}: ProductCardProps) {
  return (
    <div className={styles.container}>
      {isFavorite ? (
        <MdFavorite className={styles.icon} />
      ) : (
        <MdFavoriteBorder className={styles.icon} />
      )}
      <div className={styles.wrapperImg}>
        <Image
          loader={() => imageURL}
          src={imageURL}
          alt="Image product"
          width={212}
          height={282}
        />

        <p>{name}</p>

        <div>
          <span>Atacado</span>
          <strong>{listPrice}</strong>
          <span>Varejo</span>
          <strong>{salePrice}</strong>
        </div>
      </div>
    </div>
  );
}
