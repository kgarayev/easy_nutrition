import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../controllers/data";
import { saveInput, setScreenMode } from "../store/nutritionSlice";

const Searchbox = () => {
  const dispatch = useDispatch();

  // function to record and dispatch the user input into a store
  const onSubmit = async (e) => {
    e.preventDefault();
    const input = e.target.elements.searchInput.value;
    await getData(input);
    dispatch(setScreenMode(0));
    dispatch(saveInput(input));
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        onClick={() => {
          dispatch(setScreenMode(0));
        }}
      >
        <input type="text" name="searchInput" />
        <button type="submit">find out</button>
      </form>
    </>
  );
};

// connecting to the store
export default Searchbox;
