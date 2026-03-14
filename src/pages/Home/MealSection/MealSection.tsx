import { motion } from "motion/react";
import React from "react";
import { MealSectionProps } from "../../../@types/MealSectoin";
import { useAppDispatch } from "../../../redux/hooks";
import { removeToday } from "../../../redux/slices/todaySlice";
import styles from "./MealSection.module.scss";

const MealSection: React.FC<MealSectionProps> = ({ title, items }) => {
  const dispatch = useAppDispatch();

  return (
    <motion.section
      className={styles.section}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.count}>{items.length}</span>
      </div>

      {items.length === 0 ? (
        <p className={styles.empty}>Пока пусто</p>
      ) : (
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={`${item.meal}-${item.recipe.id}`} className={styles.item}>
              <div className={styles.info}>
                <span className={styles.name}>{item.recipe.title}</span>
                <span className={styles.calories}>
                  {item.recipe.calories} ккал
                </span>
              </div>
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
    </motion.section>
  );
};

export default MealSection;
