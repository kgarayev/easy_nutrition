import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSortOption, setSort } from "../store/nutritionSlice";

const Sort = () => {
  const dispatch = useDispatch();
  const sortOption = useSelector(selectSortOption);

  return (
    <>
      <select
        onInput={(e) => {
          dispatch(setSort(e.target.value));
        }}
        defaultValue={"sort"}
      >
        <option value="">default</option>
        <option value="asc">ascending</option>
        <option value="desc">descending</option>
      </select>
    </>
  );
};

export default Sort;
