import React from "react";
import Image from "./Image";
import { selectDictionary } from "../store/nutritionSlice";
import { useSelector } from "react-redux";

const Box = (props) => {
  const { item } = props;
  const dictionary = useSelector(selectDictionary);

  return (
    <>
      <h3>{item.name}</h3>

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
