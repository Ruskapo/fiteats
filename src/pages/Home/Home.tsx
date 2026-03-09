import React from "react";
import { TodayFullItem } from "../../@types/home";
import MealSection from "../../pages/Home/MealSection/MealSection";
import { useAppSelector } from "../../redux/hooks";
import styles from "./Home.module.scss";

const Home: React.FC = () => {
  const todayItems = useAppSelector((state) => state.today.items);
  const recipes = useAppSelector((state) => state.recipes.recipes);
  const status = useAppSelector((state) => state.recipes.status);

  const todayFull: TodayFullItem[] = [];
  for (const item of todayItems) {
    const found = recipes.find((r) => r.id === item.recipeId);
    if (found) {
      todayFull.push({ meal: item.meal, recipe: found });
    }
  }

  const breakfast = todayFull.filter((x) => x.meal === "breakfast");
  const lunch = todayFull.filter((x) => x.meal === "lunch");
  const dinner = todayFull.filter((x) => x.meal === "dinner");

  const totals = todayFull.reduce(
    (acc, x) => {
      acc.calories += x.recipe.calories;
      acc.protein += x.recipe.protein;
      acc.fat += x.recipe.fat;
      acc.carbs += x.recipe.carbs;

      return acc;
    },
    { calories: 0, protein: 0, fat: 0, carbs: 0 },
  );

  return (
    <section className={styles.container}>
      <h1>Сегодня</h1>

      {status === "loading" ? (
        <p>Загрузка...</p>
      ) : (
        <div>
          <p>Добавлено рецептов: {todayItems.length}</p>
          <p>Калории: {totals.calories}</p>
          <p>Б: {totals.protein} г</p>
          <p>Ж: {totals.fat} г</p>
          <p>У: {totals.carbs} г</p>

          <MealSection title="Завтрак" items={breakfast} />
          <MealSection title="Обед" items={lunch} />
          <MealSection title="Ужин" items={dinner} />
        </div>
      )}
    </section>
  );
};

export default Home;
