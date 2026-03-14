import { Link } from "react-router-dom";
import { CardType } from "../../@types/card";
import styles from "./Card.module.scss";

const Card: React.FC<CardType> = ({
  title,
  calories,
  protein,
  fat,
  carbs,
  time,
  id,
  isFavorite,
  onToggleFavorite,
  onAddToToday,
}) => {
  // Проверяем, передана ли функция для добавления в избранное
  const canToggle = typeof onToggleFavorite === "function";

  return (
    <Link to={`/app/recipes/${id}`} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.actions}>
          {canToggle && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                onToggleFavorite(id);
              }}
              className={`${styles.iconBtn} ${styles.favBtn} ${isFavorite ? styles.favActive : ""}`}
              title="Добавить в избранное"
            >
              {isFavorite ? "♥" : "♡"}
            </button>
          )}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();

              onAddToToday?.(id);
            }}
            className={`${styles.iconBtn} ${styles.plusBtn}`}
            title="Добавить в рацион"
          >
            +
          </button>
        </div>

        <h3 className={styles.title}>{title}</h3>
        <div className={styles.meta}>
          <span>{calories} ккал </span>
          <span> {time} мин </span>
        </div>
        <div className={styles.macros}>
          <span className={styles.badge}>Б: {protein} г</span>
          <span className={styles.badge}>Ж: {fat} г</span>
          <span className={styles.badge}>У: {carbs} г</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
