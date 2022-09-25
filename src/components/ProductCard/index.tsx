import React from "react";
import Image from "next/image";

import { FavoriteButton } from "@/components/FavoriteButton";
import { Amount } from "@/components/Amount";

import { Product } from '@/types/product'

import styles from "@/styles/ProductCard.module.scss";

interface ProductCardProps extends Product {
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
          unoptimized={true} 
          src={imageURL}
          alt="Image product"
          width={212}
          height={282}
        />

        <p>{name}</p>

        <div className={styles.wrapperAmount}>
          <Amount title="Atacado: " value={salePrice}/>
          <Amount title="Varejo: " value={listPrice}/>
        </div>
      </div>
    </div>
  );
}
