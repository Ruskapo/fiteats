import React from "react";
import { MealModalProps } from "../../../@types/mealmodal";
import { MealType } from "../../../@types/today";
import styles from "./MealModal.module.scss";

const MealModal: React.FC<MealModalProps> = ({ isOpen, onClose, onSelect }) => {
  if (!isOpen) return null;

  const handleSelect = (meal: MealType) => {
    onSelect(meal);
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h3 className={styles.title}>Куда добавить?</h3>

        <button
          className={styles.button}
          onClick={() => handleSelect("breakfast")}
        >
          Завтрак
        </button>
        <button className={styles.button} onClick={() => handleSelect("lunch")}>
          Обед
        </button>
        <button
          className={styles.button}
          onClick={() => handleSelect("dinner")}
        >
          Ужин
        </button>
        <button className={styles.canel} onClick={onClose}>
          Отмена
        </button>
      </div>
    </div>
  );
};

export default MealModal;
