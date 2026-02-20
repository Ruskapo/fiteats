import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RecipesSliceState, RecipeTS } from "../../@types/recipe";
import { fetchRecipesApi } from "../../api/recipesApi";

export const fetchRecipes = createAsyncThunk<RecipeTS[]>(
  "recipes/fetchRecipes",

  async () => {
    return await fetchRecipesApi();
  },
);

const initialState: RecipesSliceState = {
  recipes: [],
  status: "idle",
  error: null,
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setRecipes(state, action: PayloadAction<RecipeTS[]>) {
      state.recipes = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(fetchRecipes.pending, (state) => {
        state.status = "loading";
        state.recipes = [];
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.recipes = action.payload;
        state.status = "success";
      })
      .addCase(fetchRecipes.rejected, (state) => {
        state.status = "error";
        state.recipes = [];
      });
  },
});

export default recipesSlice.reducer;
