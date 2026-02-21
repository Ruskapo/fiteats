import React from "react";
import Card from "../../components/Card/Card";
import Sceleton from "../../components/Card/Sceleton";
import Search from "../../components/Search/Search";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addFavorites } from "../../redux/slices/favoritesSlice";
import { fetchRecipes } from "../../redux/slices/recipesSlice";
import styles from "./Recipes.module.scss";

// Главная страница с отображением списка рецептов
const Recipes: React.FC = () => {
  // Локальное состояние для строки поиска
  const [search, setSearch] = React.useState<string>("");
  // Получаем список избранных рецептов из Redux
  const dispatch = useAppDispatch();
  // Получаем список рецептов, статус загрузки и возможную ошибку из Redux
  const { recipes, status, error } = useAppSelector((state) => state.recipes);
  const favoritesIds = useAppSelector((state) => state.favorites.ids);

  // Загружаем рецепты при монтировании компонента
  React.useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  // Фильтруем рецепты по строке поиска (по названию)
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <Search value={search} onChange={setSearch} />

      {status === "error" && (
        <div className={styles.empty}>
          <h3>{error}</h3>
        </div>
      )}
      <div className={styles.container}>
        {status === "loading" &&
          [...new Array(8)].map((_, index) => <Sceleton key={index} />)}
        {status !== "loading" && filteredRecipes.length === 0 && (
          <div className={styles.empty}>
            <h3>Ничего не найдено</h3>
          </div>
        )}

        {status !== "error" &&
          status !== "loading" &&
          filteredRecipes.map((recipe) => (
            <Card
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              calories={recipe.calories}
              protein={recipe.protein}
              fat={recipe.fat}
              time={recipe.time}
              carbs={recipe.carbs}
              isFavorite={favoritesIds.includes(recipe.id)}
              onToggleFavorite={(id) => dispatch(addFavorites(id))}
            />
          ))}
      </div>
    </>
  );
};

export default Recipes;
