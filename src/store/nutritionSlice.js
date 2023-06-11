import { createSlice } from "@reduxjs/toolkit";
import { backupData } from "./backup.js";

const initialState = {
  dictionary: {
    calories: { primary: "calories", unit: "", sum: 0 },
    serving_size_g: { primary: "serving size", unit: "g", sum: 0 },
    fat_total_g: { primary: "total fat", unit: "g", sum: 0 },
    fat_saturated_g: { primary: "saturated fat", units: "g", sum: 0 },
    protein_g: { primary: "protein", unit: "g", sum: 0 },
    sodium_mg: { primary: "sodium", unit: "mg", sum: 0 },
    potassium_mg: { primary: "potassium", unit: "mg", sum: 0 },
    cholesterol_mg: { primary: "cholesterol", unit: "mg", sum: 0 },
    carbohydrates_total_g: {
      primary: "total carbohydrates",
      unit: "g",
      sum: 0,
    },
    fiber_g: { primary: "fiber", unit: "g", sum: 0 },
    sugar_g: { primary: "sugar", unit: "g", sum: 0 },
  },
};

export const nutritionSlice = createSlice({
  name: "nutrition",
  initialState,

  reducers: {
    newApiData: (state, action) => {
      state.nutritionData = action.payload;
    },

    saveInput: (state, action) => {
      state.userInput = action.payload;
    },

    setSort: (state, action) => {
      state.sortOption = action.payload;
    },

    setFilter: (state, action) => {
      state.filterOption = action.payload;
    },
  },
});

export const {
  newApiData,
  saveInput,
  setFilter,
  setSort,
} = nutritionSlice.actions;

export const selectNutritionData = (state) => state.nutrition.nutritionData;
export const selectUserInput = (state) => state.nutrition.userInput;
export const selectDictionary = (state) => state.nutrition.dictionary;
export const selectSortOption = (state) => state.nutrition.sortOption;
export const selectFilterOption = (state) => state.nutrition.filterOption;

export default nutritionSlice.reducer;
