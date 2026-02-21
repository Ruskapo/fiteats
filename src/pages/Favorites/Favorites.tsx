import { useSelector } from "react-redux";
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
    <>
      <div className={styles.page}>
        <div className={styles.title}>Избранное</div>
        <span className={styles.count}>{favoriteRecipes.length}</span>
      </div>

      {favoriteRecipes.length === 0 && (
        <div className={styles.empty}>
          <h3 className={styles.emtyTitle}>Избранное пусто</h3>
          <p className={styles.emtyText}>Добавь рецепты, нажав ⭐ </p>
        </div>
      )}

      {favoriteRecipes.length > 0 && (
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
    </>
  );
};

export default Favorites;
