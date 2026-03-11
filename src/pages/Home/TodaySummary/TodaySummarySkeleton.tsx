import React from "react";
import styles from "./TodaySummary.module.scss";

const TodaySummarySkeleton: React.FC = () => {
  return (
    <section className={styles.summary}>
      <div className={styles.header}>
        <div className={styles.skeletonTitle}></div>
        <div className={styles.skeletonText}></div>
      </div>

      <div className={styles.stats}>
        <div className={styles.skeletonCard}></div>
        <div className={styles.skeletonCard}></div>
        <div className={styles.skeletonCard}></div>
        <div className={styles.skeletonCard}></div>
      </div>
    </section>
  );
};

export default TodaySummarySkeleton;
