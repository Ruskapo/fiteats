import { RecipeTS } from "./recipe";
import { MealType } from "./today"

export type TodayFullItem = {
    meal: MealType;
    recipe: RecipeTS;
};