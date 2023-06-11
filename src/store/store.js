import { configureStore } from "@reduxjs/toolkit";
import nutritionReducer from "./nutritionSlice";

export const store = configureStore({
  reducer: {
    nutrition: nutritionReducer,
  },
});
