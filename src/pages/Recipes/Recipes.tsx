import React, { useContext } from "react";
import Card from "../../components/Card/Card";
import Search from "../../components/Search/Search";
import { AppContext } from "../../context/AppContext";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchRecipes } from "../../redux/slices/recipesSlice";

import styles from "./Recipes.module.scss";

import Sceleton from "../../components/Card/Sceleton";

const Recipes = () => {
  const [search, setSearch] = React.useState<string>("");
  const { favorites, toggleFavorite } = useContext(AppContext);
  const dispatch = useAppDispatch();
  const { recipes, status, error } = useAppSelector((state) => state.recipes);

  React.useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

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
              isFavorite={favorites.includes(String(recipe.id))}
              onToggleFavorite={toggleFavorite}
            />
          ))}
      </div>
    </>
  );
};

export default Recipes;
