import React, { useContext } from "react";
import Card from "../../components/Card/Card";
import Search from "../../components/Search/Search";
import { AppContext } from "../../context/AppContext";
import recipes from "../../data/recipes";
import styles from "./Recipes.module.scss";
import { fetchRecipes} from "../../api/recipes";
import Sceleton from "../../components/Card/Sceleton";


const Recipes = () => {
  const { favorites, toggleFavorite } = useContext(AppContext);

  const [search, setSearch] = React.useState("");
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState("");


React.useEffect(() => {
  const load = async () => {
    try {
      setIsLoading(true);
      setError("");

      const data = await fetchRecipes();
      setItems(data);
      console.log("MOCK ITEMS:", data);
    } catch (e) {
      setError("Не удалось загрузить рецепты");
    }finally {
      setIsLoading(false);
    }
  };
  load();
}, []);

  const data = items.length ? items : recipes;

  const filteredRecipes = data.filter((recipe) =>
    recipe.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Search value={search} onChange={setSearch} />

      {error && <div className={styles.empty}><h3>{error}</h3></div>}
      <div className={styles.container}>
        {isLoading &&
          [...new Array(8)].map((_, index) => <Sceleton key={index} />)}
        {!isLoading && filteredRecipes.length === 0 && (
          <div className={styles.empty}>
            <h3>Ничего не найдено</h3>
          </div>
        )}

        {!isLoading && 
       
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
              isFavorite={favorites.includes((recipe.id))}
              onToggleFavorite={toggleFavorite}
            />
          ))}
      </div>
    </>
  );
};

export default Recipes;
