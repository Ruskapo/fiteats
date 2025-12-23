import React from "react";

import styles from "./Card.module.scss";

const Card = ({ title }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};

export default Card;
