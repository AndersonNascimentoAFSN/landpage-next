import React from "react";
import Image from "next/image";

import styles from "../../styles/ProductCard.module.scss";
import { FavoriteButton } from "../FavoriteButton";

interface ProductCardProps {
  id: string;
  name: string;
  imageURL: string;
  listPrice: string;
  salePrice: string;
  isFavorite: boolean;
  onClick: (id: string) => void;
}

export function ProductCard({
  id,
  name,
  imageURL,
  listPrice,
  salePrice,
  isFavorite,
  onClick,
}: ProductCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapperButton}>
        <FavoriteButton id={id} isFavorite={isFavorite} onClick={onClick} />
      </div>

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
