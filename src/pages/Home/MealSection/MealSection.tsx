import React from "react";
import { MealSectionProps } from "../../../@types/MealSectoin";
import { useAppDispatch } from "../../../redux/hooks";
import { removeToday } from "../../../redux/slices/todaySlice";
import styles from "./MealSection.module.scss";

const MealSection: React.FC<MealSectionProps> = ({ title, items }) => {
  const dispatch = useAppDispatch();

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
              <button
                className={styles.delete}
                title="Удалить"
                onClick={() =>
                  dispatch(
                    removeToday({
                      recipeId: item.recipe.id,
                      meal: item.meal,
                    }),
                  )
                }
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default MealSection;
