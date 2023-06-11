import React from "react";
import { useSelector } from "react-redux";
import { selectNutritionData, selectDictionary } from "../store/nutritionSlice";

const Summary = () => {
  const dictionary = useSelector(selectDictionary);
  const nutritionData = useSelector(selectNutritionData);

  // a function that iterates through array of objects and returns an object with all sums for individual entries
  const summAll = (arrayOfObjects) => {
    let sumObject = JSON.parse(JSON.stringify(dictionary));

    for (let item of arrayOfObjects) {
      // console.log("item:", item);

      for (let key in item) {
        // console.log("item[key]:", item[key]);

        if (sumObject[key]) {
          sumObject[key].sum += item[key];
        }
      }
    }

    return sumObject;
  };

  const totals = summAll(nutritionData);

  return (
    <>
      <h2>totals</h2>
      {Object.keys(totals).map((key) => {
        return (
          <p key={key}>
            {totals[key].primary +
              ": " +
              Math.round(totals[key].sum) +
              " " +
              totals[key].unit}
          </p>
        );
      })}
    </>
  );
};

export default Summary;
