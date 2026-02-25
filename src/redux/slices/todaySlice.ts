import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodayType } from "../../@types/today";

const initialState: TodayType = {
    items: [],
}



const todaySlice = createSlice ({
    name: "today",
    initialState,
    reducers: {
        addToday(state, action: PayloadAction<any>) {
            // Получить рейепт 
        }
    }
})


export const { addToday} = todaySlice.actions;
export default todaySlice.reducer;