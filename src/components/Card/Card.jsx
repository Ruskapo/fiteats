import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

const Card = ({ title, calories, protein, fat, carbs, time, id }) => {
  return (
    <Link to={`/recipe/${id}`}>
    <div className={styles.card}>
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
