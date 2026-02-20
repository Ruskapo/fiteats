import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./slices/recipesSlice";

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
  },
});

// Типы для всего приложения
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
