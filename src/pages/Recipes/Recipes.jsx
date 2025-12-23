import React from "react";
import recipes from "../../data/recipes";
import Card from "../../components/Card/Card";
import styles from "./Recipes.module.scss";

const Recipes = () => {
  return (
    <div className={styles.container}>
      {recipes.map((recipe) => (
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
  );
};

export default Recipes;
