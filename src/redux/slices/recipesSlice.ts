import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RecipesSliceState, RecipeTS } from "../../@types/recipe";
import { fetchRecipesApi } from "../../api/recipesApi";

// Асинхронный экшен для загрузки рецептов с сервера
export const fetchRecipes = createAsyncThunk<RecipeTS[]>(
  "recipes/fetchRecipes",

  async () => {
    return await fetchRecipesApi();
  },
);

// Начальное состояние для слайса рецептов
const initialState: RecipesSliceState = {
  recipes: [],
  status: "idle",
  error: null,
};

// Создаём слайс для управления состоянием рецептов
const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  // Редьюсер для установки списка рецептов
  reducers: {
    setRecipes(state, action: PayloadAction<RecipeTS[]>) {
      state.recipes = action.payload;
    },
  },

  // Обработка асинхронных экшенов для загрузки рецептов
  extraReducers: (builder) => {
    builder
      // Когда загрузка начинается, устанавливаем статус "loading" и очищаем список рецептов
      .addCase(fetchRecipes.pending, (state) => {
        state.status = "loading";
        state.recipes = [];
      })
      // Когда загрузка успешна, сохраняем полученные рецепты и устанавливаем статус "success"
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.recipes = action.payload;
        state.status = "success";
      })
      // Когда загрузка завершается с ошибкой, устанавливаем статус "error" и очищаем список рецептов
      .addCase(fetchRecipes.rejected, (state) => {
        state.status = "error";
        state.recipes = [];
      });
  },
});

export default recipesSlice.reducer;
