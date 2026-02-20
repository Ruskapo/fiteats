 import axios from "axios";
import { RecipeTS } from "../@types/recipe";

 const API_URL = "https://69690f1169178471522c7377.mockapi.io/recipes";

  export const fetchRecipesApi = async (): Promise<RecipeTS[]> => {
    const {data} = await axios.get<RecipeTS[]>(API_URL);
    return data;
 }

