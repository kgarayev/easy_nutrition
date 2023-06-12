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
import starIcon from "../assets/star.svg"; // Adjust the path if necessary

const Box = (props) => {
  const { item } = props;
  const dispatch = useDispatch();
  const dictionary = useSelector(selectDictionary);
  const favourites = useSelector(selectFavourites);

  // when star is clicked
  const onStarClick = () => {
    dispatch(setFavourte(item.name + item.calories));
  };

  //calculate the colour of the star
  const color = favourites.includes(item.name + item.calories)
    ? "rgb(77, 196, 30)"
    : "black";

  return (
    <>
      <div
        className="box"
        key={item.name + item.calories + item.sugar + item.fiber}
      >
        <h2>{item.name}</h2>

        <div onClick={onStarClick} className={`star`}>
          <FontAwesomeIcon
            icon={faStar}
            style={{ color }}
            className="starIcon"
          />
        </div>

        {/* <Image item={item} /> */}
        {Object.keys(dictionary).map((key) => {
          return (
            <>
              <div key={key} className="boxElement">
                <p>{dictionary[key].primary}</p>
                <p>{item[key] + " " + dictionary[key].unit}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Box;
