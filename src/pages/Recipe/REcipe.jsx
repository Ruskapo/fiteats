import { useParams } from "react-router-dom";
import recipes from "../../data/recipes";
import styles from "./Recipe.module.scss";

const Recipe = () => {
  const { id } = useParams();

  const recipe = recipes.find((item) => item.id === Number(id));

  if (!recipes) {
    return <h2>Рецепт не найден</h2>;
  }
  return (
    <div className={styles.recipe}>
      <h1 className={styles.title}> {recipe.title}</h1>

      <div className={styles.meta}>
        <span> {recipe.calories} ккал</span>
        <span> {recipe.time} мин</span>
      </div>

      <div className={styles.macros}>
        <span>Б:{recipe.protein} г</span>
        <span>Ж:{recipe.fat} г</span>
        <span>У: {recipe.carbs} г</span>
      </div>
    </div>
  );
};

export default Recipe;
