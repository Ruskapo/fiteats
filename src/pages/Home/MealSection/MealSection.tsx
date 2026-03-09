import React from "react";
import { MealSectionProps } from "../../../@types/MealSectoin";
import styles from "./MealSection.scss";

const MealSection: React.FC<MealSectionProps> = ({ title, items }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        {title} ({items.length})
      </h2>

      {items.length === 0 ? (
        <p>Пока пусто</p>
      ) : (
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={`${item.meal}-${item.recipe.id}`} className={styles.item}>
              {item.recipe.title} - {item.recipe.calories} ккал
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};


export default MealSection;