import { motion } from "motion/react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addFavorites } from "../../redux/slices/favoritesSlice";
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
  const favoritesIds = useAppSelector((state) => state.favorites.ids);

  // Загружаем рецепты при монтировании компонента, если они ещё не загружены
  React.useEffect(() => {
    // Если статус загрузки "idle" (то есть ещё не началась) и рецептов нет, то запускаем загрузку
    if (status === "idle" && recipes.length === 0) {
      dispatch(fetchRecipes());
    }
  }, [status, recipes.length, dispatch]);
  // Если ID нет, показываем сообщение об ошибке
  if (!id) {
    return <h2 className={styles.state}>Некорректный ID</h2>;
  }
  // Если статус загрузки "loading", показываем сообщение о загрузке
  if (status === "loading") {
    return <h2 className={styles.state}>Загрузка рецепта...</h2>;
  }
  // Если статус загрузки "error", показываем сообщение об ошибке
  if (status === "error") {
    return (
      <h2 className={styles.state}>
        Ошибка загрузки рецепта: {error ?? "Неизвестная ошибка"}
      </h2>
    );
  }
  // Ищем рецепт с нужным ID в списке рецептов
  const recipe = recipes.find((item) => item.id === id);
  // Если рецепт не найден, показываем сообщение об этом
  if (!recipe) {
    return <h2 className={styles.state}>Рецепт не найден</h2>;
  }
  const isFavorite = favoritesIds.includes(recipe.id);

  return (
    <motion.div
      className={styles.page}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <Link to="/app/recipes" className={styles.backLink}>
        ← Назад к рецептам
      </Link>

      <section className={styles.hero}>
        <div className={styles.content}>
          <div className={styles.header}>
            <div>
              <p className={styles.eyebrow}>FitEats Recipe</p>
              <h1 className={styles.title}>{recipe.title}</h1>
            </div>

            <button
              className={`${styles.favoriteBtn} ${
                isFavorite ? styles.favoriteActive : ""
              }`}
              onClick={() => dispatch(addFavorites(recipe.id))}
              title="Добавить в избранное"
            >
              {isFavorite ? "♥" : "♡"}
            </button>
          </div>

          <div className={styles.meta}>
            <span className={styles.metaBadge}>{recipe.calories} ккал</span>
            <span className={styles.metaBadge}>{recipe.time} мин</span>
          </div>

          <div className={styles.stats}>
            <div className={styles.statCard}>
              <span className={styles.label}>Калории</span>
              <strong className={styles.value}>{recipe.calories}</strong>
            </div>

            <div className={styles.statCard}>
              <span className={styles.label}>Белки</span>
              <strong className={styles.value}>{recipe.protein} г</strong>
            </div>

            <div className={styles.statCard}>
              <span className={styles.label}>Жиры</span>
              <strong className={styles.value}>{recipe.fat} г</strong>
            </div>

            <div className={styles.statCard}>
              <span className={styles.label}>Углеводы</span>
              <strong className={styles.value}>{recipe.carbs} г</strong>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Recipe;
