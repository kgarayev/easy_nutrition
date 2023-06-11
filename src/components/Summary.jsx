import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Summary = () => {
  const dictionary = useSelector((state) => state.dictionary);
  const nutritionData = useSelector((state) => state.nutritionData);

  // a function that iterates through array of objects and returns an object with all sums for individual entries
  const summAll = (arrayOfObjects) => {
    let sumObject = { ...dictionary };

    for (let item of arrayOfObjects) {
      for (let key in item) {
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
