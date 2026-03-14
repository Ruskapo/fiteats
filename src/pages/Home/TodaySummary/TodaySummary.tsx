import { motion } from "motion/react";
import React from "react";
import { TodaySummaryProps } from "../../../@types/Summary";
import styles from "../TodaySummary/TodaySummary.module.scss";

const TodaySummary: React.FC<TodaySummaryProps> = ({ todayCount, totals }) => {
  return (
    <motion.section
      className={styles.summary}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className={styles.header}>
        <h2 className={styles.title}>Сегодня</h2>
        <p className={styles.count}>Добалено рецептов: {todayCount}</p>
      </div>
      <div className={styles.stats}>
        <div className={styles.card}>
          <span className={styles.label}>Калории</span>
          <strong className={styles.value}>{totals.calories}</strong>
        </div>

        <div className={styles.card}>
          <span className={styles.label}>Белки</span>
          <strong className={styles.value}>{totals.protein} г</strong>
        </div>

        <div className={styles.card}>
          <span className={styles.label}>Жиры</span>
          <strong className={styles.value}>{totals.fat} г</strong>
        </div>

        <div className={styles.card}>
          <span className={styles.label}>Углеводы</span>
          <strong className={styles.value}>{totals.carbs} г</strong>
        </div>
      </div>
    </motion.section>
  );
};

export default TodaySummary;
