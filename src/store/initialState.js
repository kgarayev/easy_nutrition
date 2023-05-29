import { backupData } from "./backup.js";

//create initial state
export const initialState = {
  dictionary: {
    calories: { primary: "Calories", unit: "", sum: 0 },
    serving_size_g: { primary: "Serving Size", unit: "g", sum: 0 },
    fat_total_g: { primary: "Total Fat", unit: "g", sum: 0 },
    fat_saturated_g: { primary: "Saturated Fat", units: "g", sum: 0 },
    protein_g: { primary: "Protein", unit: "g", sum: 0 },
    sodium_mg: { primary: "Sodium", unit: "mg", sum: 0 },
    potassium_mg: { primary: "Potassium", unit: "mg", sum: 0 },
    cholesterol_mg: { primary: "Chilesterol", unit: "mg", sum: 0 },
    carbohydrates_total_g: {
      primary: "Total Carbohydrates",
      unit: "g",
      sum: 0,
    },
    fiber_g: { primary: "Fiber", unit: "g", sum: 0 },
    sugar_g: { primary: "Sugar", unit: "g", sum: 0 },
  },
};
