import React from "react";
import Image from "./Image";
import {
  selectDictionary,
  setFavourte,
  selectFavourites,
} from "../store/nutritionSlice";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Box = (props) => {
  const { item } = props;
  const dispatch = useDispatch();
  const dictionary = useSelector(selectDictionary);
  const favourites = useSelector(selectFavourites);

  const onStarClick = () => {
    dispatch(setFavourte(item.name + item.calories));
  };

  //calculate the colour of the star
  const color = favourites.includes(item.name + item.calories)
    ? "red"
    : "black";

  return (
    <>
      <h3>{item.name}</h3>

      <div onClick={onStarClick}>
        <FontAwesomeIcon icon={faStar} style={{ color }} />
      </div>

      {/* <Image item={item} /> */}

      {Object.keys(dictionary).map((key) => {
        return (
          <div key={Math.floor(Math.random() * 10000)}>
            {dictionary[key].primary +
              ": " +
              item[key] +
              " " +
              dictionary[key].unit}
          </div>
        );
      })}
    </>
  );
};

export default Box;
