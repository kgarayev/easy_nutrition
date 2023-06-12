import React from "react";
import Box from "./Box";
import { useSelector } from "react-redux";
import { selectFavourites, selectAllNutrition } from "../store/nutritionSlice";

const Favourites = () => {
  const allNutrition = useSelector(selectAllNutrition);
  const favourites = useSelector(selectFavourites);

  let fullFavouriteData = [];

  // filter through the data
  for (let fav of favourites) {
    for (let item of allNutrition) {
      if (fav === item.name + item.calories) {
        fullFavouriteData.push(item);
      }
    }
  }

  return (
    <>
      {fullFavouriteData.map((item) => {
        return <Box item={item} key={item.name + item.calories} />;
      })}
    </>
  );
};

export default Favourites;
