import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Box from "./Box";
import Summary from "./Summary";
import Sort from "./Sort";
import Filter from "./Filter";
import Favourites from "./Favourites";
import {
  selectNutritionData,
  selectFilterOption,
  selectSortOption,
} from "../store/nutritionSlice";

const Content = () => {
  const nutritionData = useSelector(selectNutritionData);
  const filterOption = useSelector(selectFilterOption);
  const sortOption = useSelector(selectSortOption);

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

  // conditional rendering
  if (nutritionData && nutritionData.length !== 0) {
    return (
      <>
        <div className="content">
          <Summary key="summary" />

          <Sort />

          {/* <Filter /> */}

          <div className="contentDetails">
            {list.map((item) => {
              return <Box item={item} key={item.name + item.calories} />;
            })}
          </div>
        </div>
      </>
    );
  } else if (nutritionData && nutritionData.length === 0) {
    return (
      <>
        <p>Please make a valid entry</p>
      </>
    );
  }
};

export default Content;
