import React from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchRecipes } from "../../redux/slices/recipesSlice";
import styles from "./Recipe.module.scss";

// Компонент для отображения подробной информации о рецепте
const Recipe: React.FC = () => {
  // Получаем ID рецепта из URL
  const { id } = useParams<{ id: string }>(); //useParams — достаёт параметры из URL (например id из /recipe/:id)
  // Получаем диспатч для отправки действий в Redux
  const dispatch = useAppDispatch();
  // Получаем список рецептов, статус загрузки и возможную ошибку из Redux
  const { recipes, status, error } = useAppSelector((state) => state.recipes);
  // Загружаем рецепты при монтировании компонента, если они ещё не загружены
  React.useEffect(() => {
    // Если статус загрузки "idle" (то есть ещё не началась) и рецептов нет, то запускаем загрузку
    if (status === "idle" && recipes.length === 0) {
      dispatch(fetchRecipes());
    }
  }, [status, recipes.length, dispatch]);
  // Если ID нет, показываем сообщение об ошибке
  if (!id) {
    return <h2>Некорректный ID</h2>;
  }
  // Если статус загрузки "loading", показываем сообщение о загрузке
  if (status === "loading") {
    return <h2>Загрузка рецепта...</h2>;
  }
  // Если статус загрузки "error", показываем сообщение об ошибке
  if (status === "error") {
    return <h2>Ошибка загрузки рецепта: {error ?? "Неизвестная ошибка"}</h2>;
  }
  // Ищем рецепт с нужным ID в списке рецептов
  const recipe = recipes.find((item) => item.id === id);
  // Если рецепт не найден, показываем сообщение об этом
  if (!recipe) {
    return <h2>Рецепт не найден</h2>;
  }

  return (
    <div className={styles.recipe}>
      <h1 className={styles.title}> {recipe.title}</h1>

      <div className={styles.meta}>
        <span> {recipe.calories} ккал</span>
        <span> {recipe.time} мин</span>
      </div>

      <div className={styles.macros}>
        <span>Б:{recipe.protein} г</span>
        <span>Ж:{recipe.fat} г</span>
        <span>У: {recipe.carbs} г</span>
      </div>
    </div>
  );
};

export default Recipe;
