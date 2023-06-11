import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Box from "./Box";
import Summary from "./Summary";

const Content = () => {
  const nutritionData = useSelector((state) => state.nutritionData);

  if (nutritionData) {
    return (
      <>
        <Summary />

        {nutritionData.map((item) => {
          return <Box item={item} key={item.calories} />;
        })}
      </>
    );
  }

  return (
    <>
      <p>Loading</p>
    </>
  );
};

export default Content;
