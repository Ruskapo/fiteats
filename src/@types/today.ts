// Завтраки, обеды и ужины на сегодня
export type MealType = "breakfast" | "lunch" | "dinner";
// Рецепт, который нужно приготовить на сегодня
export type TodayItem = { recipeId: string; meal: MealType };
// Состояние для страницы "Сегодня"
export type TodayState = {
  items: TodayItem[];
};
