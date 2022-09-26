import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

import { Product } from "@/types/product";

import styles from "@/styles/FavoriteButton.module.scss";

interface FavoriteButtonProps extends Pick<Product, "id" | "isFavorite"> {
  onClick: (id: string) => void;
}

export function FavoriteButton({
  id,
  isFavorite,
  onClick,
}: FavoriteButtonProps) {
  return (
    <button
      onClick={() => onClick(id)}
      className={styles.button}
      type="button"
      data-testid={isFavorite ? "marked-favorite" : ""}
    >
      {isFavorite ? (
        <MdFavorite className={styles.icon} />
      ) : (
        <MdFavoriteBorder className={styles.icon} />
      )}
    </button>
  );
}
