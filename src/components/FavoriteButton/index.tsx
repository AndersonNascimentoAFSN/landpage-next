import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

import styles from "../../styles/FavoriteButton.module.scss";

interface FavoriteButtonProps {
  id: string;
  isFavorite: boolean;
  onClick: (id: string) => void;
}

export function FavoriteButton({ id, isFavorite, onClick }: FavoriteButtonProps) {
  return (
    <button onClick={() => onClick(id)} className={styles.button}>
      {isFavorite ? (
        <MdFavorite className={styles.icon} />
      ) : (
        <MdFavoriteBorder className={styles.icon} />
      )}
    </button>
  );
}
