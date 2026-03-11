import React from "react";
import styles from "./MealSection.module.scss";

const MealSectionSkeleton: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.skeletonSectionTitle}></div>
        <div className={styles.skeletonCount}></div>
      </div>

      <div className={styles.skeletonItem}></div>
      <div className={styles.skeletonItem}></div>
      <div className={styles.skeletonItem}></div>
    </section>
  );
};

export default MealSectionSkeleton;
