import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Box from "./Box";
import Summary from "./Summary";
import { selectNutritionData, selectUserInput } from "../store/nutritionSlice";

const Content = () => {
  const nutritionData = useSelector(selectNutritionData);
  const userInput = useSelector(selectUserInput);

  if (nutritionData.length !== 0) {
    return (
      <>
        <Summary />

        {nutritionData.map((item) => {
          return <Box item={item} key={item.calories} />;
        })}
      </>
    );
  } else if (nutritionData) {
    return (
      <>
        <p>Please make a valid entry</p>
      </>
    );
  }

  return (
    <>
      <p>Loading...</p>
    </>
  );
};

export default Content;
