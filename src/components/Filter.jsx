import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilterOption, setFilter } from "../store/nutritionSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const filterOption = useSelector(selectFilterOption);

  return (
    <>
      <input
        placeholder="filter"
        className="filter"
        type="text"
        name="filterInput"
        onInput={(e) => {
          dispatch(setFilter(e.target.value));
        }}
      />
    </>
  );
};

export default Filter;
