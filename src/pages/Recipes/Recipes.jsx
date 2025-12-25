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

  return (
    <>
      <Search
        value={search}
        onChange={setSearch}
      />
      <div className={styles.container}>
        {filteredRecipes.map((recipe) => (
          <Card
            key={recipe.id}
            title={recipe.title}
            calories={recipe.calories}
            protein={recipe.protein}
            fat={recipe.fat}
            time={recipe.time}
            carbs={recipe.carbs}
          />
        ))}
      </div>
    </>
  );
};

export default Recipes;
