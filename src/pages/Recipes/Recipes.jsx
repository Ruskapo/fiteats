import React from "react";
import Card from "../../components/Card/Card";
import Search from "../../components/Search/Search";
import recipes from "../../data/recipes";
import styles from "./Recipes.module.scss";


const Recipes = () => {
  const [search, setSearch] = React.useState("");
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(search.toLowerCase())
  );

  const [favorites, setFavorites] = React.useState([]);
  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((itemId) => itemId !== id));
    
    } else {
      setFavorites([...favorites, id]);
    }
  };



  return (
    <>
      <Search value={search} onChange={setSearch} />
      <div className={styles.container}>
        {filteredRecipes.length === 0 && (
          <div className={styles.empty}>
            <h3>Ничего не найдено</h3>
          </div>
        )}
        {filteredRecipes.length > 0 &&
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
              isFavorite={favorites.includes(recipe.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
      </div>
    </>
  );
};

export default Recipes;
