import React from "react";
import { MealType } from "../../@types/today";
import Card from "../../components/Card/Card";
import Sceleton from "../../components/Card/Sceleton";
import Search from "../../components/Search/Search";
import MealModal from "../../components/UI/MealModal/MealModal";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addFavorites } from "../../redux/slices/favoritesSlice";
import { fetchRecipes } from "../../redux/slices/recipesSlice";
import { addToday } from "../../redux/slices/todaySlice";
import styles from "./Recipes.module.scss";

// Главная страница с отображением списка рецептов
const Recipes: React.FC = () => {
  // Локальное состояние для строки поиска
  const [search, setSearch] = React.useState<string>("");
  // Получаем список избранных рецептов из Redux
  const dispatch = useAppDispatch();
  // Получаем список рецептов, статус загрузки и возможную ошибку из Redux
  const { recipes, status, error } = useAppSelector((state) => state.recipes);
  const favoritesIds = useAppSelector((state) => state.favorites.ids);

  // Загружаем рецепты при монтировании компонента
  React.useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  // Фильтруем рецепты по строке поиска (по названию)
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(search.toLowerCase()),
  );

  const [isMaelModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedRecipeId, setSelectedRecipeId] = React.useState<string | null>(
    null,
  );

  const handleOpenMealModal = (id: string) => {
    setSelectedRecipeId(id);
    setIsModalOpen(true);
  };

  const handleCloseMealModal = () => {
    setIsModalOpen(false);
    setSelectedRecipeId(null);
  };

  const handleSelectMeal = (meal: MealType) => {
    if (!selectedRecipeId) return;
    dispatch(addToday({ recipeId: selectedRecipeId, meal }));
    handleCloseMealModal();
  };

  return (
    <>
      <div className={styles.page}>
        <div className={styles.topbar}>
          <div>
            <h1 className={styles.heading}>Рецепты</h1>
            <p className={styles.subtext}>
              Выбирай блюда, добавляй в рацион и сохраняй любимые
            </p>
          </div>

          <Search value={search} onChange={setSearch} />
        </div>

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
                isFavorite={favoritesIds.includes(recipe.id)}
                onToggleFavorite={(id) => dispatch(addFavorites(id))}
                onAddToToday={handleOpenMealModal}
              />
            ))}
        </div>
        <MealModal
          isOpen={isMaelModalOpen}
          onClose={handleCloseMealModal}
          onSelect={handleSelectMeal}
        />
      </div>
    </>
  );
};

export default Recipes;
