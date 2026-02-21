import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./slices/recipesSlice";
import favoritesSlice from "./slices/favoritesSlice";

// Создаём Redux store, объединяя редьюсеры для рецептов и избранного
export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    favorites: favoritesSlice,
  },
});

// Типы для всего приложения
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
