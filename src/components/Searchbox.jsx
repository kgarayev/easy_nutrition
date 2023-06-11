import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../controllers/data";
import { saveInput } from "../store/nutritionSlice";

const Searchbox = () => {
  const dispatch = useDispatch();

  // function to record and dispatch the user input into a store
  const onSubmit = async (e) => {
    e.preventDefault();
    const input = e.target.elements.searchInput.value;
    getData(input);
    dispatch(saveInput(input));
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" name="searchInput" />
        <button type="submit">find out</button>
      </form>
    </>
  );
};

// connecting to the store
export default Searchbox;
