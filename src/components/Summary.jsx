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

  if (totals.calories.sum === 0) {
    return;
  }

  return (
    <>
      <div className="box summary" key={totals.calories}>
        <h2>totals</h2>
        {Object.keys(totals).map((key) => {
          return (
            <>
              <div key={key} className="boxElement">
                <p>{totals[key].primary}</p>
                <p>{Math.round(totals[key].sum) + " " + totals[key].unit}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Summary;
