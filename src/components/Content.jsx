import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Box from "./Box";
import Summary from "./Summary";
import Sort from "./Sort";
import Filter from "./Filter";
import Favourites from "./Favourites";
import {
  selectNutritionData,
  selectUserInput,
  selectFilterOption,
  selectSortOption,
  selectScreenMode,
} from "../store/nutritionSlice";

const Content = () => {
  const nutritionData = useSelector(selectNutritionData);
  const userInput = useSelector(selectUserInput);
  const filterOption = useSelector(selectFilterOption);
  const sortOption = useSelector(selectSortOption);
  const screenMode = useSelector(selectScreenMode);

  // copy nutrition data and filter and/or sort it if necessary
  let list = [...nutritionData];

  // filter it
  if (filterOption) {
    list = list.filter((item) => {
      return item.name.toLowerCase().includes(filterOption);
    });
  }

  //  sort it
  if (sortOption === "asc") {
    list.sort((a, b) => {
      return a.calories - b.calories;
    });
  } else if (sortOption === "desc") {
    list.sort((a, b) => {
      return b.calories - a.calories;
    });
  }

  if (nutritionData && nutritionData.length !== 0) {
    return (
      <>
        <Summary />

        <Sort />
        <Filter />

        {list.map((item) => {
          return <Box item={item} key={item.name + item.calories} />;
        })}
      </>
    );
  } else if (nutritionData && nutritionData.length === 0) {
    return (
      <>
        <p>Please make a valid entry</p>
      </>
    );
  } else {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }
};

export default Content;
