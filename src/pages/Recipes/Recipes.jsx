import React, { useContext } from "react";
import Card from "../../components/Card/Card";
import Search from "../../components/Search/Search";
import { AppContext } from "../../context/AppContext";
import recipes from "../../data/recipes";
import styles from "./Recipes.module.scss";

const Recipes = () => {
  const { favorites, toggleFavorite } = useContext(AppContext);

  const [search, setSearch] = React.useState("");

  const [items, setItems] = React.useState([]);
  const data = items.length ? items : recipes;

  const filteredRecipes = data.filter((recipe) =>
    recipe.title.toLowerCase().includes(search.toLowerCase())
  );

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
