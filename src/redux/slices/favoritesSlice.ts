import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Favorite } from "../../@types/favorites";

// Начальное состояние для слайса избранного
const initialState: Favorite = {
  ids: [],
};

// Создаём слайс для управления состоянием избранного
const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorites(state, action: PayloadAction<string>) {
      // Получаем ID рецепта из действия
      const id = action.payload;

      // Если ID уже есть в списке избранного, удаляем его, иначе добавляем
      if (state.ids.includes(id)) {
        state.ids = state.ids.filter((item) => item !== id);
      } else {
        state.ids.push(id);
      }
    },
  },
});

export const { addFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
