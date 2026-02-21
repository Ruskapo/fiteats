export type RecipeTS = {
  id: string;
  title: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  image: string;
  time: number;
};

export interface RecipesSliceState {
  recipes: RecipeTS[];
  status: "idle" | "loading" | "success" | "error";
  error: string | null;
}
