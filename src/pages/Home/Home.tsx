import React from "react";
import { CardType } from "../../@types/card";
import Card from "../../components/Card/Card";
import styles from "./Home.module.scss";

const cards: CardType[] = [
  {
    id: "1",
    title: "Калории",
    calories: 500,
    protein: 30,
    fat: 15,
    carbs: 60,
    time: 20,
    isFavorite: false,
  },
  {
    id: "2",
    title: "БЖУ",
    calories: 420,
    protein: 25,
    fat: 12,
    carbs: 55,
    time: 15,
    isFavorite: false,
  },
  {
    id: "3",
    title: "Рекомендации",
    calories: 350,
    protein: 20,
    fat: 10,
    carbs: 40,
    time: 10,
    isFavorite: false,
  },
];

const Home: React.FC = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Сегодня</h1>

      <div className={styles.gridCards}>
        {cards.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            calories={item.calories}
            protein={item.protein}
            fat={item.fat}
            carbs={item.carbs}
            time={item.time}
            isFavorite={item.isFavorite}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;
