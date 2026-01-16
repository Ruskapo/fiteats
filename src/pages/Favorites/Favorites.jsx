import { useContext } from "react";
import Card from "../../components/Card/Card";
import { AppContext } from "../../context/AppContext";
import recipes from "../../data/recipes";
import styles from "./Favorites.module.scss";

const Favorites = () => {
  const { favorites, toggleFavorite } = useContext(AppContext);

  // Это ключевая логика всего избранного
  // recipes-весь массив,filter-пробегается по каждому рецепту,favorites.includes(recipe.id)-оставляет только те чей id есть в избранном
  const favoriteRecipes = recipes.filter((recipe) =>
    favorites.includes(String(recipe.id))
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
              isFavorite={favorites.includes(recipe.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Favorites;
