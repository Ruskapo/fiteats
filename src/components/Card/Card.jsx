import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

const Card = ({
  title,
  calories,
  protein,
  fat,
  carbs,
  time,
  id,
  isFavorite,
  onToggleFavorite,
}) => {
  const canToggle = typeof onToggleFavorite === "function";
  return (
    <Link to={`/recipe/${id}`}>
      <div className={styles.card}>
        {canToggle && (
          <button
            onClick={(e) => {
              e.preventDefault();
              onToggleFavorite(id);
            }}
            className={styles.favBtn}
          >
            {" "}
            {isFavorite ? "⭐" : "☆"}
          </button>
        )}

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
