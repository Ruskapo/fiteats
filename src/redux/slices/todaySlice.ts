import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodayItem, TodayState } from "../../@types/today";

const initialState: TodayState = {
  items: [],
};

const todaySlice = createSlice({
  name: "today",
  initialState,
  reducers: {
    addToday(state, action: PayloadAction<TodayItem>) {
      // Получаем ID рецепта и тип приема пищи из действия
      const { recipeId, meal } = action.payload;
      // Проверяем, добавлен ли уже этот рецепт в этот же приём пищи.
      // some() вернёт true, если найдётся хотя бы один item с таким же recipeId и meal.
      const exists = state.items.some(
        (item) => item.recipeId === recipeId && item.meal === meal,
      );

      if (!exists) {
        state.items.push(action.payload);
      }
    },

    removeToday(state, action: PayloadAction<TodayItem>) {
      const { recipeId, meal } = action.payload;

      state.items = state.items.filter((obj) => {
        return obj.recipeId !== recipeId || obj.meal !== meal;
      });
    },
  },
});

export const { addToday, removeToday } = todaySlice.actions;
export default todaySlice.reducer;
