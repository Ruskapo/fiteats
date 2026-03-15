import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import { useAppDispatch } from "../../redux/hooks";
import { RootState } from "../../redux/store";

import { addFavorites } from "../../redux/slices/favoritesSlice";
import styles from "./Favorites.module.scss";

// Выводим список избранных рецептов, используя данные из Redux
const Favorites = () => {
  const dispatch = useAppDispatch();
  // Получаем список ID избранных рецептов и все рецепты из Redux
  const favoritesIds = useSelector((state: RootState) => state.favorites.ids);
  // Фильтруем рецепты, чтобы получить только те, которые находятся в избранном
  const recipes = useSelector((state: RootState) => state.recipes.recipes);
  // Получаем список рецептов, которые находятся в избранном
  const favoriteRecipes = recipes.filter((recipe) =>
    favoritesIds.includes(recipe.id),
  );

  return (
    <div className={styles.page}>
      <div className={styles.top}>
        <div>
          <h1 className={styles.title}>Избранное</h1>
          <p className={styles.subtext}>
            Здесь собраны рецепты, которые ты сохранил для себя
          </p>
        </div>

        <span className={styles.count}>{favoriteRecipes.length}</span>
      </div>

      {favoriteRecipes.length === 0 ? (
        <div className={styles.empty}>
          <div className={styles.emptyIcon}>♡</div>
          <h3 className={styles.emptyTitle}>Избранное пока пусто</h3>
          <p className={styles.emptyText}>
            Добавь понравившиеся рецепты, нажимая на сердечко
          </p>

          <Link to="/app/recipes" className={styles.emptyButton}>
            Перейти к рецептам
          </Link>
        </div>
      ) : (
        <div className={styles.grid}>
          {favoriteRecipes.map((recipe) => (
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
      )}
    </div>
  );
};

export default Favorites;
