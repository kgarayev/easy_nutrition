import { createSlice } from "@reduxjs/toolkit";
import { backupData } from "./backup.js";
import { getState, storeState } from "../storage/index.js";

const storedFavourites = getState("favourites");
const storedNutrition = getState("nutrition");

// create initial state
const initialState = {
  dictionary: {
    calories: { primary: "calories", unit: "", sum: 0 },
    serving_size_g: { primary: "serving size", unit: "g", sum: 0 },
    fat_total_g: { primary: "total fat", unit: "g", sum: 0 },
    fat_saturated_g: { primary: "saturated fat", unit: "g", sum: 0 },
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
  favourites: storedFavourites || [],
  allNutrition: storedNutrition || [],
  screenMode: 0,
};

// export the reducer functions
export const nutritionSlice = createSlice({
  name: "nutrition",
  initialState,

  reducers: {
    // record the api data
    newApiData: (state, action) => {
      state.nutritionData = action.payload;

      for (let element of state.nutritionData) {
        let isDuplicate = false;

        for (let item of state.allNutrition) {
          if (element.name + element.calories === item.name + item.calories) {
            isDuplicate = true;
            break;
          }
        }

        if (!isDuplicate) {
          state.allNutrition.push(element);
        }
      }

      storeState("nutrition", state.allNutrition);
    },

    // save the user input
    saveInput: (state, action) => {
      state.userInput = action.payload;
    },

    // set the sort selection
    setSort: (state, action) => {
      state.sortOption = action.payload;
    },

    // set the filter selection
    setFilter: (state, action) => {
      state.filterOption = action.payload;
    },

    // set favourites
    setFavourte: (state, action) => {
      const indexOf = state.favourites.indexOf(action.payload);

      if (indexOf === -1) {
        state.favourites.push(action.payload);
        storeState("favourites", state.favourites);
      } else {
        state.favourites.splice(indexOf, 1);
        storeState("favourites", state.favourites);
      }
    },

    // set screen mode
    setScreenMode: (state, action) => {
      state.screenMode = action.payload;
    },

    // loading status
    loading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

// export
export const {
  newApiData,
  saveInput,
  setFilter,
  setSort,
  setFavourte,
  setScreenMode,
  loading,
} = nutritionSlice.actions;

// selectors
export const selectNutritionData = (state) => state.nutrition.nutritionData;
export const selectUserInput = (state) => state.nutrition.userInput;
export const selectDictionary = (state) => state.nutrition.dictionary;
export const selectSortOption = (state) => state.nutrition.sortOption;
export const selectFilterOption = (state) => state.nutrition.filterOption;
export const selectFavourites = (state) => state.nutrition.favourites;
export const selectScreenMode = (state) => state.nutrition.screenMode;
export const selectLoading = (state) => state.nutrition.loading;
export const selectAllNutrition = (state) => state.nutrition.allNutrition;

export default nutritionSlice.reducer;
